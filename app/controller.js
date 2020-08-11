
let controller = {
    home: (req, res) => {
        res.render('home', { title: 'Home', name: 'Laud' })
    },
    add: (req, res) => {
        res.render('add', { title: 'Add' })
    },
    submit: (req, res) => {
        const name = req.body.name;
        const email = req.body.email;
        const age = req.body.age;
        console.log({ 'name': name, 'emaik': email, 'age': age })

    }
}

module.exports = controller;