function changeState(evt, tabs) {
	// Declare all variables
	var i, tabcontent, tablinks;

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabs).style.display = "block";
	evt.currentTarget.className += " active";
} 

function showById(id) {
	var div = document.getElementById(id);
	
	if (div.style.display === "none") {
		div.style.display = "block";
	} else {
		div.style.display = "none";
	}
} 

function showGitOpt() {
	var radioBtn = document.getElementsByName("reposirotyType");
	var div = document.getElementById("GitOpt");
	
	if (radioBtn[0].checked) {
		div.style.display = "block";
	} else {
		div.style.display = "none";
	}
}

function showAbort() {
	var selectItem = document.getElementById("AbortType");
	var i;
	for(i=0; i < selectItem.length; i++){;
		if(selectItem[i].index === selectItem.selectedIndex && selectItem[i].value != "LikelyStuck"){
			document.getElementById(selectItem[i].value).style.display = "block";
		}else if(selectItem[i].value != "LikelyStuck"){
			document.getElementById(selectItem[i].value).style.display = "none";
		}
	}
} 