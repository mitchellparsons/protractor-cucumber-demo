# protractor-cucumber-demo

This is a quick demonstration on how to automate the Angular phone-cat demo http://angular.github.io/angular-phonecat/step-12/app/#/phones using Protractor and Cucumber.

To run the demo you need NodeJS already installed.
Then do the following in a terminal:

```
git clone https://github.com/mitchellparsons/protractor-cucumber-demo.git // clone the project

npm install protractor -g // install globally protractor
npm install cucumber -g // install globally cucumber 

// protractor will install webdriver-manager
// we want to make sure chromedriver and selenium is up to date
webdriver-manager update 

//navigate into the project
cd protractor-cucumber-demo

//run protractor!
protractor protractor.conf.js