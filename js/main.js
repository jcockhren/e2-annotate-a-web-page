function getSelectionText() {
    var self = this;
    if (document.getSelection) {
        var text = document.getSelection()
        var textsel = text.toString();
        console.log(textsel);
        var selectionNode = text.anchorNode.parentElement.innerHTML;
        var markedText = selectionNode.replace(textsel, "<mark>"+textsel+"</mark>");
        $('.paragraph1').html(markedText);
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    console.log("Selection Text = ",text);
    return text;
}
getSelectionText();
$(function () {
  $('[data-toggle="popover"]').popover();
});
$('#button').popover();

// $('#button').on('click', function(){
//   var value = $('#inputBox').val();
//   var valLength = value.length;
//   console.log(valLength);

//   $('p').each(function(index){
//     var hello = $(this).text();
//     var x = hello.search(value);
//     console.log("found at position",x);
//     if(x !== -1 ){
//      var newHello = hello.replace(value, "fuzzy bunnies");
//      $(this).text(newHello);
//     }else{
//       console.log("no results found");
//     }
//   });
// });

// $(document).on('mouseup', function(){
//   var selection = document.getSelection();
//   var selectedText = selection.toString();
//   console.log(selectedText);
//   var selectionNode = selection.anchorNode.parentElement.innerHTML;
//   var markedText = selectionNode.replace(selectedText, "<mark>"+selectedText+"</mark>");
//   $('.paragraph1').html(markedText);
// });
// Status API Training Shop Blog About Pricing;
// © 2016 GitHub, Inc. Terms Privacy Security Contact Help
