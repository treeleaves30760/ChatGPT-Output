chrome.runtime.onInstalled.addListener(function () {
	console.log("MyWebSaver installed.");
});

chrome.browserAction.onClicked.addListener(function (tab) {
	console.log("Save Web Page button clicked.");
});
