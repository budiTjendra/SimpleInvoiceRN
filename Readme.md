# Simple Invoice RN
#### Feature:
1. Create Screen
2. List Invoice include sort, filter and search
    2.1 Sorting 
    2.2 Listing
    2.3 Filter by date
    2.4 Search By MerchantId
      
Note. new invoice created will not be shown in the list due to backend-issue

#### Testing Tools:
In this project i am make use of 3 kind of test.
1. Unit testing 
To test on some 3rd party library behaviour that i used for this project.
2. Component Testing
I am using react-native-testing library to test the shareable component 
3. End to End Testing
I am using detox to simulation end to end testing for Invoice List Screen. 
Not. Initially using detox is not part of my estimation. But i have made some effort to make it work for IOS app.

#### Additional Value Added
1. I have implement handler for token expiry check, that will automatically fetch for new token if any request sending is failed due to token expired
2. I have configure detox to produce artifacts of the testing result which is location at .artifacts root folder

#### Installation and Setup:
1. Open terminal
2. Go to root folder location 
3. Run following step:     

        npm install
            
        npm start
        
        npm run ios

Note: to run android simulator, replace command 'npm run ios' to 'npm run android', but we need to open android simulator before execute npm run android
                
For running test: 

    npm run test

For running test with code coverage: 

    npm run test:coverage

For running detox:
1. Install dependencies
please refer to https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md 
Note. just follow step 1 only
2. You might need to make some changes in .detoxrc.json in root folder and look for configuration to configure  deviceType.
DeviceType is the simulator model. 
Note: Check this by typing applesimutils --list in terminal to display all available simulators.
3. Run the following command

        npm run e2e:ios




