//const { users, writeUsersJSON } = require('../database/dataBase');
let { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const { include } = require('../validations/register');
const Users = db.User


let controller = {
    login: (req, res) => {
        res.render('users/login', {
            session: req.session
        })
    },
    processLogin: (req, res) => {
        let errors = validationResult(req);
       
        if(errors.isEmpty()){
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
                rol : user.id_rol
            }.catch((error)=>{
                res.status(400).json({
                    success: false,
                    error
                })
            })

            if(req.body.remember){
                const TIME_IN_MILISEG = 300000
                res.cookie("userTimbo", req.session.user,{
                    expires: new Date(Date.now() + TIME_IN_MILISEG),
                    httpOnly: true,
                    secure: true,
                })
            };
            res.locals.user = req.session.user;
            
            res.redirect('/')
           })
        }else{
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
       
        if(errors.isEmpty()){
            let { name, last_name, email, password1 } = req.body;
            Users.create({
                first_name : name,
                last_name, 
                email,
                password: bcrypt.hashSync(password1, 10),
                avatar: req.file ? req.file.filename : 'default-image.png',
            })
            .then(() => {
                res.redirect('/users/login')
            }).catch((error)=>{
                res.status(400).json({
                    success: false,
                    error
                })
            })
        }else{
            res.render('users/register', {
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        if(req.cookies.userTimbo){
            res.cookie('userTimbo', "", {maxAge: -1})
        }
        res.redirect('/')
    }, 
    profile: (req, res) => {
        Users.findByPk(req.params.id, {
            include: [{association: 'rol'}]
        })
        .then((user) => {
            res.render('../users/profile',{
                user,
                session: req.session
            })
        }).catch((error)=>{
            res.status(400).json({
                success: false,
                error
            })
        })
    },
    getAllProfiles: async (req , res) =>{
        let users;
       try{
           users = await Users.findAll();
           if(users)
           res.status(200).json(users);
       }catch(error){
           res.status(400).json({
               message: "hola"
           })
       }
    }
}

module.exports = controller
