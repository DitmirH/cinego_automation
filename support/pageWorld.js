
function radioPage(browser){
    return browser.page.pageRadioHome();
}
function listenLiveCarouselSection(browser){
    return radioPage(browser).section.listenLiveCarousel;
}
function signIn(browser){
    return browser.page.pageSignIn();
}
function listenLivePage(browser){
    return browser.page.pageListenLive();
}
function listenLiveScheduleSection(browser){
    return listenLivePage(browser).section.ListenLiveSchedule;
}

module.exports = {
    radioPage : radioPage,
    listenLiveCarouselSection : listenLiveCarouselSection,
    signIn : signIn,
    listenLivePage : listenLivePage,
    listenLiveScheduleSection : listenLiveScheduleSection
};
