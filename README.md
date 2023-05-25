# Sample Cypress POC -UI and API code

## Steps to execute this Cypress code in local machine
- Install node js and visual studio code into your local machine.
- Clone or copy this code into local machine.
- Open this directory code in Visual studio code.
- Perfom the below steps to install the basic cypress libraries.\
-npm init\
-npm install cypress\
-npm install --save-dev cypress-mochawesome-reporter\
-npm install  --save-dev cypress-downloadfile\
-npm install --save-dev cypress-drag-drop\
-npm install --save-dev cypress-file-upload

-  Now run the below commands one by to run the spec files\
-To run the cypress UI spec- npm run Test_only_WebUI\
-To run the cypress API spec - npm run Test_only_API\
-To run the cypress UI spec in Chrome browser - npm run Test_under_Chrome\
-To run the cypress UI spec in Firefox browser - npm run Test_under_Firefox\
-To run the cypress UI spec in Edge browser - npm run Test_under_Edge\
-To run both UI and API spec files- npm run Test_All_WebUI_API

## Where to find the HTML report files:
-  We can find the index.html files under this directory to see the html report - cypress/reports/
![image](https://user-images.githubusercontent.com/56149368/234646168-a9698d3b-a870-4621-b11e-43fb17ff3eab.png)

![image](https://user-images.githubusercontent.com/56149368/234645621-55d795a0-a798-45a2-8034-f3c2566e6901.png)


#### Note:
Under the fixtures (cypress/fixtures) directory add Test.txt file if you see any issue one of the UI Test case.


## ------------------
# Allure report generation:

npm i -D @shelex/cypress-allure-plugin

npm install -g allure-commandline --save-dev

#### Note: if we get any persmission issue: sudo chown -R $USER /usr/local/lib/node_modules


Package.json:

 "scripts": {
    "ui-regression-allure": "cypress run --browser chrome --spec cypress/e2e/**.js --env allure=true",
    "allure:report": "allure generate allure-results --clean -o allure-report"
  },


Support/e2e.js:

import '@shelex/cypress-allure-plugin';


Cypress.config.js:

const cypress = require("cypress");
const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    specPattern:"cypress/e2e/*"
  },
});



 npm run ui-regression-allure

npm run allure:report

allure open




### References:

https://www.youtube.com/watch?v=lZg3kUhvXYE

https://www.npmjs.com/package/@shelex/cypress-allure-plugin

https://www.npmjs.com/package/allure-commandline
