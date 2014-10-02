myhealth
========

Ionic Health App. 

Progress
========
    
- [x] **Initial App Setup**
  1. Yeoman Ionic Installed using Generate Ionic with Maps template and all default plugins
  2. Emulated on iOS Simulator and Android Emulator
  3. Documentation prepared in Readme
  4. Deployed to Heroku at http://ionichealth.herokuapp.com
- [x] **Testing Setup**
  1. Protractor with standalone Selenium server
- [x] **Responsive Design Template**
  1. Basic mobile responsive design with SCSS and Media Queries

Integration Checklist
=====================
All features, bugs, and chores must conform with the following prior to pull request being accepted:
- [ ] **Unit Tests created and passed**
- [ ] **E2E Tests created and passed**
- [ ] **Runs on local web server at http://localhost:9000/ without error (using Chrome, Safari, and Firefox browsers) with:**
```
grunt serve
```
- [ ] **Emulates on Android Simulator without error**
```
grunt emulate:android
```
- [ ] **Emulates on iOS Simulator without error with:**
```
grunt build
grunt emulate:ios
```
- [ ] **Deploys to Heroku without error**
- [ ] **Deploys to Google Cloud Platform without error**

Unit Testing
============
- [x] **Sinon Chai setup, and run with:**
```
grunt test
```

E2E Testing
===========
- [x] **Protractor to be setup and run with the following sequentially in separate Terminal tabs:**
```
grunt serve 
protractor protractor.conf.js
```