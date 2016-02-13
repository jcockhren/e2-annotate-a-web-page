$('article').mouseup (function() {
  var data = getSelectionText();
  var wikiApiString = "http://en.wikipedia.org/w/api.php?action=parse&section=0&page=" + data + "&rvsection=0&prop=text&format=json&callback=?";
  // var WikiPlusDataString = str1.concat(data);
  // var callStr = str2.concat("&rvsection=0&prop=text&format=json&callback=?");
  $( "#view" ).append("<div class='wikiWindow' id='wikiInfo'>&nbsp</div>");
    var wiki =  $.getJSON(wikiApiString, function(json) {
      $("."+data+"").attr('data-content', json.parse.text['*']);

      $('#wikiInfo').html(json.parse.text['*']);
      $("#wikiInfo").find("a:not(.references a)").attr("href", function(){ return "http://www.wikipedia.org" + $(this).attr("href");});
      $("#wikiInfo").find("a").attr("target", "_blank");
    });
});
$("#view").click(function() {
  $("#view").empty();
});
