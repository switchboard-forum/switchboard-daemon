let crypto = require('crypto');

exports.parse = data => {
  data.tripcode = crypto.createHash('md5').update(data.password).digest('hex');
  data.password = undefined;
  return data;
};

// don't worry i'm not using md5 for the goddamn tripcodes this is just a test
