angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('SearchCtrl', function($scope, $http, gameId, $location) {
  $scope.idToSearch = '';
  $scope.search = {
    toFind: ''
  };
  //$scope.games = [];
  //$scope.game = {"search":"talon","items":[{"objecttype":"thing","objectid":"49950","name":"Black Talon Field Guide"},{"objecttype":"thing","objectid":"129596","name":"Black Talon: Return to Cat's Eye"},{"objecttype":"thing","objectid":"151006","name":"By Dagger or Talon"},{"objecttype":"thing","objectid":"138329","name":"Catalonia (fan expansion for Brass)"},{"objecttype":"thing","objectid":"83362","name":"Chronopia: Dwarf Talon Gate"},{"objecttype":"thing","objectid":"60855","name":"The City of Talon"},{"objecttype":"thing","objectid":"131004","name":"Five Talons of the Jade Dragon"},{"objecttype":"thing","objectid":"187568","name":"Fort Talon"},{"objecttype":"thing","objectid":"166894","name":"A Game of Thrones: The Card Game \u2013 House of Talons"},{"objecttype":"thing","objectid":"24815","name":"HeroCard Champion of New Olympia Talon Expansion Deck"},{"objecttype":"thing","objectid":"121296","name":"Jaws: Le Dernier Etalon"},{"objecttype":"thing","objectid":"171720","name":"Mechs & Mercs: Black Talons"},{"objecttype":"thing","objectid":"15723","name":"MetalTalon"},{"objecttype":"thing","objectid":"177177","name":"Red Talon"},{"objecttype":"thing","objectid":"47583","name":"Red Talons Tribebook (1st Edition)"},{"objecttype":"thing","objectid":"101182","name":"Steel Talons"},{"objecttype":"thing","objectid":"2830","name":"Talon"},{"objecttype":"thing","objectid":"145976","name":"Talon"},{"objecttype":"thing","objectid":"209636","name":"Talon 1000"},{"objecttype":"thing","objectid":"58991","name":"Talon of the Thrush"},{"objecttype":"thing","objectid":"127746","name":"Talon of Umberlee"},{"objecttype":"thing","objectid":"89513","name":"Talon: Bounty Hunter"},{"objecttype":"thing","objectid":"98135","name":"Talona"},{"objecttype":"thing","objectid":"204436","name":"Talona's Touch: Poisons of the Forgotten Realms"},{"objecttype":"thing","objectid":"177291","name":"Talons & Teeth"},{"objecttype":"thing","objectid":"54098","name":"The Talons of Lo-Peng"},{"objecttype":"thing","objectid":"49211","name":"Talons of Night"},{"objecttype":"thing","objectid":"48213","name":"Talons of the Horned King"},{"objecttype":"thing","objectid":"182292","name":"Talontessa"},{"objecttype":"thing","objectid":"48965","name":"Treasure of Talon Pass"},{"objecttype":"thing","objectid":"61345","name":"Tribebook: Red Talons (Revised)"},{"objecttype":"thing","objectid":"108272","name":"The Twelve Doctors: The Talons of Weng-Chiang"},{"objecttype":"thing","objectid":"34222","name":"Katalon"},{"objecttype":"thing","objectid":"35348","name":"Kentalong Football Card Game"},{"objecttype":"thing","objectid":"85146","name":"Talonsoft's Front de l'Est"},{"objecttype":"thing","objectid":"49159","name":"Tooth, Talon and Pinion"}]}
  $scope.game = {};
  $scope.searchForID = function() {

  console.log($scope.search.toFind);
  var noSpace = $scope.search.toFind.replace(" ", "%20");
  var base = "https://api.geekdo.com/api/geekitems?search=";
  var end = "&showcount=10&nosession=1&ajax=1&objecttype=thing";
  var full = base + noSpace + end;
  $http.get(full).then(function(response){
    var gameData = response.data;
    console.log(gameData);
    $scope.game = gameData;
    //gameId.game = response.data;
    });

  };

  $scope.getDetails = function(objectid){
    //$scope.idToSearch = objectid;
    gameId.gameID = objectid;

    console.log(objectid);
    //$state.go("tab.detail");
    $location.path("/tab/details")

  }
})

.controller('GameDetailCtrl', function($scope, $stateParams, $http, gameId) {
  // $scope.chat = Chats.get($stateParams.chatId);
  //$scope.gameId = gameId.gameID;

    console.log(gameId.gameID);
    $scope.gameDetails = {};
    var base = "https://bgg-json.azurewebsites.net/thing/";
    var full = base + gameId.gameID;
    console.log("start request");
    $http.get(full).then(function(response){
      $scope.gameDetails = response.data;
      console.log($scope.gameDetails);
      $scope.gameDetails.description = $scope.gameDetails.description.replace(/(&#10;)/g, '\t');
      //$scope.game= gameId.game[$stateParams.objectid];
    });
    console.log("end request");

});
