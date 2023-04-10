function saveItems() {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.scripting.executeScript({
			target: { tabId: tabs[0].id },
			func: saveItemsOnPage,
		});
	});
}

function saveItemsOnPage() {
	var Elements = document.querySelectorAll("div.items-start");
	var textArray = Array.prototype.map.call(Elements, function (element) {
		return element.textContent;
	});
	// textArray.pop();
	var textContent = "";
	for (var i = 1; i < textArray.length; i++) {
		if (i % 2 == 1) {
			textContent += "User: \n";
		} else {
			textContent += "Chat: \n";
		}
		textContent += textArray[i];
		textContent += "\n";
	}
	const filename = `items-${Date.now()}.txt`;
	const blob = new Blob([textContent], { type: "text/plain" });
	const url = URL.createObjectURL(blob);
	var link = document.createElement("a");
	document.body.appendChild(link);
	link.href = url;
	link.download = filename;
	link.click();
	console.log(textContent);
}

document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("saveTXT").addEventListener("click", saveItems);
});

function saveItemsToDocx() {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.scripting.executeScript({
			target: { tabId: tabs[0].id },
			func: saveItemsOnPageToDocx,
		});
	});
}
function saveItemsOnPageToDocx() {
	var Elements = document.querySelectorAll("div.items-start");
	var textArray = Array.prototype.map.call(Elements, function (element) {
		return element.textContent;
	});
	textArray.pop();
	var textContent = "";
	for (var i = 0; i < textArray.length; i++) {
		if (i % 2 == 0) {
			textContent += "User: \n";
		} else {
			textContent += "Chat: \n";
		}
		textContent += textArray[i];
		textContent += "\n";
	}
	alert("尚未完成");
}

document.addEventListener("DOMContentLoaded", function () {
	document
		.getElementById("saveDocx")
		.addEventListener("click", saveItemsToDocx);
});
