const {After, Before} = require('@cucumber/cucumber');

Before(function () {
    console.log("I am first to start");
  });

  After(function () {
    // Assuming this.driver is a selenium webdriver
    console.log("I am last to run");
  });