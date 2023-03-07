document.addEventListener("DOMContentLoaded", function () {
	var saveButton = document.getElementById("saveTxt");
	saveButton.addEventListener("click", function () {
		chrome.tabs.query(
			{ active: true, currentWindow: true },
			function (tabs) {
				var tab = tabs[0];
				var title = tab.title;
				var url = tab.url;
				chrome.tabs.executeScript(
					tab.id,
					{
						code: `
                            var itemsStartElements = document.querySelectorAll('div.items-start'); 
                            var textArray = Array.prototype.map.call(itemsStartElements, function(element) { return element.textContent; })
                            textArray.pop()
                            console.log(textArray);
                            var textContent = "";
                            for (var i = 0; i < textArray.length; i++) {
                                if (i % 2 == 0) {
                                    textContent += "User: \\n";
                                } else {
                                    textContent += "Chat: \\n";
                                }
                                textContent += textArray[i];
                                textContent += "\\n";
                            }
                            textContent
                        `,
					},
					function (results) {
						var textContent = results[0];
						chrome.downloads.download({
							url:
								"data:text/plain," +
								encodeURIComponent(textContent),
							filename: title + ".txt",
							saveAs: true,
						});
					}
				);
			}
		);
	});
});

document.addEventListener("DOMContentLoaded", function () {
	var saveButton = document.getElementById("saveDocx");
	saveButton.addEventListener("click", function () {
		chrome.tabs.query(
			{ active: true, currentWindow: true },
			function (tabs) {
				var tab = tabs[0];
				var title = tab.title;
				var url = tab.url;
				chrome.tabs.executeScript(
					tab.id,
					{
						code: `
                            var itemsStartElements = document.querySelectorAll('div.items-start'); 
                            var textArray = Array.prototype.map.call(itemsStartElements, function(element) { return element.textContent; })
                            textArray.pop()
                            console.log(textArray);
                            var textContent = "";
                            for (var i = 0; i < textArray.length; i++) {
                                if (i % 2 == 0) {
                                    textContent += "User: \\n";
                                } else {
                                    textContent += "Chat: \\n";
                                }
                                textContent += textArray[i];
                                textContent += "\\n";
                            }
                            textContent
                        `,
					},
					function (results) {
						var textContent = results[0];
						var blob = new Blob([textContent], {
							type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
						});
						chrome.downloads.download({
							url: URL.createObjectURL(blob),
							filename: title + ".docx",
							saveAs: true,
						});
					}
				);
			}
		);
	});
});
