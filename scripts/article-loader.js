(function() {
$.ajax({
  method: "GET",
  url: "./content.json",
  id:"1707141355",
  dataType: "json"
}).done(function( data ) {
	console.log(data);
	$('#article-1707141355 .article-content').html(data[0].content);
	});
})();