let tempRange=null,fontSizeArr=[8,9,10,11,12,14,18,24,30,36,48,60,72,96],triggeredFrom=null,fontCaret=[],tableSvg='<svg class="fr-svg" viewBox="-2 -2 20 20" fill="#5F6368"><path fill-rule="evenodd" d="M2,2v12h13V2H2z M6,13H3v-2h3V13z M6,10H3V8h3V10z M6,7H3V5h3V7z M10,13H7v-2h3V13z M10,10H7V8h3V10z M10,7H7V5h3V7z M14,13h-3v-2h3V13z M14,10h-3V8h3V10z M14,7h-3V5h3V7z"></path></svg>',superScriptSvg='<svg class="fr-svg" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.4,12,14,15.6,12.6,17,9,13.4,5.4,17,4,15.6,7.6,12,4,8.4,5.4,7,9,10.6,12.6,7,14,8.4Zm8.91234-3.326,1.06812-1.1465c.196-.20141.37093-.40739.5368-.6088a4.85745,4.85745,0,0,0,.432-.617,3.29,3.29,0,0,0,.29255-.6334,2.11079,2.11079,0,0,0,.10662-.66621,2.16127,2.16127,0,0,0-.1531-.82206,1.7154,1.7154,0,0,0-.45022-.6416,2.03,2.03,0,0,0-.72089-.40646,3.17085,3.17085,0,0,0-1.94851.04465,2.14555,2.14555,0,0,0-.76372.49487,2.07379,2.07379,0,0,0-.47483.73548,2.446,2.446,0,0,0-.15585.833l-.00364.237H18.617L18.62338,5.25a1.45865,1.45865,0,0,1,.05377-.37458.89552.89552,0,0,1,.15679-.29437.70083.70083,0,0,1,.25882-.1841,1.00569,1.00569,0,0,1,.7018-.01458.62014.62014,0,0,1,.21509.15679.74752.74752,0,0,1,.13761.24333,1.08893,1.08893,0,0,1,.05469.33538,1.25556,1.25556,0,0,1-.0319.26612,1.34227,1.34227,0,0,1-.124.29893,2.94367,2.94367,0,0,1-.26338.38823,6.41629,6.41629,0,0,1-.42929.50217L17.19709,8.92642V10H22V8.674Z"></path></svg>',subScriptSvg='<svg class="fr-svg" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.4,12l3.6,3.6L12.6,17L9,13.4L5.4,17L4,15.6L7.6,12L4,8.4L5.4,7L9,10.6L12.6,7L14,8.4L10.4,12z M18.31234,19.674  l1.06812-1.1465c0.196-0.20141,0.37093-0.40739,0.5368-0.6088c0.15975-0.19418,0.30419-0.40046,0.432-0.617  c0.11969-0.20017,0.21776-0.41249,0.29255-0.6334c0.07103-0.21492,0.10703-0.43986,0.10662-0.66621  c0.00297-0.28137-0.04904-0.56062-0.1531-0.82206c-0.09855-0.24575-0.25264-0.46534-0.45022-0.6416  c-0.20984-0.18355-0.45523-0.32191-0.72089-0.40646c-0.63808-0.19005-1.3198-0.17443-1.94851,0.04465  c-0.28703,0.10845-0.54746,0.2772-0.76372,0.49487c-0.20881,0.20858-0.37069,0.45932-0.47483,0.73548  c-0.10002,0.26648-0.15276,0.54838-0.15585,0.833l-0.00364,0.237H17.617l0.00638-0.22692  c0.00158-0.12667,0.01966-0.25258,0.05377-0.37458c0.03337-0.10708,0.08655-0.20693,0.15679-0.29437  c0.07105-0.08037,0.15959-0.14335,0.25882-0.1841c0.22459-0.08899,0.47371-0.09417,0.7018-0.01458  c0.0822,0.03608,0.15559,0.08957,0.21509,0.15679c0.06076,0.07174,0.10745,0.15429,0.13761,0.24333  c0.03567,0.10824,0.05412,0.22141,0.05469,0.33538c-0.00111,0.08959-0.0118,0.17881-0.0319,0.26612  c-0.02913,0.10428-0.07076,0.20465-0.124,0.29893c-0.07733,0.13621-0.1654,0.26603-0.26338,0.38823  c-0.13438,0.17465-0.27767,0.34226-0.42929,0.50217l-2.15634,2.35315V21H21v-1.326H18.31234z"></path></svg>',tableStyle="color: #414141;font-size: 14px;line-height: 2;border-spacing: 0;border-collapse: collapse;width:100%",tdStyle="border: 1px solid rgb(46, 46, 46);padding: 8px 12px;min-width: 18px;",subEvent=t=>{let e="DIV"==t.target.nodeName?t.target:t.target.parentElement,_=document.querySelectorAll("div[contenteditable=true]");_[(triggeredFrom=parseInt($(e).attr("data-index")))-1].focus(),$(e).toggleClass("active-btn"),document.execCommand("subscript",!1),_[triggeredFrom-1].focus()},supEvent=t=>{let e="DIV"==t.target.nodeName?t.target:t.target.parentElement,_=document.querySelectorAll("div[contenteditable=true]");_[(triggeredFrom=parseInt($(e).attr("data-index")))-1].focus(),$(e).toggleClass("active-btn"),document.execCommand("superscript",!1),_[triggeredFrom-1].focus()},showTablePopup=t=>{let e=$(".table-content"),_=t.target;for(;!_.hasAttribute("data-index")&&null!=_;)_=_.parentElement;let n=$(_),l=`<h3 align="center">Table</h3>
    <div>        
        <span>Rows: </span>
        <input type="text" id="table-content-row-input" />
    </div>
    <div>        
        <span>Columns: </span>
        <input type="text" id="table-content-column-input" />
    </div>
    <div>
        <button type="button" class="table-content-draw" data-index=${triggeredFrom=parseInt(n.attr("data-index"))}>Okay</button>
        <button type="button" class="table-content-close">Cancel</button>
    </div>`,i=n[0].getBoundingClientRect();e.html(""),e.html(l),e.attr("style",`visibility: visible; display:block; left:calc(${i.left}px - 10vw);max-height:50vh;top:calc(${i.top}px - 48vh);overflow:auto;`)},hideTablePopup=()=>{$(".table-content").removeAttr("style")},drawTable=t=>{let e=document.querySelectorAll("div[contenteditable=true]"),_=$(t.target);e[(triggeredFrom=parseInt(_.attr("data-index")))-1].focus();let n=$("#table-content-row-input").val(),l=$("#table-content-column-input").val(),i=parseInt(""==n?0:n),a=parseInt(""==l?0:l),o=`<div style="width:75%"><table style="${tableStyle}"><tbody>`;for(let r=1;r<=i;r++){o+=`<tr row-index = ${r}>`;for(let d=1;d<=a;d++)o+=`<td style="border: 1px solid rgb(46, 46, 46);padding: 8px 12px;min-width: 18px;" col-index=${d}></td>`;o+="</tr>"}o+="</tbody></table></div>",document.execCommand("insertHtml",!1,o),hideTablePopup()},initEvents=()=>{$("body").on("click",".sub-btn",subEvent),$("body").on("click",".sup-btn",supEvent),$("body").on("click",".table-btn",showTablePopup),$("body").on("click",".table-content-close",hideTablePopup),$("body").on("click",".table-content-draw",drawTable),$("body").on("keypress","#table-content-row-input",isNumber),$("body").on("keypress","#table-content-column-input",isNumber)},initStyling=t=>{let e=1;for(var _ of t){var n=$(_).children("td.a8X.gU");if(0==n.find("div.sub-btn").length&&n.prepend('<div class="wG J-Z-I sub-btn" data-index="'+e+'"><svg class="fr-svg" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.4,12l3.6,3.6L12.6,17L9,13.4L5.4,17L4,15.6L7.6,12L4,8.4L5.4,7L9,10.6L12.6,7L14,8.4L10.4,12z M18.31234,19.674  l1.06812-1.1465c0.196-0.20141,0.37093-0.40739,0.5368-0.6088c0.15975-0.19418,0.30419-0.40046,0.432-0.617  c0.11969-0.20017,0.21776-0.41249,0.29255-0.6334c0.07103-0.21492,0.10703-0.43986,0.10662-0.66621  c0.00297-0.28137-0.04904-0.56062-0.1531-0.82206c-0.09855-0.24575-0.25264-0.46534-0.45022-0.6416  c-0.20984-0.18355-0.45523-0.32191-0.72089-0.40646c-0.63808-0.19005-1.3198-0.17443-1.94851,0.04465  c-0.28703,0.10845-0.54746,0.2772-0.76372,0.49487c-0.20881,0.20858-0.37069,0.45932-0.47483,0.73548  c-0.10002,0.26648-0.15276,0.54838-0.15585,0.833l-0.00364,0.237H17.617l0.00638-0.22692  c0.00158-0.12667,0.01966-0.25258,0.05377-0.37458c0.03337-0.10708,0.08655-0.20693,0.15679-0.29437  c0.07105-0.08037,0.15959-0.14335,0.25882-0.1841c0.22459-0.08899,0.47371-0.09417,0.7018-0.01458  c0.0822,0.03608,0.15559,0.08957,0.21509,0.15679c0.06076,0.07174,0.10745,0.15429,0.13761,0.24333  c0.03567,0.10824,0.05412,0.22141,0.05469,0.33538c-0.00111,0.08959-0.0118,0.17881-0.0319,0.26612  c-0.02913,0.10428-0.07076,0.20465-0.124,0.29893c-0.07733,0.13621-0.1654,0.26603-0.26338,0.38823  c-0.13438,0.17465-0.27767,0.34226-0.42929,0.50217l-2.15634,2.35315V21H21v-1.326H18.31234z"></path></svg></div>'),0==n.find("div.sup-btn").length&&n.prepend('<div class="wG J-Z-I sup-btn" data-index="'+e+'"><svg class="fr-svg" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.4,12,14,15.6,12.6,17,9,13.4,5.4,17,4,15.6,7.6,12,4,8.4,5.4,7,9,10.6,12.6,7,14,8.4Zm8.91234-3.326,1.06812-1.1465c.196-.20141.37093-.40739.5368-.6088a4.85745,4.85745,0,0,0,.432-.617,3.29,3.29,0,0,0,.29255-.6334,2.11079,2.11079,0,0,0,.10662-.66621,2.16127,2.16127,0,0,0-.1531-.82206,1.7154,1.7154,0,0,0-.45022-.6416,2.03,2.03,0,0,0-.72089-.40646,3.17085,3.17085,0,0,0-1.94851.04465,2.14555,2.14555,0,0,0-.76372.49487,2.07379,2.07379,0,0,0-.47483.73548,2.446,2.446,0,0,0-.15585.833l-.00364.237H18.617L18.62338,5.25a1.45865,1.45865,0,0,1,.05377-.37458.89552.89552,0,0,1,.15679-.29437.70083.70083,0,0,1,.25882-.1841,1.00569,1.00569,0,0,1,.7018-.01458.62014.62014,0,0,1,.21509.15679.74752.74752,0,0,1,.13761.24333,1.08893,1.08893,0,0,1,.05469.33538,1.25556,1.25556,0,0,1-.0319.26612,1.34227,1.34227,0,0,1-.124.29893,2.94367,2.94367,0,0,1-.26338.38823,6.41629,6.41629,0,0,1-.42929.50217L17.19709,8.92642V10H22V8.674Z"></path></svg></div>'),0==n.find("div.table-btn").length&&(n.prepend('<div class="wG J-Z-I table-btn" data-index="'+e+'"><svg class="fr-svg" viewBox="-2 -2 20 20" fill="#5F6368"><path fill-rule="evenodd" d="M2,2v12h13V2H2z M6,13H3v-2h3V13z M6,10H3V8h3V10z M6,7H3V5h3V7z M10,13H7v-2h3V13z M10,10H7V8h3V10z M10,7H7V5h3V7z M14,13h-3v-2h3V13z M14,10h-3V8h3V10z M14,7h-3V5h3V7z"></path></svg></div>'),tablePopupPopulation()),0==n.find("div.font-size").length){let l=$("<div></div>").attr("class","wG J-Z-I font-size dropdown").attr("style","user-select:none; display:flex;"),i=$("<button></button>").attr("class","negBtn").attr("data-index",e).text("-"),a=$("<button></button>").attr("class","posBtn").attr("data-index",e).text("+"),o=$("<input>").attr("type","text").attr("data-index",e).val("11");l.append(i,o,a),n.prepend(l),fontSizeDropdownPopulation(),i.on("click",fontDecrease),a.on("click",fontIncrease),o.on("keypress",isNumber),o.on("keyup",fontIncDec),o.on("blur",hideFontSizeDropDown),o.on("click focus",showFontSizeDropdown);let r=document.querySelectorAll("div[contenteditable=true]");r[e-1].setAttribute("data-index",e),r[e-1].addEventListener("click",captureFontSize),r[e-1].addEventListener("keyup",captureFontSize),fontCaret.push({fontSize:11,caretPosition:null})}e++}},showFontSizeDropdown=t=>{let e=$(".dropdown-content"),_=$(t.target);triggeredFrom=parseInt(_.attr("data-index"));let n=_[0].getBoundingClientRect();e.attr("style",`visibility: visible; display:block; left:${n.left}px;max-height:50vh;top:calc(${n.top}px - 51vh);overflow:auto;`)},hideFontSizeDropDown=()=>{$(".dropdown-content").removeAttr("style")},tablePopupPopulation=()=>{$(".table-content")&&0!=$(".table-content").length||$("body").append('<div class="J-M J-M-ayU fx aUX table-content" tabindex="-1">&nbsp; testing</div>')},fontSizeDropdownPopulation=()=>{if(!$(".dropdown-content")||0==$(".dropdown-content").length){let t=$("<div></div>").attr("class","J-M J-M-ayU fx aUX dropdown-content").attr("tabindex","-1");for(let e of fontSizeArr){let _=$("<span></span>").text(e);_.on("mousedown",dropdownFontSizeChange),t.append(_)}$("body").append(t)}},dropdownFontSizeChange=t=>{let e=$(t.target).text();var _,n=document.querySelectorAll("div[contenteditable=true]");if(null==tempRange)n[triggeredFrom-1].focus();else{n[triggeredFrom-1].focus();let l=window.getSelection();l.removeAllRanges(),l.addRange(tempRange)}if(window.getSelection&&window.getSelection().rangeCount){handlingPartialSelection(e);$("div.font-size input[data-index="+triggeredFrom+"]").val(e)}hideFontSizeDropDown()},fontIncDec=t=>{var e=(t=t||window.event).which?t.which:t.keyCode;if(e>31&&(e<48||e>57))return!1;{let _=$(t.target).val();var n,l=document.querySelectorAll("div[contenteditable=true]");if(triggeredFrom=parseInt($(t.target).attr("data-index")),null==tempRange)l[triggeredFrom-1].focus();else{l[triggeredFrom-1].focus();let i=window.getSelection();i.removeAllRanges(),i.addRange(tempRange)}window.getSelection&&window.getSelection().rangeCount&&handlingPartialSelection(_),$(t.target).focus()}},isNumber=t=>{var e=(t=t||window.event).which?t.which:t.keyCode;return!(e>31)||!(e<48)&&!(e>57)},captureFontSize=t=>{let e=t.target;for(;!e.hasAttribute("data-index")&&null!=e;)e=e.parentElement;if(triggeredFrom=parseInt($(e).attr("data-index")),tempRange=null,window.getSelection){let _=window.getSelection(),n=document.queryCommandValue("superscript");if("true"==document.queryCommandValue("subscript")?$(".sub-btn[data-index="+triggeredFrom+"]").addClass("active-btn"):$(".sub-btn[data-index="+triggeredFrom+"]").removeClass("active-btn"),"true"==n?$(".sup-btn[data-index="+triggeredFrom+"]").addClass("active-btn"):$(".sup-btn[data-index="+triggeredFrom+"]").removeClass("active-btn"),_.rangeCount){let l=_.getRangeAt(0).cloneRange().commonAncestorContainer;for(;null!=l&&"FONT"!=l.tagName;)l=l.parentElement;let i=$(".font-size input[data-index="+triggeredFrom+"]");if(null!=l){if("FONT"==l.tagName){let a=l.style.fontSize;if(void 0!=a&&""!=a)a.indexOf("pt")>-1?i.val(a.substring(0,a.length-2)):(a=.75*parseFloat(a.substring(0,a.length-2)),i.val(parseInt(a)));else if(null!=(l=l.querySelector("span"))&&void 0!=l){let o=l.style.fontSize;void 0!=o&&""!=o&&(o.indexOf("pt")>-1?i.val(o.substring(0,o.length-2)):(o=.75*parseFloat(o.substring(0,o.length-2)),i.val(parseInt(o))))}}}else i.val("11")}}},handlingPartialSelection=t=>{document.execCommand("fontSize",!1,1);let e=document.querySelectorAll("font");for(let _ of(console.log(e),e))_.hasAttribute("size")&&(_.removeAttribute("size"),_.style.fontSize=t+"pt")},fontIncrease=t=>{triggeredFrom=parseInt($(t.target).attr("data-index"));let e=$(".font-size input[data-index="+triggeredFrom+"]"),_=parseInt(e.val());_+=1;var n,l=document.createElement("span");l.style.fontSize=_+"pt",l.DataValue=_;var i=document.querySelectorAll("div[contenteditable=true]");if(null==tempRange)i[triggeredFrom-1].focus();else{i[triggeredFrom-1].focus();let a=window.getSelection();a.removeAllRanges(),a.addRange(tempRange)}window.getSelection&&window.getSelection().rangeCount&&handlingPartialSelection(_),e.val(_)},fontDecrease=t=>{triggeredFrom=parseInt($(t.target).attr("data-index"));let e=$(".font-size input[data-index="+triggeredFrom+"]"),_=parseInt(e.val());_=1==_?_:_-1;var n,l=document.querySelectorAll("div[contenteditable=true]");if(null==tempRange)l[triggeredFrom-1].focus();else{l[triggeredFrom-1].focus();let i=window.getSelection();i.removeAllRanges(),i.addRange(tempRange)}window.getSelection&&window.getSelection().rangeCount&&handlingPartialSelection(_),e.val(_)},initSortStyle=()=>{let t=document.createElement("button");return t.textContent="Sort",t.addEventListener("click",function(){document.querySelector("input.gb_if").value="is:inbox";document.querySelector(".gb_rf.gb_sf").click()}),t},initSortStyling=t=>{var e=document.createElement("div");e.classList.add("G-Ni"),e.classList.add("J-J5-Ji"),e.appendChild(initSortStyle()),t.appendChild(e)},initSort=()=>{let t=setInterval(function(){let e=document.querySelector(".G-tF");e&&(clearInterval(t),initSortStyling(e))},100)},initializeControls=()=>{initEvents(),$("body").on("click",'div[jscontroller="eIu7Db"]',function(){var t=setInterval(function(){var e=document.querySelectorAll("tr.btC");e.length>0&&(clearInterval(t),initStyling(e))},1e3)})},initStylingOnLoad=()=>{var t=document.querySelectorAll("tr.btC");t.length>0&&initStyling(t)},init=async()=>{setTimeout(initStylingOnLoad,1e4),setTimeout(initializeControls,200),setTimeout(initSort,200)};export const app=async()=>{await init()};