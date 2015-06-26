exports.config = {

    // without the following a new selenium is started automatically  
    //seleniumAddress: 'http://localhost:4444/wd/hub',

    // use chromedriver
    directConnect: true,

    framework: 'cucumber',

    specs: [
        './features/phone-search.feature'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    // baseUrl: '',

    cucumberOpts: {
        require: './step_definitions/*.steps.js',
        format: 'pretty',
        defaultTimeoutInterval: 30000
    }

}
