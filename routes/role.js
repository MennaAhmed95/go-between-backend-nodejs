const express = require('express');
const router = express.Router();
const Role = require('../models/role');
require('express-async-errors');

module.exports = router;

router.get("/", async (req, res, next) => {
    const roles = await Role.find()
    res.status(200).json(roles);
})

router.post('/addRole', async (req, res, next) => {
    const {
        name
    } = req.body;
    const role = new Role({
        name
    });
    await role.save();
    res.json(role)

})