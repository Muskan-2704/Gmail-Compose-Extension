/* Global Variable for range reference */
let tempRange = null;
const fontSizeArr = [8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96];
let triggeredFrom = null;
const fontCaret = [];

const tableSvg = '<svg class="fr-svg" viewBox="-2 -2 20 20" fill="#5F6368"><path fill-rule="evenodd" d="M2,2v12h13V2H2z M6,13H3v-2h3V13z M6,10H3V8h3V10z M6,7H3V5h3V7z M10,13H7v-2h3V13z M10,10H7V8h3V10z M10,7H7V5h3V7z M14,13h-3v-2h3V13z M14,10h-3V8h3V10z M14,7h-3V5h3V7z"></path></svg>';
const superScriptSvg = '<svg class="fr-svg" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.4,12,14,15.6,12.6,17,9,13.4,5.4,17,4,15.6,7.6,12,4,8.4,5.4,7,9,10.6,12.6,7,14,8.4Zm8.91234-3.326,1.06812-1.1465c.196-.20141.37093-.40739.5368-.6088a4.85745,4.85745,0,0,0,.432-.617,3.29,3.29,0,0,0,.29255-.6334,2.11079,2.11079,0,0,0,.10662-.66621,2.16127,2.16127,0,0,0-.1531-.82206,1.7154,1.7154,0,0,0-.45022-.6416,2.03,2.03,0,0,0-.72089-.40646,3.17085,3.17085,0,0,0-1.94851.04465,2.14555,2.14555,0,0,0-.76372.49487,2.07379,2.07379,0,0,0-.47483.73548,2.446,2.446,0,0,0-.15585.833l-.00364.237H18.617L18.62338,5.25a1.45865,1.45865,0,0,1,.05377-.37458.89552.89552,0,0,1,.15679-.29437.70083.70083,0,0,1,.25882-.1841,1.00569,1.00569,0,0,1,.7018-.01458.62014.62014,0,0,1,.21509.15679.74752.74752,0,0,1,.13761.24333,1.08893,1.08893,0,0,1,.05469.33538,1.25556,1.25556,0,0,1-.0319.26612,1.34227,1.34227,0,0,1-.124.29893,2.94367,2.94367,0,0,1-.26338.38823,6.41629,6.41629,0,0,1-.42929.50217L17.19709,8.92642V10H22V8.674Z"></path></svg>';
const subScriptSvg = '<svg class="fr-svg" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.4,12l3.6,3.6L12.6,17L9,13.4L5.4,17L4,15.6L7.6,12L4,8.4L5.4,7L9,10.6L12.6,7L14,8.4L10.4,12z M18.31234,19.674  l1.06812-1.1465c0.196-0.20141,0.37093-0.40739,0.5368-0.6088c0.15975-0.19418,0.30419-0.40046,0.432-0.617  c0.11969-0.20017,0.21776-0.41249,0.29255-0.6334c0.07103-0.21492,0.10703-0.43986,0.10662-0.66621  c0.00297-0.28137-0.04904-0.56062-0.1531-0.82206c-0.09855-0.24575-0.25264-0.46534-0.45022-0.6416  c-0.20984-0.18355-0.45523-0.32191-0.72089-0.40646c-0.63808-0.19005-1.3198-0.17443-1.94851,0.04465  c-0.28703,0.10845-0.54746,0.2772-0.76372,0.49487c-0.20881,0.20858-0.37069,0.45932-0.47483,0.73548  c-0.10002,0.26648-0.15276,0.54838-0.15585,0.833l-0.00364,0.237H17.617l0.00638-0.22692  c0.00158-0.12667,0.01966-0.25258,0.05377-0.37458c0.03337-0.10708,0.08655-0.20693,0.15679-0.29437  c0.07105-0.08037,0.15959-0.14335,0.25882-0.1841c0.22459-0.08899,0.47371-0.09417,0.7018-0.01458  c0.0822,0.03608,0.15559,0.08957,0.21509,0.15679c0.06076,0.07174,0.10745,0.15429,0.13761,0.24333  c0.03567,0.10824,0.05412,0.22141,0.05469,0.33538c-0.00111,0.08959-0.0118,0.17881-0.0319,0.26612  c-0.02913,0.10428-0.07076,0.20465-0.124,0.29893c-0.07733,0.13621-0.1654,0.26603-0.26338,0.38823  c-0.13438,0.17465-0.27767,0.34226-0.42929,0.50217l-2.15634,2.35315V21H21v-1.326H18.31234z"></path></svg>';
const tableStyle = 'color: #414141;font-size: 14px;line-height: 2;border-spacing: 0;border-collapse: collapse;width:100%';
const tdStyle = 'border: 1px solid rgb(46, 46, 46);padding: 8px 12px;min-width: 18px;';

