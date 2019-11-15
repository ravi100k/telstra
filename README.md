# Traffic Signal Indiactor

#### Application Description ####
The Application shows the 3 traffic signal lights.
1. Green
2. Yellow
3. Red

(By Default the signal will show black in color.)

* The signal color will change to Red to Yellow after 5 seconds.

* The signal color will change to Yelllow to Green after 10 seconds.

* The signal color will change to Green to Red after 15 seconds.



### Instruction to start the application:
* `npm install`  (To install the node module dependiencies on the roort folder.)
* `npm start` (To start the application)
    * Its will run 2 commands one after aonther.
    * `npm run client` -> Start the porduction build to be used by express server to server the HTML content.
    * `npm run server` -> Its will set the node enviroment to produnction and start the server.

*  `npm run test` (To start the test suites)
    * Its will also start the test case for the server and the client application.
    And display the content on the console.
