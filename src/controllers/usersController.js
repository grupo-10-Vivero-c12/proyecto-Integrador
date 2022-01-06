let {users, writeUsersJson} = require('../data/dataBase.js')
const { validationResult } = require('express-validator')

let controller = {
    login: (req, res) => {
        res.render('users/login', {
            session: req.session
        })
    },
    processLogin: (req, res) => {
        let errors = validationResult(req);
       
        if(errors.isEmpty()){
            let user = users.find(user => user.email === req.body.email);
           
            req.session.user = {
                id: user.id,
                name: user.name,
                email: user.email,
                avatar: user.avatar,
            }

            res.locals.user = req.session.user;
            res.redirect('/')

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
            let lastId = 1;

            users.forEach(user => {
                if(user.id > lastId){
                    lastId = user.id
                }
            });

            let { name, email, password1 } = req.body

            let newUser = {
                id: lastId + 1,
                name,
                email, 
                password: password1,
                avatar: req.file ? req.file.filename : "default-image.png",
            }

            users.push(newUser)

            writeUsersJson(users)

            res.redirect('/users/login')

        }else{
            /* res.send(errors.mapped()) */
            res.render('users/register', {
                errors: errors.mapped(),
                session: req.session
            })
        }
    },
    edit: (req, res) => {
        let userId = +req.params.id;
        let user = users.find(user => user.id === userId)

        res.render('users/editProfile',{
            user
        })
    },
    update: (req, res) => {
        let userId = +req.params.id;
        const {name, email, password} = req.body

        users.forEach(user => {
            if(user.id === userId){
                user.name = name
                user.email = email
                user.password = password
            }
        });

        writeUsersJson(users)

        res.redirect("/")
    },
    profile:(req, res) => {
        res.render('users/userProfile',{
            session: req.session
        })
    }
}

module.exports = controller
