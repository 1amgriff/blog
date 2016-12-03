function replaceText(){if(!document.getElementById){return;}
bodyText = document.getElementById("Blog1");
theText = bodyText.innerHTML;
theText = theText.replace(/s72-c\//gi, "");
bodyText.innerHTML = theText;
}replaceText();