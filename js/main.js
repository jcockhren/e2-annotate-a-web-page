localStorage.setItem("username", "Joel");

console.log(localStorage.getItem("username"));

function getSelectionText(colour) {
    var self = this;
    if (document.getSelection) {
        var text = document.getSelection()
        var textsel = text.toString();
        console.log(textsel);
        var selectionNode = text.getRangeAt(0).startContainer.parentNode;
        console.log(selectionNode)
        var selectionNodeText = text.anchorNode.parentElement.innerHTML;
        document.designMode = "on";
        document.execCommand("HiliteColor",false, colour);
        var position = selectionNodeText.indexOf(textsel);
        var selLength = textsel.length;
        var constructLS = selectionNode + "-" + position + "-" + selLength;

        localStorage.setItem(constructLS, textsel);
        document.designMode = "off";


    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    console.log("Selection Text = ",text);
    return text;
}
