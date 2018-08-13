'use strict';

function Thermostat(){
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
}

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
}

Thermostat.prototype.up = function(){
  if (this.isMaxTemperature()){
    return;
  }
  this.temperature += 1;
}

Thermostat.prototype.down = function(){
  if (this.isMinTemperature()){
    return;
  }
  this.temperature -= 1;
}

Thermostat.prototype.isMinTemperature = function(){
  return this.temperature === this.MINIMUM_TEMPERATURE;
}

Thermostat.prototype.isMaxTemperature = function(){
  if (this.isPowerSavingModeOn() === false){
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
}

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.powerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingModeOff = function(){
  return this.powerSavingMode = false;
}

Thermostat.prototype.switchPowerSavingModeOn = function(){
  return this.powerSavingMode = true;
}

Thermostat.prototype.resetTemperature = function(){
  this.temperature = 20;
}