const subEvent = (e) => {
    let targetEle = e.target.nodeName == "DIV" ? e.target : e.target.parentElement;
    let contenteditable = document.querySelectorAll('div[contenteditable=true]');
    triggeredFrom = parseInt($(targetEle).attr('data-index'));
    contenteditable[triggeredFrom-1].focus();
    $(targetEle).toggleClass('active-btn')
    document.execCommand("subscript", false);
    contenteditable[triggeredFrom-1].focus();
}

const supEvent = (e) => {
    let targetEle = e.target.nodeName == "DIV" ? e.target : e.target.parentElement;
    let contenteditable = document.querySelectorAll('div[contenteditable=true]');
    triggeredFrom = parseInt($(targetEle).attr('data-index'));
    contenteditable[triggeredFrom-1].focus();
    $(targetEle).toggleClass('active-btn')
    document.execCommand("superscript", false);
    contenteditable[triggeredFrom-1].focus();
}

const showTablePopup = (e) => {
    // Getting dropdown div 
    let div = $('.table-content');
    // Getting font size input
    let target = e.target;
    while(!target.hasAttribute('data-index') && target != null){
        target = target.parentElement;
    }
    let tableBtn = $(target);
    // getting from which compose email it is getting triggerd.
    triggeredFrom = parseInt(tableBtn.attr('data-index'));
    let htmlStr = 
    `<h3>Table</h3>
    <div>        
        <span>Rows: </span>
        <input type="text" id="table-content-row-input" />
    </div>
    <div>        
        <span>Columns: </span>
        <input type="text" id="table-content-column-input" />
    </div>
    <div>
        <button type="button" class="table-content-draw" data-index=${triggeredFrom}>Okay</button>
        <button type="button" class="table-content-close">Cancel</button>
    </div>`;
    // Getting its position in DOM
    let rectBound = tableBtn[0].getBoundingClientRect();
    div.html("");
    div.html(htmlStr);
    // Updating the style attribute
    div.attr('style', `visibility: visible; display:block; left:calc(${rectBound.left}px - 10vw);max-height:50vh;top:calc(${rectBound.top}px - 48vh);overflow:auto;`);
} 

const hideTablePopup = () => {
    // Getting dropdown div 
    let div = $('.table-content');
    div.removeAttr('style');
}

const drawTable = (e) => {
    let contenteditableDiv = document.querySelectorAll('div[contenteditable=true]');
    let tableBtn = $(e.target);
    // getting from which compose email it is getting triggerd.
    triggeredFrom = parseInt(tableBtn.attr('data-index'));
    contenteditableDiv[triggeredFrom -1].focus();
    let rowValue = $('#table-content-row-input').val();
    let colValue = $('#table-content-column-input').val();
    let rows = parseInt((rowValue == "")? 0 : rowValue);    
    let cols = parseInt((colValue == "")? 0 : colValue);
    let htmlString = `<div style="width:75%"><table style="${tableStyle}"><tbody>`;
    for(let row = 1; row <= rows; row++){
        htmlString += `<tr row-index = ${row}>`;
        for(let col=1;col<=cols;col++) {
            htmlString += `<td style="${tdStyle}" col-index=${col}></td>`;
        }
        htmlString += `</tr>`;
    }
    htmlString += `</tbody></table></div>`;
    document.execCommand('insertHtml', false, htmlString);
    hideTablePopup();
}

const initEvents = () => {
    $('body').on('click', '.sub-btn', subEvent);
    $('body').on('click', '.sup-btn', supEvent);
    $('body').on('click', '.table-btn', showTablePopup);
    $('body').on('click', '.table-content-close', hideTablePopup);
    $('body').on('click', '.table-content-draw', drawTable);
    $('body').on('keypress', '#table-content-row-input', isNumber);
    $('body').on('keypress', '#table-content-column-input', isNumber);
}


