
function radioPage(browser){
    return browser.page.pageRadioHome();
}
function listenLiveCarouselSection(browser){
    return radioPage(browser).section.listenLiveCarousel;
}
function signIn(browser){
    return browser.page.pageSignIn();
}

module.exports = {
    radioPage : radioPage,
    listenLiveCarouselSection : listenLiveCarouselSection,
    signIn : signIn
};
