const bcrypt = require('bcrypt');

module.exports = {

    async isValidPassword(user, password) {

        const compare = await bcrypt.compare(password, user.password);

        return compare;

    }

}