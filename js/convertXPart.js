/**
 * http://stackoverflow.com/questions/9074091/range-object-with-json
 */

var makeXPath = function (node, currentPath) {
  currentPath = currentPath || '';
  switch (node.nodeType) {
    case 3:
    case 4:
      return makeXPath(node.parentNode, 'text()[' + (document.evaluate('preceding-sibling::text()', node, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength + 1) + ']');
    case 1:
      return makeXPath(node.parentNode, node.nodeName + '[' + (document.evaluate('preceding-sibling::' + node.nodeName, node, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength + 1) + ']' + (currentPath ? '/' + currentPath : ''));
    case 9:
      return '/' + currentPath;
    default:
      return '';
  }
}

var restoreSelection = function () {
  var selection = document.getSelection();
  selection.removeAllRanges();
  var range = document.createRange();
  range.setStart(document.evaluate(selectionDetails[0], document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue, Number(selectionDetails[1]));
  range.setEnd(document.evaluate(selectionDetails[2], document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue, Number(selectionDetails[3]));
  selection.addRange(range);
}

var getSelection = function () {
	var selection = document.getSelection();
	var range = getSelectionRange(selection);
	console.log("makeXPath(range.startContainer)", makeXPath(range.startContainer));
	var selectObj = {
	  'startXPath': makeXPath(range.startContainer),
	  'startOffset': range.startOffset,
	  'endXPath': makeXPath(range.endContainer),
	  'endOffset': range.endOffset
	};

	return selectObj
}