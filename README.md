# Introduction

This is a codeceptjs project. Use BDD with selenium web driver

# How to use

This e2e test is done using CodeceptJS https://codecept.io/

### Installation

e2e test requires [Node.js](https://nodejs.org/) v8+ to run.

Install the dependencies and devDependencies.

```sh
$ cd codeceptjs-e2eTest
$ npm install -d
```

### How to trigger UI test

This project uses [Wdio-Services](https://codecept.io/plugins#wdio) hence you don't need to start the selenium

To run all e2e tests just simply type

```sh
$ npx codeceptjs run --steps
```

### How to install Allure report

First you need to download [allure-framework](https://github.com/allure-framework/allure2/releases).

Then add the bin folder location into your PATH variable.Once you run your test suite, 'allure-results' directory will create inside target directory. Copy the path of it. Then open the command prompt. 

To view the allure report, ruk=n test as,

```sh
$ cd codeceptjs-e2eTest
$ allure serve output
```

To run all e2e tests with mocha report, just simply type

```sh
$ npx codeceptjs run --steps --reporter mochawesome
```
