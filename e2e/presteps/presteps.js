module.exports = {
    before: function (browser) {
        browser.windowMaximize();
    },
    after: function (browser) {
        browser.end();
    }
};
