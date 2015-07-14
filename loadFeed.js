google.load("feeds", "1");
function initialize() {
    var feed = new google.feeds.Feed("http://www.spanishdict.com/wordoftheday/feed");
    feed.load(function(result) {
      if (!result.error) {
        var container = document.getElementById("feed");
        var day = document.getElementById("day")
        var werd = document.getElementById("werd")
        var def = document.getElementById('def')
        var entry = result.feed.entries[0];
        var title = entry.title
        var date = title.substr(0, title.indexOf('-'))
        var stuff = title.split(/[--]/);
        var word = stuff[1].replace(/\s/g, '');
        var definition = stuff[2].substr(1, stuff[2].length-1)

        var div = document.createElement("div");
        div.appendChild(document.createTextNode(date));
        day.appendChild(div);
        var div2 = document.createElement('div');
        div2.appendChild(document.createTextNode(word));
        werd.appendChild(div2);
        var div3 = document.createElement('div')
        div3.appendChild(document.createTextNode(definition));
        def.appendChild(div3)


      }
    });
  }
  google.setOnLoadCallback(initialize);
