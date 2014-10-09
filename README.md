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
- [x] **Google Maps Custom API**
  1. Generated vendor file by copying API key from Google into the link shown in index.html
  2. Stored API key in JSON file and created service to access it. Not currently used
- [x] **Google Maps Setup**
  1. Upgrade Google Maps from v2 to latest v3
- [x] **Google Maps Implementations**
  1. Marker icons, Polylines, Polygons, Transparent backgrounds, Custom streetview panoramas
  2. Embedded InfoWindow styles, Detailed Map InfoWindow, noClear map container, Customer cursors
- [ ] **Google Maps Pending**
  1. Draggable objects
  2. Pages 126-127 multiple Dynamic Markers
- [ ] **Google Maps Community Contribution**
  1. Pull request to Generate Ionic of steps performed

Bugs & Issues
========
- [ ] Marker icon does not get placed on iOS Simulator. Only works in desktop browser.
- [ ] Close infoWindow event does not work in production on Heroku. Only works in development.
- [ ] Panorama Streetview display toggle requires user to click Marker twice (instead of only once) to show the Panorama (to trigger the $broadcast response to the child Directive from the parent Controller after the initial $emit communication) and when the Panorama is hidden manually it does not trigger again at all when the Marker is clicked again.

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