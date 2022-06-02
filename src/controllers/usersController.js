//const { users, writeUsersJSON } = require('../database/dataBase');
require('dotenv').config();
let { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const fs = require('fs')
let fetch = require('node-fetch');
let nodemailer = require('../mylibs/app2')
const jwt = require('jsonwebtoken')

const Users = db.User
//const getUrl = (req) => `${req.protocol}://${req.get('host')}`

let controller = {
    login: (req, res) => {
        res.render('users/login', {
            session: req.session
        })
    },
    processLogin: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            Users.findOne({
                where: {
                    email: req.body.email
                }
            })
                .then(user => {
                    req.session.user = {
                        id: user.id,
                        name: user.first_name,
                        email: user.email,
                        avatar: user.avatar,
                        rol: user.id_rol
                    };

                    if (req.body.remember) {
                        const TIME_IN_MILISEG = 999999999
                        res.cookie("userTimbo", req.session.user, {
                            expires: new Date(Date.now() + TIME_IN_MILISEG),
                            httpOnly: true,
                            secure: true,
                        })
                    };
                    res.locals.user = req.session.user;

                    res.redirect('/')
                })
        } else {
            res.render('users/login', {
                errors: errors.mapped(),
                session: req.session
            })
        }
    },
    register: (req, res) => {
        res.render('users/register', {
            session: req.session
        })
    },
    processRegister: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let { name, last_name, email, password1 } = req.body;
            Users.create({
                first_name: name,
                last_name,
                email,
                password: bcrypt.hashSync(password1, 10),
                avatar: req.file ? req.file.filename : 'default-image.png',
                id_rol: 2
            })
                .then(() => {
                    let subject = "registro"
                    let type = 'main.html'
                    let rute = "/users/login"
                    nodemailer(email, subject, name, last_name, type)
                    res.redirect('/users/login')
                })
        } else {
            res.render('users/register', {
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        if (req.cookies.userTimbo) {
            res.cookie('userTimbo', "", { maxAge: -1 })
        }
        res.redirect('/')
    },
    profile: (req, res) => {
        Users.findByPk(req.params.id, {
            include: [{ association: 'rol' }]
        })
            .then((user) => {
                fetch("https://vivero-timbo.herokuapp.com/apiv1/provinces")
                    .then(response => response.json())
                    .then(provinces => {
                        res.render('users/profile', {
                            user,
                            session: req.session,
                            fileValidator: req.fileValidationError,
                            provinces: provinces.data.provincesSort
                        })
                    })


            })
    },
    update: (req, res) => {

        let errors = validationResult(req)

        if (errors.isEmpty()) {
            let { first_name, last_name, email, address, phone, cp, country, province, date_birth, age } = req.body

            Users.update({ first_name, last_name, email, address, phone, cp, country, province, date_birth, age }, { where: { id: req.params.id } })
                .then(() => {
                    res.redirect('/users/profile/' + req.params.id)
                })
        } else {
            Users.findByPk(req.params.id, {
                include: [{ association: 'rol' }]
            })
                .then((user) => {
                    fetch("http://localhost:3000/apiv1/provinces")
                    .then(response => response.json())
                    .then(provinces => {
                        res.render('users/profile', {
                            user,
                            session: req.session,
                            errors: errors.mapped(),
                            old: req.body,
                            fileValidator: req.fileValidationError,
                            provinces: provinces.data.provincesSort
                        })
                    })

                    
                })
        }

    },
    updatePassword: (req, res) => {

        let errors = validationResult(req)

        if (errors.isEmpty()) {

            Users.update({ password: bcrypt.hashSync(req.body.newPassword, 10) }, { where: { id: req.params.id } })
                .then(() => {
                    res.redirect('/users/profile/' + req.params.id)
                })
        } else {
            Users.findByPk(req.params.id, {
                include: [{ association: 'rol' }]
            })
                .then((user) => {
                    res.render('users/profile', {
                        user,
                        session: req.session,
                        errors: errors.mapped(),
                        fileValidator: req.fileValidationError

                    })
                })
        }
    },
    updateAvatar: (req, res) => {
        if (!req.fileValidationError) {
            Users.findByPk(req.params.id)
                .then(user => {
                    if (fs.existsSync('./public/images/users/' + user.avatar) && user.avatar !== "default-image.png") {
                        fs.unlinkSync(`./public/images/users/${user.avatar}`)
                    } else {
                        console.log('no se encontro el archivo')
                    }
                    Users.update({ avatar: req.file.filename }, { where: { id: req.params.id } })
                        .then(() => {
                            req.session.user.avatar = req.file.filename
                            res.redirect('/users/profile/' + req.params.id)
                        })
                })
        } else {

            Users.findByPk(req.params.id, {
                include: [{ association: 'rol' }]
            })
                .then((user) => {
                    res.render('users/profile', {
                        user,
                        session: req.session,
                        fileValidator: req.fileValidationError

                    })
                })
        }


    },
    recoverPassword: (req, res) => {
        res.render('users/recoverPassword', {
            session: req.session,
        })
    },
    processRecover: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            let subject = "Recupero de contraseña"
            let type = 'emailRecoverPassword.html'

            Users.findOne({ where: { email: req.body.email } })
                .then(user => {
                    function generateAccessToken(user) {
                        return jwt.sign(user, process.env.SECRET, { expiresIn: '10m' })
                    }
                    const accessToken = generateAccessToken({
                        id: user.id,
                        surname: user.last_name,
                        email: user.email
                    })
                    let rute = "/users/new-password/"
                    nodemailer(user.email, subject, user.first_name, user.last_name, type, rute ,accessToken)

                    res.redirect('/')
                })
        } else {
            res.render('users/recoverPassword', {
                session: req.session,
                errors: errors.mapped(),
            })
        }

    },
    newPassword: (req, res) => {
        let user = jwt.verify(req.params.token, process.env.SECRET, (err, user) => {
            return user
        })
        Users.findOne({
            where: {
                id: user.id,
                last_name: user.surname,
                email: user.email
            }
        })
            .then((user) => {
                if (user) {
                    res.render('users/newPassword', {
                        session: req.session,
                        token: req.params.token
                    })
                } else {
                    res.send('no existe')
                }
            })
    },
    ProcessNewPassword: (req, res) => {
        let user = jwt.verify(req.params.token, process.env.SECRET, (err, user) => {
            return user
        })
        Users.update({
            password: bcrypt.hashSync(req.body.password, 10)
        },
            {
                where: {
                    id: user.id,
                    last_name: user.surname,
                    email: user.email
                }
            })
            .then(() => {
                res.redirect('/users/login')
            })
            .catch((error) => {
                console.log(error)
                res.redirect('/')
            })
    }
}

module.exports = controller
