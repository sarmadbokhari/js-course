(function () {

  window.Car = function (color, person) {
    this.state = "off"
    this.color = color;
    this.driver = person
    this.ignite = function(){
      if (this.driver === undefined){
        return "There is no driver to start the car!"
      } else if (this.driver.hasDriversLicense === false) {
        return "Sorry, you do not have a license."
      } else {
      this.state = "running";
      return "Vroom!";
      };
    };
  };

})();
