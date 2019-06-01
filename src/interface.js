$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.getTemperature());
});


  $('#temp-up').click(function() {
    thermostat.increaseTemperature();
  $('#temperature').text(thermostat.getTemperature());
  });

  $('#temp-down').click(function() {
    thermostat.decreaseTemperature();
    $('#temperature').text(thermostat.getTemperature());
  });

  $('#temp-reset').click(function() {
    thermostat.reset();
  $('#temperature').text(thermostat.getTemperature());
  });

  // $('#psm-on').click(function() {
  //   thermostat.powerSavingModeOn();
  //   $('#power-saving').text('on')
  //   updateTemperature();
  // })
  //
  // $('#psm-off').click(function() {
  //   thermostat.powerSavingModeOff();
  //   $('#power-saving').text('off')
  //   updateTemperature();
  // })



  changeBackgroundColour = function(){
    $('body').css('background-color', thermostat.EnergyUsage());
  };
