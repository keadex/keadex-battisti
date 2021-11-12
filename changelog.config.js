// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

function getScopes() {
  const apps = fs.readdirSync('./packages', function (err, content) {
    if (err) {
      return [];
    } else {
      return content;
    }
  });
  return apps.concat(['common']);
}

module.exports = {
  scopes: getScopes(),
};
