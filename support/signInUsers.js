const pageWorld = require('../support/pageWorld');
const userCreds = require("../support/userCredentials.json");

console.log('sdjhkjsdf', userCreds);

function emailSignin(user, browser){
    // console.log(userCreds[user]);
    pageWorld.signIn(browser).setValue('@emailInput', userCreds[user].email);
    pageWorld.signIn(browser).setValue('@passwordInput', userCreds[user].password);
}

function signInViaOrb(user, browser){
    pageWorld.signIn(browser)
        .waitForElementVisible('@signInLinkViaOrb', 1000)
        .click('@signInLinkViaOrb');
    emailSignin(user, browser);
    pageWorld.signIn(browser).click('@submitButton')
}
function signInViaUpsell(user, browser){
    pageWorld.signIn(browser)
        .waitForElementVisible('@signInLinkViaUpsell', 1000)
        .click('@signInLinkViaUpsell');
    emailSignin(user, browser);
    pageWorld.signIn(browser).click('@submitButton');
}

module.exports = {
    signInViaOrb: signInViaOrb,
    signInViaUpSell: signInViaUpsell,
};
