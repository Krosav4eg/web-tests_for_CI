module.exports.command = function(url, callback) {
  this.url(this.launchUrl + url, callback);

  return this;
};
