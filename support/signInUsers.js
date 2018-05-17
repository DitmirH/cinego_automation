const pageWorld = require('../support/pageWorld');

function signInViaOrb(user, browser){
    pageWorld.signIn(browser)
        .waitForElementVisible('@signInLinkViaOrb', 1000)
        .click('@signInLinkViaOrb');
    if (user === 'normal') {
        pageWorld.signIn(browser).setValue('@emailInput', 'abcd1234@post.com');
        pageWorld.signIn(browser).setValue('@passwordInput', 'Test123.');
    }
    pageWorld.signIn(browser).click('@submitButton')
}
function signInViaUpsell(user, browser){
    pageWorld.signIn(browser)
        .waitForElementVisible('@signInLinkViaUpsell', 1000)
        .click('@signInLinkViaUpsell');
    if (user === 'normal') {
        pageWorld.signIn(browser).setValue('@emailInput', 'abcd1234@post.com');
        pageWorld.signIn(browser).setValue('@passwordInput', 'Test123.');
    }
    pageWorld.signIn(browser).click('@submitButton')
}
module.exports = {
    signInViaOrb: signInViaOrb,
    signInViaUpSell: signInViaUpsell

};
