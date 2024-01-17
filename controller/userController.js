const userModel = require("../models/userModel");

module.exports = {
<<<<<<< HEAD
    index: async (req, res) => {
        try{
            const users = await userModel.find()
            if(users.length > 0){
                res.status(200).json({
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
        }catch(error){
            res.status(400).json({success: false})
        }
    },
    search: async (req, res) => {
        try{
            const users = await userModel.findById(req.params.id)
            res.status(200).json({
                status: true,
                data: users,
                method: req.method,
                url: req.url,
            })
        }catch(error){
            res.status(400).json({success: false})
        }
    },
    store: async (req, res) => {
        try{
            const users = await userModel.create(req.body)
            res.status(200).json({
                status: true,
                data: users,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditambahkan"
            })
        }catch(error){
            res.status(400).json({success: false})
        }
    },
    update: async (req, res) => {
        try{
            const users = await userModel.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            res.json({
                status: true,
                data: users,
                method: req.method,
                url: req.url,
                message: "Data berhasil diedit"
            })
        }catch(error){
            res.status(400).json({success: false})
        }
    },
    destroy: async (req, res) => {
        try{
            await userModel.findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Data berhasil dihapus"
            })
        }catch(error){
            res.status(400).json({success: false})
        }
    }
}
=======
	// Menampilkan seluruh data
	index: async (req, res) => {
		try {
			const users = await userModel.find();
			if (users.length > 0) {
				res.status(200).json({
					status: true,
					data: users,
					method: req.method,
					url: req.url,
				});
			} else {
				res.json({
					status: false,
					message: "Data tidak ditemukan",
				});
			}
		} catch (error) {
			res.status(400).json({ success: false });
		}
	},
	// Menampilkan data berdasarkan ID
	search: async (req, res) => {
		try {
			const users = await userModel.findById(req.params.id);
			res.status(200).json({
				status: true,
				data: users,
				method: req.method,
				url: req.url,
			});
		} catch (error) {
			res.status(400).json({ success: false });
		}
	},
	// Menambahkan data
	store: async (req, res) => {
		try {
			const users = await userModel.create(req.body);
			res.status(200).json({
				status: true,
				data: users,
				method: req.method,
				url: req.url,
				message: "Data berhasil ditambahkan",
			});
		} catch (error) {
			res.status(400).json({ success: false });
		}
	},
	// Mengubah data menggunakan ID
	update: async (req, res) => {
		try {
			const users = await userModel.findByIdAndUpdate(req.params.id, req.body, {
				new: true,
				runValidators: true,
			});
			res.json({
				status: true,
				data: users,
				method: req.method,
				url: req.url,
				message: "Data berhasil diedit",
			});
		} catch (error) {
			res.status(400).json({ success: false });
		}
	},
	// Menghapus data menggunakan ID
	destroy: async (req, res) => {
		try {
			await userModel.findByIdAndDelete(req.params.id);
			res.json({
				status: true,
				method: req.method,
				url: req.url,
				message: "Data berhasil dihapus",
			});
		} catch (error) {
			res.status(400).json({ success: false });
		}
	},
};
>>>>>>> 88facc1dba0962951ceb633f014529a8733b9441
