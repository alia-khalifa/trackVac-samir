const User = require('../models/user');

validateUser = async (req, res) => {
    try {
        const { vacID, nationalID } = req.body;
        if (!vacID || !nationalID) {
            return res.status(400).send({
                success: false,
                message: 'You must provide vacID and nationalID',
            });
        }
        const user = await User.findOne({ vacID, nationalID });

        if (user.firstDose) {
            return res.send({
                success: true,
                message: 'Can add review',
            });
        }
        else if (user) {
            return res.status(401).send({
                success: false,
                message: 'Sorry, you did not take the vaccine yet',
            });
        }
    }
    catch (e) {
        return res.status(400).send({
            valid: false,
            error: 'Error in user validation',
        });
    }
}

module.exports = { validateUser };