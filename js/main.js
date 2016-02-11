function getSelectionText() {
    var self = this;
    if (document.getSelection) {
        var text = document.getSelection()
        var textsel = text.toString();
        console.log(textsel);
        var selectionNode = text.anchorNode.parentElement.innerHTML;
        var markedText = selectionNode.replace(textsel, "<mark class='"+text+"' data-toggle='popover' title='hello' data-placement='left' data-content='...'>"+textsel+"</mark>");
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
$('article').popover();
