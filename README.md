# Sample Cypress -UI and API code

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

#### Note:
Under the fixtures (cypress/fixtures) directory add Test.txt file if you see any issue one of the UI Test case.


