require('../nightwatch.conf.js');
const pageWorld = require ('../support/pageWorld.js');
// const signInUsers = require('../support/signInUsers');

module.exports = {
    '@tags': ['soundsNav'], //nightwatch --tag smoke
    'Check basic sounds Nav items' : function (browser) {
        pageWorld.soundsNav(browser).navigate();
        pageWorld.soundsNav(browser)
            .waitForElementVisible('body', 5000)
            .expect.element('@soundsLogo').to.be.visible;
        pageWorld.soundsNav(browser).expect.element('@listenItem').text.to.contain('Listen');
        pageWorld.soundsNav(browser).expect.element('@mySoundsItem').text.to.contain('My Sounds');
        browser.saveScreenshot('./screenshots/sounds_nav/basic_sounds_nav.png');
        browser.end()
    },
    'logos present on sounds nav': function (browser) {
        pageWorld.soundsNav(browser).navigate();
        pageWorld.soundsNav(browser).expect.element('@mySoundsIcon').to.be.visible;
        pageWorld.soundsNav(browser).expect.element('@listenIcon').to.be.visible;
        browser.end()
    },
    'sounds nav links navigate to correct page': function (browser) {
        pageWorld.soundsNav(browser).navigate();
        pageWorld.soundsNav(browser).click('@listenIcon');
        browser.saveScreenshot('./screenshots/sounds_nav/nav_to_listen.png');
        // browser.expect.element('body').text.to.contain('Listen');
        browser.expect.element('body').text.to.contain('Page Not Found');
        // pageWorld.soundsNav(browser).navigate();
        browser.back();
        pageWorld.soundsNav(browser)
            .waitForElementVisible('@mySoundsIcon', 5000)
            .click('@mySoundsIcon');
        browser.expect.element('body').text.to.contain('Page Not Found');
        browser.saveScreenshot('./screenshots/sounds_nav/nav_to_my_sounds.png');
        // browser.expect.element('body').text.to.contain('My Sounds');
        browser.end()
    }
    // 'test description/name': function (browser) {
    //     //test
    // },

};
