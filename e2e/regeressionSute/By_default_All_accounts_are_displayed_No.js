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
    
    'visible tables with statistics and select filter NO': function (browser) {
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
    // .pause(4000)
    // .waitForElementVisible('//tbody/tr/td[13]/select/option[@value="%00,2"]', 4000)
    // .click('//tbody/tr/td[13]/select/option[@value="%00,2"]')
    // .useCss()
    // .pause(100)
    // .waitForElementNotVisible('#thisIsMainLoader', 10000)
    // .pause(100)
    // .useXpath()
    //.click('//span/a[@href="/event/2/delegates"]')
    // .useCss()
    // .pause(100)
    // .waitForElementNotVisible('#thisIsMainLoader', 10000)
    // .useXpath()
    'choose Master Contact ID': function (browser) {
        browser
            .waitForElementVisible('//tbody/tr/td[2]/span/a[@href="/delegates/edit/47035"]', 4000)
            .click('//tbody/tr/td[2]/span/a[@href="/delegates/edit/47035"]')
            .waitForElementVisible('//span[contains(text(),"Tomi Hilvo (#47035)")]', 4000)
            .waitForElementVisible('//a[@href="http://test.ew.managementevents.com/EW/MasterContact/cruII/id/345755"]', 4000)
            .click('//a[@href="http://test.ew.managementevents.com/EW/MasterContact/cruII/id/345755"]')
            .pause(10000)
    },
    ' for non-existent ME account assertion': function (browser) {
        browser.url('http://test.ew.managementevents.com/EW/MasterContact/cruII/id/345755')
            .waitForElementVisible('//h4[contains(text(), "Person   - Hilvo Tomi (#345755)")]', 4000)
            .useCss()
            .waitForElementVisible('div#ExternalDataResults.col-md-12', 6000)
            .assert.containsText('div#ExternalDataResults.col-md-12', 'No user')
            .closeWindow()


    }
})
;


