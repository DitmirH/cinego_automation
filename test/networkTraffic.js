module.exports = {
    '@tags': ['network'], //nightwatch --tag smoke
    'Catch all XHRs': function (browser) {
        browser
            .url('http://www.bbc.co.uk/radio');
        browser.listenXHR('', 1000, null, function assertValues(xhr) {
                // browser.assert.equal(xhr.status, "success");
                // browser.assert.equal(xhr.method, "POST");
                // browser.assert.equal(xhr.requestData, "200");
                // browser.assert.equal(xhr.httpResponseCode, "200");
                // browser.assert.equal(xhr.responseData, "");
            setTimeout('', 10000);
            console.alert('this is the xhr', xhr.status)
            })

    }
};
