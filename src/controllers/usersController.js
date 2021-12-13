let {users, writeUsersJson} = require('../data/dataBase.js')

let controller = {
    login: (req, res) => {
        res.render('users/login')
    },
    register: (req, res) => {
        res.render('users/register')
    },
    store: (req, res) => {
        let lastId = 1;

        users.forEach(user => {
            if(user.id > lastId){
                lastId = user.id
            }
        });

        const {name,  email, password} = req.body

        let newUser = {
            id: lastId + 1,
            name: name,
            email: email,
            password: password
        }

        users.push(newUser)

        writeUsersJson(users)

        res.redirect("/")
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
}

module.exports = controller
