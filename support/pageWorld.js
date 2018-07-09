
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
function soundsNav(browser){
    return browser.page.pageSoundsNav();
}

module.exports = {
    //Pages
    radioPage : radioPage,
    signIn : signIn,
    listenLivePage : listenLivePage,
    soundsNav : soundsNav,

    //sections
    listenLiveScheduleSection : listenLiveScheduleSection,
    listenLiveCarouselSection : listenLiveCarouselSection
};
