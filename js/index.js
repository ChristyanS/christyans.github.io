// script for tab steps
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

    var href = $(e.target).attr('href');
    var $curr = $(".process-model  a[href='" + href + "']").parent();

    $('.process-model li').removeClass();

    $curr.addClass("active");
    $curr.prevAll().addClass("visited");
});

$( ".batata4" ).click(function() {
	$(this).removeClass('active');
});

$(function () {
    $('[data-toggle="popover"]').popover()
    $('.popover-dismiss').popover({
        trigger: 'focus'
    })
})

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("gerar-btn").addEventListener("click", function(){
    var filename = "pipeline.jenkinsfile";
    var tab = "    ";
	var tab2 = tab + tab;
	var tab3 = tab2 + tab;
	var tab4 = tab3 + tab;
	var asp = "\"";
	var text = "Jenkinsfile";
	
	
	text += "\npipeline {\n" + tab + "environment {\n";
	text += tab2 + "ABORT_STUCK : " + asp;
	text += document.getElementById("abort-stuck").checked;
	text += asp + ",\n";
	if(document.getElementById("abort-stuck").checked){
		text += tab2 + "abort {\n";
		text += tab3 + "TYPE : " + asp;
		text += document.getElementById("AbortType").value;
		text += asp + ",\n";
		if(document.getElementById("AbortType").value == "Absolute"){
			text += tab3 + "TIME_OUT_MINUTES : " + asp;
			text += document.getElementById("time-out-minutes").value;
			text += asp + ",\n";
		}
		if(document.getElementById("AbortType").value == "Deadline"){
			text += tab3 + "DEADTIME : " + asp;
			text += document.getElementById("deadline").value;
			text += asp + ",\n";
			text += tab3 + "DEADTIME_TOLERANCE : " + asp;
			text += document.getElementById("deadtime-tolerance").value;
			text += asp + ",\n";
		}
		if(document.getElementById("AbortType").value == "Elastic"){
			text += tab3 + "PERCENTAGE : " + asp;
			text += document.getElementById("percentage").value;
			text += asp + ",\n";
			text += tab3 + "ABORT_NUMBER_BUILDS : " + asp;
			text += document.getElementById("abort-number-builds").value;
			text += asp + ",\n";
			text += tab3 + "ABORT_TIMEOUT : " + asp;
			text += document.getElementById("abort-timeout").value;
			text += asp + ",\n";
		}
		if(document.getElementById("AbortType").value == "NoActivity"){
			text += tab3 + "ABORT_SECONDS : " + asp;
			text += document.getElementById("no-activity-seconds").value;
			text += asp + ",\n";
		}
		text += tab3 + "TIME_OUT : " + asp;
		text += document.getElementById("time-out").value;
		text += asp + "\n";
		text += tab2 + "},\n";
	}
	text += tab2 + "ADD_TIMESTAMP : " + asp;
	text += document.getElementById("add-timestamp").checked;
	text += asp + ",\n";
	text += tab2 + "INSPECT_GRADLE : " + asp;
	text += document.getElementById("inspect-gradle-build").checked;
	text += asp + ",\n";
	text += tab2 + "DISCART_OLD : " + asp;
	text += document.getElementById("discart-old-builds").checked;
	text += asp + ",\n";
	if(document.getElementById("discart-old-builds").checked){
		text += tab2 + "throttle {\n";
		text += tab3 + "DAYS : " + asp;
		text += document.getElementById("discart-days").value;
		text += asp + ",\n";
		text += tab3 + "MAX : " + asp;
		text += document.getElementById("discart-max").value;
		text += asp + "\n";
		text += tab2 + "},\n";
	}
	text += tab2 + "GIT_HUB_PROJECT : " + asp;
	text += document.getElementById("git-hub-project").checked;
	text += asp + ",\n";
	if(document.getElementById("git-hub-project").checked){
		text += tab2 + "GIT_HUB_URL : " + asp;
		text += document.getElementById("git-hub-project-url").value;
		text += asp + ",\n";
	}
	text += tab2 + "THROTTLE_BUILDS : " + asp;
	text += document.getElementById("throttle-builds").checked;
	text += asp + ",\n";
	if(document.getElementById("throttle-builds").checked){
		text += tab2 + "throttle {\n";
		text += tab3 + "BUILDS : " + asp;
		text += document.getElementById("number-builds").value;
		text += asp + ",\n";
		text += tab3 + "PERIOD : " + asp;
		text += document.getElementById("time-period").value;
		text += asp + "\n";
		text += tab2 + "},\n";
	}
	text += tab2 + "DISABLE_BUILDS : " + asp;
	text += document.getElementById("disable-builds").checked;
	text += asp + ",\n";
	text += tab2 + "PARALLEL_BUILDS : " + asp;
	text += document.getElementById("parallel-builds").checked;
	text += asp + ",\n";
	if(document.getElementById("number-tries-chk").checked){
		text += tab2 + "NUMBER_TRIES : " + asp;
		text += document.getElementById("number-tries").value;
		text += asp + ",\n";
	}
	text += tab2 + "KEEP_LOGS : " + asp;
	text += document.getElementById("keep-logs").checked;
	text += asp + ",\n";
	
	//reposiroty
	text += tab2 + "reposiroty {\n";
	text += tab3 + "TYPE : " + asp;
	if(document.getElementById("reposiroty-type-git").checked){
		text += "GIT";
	}else{
		text += "SVN";
	}
	text += asp + ",\n";
	text += tab3 + "USERNAME : " + asp;
	text += document.getElementById("username").value;
	text += asp + ",\n";
	text += tab3 + "PASSWORD : " + asp;
	text += document.getElementById("password").value;
	text += asp + ",\n";
	text += tab3 + "REPOSITORY_ADDRESS : " + asp;
	text += document.getElementById("reposiroty-address").value;
	text += asp + ",\n";
	text += tab3 + "BRANCH : " + asp;
	text += document.getElementById("reposiroty-branch").value;
	
	if(document.getElementById("reposiroty-type-git").checked){
		text += asp + ",\n";
		text += tab3 + "PUSH_COMMIT : " + asp;
		text += document.getElementById("push-commit").checked;
		text += asp + ",\n";
		text += tab3 + "AUTHENTICATION : " + asp;
		text += document.getElementById("reposiroty-authentication").value;
		text += asp + ",\n";
		text += tab3 + "PUSH_COMMIT : " + asp;
		text += document.getElementById("push-commit-git-hub").checked;
	}
	text += asp + "\n";
	text += tab2 + "}\n" + tab + "}\n";
	
	//stages
	text += tab + "stages {\n";
	if(document.getElementById("chk-quality").checked){
		text += tab2 + "stage('Quality') {\n";
		text += tab3 + "steps {\n"+ tab4 + asp;
		text += document.getElementById("quality-config").value;
		text += asp + "\n" + tab3 + "}\n";
		text += tab2 + "}\n";
	}
    
	if(document.getElementById("chk-test").checked){
		text += tab2 + "stage('Test') {\n";
		text += tab3 + "steps {\n"+ tab4 + asp;
		text += document.getElementById("test-config").value;
		text += asp + "\n" + tab3 + "}\n";
		text += tab2 + "}\n";
	}
    
	if(document.getElementById("chk-package").checked){
		text += tab2 + "stage('Package') {\n";
		text += tab3 + "steps {\n"+ tab4 + asp;
		text += document.getElementById("package-config").value;
		text += asp + "\n" + tab3 + "}\n";
		text += tab2 + "}\n";
	}
    
	if(document.getElementById("chk-deploy").checked){
		text += tab2 + "stage('Deploy') {\n";
		text += tab3 + "steps {\n"+ tab4 + asp;
		text += document.getElementById("deploy-config").value;
		text += asp + "\n" + tab3 + "}\n";
		text += tab2 + "}\n";
	}
	
	text += tab + "}\n}";
	
    download(filename, text);
}, false);