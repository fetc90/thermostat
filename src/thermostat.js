function Thermostat() {
  this.temperature = 20;
  this.minTemperature = 10;
  this.maxTempInPSM = 25;
  this.maxTemp = 32;
  this.powerSavingMode = true;
};

Thermostat.prototype.getTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function(){
  var maxTemp;

  if (this.powerSavingMode) {
     maxTemp = this.maxTempInPSM;
  } else {
     maxTemp = this.maxTemp;
  }

  if (this.temperature < maxTemp) {
    this.temperature += 1;
  }
};

Thermostat.prototype.down = function() {
  this.temperature -= 1;
};

Thermostat.prototype.switchPowerSavingMode = function () {
  this.powerSavingMode = !this.powerSavingMode
};

Thermostat.prototype.reset = function () {
  this.temperature = 20;
};

Thermostat.prototype.currentEnergyUsage = function () {

  if (this.temperature < 18) {
    return 'low-usage';
  } else if (this.temperature < 25) {
      return 'medium-usage';
  } else
    {
      return 'high-usage';
    }


};
