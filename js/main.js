var firebaseRef = new Firebase('https://web-annotator.firebaseio.com/');

$('article').mouseup(function() {
    //Create a placeholder selection
    var userSelection = document.getSelection();
    saveAnnotation(userSelection);
    // saveAnnotation(getSelectionRange(userSelection));
    //abstract magic using the selection the user just made
    markRange(getSelectionRange(userSelection), '#ffae14');
});


function getSelectionText() {
    var self = this;
    if (document.getSelection) {
        var text = document.getSelection()
        var textsel = text.toString();
    }
    return textsel;
}
// getSelectionText();
$(function () {
  $('[data-toggle="popover"]').popover();
});
$('article').popover();
