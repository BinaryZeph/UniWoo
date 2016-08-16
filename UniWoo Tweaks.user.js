// ==UserScript==
// @name         UniWoo Tweaks
// @namespace    http://uniwoo.com/
// @version      0.1
// @description  Small tweaks for UniWoo Power Users
// @author       Tim Rainey
// @match        http://uniwoo.com/
// @grant        none
// ==/UserScript==

$(document).ready(function() {

    $('<ul class="uk-navbar-nav" id="uniwooTweaks"><li class="uk-margin-left"><i class="uk-icon-cog"></i> UniWoo Tweaks</li></ul>').appendTo($('footer .uk-navbar'));

    // Default Modal
    $('<div id="uniwooTweaksMenu-Default" title="UniWoo Tweaks" style="display:none;"> \
      <div>Activate Job: <input type="number" length="5" id="uniwooTweaks-JobNumber"> <button id="uniwooTweaks-Go">Activate</button></div> \
      </div>').appendTo($('body'));

    //Listen for Link Clicks
    $( "#uniwooTweaks" ).click(function() {
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