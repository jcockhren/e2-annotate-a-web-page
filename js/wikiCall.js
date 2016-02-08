$('article').mouseup (function() {
  var data = getSelectionText();
  var str1 = "http://en.wikipedia.org/w/api.php?action=parse&section=0&page=";
  var str2 = str1.concat(data);
  var callStr = str2.concat("&rvsection=0&prop=text&format=json&callback=?");
  console.log("MouseUp");
  console.log("Text = ",data);
  $( "#view" ).append("<div class='wikiWindow' id='wikiInfo'>&nbsp</div>");
    var wiki =  $.getJSON(callStr, function(json) {
      $('#wikiInfo').html(json.parse.text['*']);
      $("#wikiInfo").find("a:not(.references a)").attr("href", function(){ return "http://www.wikipedia.org" + $(this).attr("href");});
      $("#wikiInfo").find("a").attr("target", "_blank");
    });
    // console.log("Wiki= ",wiki);

});
$("#view").click(function() {
  $("#view").empty();
});
