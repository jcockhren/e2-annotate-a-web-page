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
  var selectedText = selection.toString();
  var selectionNode = selection.anchorNode.parentElement.innerHTML;
  var markedText = selectionNode.replace(selectedText, "<mark>"+selectedText+"</mark>");
  $('.paragraph1').html(markedText);
})