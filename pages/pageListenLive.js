module.exports = {
    url: 'https://www.bbc.co.uk/radio/play/live:bbc_radio_one',
    sections: {
        ListenLiveSchedule: {selector: '.cap-c-schedule__list',
            elements: {
            onAirImage: { selector: '.cap-c-roadcast__image'},
            scheduleTitle: { selector: '.gel-minion-bold'},
            scheduleInfo: { selector: '.gel-long-primer.gs-u-pt-'},
            restartIcon: { selector: '.cap-c-icon--live-restart'},
            listenLiveIcon: {selector: '.cap-c-icon--iplayer-radio'},
            iconText: {selector: '.cap-c-iconbutton__text'}
            }
        }
    }
};
