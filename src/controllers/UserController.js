const { User } = require('../models');

module.exports = {

    async index(req, res) {


        try {

            const user = await User.findAll();

            return res.status(200).json(user)

        } catch (error) {

            return res.status(500).json(error)
        }

    },

    async show(req, res) {

        const user = await User.findByPk(req.params.id);

        res.status(200).json(user);
    },

    async update(req, res) {

        const { roles, ...data } = req.body;

        const { id } = req.params;

        const user = await User.findByPk(id).then(user => user.get());

        try {
            if (roles && roles.length > 0) {
                user.setRole(roles);
            }
            return res.status(200).json(user)
        } catch (error) {

            console.log(error);
            
            return res.status(500).json(error)
        }


    },
};