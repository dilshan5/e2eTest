exports.config = {
    tests: './*_test.js',
    name: 'codeceptjs-e2eTest',
    description: "CodeceptJS assignment",
    author: "Dilshan Fernando",
    output: './output',
    helpers: {
        WebDriver: {
            url: 'https://www.bergfreunde.eu',
            browser: 'chrome',
            windowSize: "maximize",
            uniqueScreenshotNames: true,
            fullPageScreenshots: true,
            smartWait: 5000,
            waitForNavigation: ["domcontentloaded", "networkidle0"],
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
        searchResultPage: './pages/SearchResultPage.js',
        productDisplayPage: './pages/ProductDisplayPage.js',
        cartPage: './pages/CartPage.js',
        paymentTypePage: './pages/PaymentTypePage.js',
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
            './step_definitions/SearchResultPageSteps.js',
            './step_definitions/ProductDisplayPageSteps.js',
            './step_definitions/CartPageSteps.js',
            './step_definitions/PaymentTypePageSteps.js'
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
    }
}