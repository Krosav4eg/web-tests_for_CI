/**
 * @param {String} login
 * @param {String} pass
 */
module.exports.command = function(login, pass) {
  this
      .url(this.launchUrl + '/')
      .assert.title('Skynet 2')
      .setValue('input[name="username"]', login)
      .setValue('input[type="password"]', pass)
      .click('button[type="submit"]')
      .waitForElementPresent('me-nav', 10000);

  return this;
};
