const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");

// we use a nightwatch.conf.js file so we can include comments and helper functions
module.exports = {
    "src_folders": ["test/"],
    "page_objects_path": "pages/",
    "globals_path": "globals.js",
    "output_folder": "./reports", // reports (test outcome) output by nightwatch
    "custom_commands_path": [],
    "custom_assertions_path": [],

// "selenium": {
    // "start_process": true, // tells nightwatch to start/stop the selenium process
    // "server_path": seleniumServer.path,
    // "host": "",
    // "port": 4444, // standard selenium port
    // "cli_args": {
    //     "webdriver.chrome.driver" : chromedriver.path
    // }
    "selenium": {
        "start_process": true,
        "server_path": "bin/selenium-server-standalone-2.53.1.jar",
        "log_path": "",
        "host": "127.0.0.1",
        "port": 4444,
        "cli_args": {
                "webdriver.chrome.driver" : chromedriver.path
            }
    },
    "test_settings": {
        "default": {
            "screenshots": {},
            "desiredCapabilities": { // use Chrome as the default browser for tests
                "browserName": "chrome",
                // "browserName": "firefox"
                "chromeOptions" : {
                    // "args" : ["headless"]
                    }}
            }
        },
        "chrome": {
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true // turn off to test progressive enhancement
            }
        }
    };
