function radioPage(browser){
    return browser.page.pageRadioHome();
}
function listenLiveCarouselSection(browser){
    return radioPage(browser).section.listenLiveCarousel;
}q
module.exports = {
    radioPage : radioPage,
    listenLiveCarouselSection : listenLiveCarouselSection
};
