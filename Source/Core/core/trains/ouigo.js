var ouigoManager = function(){
  this.subtree = true;
  this.dataSource = "sncf"; //select one of the emission information sources from trainEmissions.json
  this.stations = {
    arrive: "",
    depart: ""
  };
  this.MODE = "ouigo"; // constant, the type of train on this website is only "ouigo"
};

ouigoManager.prototype.geocodeStations = function(){
  var stations = document.getElementsByClassName("title-trajet")[0].childNodes[1].innerText;
  console.log(stations);
  this.stations.depart = stations.split("  ")[0];
  this.stations.arrive = stations.split("  ")[1];
  console.log(this.stations.depart + " ->  " + this.stations.arrive);
  if(core.distance === 0 && this.stations.depart && this.stations.arrive){  //Check if geocode never happened for current stations, proceed if not
    var toGeocode = [this.stations.depart, this.stations.arrive];
    core.geocode(toGeocode);
  }
};

ouigoManager.prototype.setStyle = function(emission){
  //emission.style.fontSize = "medium";
  emission.style.textAlign = "center";
  return emission;
};

ouigoManager.prototype.insertInDom = function(emission){
  emission = this.setStyle(emission);
  console.log(emission);
  var element = document.getElementsByClassName("title-trajet")[0];
  if(element.getElementsByClassName('carbon').length === 0){
    element.appendChild(emission);
  }
};

ouigoManager.prototype.update = function(){
  this.geocodeStations();
  if(core.distance > 1){ //Check if station have alredy been geocoded
    this.insertInDom(core.getEmission(["ouigo"])); //There is only 1 type of train
  }
};

var TrainManager = ouigoManager;