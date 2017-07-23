(function() {
$.ajax({
  method: "GET",
  url: "./content.json",
  dataType: "json"
}).done(function( data ) {

    $.each(data, function(index, article){
      console.log("init: ", index, article);

      if(index === 0){
        var itemAlpha = 
        `<div id="`+article.id+`" class="item item--alpha">   
            <a href="article.html" class="item-imagecontainer">
              <img src="" alt="" class="item-imagecontainer-image">
              <div class="image-overlay"></div>
            </a>
            <div class="textbox">
              <h2 class="item-title"><a href="article.html"></a></h2>
              <p class="item-excerpt"></p>
              <div class="item-meta-data">
                <span class="item-author"><a href="#authorspage"></a></span>
                <span class="item-date"><a href="#archivepage"></a></span>
              </div>
            </div>
            <div class="item-overlay"></div>
          </div>`;
        $('.featured-big').append(itemAlpha);

      }else if(index < 5){
        console.log("else: ",index, article.id)
        var itemSmall =
        `<div id="`+article.id+`" class="item">  
          <a href="article.html" class="item-imagecontainer">
            <img src="img/mh.jpeg" alt="" class="item-imagecontainer-image">
            <div class="image-overlay"></div>
          </a>
          <div class="textbox">
            <h2 class="item-title"><a href="article.html">This is the featured title</a></h2>
            <div class="item-meta-data">
              <span class="item-author"><a href="#authorspage"> Sir Author McLongName</a></span>
              <span class="item-date"><a href="#archivepage">17.06.23</a></span>
            </div>
          </div>
          <div class="item-overlay"></div>
        </div>`;
        $('.featured-small').append(itemSmall);
      }else{
        var itemRecent =
        `<div id="`+article.id+`" class="item">  
          <a href="article.html" class="item-imagecontainer">
            <img src="img/mh.jpeg" alt="" class="item-imagecontainer-image">
            <div class="image-overlay"></div>
          </a>
          <div class="textbox">
            <h2 class="item-title"><a href="article.html">This is the featured title</a></h2>
            <div class="item-meta-data">
              <span class="item-author"><a href="#authorspage"> Sir Author McLongName</a></span>
              <span class="item-date"><a href="#archivepage">17.06.23</a></span>
            </div>
          </div>
          <div class="item-overlay"></div>
        </div>`;
        $('#recent').append(itemRecent);
      }

      var setID = article.id;
      var stringID = "#"+setID.toString();
      $(stringID +' h2' + ' a').text(article.title);
      $(stringID + ' .item-excerpt').text(article.excerpt)
      $(stringID + ' img').attr("src",article.thumbnail);
      $(stringID +' .item-author a').text(article.author);
      $(stringID +' .item-date a').text(article.date);
    });
  });
})();