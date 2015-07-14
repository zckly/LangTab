google.load("feeds", "1");

angular.module('app').controller("MainController", function($scope){
	var vm = this;
	vm.dates = []
	$scope.shit = [];
	function initialize() {
	    var feed = new google.feeds.Feed("http://www.spanishdict.com/wordoftheday/feed");
	    feed.load(function(result) {
	      if (!result.error) {
	        // var container = document.getElementById("feed");
	        for (var i = 0; i < result.feed.entries.length; i++) {
	          var entry = result.feed.entries[i];
	          var title = entry.title
	          var date = title.substr(0, title.indexOf('-'))
	          vm.dates.push(date)
	          // var div = document.createElement("div");
	          // div.appendChild(document.createTextNode(entry.title));
	          // container.appendChild(div);
	          if(i + 1 === result.feed.entries.length){
	          	updateUI();
	          }
	        }
	      }
	    });
	  }
	google.setOnLoadCallback(initialize);

    vm.title = 'Welcome to LangTab. Current Language:';
    vm.language = 'Spanish'

    var updateUI = function(){
    	console.log('hello')
    	$scope.shit = vm.dates;
    }

});