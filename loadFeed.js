google.load("feeds", "1");
function initialize() {
    var feed = new google.feeds.Feed("http://www.spanishdict.com/wordoftheday/feed");
    feed.load(function(result) {
      if (!result.error) {
        var container = document.getElementById("feed");
        for (var i = 0; i < result.feed.entries.length; i++) {
          var entry = result.feed.entries[i];
          var title = entry.title
          var date = title.substr(0, title.indexOf('-'))
          console.log(date)
          var div = document.createElement("div");
          div.appendChild(document.createTextNode(entry.title));
          container.appendChild(div);
        }
      }
    });
  }
  google.setOnLoadCallback(initialize);
