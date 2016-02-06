function getSelectionText() {
    var self = this;
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    console.log("Selection Text = ",text);
    return text;
}
// getSelectionText();



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
//   var selectionNode = selection.anchorNode.parentElement.innerHTML;
//   var markedText = selectionNode.replace(selectedText, "<mark>"+selectedText+"</mark>");
//   $('.paragraph1').html(markedText);
// });
// Status API Training Shop Blog About Pricing;
// © 2016 GitHub, Inc. Terms Privacy Security Contact Help
