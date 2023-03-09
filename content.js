const script = document.createElement("script");
script.className = "AddByOut-ChatGPT";
script.src = chrome.runtime.getURL("js/docx.js");
document.head.append(script);
