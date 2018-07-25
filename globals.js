
var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
    openBrowser: true,
    reportsDirectory: __dirname + '/reports/',
    separateReportPerSuite: true,
});

module.exports = {
    reporter: reporter.fn,
    "waitForConditionTimeout": 2000,
    abortOnAssertionFailure: false
};
