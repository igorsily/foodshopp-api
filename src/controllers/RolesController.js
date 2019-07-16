const { Role } = require('../models');

module.exports = {

    async index(req, res) {


        try {

            const roles = await Role.findAll();

            return res.status(200).json(roles)

        } catch (error) {

            return res.status(500).json(error)
        }

    },

    async store(req, res) {

        try {

            const { name, description } = req.body;

            const role = await Role.create({ name, description });

            return res.status(201).json(role);

        } catch (error) {

            error.message = error.message.replace('Validation error: ', '')

            return res.status(400).json({ error: error.message });

        }

    },

    async show(req, res) {

        const role = await Role.findById(req.params.id);

        res.status(200).json(role);
    },

    async update(req, res) {

        const { roles, ...data} = req.body;

        console.log(roles);

        
        console.log(data);
        
        // const role = await Role.update(req.params.id, req.body, { new: true });

        // return res.status(204).json();
    },
};