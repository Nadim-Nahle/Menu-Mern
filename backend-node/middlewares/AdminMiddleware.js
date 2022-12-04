const User = require('../models/user')
const admin = async (req, res, next) => {
    // 401 Unauthorized
    const user = await User.findOne({ where: { id: req.user.id } })
    if (user.roles !== 'admin') return res.status(403).send({ error: { status: 403, message: 'Access denied.' } });
    next();
}

//EXPORTING MODULE
module.exports = admin;