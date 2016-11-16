var _ = require('lodash');
var presteps = require('./../presteps/presteps.js');

module.exports = _.assign(presteps, {
    '@disabled': false,
    'authorization': function (browser) {
        browser.url('http://test.skynet.managementevents.com/')

            .assert.title('Skynet 2')
            .waitForElementVisible('input[name="username"]', 4000)
            .setValue('input[name="username"]', 'xsolve')
            .waitForElementVisible('input[type="password"]', 4000)
            .setValue('input[type="password"]', 'xs0lv3')
            .waitForElementVisible('button[type="submit"]', 4000)
            .click('button[type="submit"]')
            .pause(4000)
            .assert.containsText('div#page-heading', 'Dashboard')
            .url('http://test.skynet.managementevents.com/event/2008/delegates')
    },
    'select YES filter': function (browser) {
        browser
            .useXpath()
            .waitForElementVisible('//tbody/tr/td[13]/select', 4000)
            .click('//tbody/tr/td[13]/select')
            .waitForElementVisible('//tbody/tr/td[13]/select/option[@value="1"]', 4000)
            .click('//tbody/tr/td[13]/select/option[@value="1"]')
            .pause(6000)
    },
    'following account reference': function (browser) {
        browser
            .waitForElementVisible('//tbody/tr/td[2]/span/a[@href="/delegates/edit/107986"]', 4000)
            .click('//tbody/tr/td[2]/span/a[@href="/delegates/edit/107986"]')
            .waitForElementVisible('//span[contains(text(),"Antti Alanen (#107986)")]', 4000)

            .waitForElementVisible('//a[@href="http://test.ew.managementevents.com/EW/MasterContact/cruII/id/335773"]', 4000)
            .click('//a[@href="http://test.ew.managementevents.com/EW/MasterContact/cruII/id/335773"]')
            .pause(10000)
    },
    ' existing ME account assertions': function (browser) {
        browser.url('http://test.ew.managementevents.com/EW/MasterContact/cruII/id/335773')
            .waitForElementVisible('//h4[contains(text(), "Person   - Alanen Antti (#335773)")]', 4000)
            .useCss()
            .assert.containsText('select#MasterContactStatus.form-control.status-active', 'Active')
            .pause(10000)
            .useXpath()
            .assert.containsText('//b[contains(text(),"Email:")]', 'Email:')
            .assert.containsText('//b[contains(text(),"LinkedIn Id:")]', 'LinkedIn Id:')
            .assert.containsText('//b[contains(text(),"Facebook Id:")]', 'Facebook Id:')
            .assert.containsText('//b[contains(text(),"Email confirmation status:")]', 'Email confirmation status:')
            .assert.containsText('//b[contains(text(),"Source:")]', 'Source:')
            .assert.containsText('//b[contains(text(),"Created:")]', 'Created:')
            .assert.containsText('//b[contains(text(),"Modified:")]', 'Modified:')
            .assert.containsText('//b[contains(text(),"Last Login")]', 'Last Login')
            .assert.containsText('//b[contains(text(),"Last Password Reset")]', 'Last Password Reset')
            .assert.containsText('//b[contains(text(),"Link to account:")]', 'Link to account:')

    },

})
;