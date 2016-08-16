// ==UserScript==
// @name         UniWoo Tweaks
// @namespace    https://github.com/BinaryZeph/UniWoo
// @version      0.9
// @description  Small tweaks for UniWoo Power Users
// @author       Tim Rainey
// @match        http://uniwoo.com/
// @updateURL    https://github.com/BinaryZeph/UniWoo/raw/master/UniWoo%20Tweaks.user.js
// @downloadURL  https://github.com/BinaryZeph/UniWoo/raw/master/UniWoo%20Tweaks.user.js
// @grant        none
// ==/UserScript==

$(document).ready(function() {

    $('<ul class="uk-navbar-nav" id="uniwooTweaks"><li class="uk-margin-left"><i class="uk-icon-cog"></i> UniWoo Tweaks</li></ul>').appendTo($('footer .uk-navbar'));

    // Default Modal
    $('<div id="uniwooTweaksMenu-Default" class="uk-modal uk-open" title="UniWoo Tweaks" style="display:none;"> \
      <b>Under the Hood Job Info</b><br> \
      BP ID: <span id="uniwooTweaksInfo-BPCardCode"></span><br> \
      Contact ID: <span id="uniwooTweaksInfo-BPContactCode"></span><br> \
      <br> \
      <b>Activate a Broken Job</b><br> \
      <div>Job #: <input type="number" length="5" id="uniwooTweaks-JobNumber"> <button id="uniwooTweaks-Go">Activate</button></div> \
      </div>').appendTo($('body'));

    //Listen for Link Clicks
    $( "#uniwooTweaks" ).click(function() {
        //Update Modal Data
		if (typeof(TSForm.loadedData[TSForm.masterObj]) != "undefined" && TSForm.loadedData[TSForm.masterObj].U_BPCardCode !== null){
			$("#uniwooTweaksInfo-BPCardCode").html(TSForm.loadedData[TSForm.masterObj].U_BPCardCode);
			$("#uniwooTweaksInfo-BPContactCode").html(TSForm.loadedData.woInitialContact.Code);
		} else {
			$("#uniwooTweaksInfo-BPCardCode").html('');
			$("#uniwooTweaksInfo-BPContactCode").html('');
		}

        $( "#uniwooTweaksMenu-Default" ).dialog();
    });
    
    $( "#uniwooTweaks-Go" ).click(function() {
        var jobID = $("#uniwooTweaks-JobNumber").val();
        
        Woodard.workOrder.activate(jobID);
        Woodard.workOrder.loadAndDisplay(jobID);
        
        $("#uniwooTweaks-JobNumber").val('');
        $( "#uniwooTweaksMenu-Default" ).dialog('close');
    });    
});