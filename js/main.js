$('#button').on('click', function(){
  var value = $('#inputBox').val();
  var valLength = value.length;
  console.log(valLength);

  $('p').each(function(index){
    var hello = $(this).text();
    var x = hello.search(value);
    console.log("found at position",x);
    if(x !== -1 ){
     var newHello = hello.replace(value, "fuzzy bunnies");
     $(this).text(newHello);
    }else{
      console.log("no results found");
    }
  })
})

$(document).on('mouseup', function(){
  var selection = document.getSelection();
  console.log(selection);
  var selectedText = selection.toString();
  console.log(selectedText);
  var selectionNode = selection.anchorNode.data;
  console.log(selectionNode);
  var markedText = selectionNode.replace(selectedText, "<mark>"+selectedText+"</mark>");
  $('.paragraph1').html(markedText);

})