let users = [
    {id: "1", nama: "Daffa", email: "daffa@gmail.com"},
    {id: "2", nama: "Keishin", email: "keishin@gmail.com"},
    {id: "3", nama: "Yunan", email: "yunan@gmail.com"},
    {id: "4", nama: "Hans", email: "hans@gmail.com"},
]

module.exports = {
    index: (req, res) => {
        if(users.length > 0){
            res.json({
                status: true,
                data: users,
                method: req.method,
                url: req.url,
            })
        }else{
            res.json({
                status: false,
                message: "Data tidak ditemukan"
            })
        }
    },
    store: (req, res) => {
        users.push(req.body)
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data berhasil ditambahkan"
        })
    },
    update: (req, res) => {
        const id = req.params.id
        users.filter(user => {
            if(user.id == id){
                user.nama = req.body.nama
                user.email = req.body.email
                return user
            }
        })
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data berhasil diedit"
        })
    },
    destroy: (req, res) => {
        const id = req.params.id
        users = users.filter(user => user.id != id)
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Data berhasil dihapus"
        })
    }
}