const initStyling = (elems) => {
    let index = 1;
    for (var elem of elems) {
        var childElem = $(elem).children('td.a8X.gU');
        if (childElem.find('div.sub-btn').length == 0) {
            childElem.prepend('<div class="wG J-Z-I sub-btn" data-index="'+index+'">'+subScriptSvg+'</div>');
        }
        if (childElem.find('div.sup-btn').length == 0) {
            childElem.prepend('<div class="wG J-Z-I sup-btn" data-index="'+index+'">'+superScriptSvg+'</div>');
        }
        /*if (childElem.find('div.table-btn').length == 0) {
            childElem.prepend('<div class="wG J-Z-I table-btn" data-index="'+index+'">'+tableSvg+'</div>');
            tablePopupPopulation();
        }*/
        if (childElem.find('div.font-size').length == 0) {
            // Creating div with font-size and dropdown class
            let $divEle = $('<div></div>').attr('class', 'wG J-Z-I font-size dropdown').attr('style', "user-select:none; display:flex;");
            // Creating button with negBtn class
            let $negBtn = $('<button></button>').attr("class", "negBtn").attr('data-index',index).text("-");
            // Creating button with posBtn class
            let $posBtn = $('<button></button>').attr("class", "posBtn").attr('data-index',index).text("+");
            // Creating input with type text and default value 11
            let $inpEle = $('<input>').attr('type', 'text').attr('data-index',index).attr('readonly',true).val('11');
            // Appening input, buttons in div
            $divEle.append($negBtn, $inpEle, $posBtn);
            // Appending div element in main div
            childElem.prepend($divEle);
            // Populate font size
            fontSizeDropdownPopulation();
            // Adding functionality to button
            $negBtn.on('click', fontDecrease);
            $posBtn.on('click', fontIncrease);
            // Binfing event to input
            $inpEle.on('keypress', isNumber);
            $inpEle.on('keyup', fontIncDec);
            $inpEle.on('blur', hideFontSizeDropDown);
            $inpEle.on('click focus', showFontSizeDropdown);
            // Getting content editable div
            let divContentEditable = document.querySelectorAll('div[contenteditable=true]');
            // binding event on contenteditable div
            divContentEditable[index-1].setAttribute('data-index', index);
            divContentEditable[index-1].addEventListener('click', captureFontSize);
            divContentEditable[index-1].addEventListener('keyup', captureFontSize);
            fontCaret.push({
                fontSize : 11,
                caretPosition: null
            });
        }
        index++;
    }
}



const showFontSizeDropdown = (e) => {
    // Getting dropdown div 
    let div = $('.dropdown-content');
    // Getting font size input
    let inpELe = $(e.target);
    // getting from which compose email it is getting triggerd.
    triggeredFrom = parseInt(inpELe.attr('data-index'));
    // Getting its position in DOM
    let rectBound = inpELe[0].getBoundingClientRect();
    // Updating the style attribute
    div.attr('style', `visibility: visible; display:block; left:${rectBound.left}px;max-height:50vh;top:calc(${rectBound.top}px - 51vh);overflow:auto;`);
}



const hideFontSizeDropDown = () => {
    // Getting dropdown div 
    let div = $('.dropdown-content');
    // Updating the style attribute
    div.removeAttr('style');
}

const tablePopupPopulation = () => {    
    if(!$('.table-content') || $('.table-content').length == 0)
    {
        $('body').append(`<div class="J-M J-M-ayU fx aUX table-content" tabindex="-1">&nbsp; testing</div>`);
    }
    
    
}


/* Font Size Population */
const fontSizeDropdownPopulation = () => {
    // Checking if dropdow is rendered or not
    if (!$('.dropdown-content') || $('.dropdown-content').length == 0) {
        // Creating an div with class list J-M J-M-ayU fx aUX
        let dropdownDiv = $('<div></div>').attr('class', 'J-M J-M-ayU fx aUX dropdown-content').attr('tabindex', '-1');
        for (let item of fontSizeArr) {
            // Creating span with text and value
            let $span = $('<span></span>').text(item);
            // binding event
            $span.on('mousedown', dropdownFontSizeChange);
            // Appending span in dropdown div
            dropdownDiv.append($span);
        }
        // Appending in body
        $('body').append(dropdownDiv);
    }
}



