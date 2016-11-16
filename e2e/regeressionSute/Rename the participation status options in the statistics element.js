var _ = require('lodash');
var presteps = require('./../presteps/presteps.js');

module.exports = _.assign(presteps, {
    '@disabled': false,
    'authorization': function (browser) {
        browser
            .url('http://test.skynet.managementevents.com/')
            .assert.title('Skynet 2')
            .waitForElementVisible('input[name="username"]', 4000)
            .setValue('input[name="username"]', 'xsolve')
            .waitForElementVisible('input[type="password"]', 4000)
            .setValue('input[type="password"]', 'xs0lv3')
            .waitForElementVisible('button[type="submit"]', 4000)
            .click('button[type="submit"]')
            .pause(4000)
            .assert.containsText('div#page-heading', 'Dashboard');
    },

    'choose event': function (browser) {
        browser
            .pause(4000)
            .useXpath()
            .waitForElementVisible('//ul/li[5]/a/span[contains(text(), "Delegate")]', 4000)
            .click('//ul/li[5]/a/span[contains(text(), "Delegate")]')
            .useCss()
            .waitForElementVisible('a#EventDelegateChoose', 4000)
            .click('a#EventDelegateChoose')
            .waitForElementVisible('a[href="/event/2/delegates"]', 4000)
            .click('a[href="/event/2/delegates"]')
    },
    'test of rename table entries statistics': function (browser) {
        browser
            .useXpath()
            .pause(5000)
            .waitForElementVisible('//div[contains(text(), "Event Participants")]', 4000)
            .assert.containsText('//p[contains(text(), "Prospects: ")]', 'Prospects: 2')
            .assert.containsText('//p[contains(text(), "Confirmed: ")]', 'Confirmed: 6')
            .assert.containsText('//p[contains(text(), "Confirmed Rebook: ")]', 'Confirmed Rebook: 0')
            .assert.containsText('//p[contains(text(), "Total participants: ")]', 'Total participants: 6')
            .assert.containsText('//p[contains(text(), "Cancelled: ")]', 'Cancelled: 0')
    }
})
;

