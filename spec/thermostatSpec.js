describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('has a minimum temperature of 10 degrees',function() {
    expect(thermostat.minTemperature).toEqual(10);
  });

  it('has the power saving mode on by default',function() {
    expect(thermostat.powerSavingMode).toEqual(true);
  });


  describe('#increaseTemperature', function() {
    it('increases the temperature by 1 ', function() {
      thermostat.increaseTemperature();
      expect(thermostat.getTemperature()).toEqual(21);
    });

    it('cannot increase temperature above 25 if power saving mode is on',
      function() {
        for (var i = 0; i < 5; i++) {
          thermostat.increaseTemperature();
        }

        expect(thermostat.getTemperature()).toEqual(25);
    });

    it('cannot increase temperature above 32 if power saving mode is off',
      function() {
        thermostat.switchPowerSavingMode();
        for (var i = 0; i < 12; i++) {
          thermostat.increaseTemperature();
        }
       expect(thermostat.getTemperature()).toEqual(32);
    });
  });

  describe('#decreaseTemperature', function() {
    it('decreases the temperature by 1 ', function() {
      thermostat.decreaseTemperature();
      expect(thermostat.getTemperature()).toEqual(19);
    });
  });

  describe('#switch',function() {
    it('switches the powersaving mode',function() {
      thermostat.switchPowerSavingMode();
      expect(thermostat.powerSavingMode).toEqual(false);
    });
  });

  describe('#reset',function() {
    it('resets the thermostat temperature to 20 degress',function() {
      thermostat.reset();
      expect(thermostat.getTemperature()).toEqual(20);
    });
  });

  describe('#currentEnergyUsage',function() {
    it('says current energy usage is low-usage when temp < 18',
      function() {
        for (var i = 0; i < 3; i++) {
          thermostat.decreaseTemperature();
        }
      expect(thermostat.currentEnergyUsage()).toEqual('low-usage');
    });

    it('says current energy usage is medium-usage when temp < 25',
      function() {
        for (var i = 0; i < 4; i++) {
          thermostat.increaseTemperature();
        }
      expect(thermostat.currentEnergyUsage()).toEqual('medium-usage');
    });

    it('says current energy usage is high-usage when temp > 25',
      function() {
        for (var i = 0; i < 6; i++) {
          thermostat.increaseTemperature();
        }
      expect(thermostat.currentEnergyUsage()).toEqual('high-usage');
    });



  });
});