const dropdownFontSizeChange = (event) => {
    // Getting font size from
    let fontSize = $(event.target).text();
    fontSize == "" ? 1 : fontSize;
    var contenteditableDiv = document.querySelectorAll('div[contenteditable=true]');
    if (tempRange == null) {
        contenteditableDiv[triggeredFrom-1].focus();
    }
    else {
        contenteditableDiv[triggeredFrom-1].focus();
        let sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(tempRange);
    }
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            handlingPartialSelection(fontSize);
            let $inpEle = $('div.font-size input[data-index='+triggeredFrom+']');
            $inpEle.val(fontSize);
        }
    }
    hideFontSizeDropDown();
}



const fontIncDec = (event) => {
    event = (event) ? event : window.event;
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    else {
        let fontSize = $(event.target).val();
        fontSize == "" ? 1 : fontSize;
        var contenteditableDiv = document.querySelectorAll('div[contenteditable=true]');
        triggeredFrom = parseInt($(event.target).attr('data-index'));
        if (tempRange == null) {
            contenteditableDiv[triggeredFrom-1].focus();
        }
        else {
            contenteditableDiv[triggeredFrom-1].focus();
            let sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(tempRange);
        }
        if (window.getSelection) {
            var sel = window.getSelection();
            if (sel.rangeCount) {
                handlingPartialSelection(fontSize);
            }
        }
        $(event.target).focus();
    }
}



const isNumber = (event) => {
    event = (event) ? event : window.event;
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}



// For Capturing the font size based on text written
const captureFontSize = (e) => {
    // Resetting the tempRange
    let targetEle = e.target;
    while(!targetEle.hasAttribute('data-index') && targetEle != null){
        targetEle = targetEle.parentElement;
    }
    triggeredFrom = parseInt($(targetEle).attr('data-index'));
    tempRange = null;
    // Getting the range & updating the font size
    if (window.getSelection) {
        let sel = window.getSelection();
        let isSuperScript = document.queryCommandValue("superscript");
        let isSubScript = document.queryCommandValue("subscript");
        if(isSubScript == 'true')
            $('.sub-btn[data-index='+triggeredFrom+']').addClass('active-btn');
        else
            $('.sub-btn[data-index='+triggeredFrom+']').removeClass('active-btn');

        if(isSuperScript == 'true')
            $('.sup-btn[data-index='+triggeredFrom+']').addClass('active-btn');
        else
            $('.sup-btn[data-index='+triggeredFrom+']').removeClass('active-btn');
        if (sel.rangeCount) {
            let range = sel.getRangeAt(0).cloneRange();
            let parentElement = range.commonAncestorContainer;
            while (parentElement != null) {
                if (parentElement.tagName == "FONT") {
                    break;
                }
                parentElement = parentElement.parentElement;
            }
            let $inpEle = $('.font-size input[data-index='+triggeredFrom+']');
            if (parentElement != null) {
                if (parentElement.tagName == "FONT") {
                    let fonSize = parentElement.style.fontSize;
                    if (fonSize != undefined && fonSize != "") {
                        if (fonSize.indexOf('pt') > -1) {
                            $inpEle.val(fonSize.substring(0, fonSize.length - 2));
                        }
                        else {
                            fonSize = parseFloat(fonSize.substring(0, fonSize.length - 2)) * 0.75;
                            $inpEle.val(parseInt(fonSize));
                        }
                    }else {
                        parentElement = parentElement.querySelector('span');
                        if(parentElement!=null && parentElement!=undefined){
                            let fonSize = parentElement.style.fontSize;
                            if (fonSize != undefined && fonSize != "") {
                                if (fonSize.indexOf('pt') > -1) {
                                    $inpEle.val(fonSize.substring(0, fonSize.length - 2));
                                }
                                else {
                                    fonSize = parseFloat(fonSize.substring(0, fonSize.length - 2)) * 0.75;
                                    $inpEle.val(parseInt(fonSize));
                                }
                            }
                        }
                    }
                }
            } else {
                $inpEle.val("11");
            }
        }
    }
}



