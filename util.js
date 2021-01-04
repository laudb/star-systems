const dotenv = require('dotenv');
dotenv.config();

module.exports = config = {
  port: process.env.PORT || 3000,
  wolfid: process.env.WOLFID,
  currentEnv: process.env.NODE_ENV
};
