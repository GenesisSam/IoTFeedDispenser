var gpio = require("pigpio").Gpio;
var ledGreen = new gpio(20, {mode: gpio.OUTPUT});
var ledBlue = new gpio(21, {mode: gpio.OUTPUT});
var m = new gpio(10, {mode: gpio.OUTPUT});
var open = 1400, close = 500;

function initializeFeedMachine() {
}

function powerOn() {
  ledGreen.pwmWrite(255);
}

function powerOff() {
  ledGreen.pwmWrite(0);
}

function feedLedOn() {
  ledBlue.pwmWrite(255);
}

function feedLedOff() {
  ledBlue.pwmWrite(0);
}

function hatchOpen() {
  feedLedOn();
  m.servoWrite(open);
}

function hatchClose() {
  m.servoWrite(close);
  feedLedOff();
}

module.exports = {
  powerOn,
  powerOff,
  hatchOpen,
  hatchClose
};