// Testing code not complete code yet
const handlingPartialSelection = (size) => {
    let contenteditableDiv = document.querySelectorAll('div[contenteditable=true]');
    contenteditableDiv[triggeredFrom-1].focus();
    document.execCommand('fontSize', false, 1);
    let allFont = document.querySelectorAll('font');
    /*let range = window.getSelection().getRangeAt(0);
    let parentElement = range.commonAncestorContainer;
    while(parentElement!=null){
        if(parentElement.tagName == "FONT")
            break;
        parentElement=parentElement.parentElement;
    }
    let font = document.createElement('font');
    font.appendChild(range.cloneContents());
    if(parentElement == null || parentElement.innerText.trim() == ""){
        let inerFont = $(font).find('font');
        if(inerFont == undefined || inerFont.length == 0){
            font.style.fontSize = size + "pt";
            font.innerHTML = "&nbsp;";
            range.insertNode(font);
        } 
        else {

        }
    }*/
    console.log(allFont);
    for(let node of allFont)
    {
        if(node.hasAttribute('size')){
            node.removeAttribute('size');
            node.style.fontSize = size+ "pt";
        }
    }
}


const fontIncrease = (event) => {
    triggeredFrom = parseInt($(event.target).attr('data-index'));
    let $inpEle = $('.font-size input[data-index='+triggeredFrom+']');
    // Get the value from input
    let fontSize = parseInt($inpEle.val());
    // Increase the value by 1
    fontSize += 1
    // Get the text from range
    var font = document.createElement("span");
    font.style.fontSize = fontSize + "pt";
    font.DataValue = fontSize;
    var contenteditableDiv = document.querySelectorAll('div[contenteditable=true]');
    if (tempRange == null) {
        contenteditableDiv[triggeredFrom-1].focus();
    }
    else {
        contenteditableDiv[triggeredFrom-1].focus();
        let sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(tempRange);
    }
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            handlingPartialSelection(fontSize);
        }
    }
    $inpEle.val(fontSize);
}




const fontDecrease = (event) => {
    triggeredFrom = parseInt($(event.target).attr('data-index'));
    let $inpEle = $('.font-size input[data-index='+triggeredFrom+']');
    // Get the value from input
    let fontSize = parseInt($inpEle.val());
    // Decrease the value by 1(Can not be less than 1)
    fontSize = fontSize == 1 ? fontSize : fontSize - 1;
    // Get the text from range
    var contenteditableDiv = document.querySelectorAll('div[contenteditable=true]');
    if (tempRange == null) {
        contenteditableDiv[triggeredFrom-1].focus();
    }
    else {
        contenteditableDiv[triggeredFrom-1].focus();
        let sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(tempRange);
    }
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            handlingPartialSelection(fontSize);
        }
    }
    $inpEle.val(fontSize);
}

const initSortStyle = () =>{
    let sortMenuItem = document.createElement("button");
    sortMenuItem.textContent = "Sort";
    sortMenuItem.addEventListener('click', function() {
        let searchBox = document.querySelector('input.gb_if');
        searchBox.value = "is:inbox";
        let searchBtn = document.querySelector('.gb_rf.gb_sf');
        searchBtn.click();
    });
    return sortMenuItem;
}

const initSortStyling = (elem) => {
    var dvelem3=document.createElement("div");
    dvelem3.classList.add('G-Ni');
    dvelem3.classList.add('J-J5-Ji');
    dvelem3.appendChild(initSortStyle());
    elem.appendChild(dvelem3);
}

const initSort = () => {
    let interval = setInterval(function(){
        let elem = document.querySelector('.G-tF');
        if(elem){
            clearInterval(interval);
            initSortStyling(elem);      
        }
    },100);
}


const initializeControls = () => {
    initEvents();
    $('body').on('click', 'div[jscontroller="eIu7Db"]', function () {
        var interval = setInterval(function () {
            var elem = document.querySelectorAll('tr.btC'); // HtmlCollection
            if (elem.length > 0) {
                clearInterval(interval)
                initStyling(elem);
            }

        }, 1000);
    });
}



const initStylingOnLoad = () => {
    var elem = document.querySelectorAll('tr.btC');
    if (elem.length > 0) {
        initStyling(elem);
    }
}

const init = async () => {
    setTimeout(initStylingOnLoad, 10000);
    setTimeout(initializeControls, 200);
    //setTimeout(initSort, 200);
}

export const app = async () => {
    await init();
}