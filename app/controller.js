let controller = {
    home: (req, res) => {
        res.render('layout', { name: 'Laud' })
    }
}

module.exports = controller;