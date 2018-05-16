
module.exports = {
    url: 'http://www.bbc.co.uk/radio/new',
    elements: {
        signInLinkViaOrb: {
            selector: '#idcta-link'
        },
        signInLinkViaBody: {
            selector: '.id4-cta-signin'
        }
    },
        sections: {
            // url: 'http://www.bbc.co.uk/radio/new',
            listenLiveCarousel: {selector: '.cap-c-listen-live',

                elements: { allStationsLink: { selector: '.cap-o-link--secondary'}
                }
            }
        }

};