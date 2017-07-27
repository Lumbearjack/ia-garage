(function() {
	var pageID = window.location.href.split('?=').pop()
$.ajax({
  method: "GET",
  url: "./content.json",
  id:"1707141355",
  dataType: "json"
}).done(function( data ) {
		console.log("pid:",pageID);
		var article = _.where(data, {id: pageID});

		//Templates
		var moreFrom = `<hr class="divider"><p id="more-from">Read more from <a href="#authorpage" >`+article[0].author+`</a></p>`;
		console.log(moreFrom);
		
		//Apply content
		$('article').attr('id', article[0].id);
		$('article .item-imagecontainer-image').attr('src', article[0].thumbnail);
		$('article .item-title a').text(article[0].title);
		$('article .item-author a').text(article[0].author);
		$('article .item-date a').text(article[0].date);
		$('article .article-content').html(article[0].content);
		$('article .article-content').append(moreFrom);
	});
})();