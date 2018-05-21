require('../nightwatch.conf.js');

const pageWorld = require ('../support/pageWorld.js');
const signInUsers = require('../support/signInUsers');

module.exports ={
    '@tags': ['listenlive'], //nightwatch --tag smoke
    'Listen live on air section in schedule': function (browser) {
        pageWorld.radioPage(browser).navigate();
        signInUsers.signInViaOrb('normal', browser);
        // browser.end()
        pageWorld.listenLivePage(browser)
            .navigate();
        pageWorld.listenLiveScheduleSection(browser)
            .expect.element('@onAirImage').to.be.visible;
        browser.end()
    }
};