var _ = require('lodash');
var presteps = require('./../presteps/presteps.js');

module.exports = _.assign(presteps, {
    '@disabled': false,
    'authorization': function (browser) {
        browser
            .url('http://alpha.me-test.ru:8080/')
            .assert.title('Skynet 2')
            .waitForElementVisible('input[name="username"]', 4000)
            .setValue('input[name="username"]', 'xsolve')
            .waitForElementVisible('input[type="password"]', 4000)
            .setValue('input[type="password"]', 'xs0lv3')
            .waitForElementVisible('button[type="submit"]', 4000)
            .click('button[type="submit"]')
            .pause(7000)
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
            .pause(5000)
    },

    'visible tables with statistics': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//h4[contains(text(),"Event (#2)")]', 4000)
            .assert.containsText('//h4[contains(text(),"Event (#2)")]', 'Event (#2)')
            .waitForElementVisible('//div[contains(text(),"Event Participants")]', 4000)
            .assert.containsText('//div[contains(text(),"Event Participants")]', 'Event Participants')
            .waitForElementVisible('//div[contains(text(),"Event Groups")]', 4000)
            .assert.containsText('//div[contains(text(),"Event Groups")]', 'Event Groups')
            .waitForElementVisible('//tbody/tr/td[13]/select', 4000)
            .click('//tbody/tr/td[13]/select')
    },
    'header "Delegates" is not present': function (browser) {
        browser.assert.elementNotPresent("Delegates");
    }
})
;
