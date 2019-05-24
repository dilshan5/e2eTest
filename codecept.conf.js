exports.config = {
    output: './output',
    helpers: {
        WebDriver: {
            url: 'https://www.bergfreunde.eu',
            browser: 'chrome',
            windowSize: "maximize",
            smartWait: 5000,
            timeouts: {
                "page load": 10000
            }
        },
        AssertWrapper: {
            require: "codeceptjs-assert"
        }
    },
    include: {
        I: './steps_file.js',
        homePage: './pages/HomePage.js',
        brandSearchResultPage: './pages/BrandSearchResultPage.js',
    },
    mocha: {},
    bootstrap: null,
    teardown: null,
    hooks: [],
    gherkin: {
        features: './features/*.feature',
        steps: [
            './step_definitions/HomePageSteps.js',
            './step_definitions/BrandSearchResultPageSteps.js',
        ]
    },
    plugins: {
        screenshotOnFail: {
            enabled: true
        },
        wdio: {
            enabled: true,
            services: ['selenium-standalone']
        }
    },
    tests: './*_test.js',
    name: 'codeceptjs-e2eTest'
}