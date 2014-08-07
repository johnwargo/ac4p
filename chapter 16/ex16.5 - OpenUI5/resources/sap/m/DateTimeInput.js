/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.DateTimeInput");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.m.InputBase");sap.m.InputBase.extend("sap.m.DateTimeInput",{metadata:{library:"sap.m",properties:{"type":{type:"sap.m.DateTimeInputType",group:"Data",defaultValue:sap.m.DateTimeInputType.Date},"displayFormat":{type:"string",group:"Appearance",defaultValue:null},"valueFormat":{type:"string",group:"Data",defaultValue:null},"dateValue":{type:"object",group:"Data",defaultValue:null}},events:{"change":{}}}});sap.m.DateTimeInput.M_EVENTS={'change':'change'};jQuery.sap.require("sap.ui.core.theming.Parameters");jQuery.sap.require("sap.ui.model.type.Date");!function(p,$,d){var o=sap.m.getLocaleData();$.extend(p,{_origin:"value",_super:sap.m.InputBase.prototype,_types:{Date:{valueFormat:o.getDatePattern("short"),displayFormat:o.getDatePattern("medium"),},Time:{valueFormat:o.getTimePattern("short"),displayFormat:o.getTimePattern("short"),},DateTime:{valueFormat:o.getDateTimePattern("short"),displayFormat:o.getDateTimePattern("short"),}}});if(sap.ui.getCore().getConfiguration().getRTL()){["valueFormat","displayFormat"].forEach(function(f){var t=p._types.Time;var F=t[f];t[f]=F.replace(/a+/i,"").replace(/h+/i,"HH").trim()})}["Time","Date"].forEach(function(t,n){["valueFormat","displayFormat"].forEach(function(f){var T=p._types;T.DateTime[f]=T.DateTime[f].replace("{"+n+"}",T[t][f])})})}(sap.m.DateTimeInput.prototype,jQuery,sap.ui.Device);
sap.m.DateTimeInput.prototype.onBeforeRendering=function(){this._destroyCustomPicker();this._super.onBeforeRendering.call(this);if(!this.mProperties.hasOwnProperty("type")){this.setType("Date")}};
sap.m.DateTimeInput.prototype.onAfterRendering=function(){this._super.onAfterRendering.call(this);this._$input.scroller(this._getScrollerConfig());this._showValue()};
sap.m.DateTimeInput.prototype.exit=function(){this._destroyCustomPicker();this._super.exit.call(this)};
sap.m.DateTimeInput.prototype.setWidth=function(w){return this._super.setWidth.call(this,w||"100%")};
sap.m.DateTimeInput.prototype.getWidth=function(){return this.getProperty("width")||"100%"};
sap.m.DateTimeInput.prototype.setValue=function(v){v=this.validateProperty("value",v);if(v.toLowerCase()=="now"){return this.setDateValue(new Date())}if(v===this.getValue()){return this}this.setProperty("value",v);this._origin="value";this._getFormatFromBinding();return this};
sap.m.DateTimeInput.prototype.setDateValue=function(v){if(!v||v===this.getDateValue()){return this}this._isDate(v);this._origin="dateValue";this.setProperty("dateValue",v);if(!this.getDomRef()){this.setProperty("value",sap.ui.core.format.DateFormat.getDateInstance({pattern:this.getValueFormat()}).format(v),true)}return this};
sap.m.DateTimeInput.prototype.getDateValue=function(){if(this._origin=="dateValue"){return this.getProperty("dateValue")}var v=this.getProperty("value");if(!v){return null}return sap.ui.core.format.DateFormat.getDateInstance({pattern:this.getValueFormat()}).parse(v)};
sap.m.DateTimeInput.prototype.getDisplayFormat=function(){return this.getProperty("displayFormat")||this._types[this.getType()].displayFormat};
sap.m.DateTimeInput.prototype.getValueFormat=function(){return this.getProperty("valueFormat")||this._types[this.getType()].valueFormat};
sap.m.DateTimeInput.prototype.onfocusin=function(){this._setLabelVisibility()};
sap.m.DateTimeInput.prototype._isDate=function(v){if(!sap.m.isDate(v)){throw new Error("Type Error: Expected JavaScript Date Object for property dateValue of "+this)}return true};
sap.m.DateTimeInput.prototype.onChange=function(e){var d=null,n=this._$input.val(),o=this.getProperty("value");if(n){d=this._$input.scroller("getDate");this.getType()=="Date"&&d.setHours(0,0,0,0);e&&this._reformat&&this._$input.val(sap.ui.core.format.DateFormat.getDateInstance({pattern:this.getDisplayFormat()}).format(d));if(!isNaN(d)){n=sap.ui.core.format.DateFormat.getDateInstance({pattern:this.getValueFormat()}).format(d)}else{n="";d=null}}if(o==n){return}this.setProperty("value",n,true);this.setProperty("dateValue",d,true);this._setLabelVisibility();if(e&&e.type!="focus"){this.fireChangeEvent(n,{dateValue:d,newDateValue:d})}};
sap.m.DateTimeInput.prototype._destroyCustomPicker=function(){if(this._$input){this._$input.scroller("hide");this._$input.scroller("destroy")}};
sap.m.DateTimeInput.prototype._setInputValue=function(v){this._$input.val(v);this._setLabelVisibility();this.onChange()};
sap.m.DateTimeInput.prototype._showValue=function(){var d=this.getProperty(this._origin);if(!d){return}if(this._origin=="value"){d=sap.ui.core.format.DateFormat.getDateInstance({pattern:this.getValueFormat()}).parse(d);if(!d){jQuery.sap.log.error("Format Error: value property "+this.getValue()+" does not match with valueFormat "+this.getValueFormat()+" of "+this);this._setInputValue("");return}}else{this._isDate(d)}this._$input.scroller("setDate",d,false);this._setInputValue(sap.ui.core.format.DateFormat.getDateInstance({pattern:this.getDisplayFormat()}).format(d))};
sap.m.DateTimeInput.prototype._getFormatFromBinding=function(){var b=this.getBindingInfo("value");if(!b){return}var B=b.type;if(!B||!(B instanceof sap.ui.model.type.Date)){return}var f=B.getOutputPattern();this.setProperty("valueFormat",f,true);this.setProperty("displayFormat",f,true);return f};
sap.m.DateTimeInput.prototype.onsapshow=function(e){this._$input.scroller("show");e.preventDefault();e.setMarked()};
(function($,D){var o={},c=sap.ui.getCore(),l=sap.m.getLocale(),L=l.getLanguage(),a=sap.m.getLocaleData(),r=c.getLibraryResourceBundle("sap.m"),_=function(T){return $.sap.encodeHTML(r.getText("MOBISCROLL_"+T))},b="(?=([^']*'[^']*')*[^']*$)",C=$.sap.getModulePath("sap.ui.thirdparty.mobiscroll","/css/"),s={endYear:new Date().getFullYear()+10,lang:L},f={setText:_("SET"),cancelText:_("CANCEL"),monthText:_("MONTH"),dayText:_("DAY"),yearText:_("YEAR"),hourText:_("HOURS"),minuteText:_("MINUTES"),secText:_("SECONDS"),nowText:_("NOW"),dayNames:a.getDaysStandAlone("wide").map($.sap.encodeHTML),dayNamesShort:a.getDaysStandAlone("abbreviated").map($.sap.encodeHTML),monthNames:a.getMonthsStandAlone("wide").map($.sap.encodeHTML),monthNamesShort:a.getMonthsStandAlone("abbreviated").map($.sap.encodeHTML)},t=sap.ui.core.theming.Parameters.get();$.sap.includeStyleSheet(C+"mobiscroll-core.css");$.sap.require("sap.ui.thirdparty.mobiscroll.js.mobiscroll-core");$.sap.require("sap.ui.thirdparty.mobiscroll.js.mobiscroll-scroller");$.sap.require("sap.ui.thirdparty.mobiscroll.js.mobiscroll-datetime");o=$("<input>").scroller({}).scroller("getInst").settings;var g=["phone","tablet","desktop"].filter(function(d){return D.system[d]})[0],u=function(d){if(!d){return""}return d.charAt(0).toUpperCase()+d.substr(1)},h=function(k,d,p){var v=t["sapUiDTICustom"+u(p)+u(k)];if(v){if(d=="bool"){s[k]=(v.toLowerCase()=="true"?true:false)}else if(d=="int"){v=parseInt(v,10);!isNaN(v)&&(s[k]=v)}else{s[k]=v}}if(!p&&g){h(k,d,g)}};s.mode="mixed";s.display="modal";s.theme="sapMDTICustom";h("mode");h("display");h("rows","int");h("width","int");h("height","int");h("showLabel","bool");h("headerText","bool");if(s.headerText){s.headerText="{value}"}$.sap.require("sap.ui.core.IconPool");sap.ui.core.IconPool.insertFontFaceStyle();$.scroller.i18n[L]=$.extend({},f);$.sap.require("sap.m.InstanceManager");$.extend(sap.m.DateTimeInput.prototype,{close:function(){this._$input.scroller("hide")},_setScrollerHeader:function(v){try{var d=this._$input.scroller("getInst").settings,F=!this.getType().indexOf("Date")?d.dateFormat:d.timeFormat,i=$.mobiscroll.parseDate(F,v);return $.sap.encodeHTML(sap.ui.core.format.DateFormat.getDateInstance({pattern:this.getDisplayFormat()}).format(i))}catch(e){return v}},_autoClose:function(e){var d=this.getDomRef();if(d&&d.contains(e.target)){e.stopPropagation();e.preventDefault();return}var i=document.querySelector(".sapMDTICustom .dwwr");if(i&&!i.contains(e.target)){this._$input.scroller("hide")}},_restrictMaxWidth:function(d){d[0].querySelector(".dwwr").style.maxWidth=(document.documentElement.clientWidth-22)+"px"},_handleResize:function(e){this._restrictMaxWidth(e.data.$dialog)},_handleBtnKeyDown:function(e){if(e.which===$.sap.KeyCodes.ENTER){if(e.target&&$(e.target.parentElement).hasClass("dwb-c")){this._$input.scroller("cancel")}else{this._$input.scroller("select")}}else if(e.which===$.sap.KeyCodes.ESCAPE){this._$input.scroller("cancel")}},_getScrollerConfig:function(){var d=this,T=this.getType(),F=this.getDisplayFormat(),A=$.proxy(this._autoClose,this),H=$.proxy(this._handleResize,this),e=$.proxy(this._handleBtnKeyDown,this),i,j,k=$("<span class='sapMFirstFE' tabindex='0'/>"),m=$("<span class='sapMLastFE' tabindex='0'/>"),K,n,p=$.extend({},s,{preset:T.toLowerCase(),showOnFocus:false,showOnTap:true,disabled:!d.getEnabled()||!d.getEditable(),onShow:function(q){if(D.browser.msie){if(d._popupIsShown){return}d._popupIsShown=true}sap.m.InstanceManager.addDialogInstance(d);$(window).on("resize.sapMDTICustom",{$dialog:q},H);$(window).unbind('keydown.dw');q.on('keydown.dw',e);if(s.display=="bubble"){document.addEventListener(D.support.touch?"touchstart":"mousedown",A,true)}if(D.system.desktop){var v=q.find('.dwcc'),w=q.find('.dwbc'),x=v.find(":focusable.dwww");k.insertBefore(v);j=$.proxy(d._getFocusInHandler(w,false),d);k.focusin(j);m.insertAfter(w);i=$.proxy(d._getFocusInHandler(v,true),d);m.focusin(i);$.sap.focus(v.firstFocusableDomRef());n=q;K=$.proxy(d._getKeyDownHandler(x),d);q.keydown(K)}},onClose:function(){if(D.browser.msie){d._popupIsShown=false}sap.m.InstanceManager.removeDialogInstance(d);$(window).off("resize.sapMDTICustom",H);if(s.display=="bubble"){document.removeEventListener(D.support.touch?"touchstart":"mousedown",A,true)}k.unbind('focusin',j);m.unbind('focusin',i);if(n){n.unbind('keydown',K);n.unbind('keydown.dw',e)}},onSelect:function(){d.onChange({})},onMarkupReady:function(q,v){d._restrictMaxWidth(q);q.addClass("sapMDTICustom"+d.getType());if(s.headerText!==false){q.addClass("sapMDTICustomHdr")}if(sap.ui.getCore().getConfiguration().getRTL()){var w=q.find(".dwbc");var x=w.find(".dwb-c");x.prependTo(w)}}});if(T=="Date"){F=this._convertDatePattern(F);$.extend(p,{timeWheels:"",dateFormat:F,dateOrder:this._getLongDatePattern(F.replace(/'.*?'/g,"")).replace(/[^ymd ]/ig,""),})}else if(T=="Time"){F=this._convertTimePattern(F);$.extend(p,{dateOrder:"",timeFormat:F,timeWheels:F.replace(/'.*?'/g,"").replace(/[^hisa]/ig,"")})}else if(T=="DateTime"){F=this._convertDatePattern(this._convertTimePattern(F));$.extend(p,{dateFormat:F,dateOrder:this._getLongDatePattern(F.replace(/'.*?'/g,"")).replace(/[^ymd ]/ig,""),rows:this._getRowForDateTime(),timeWheels:F,timeFormat:"",separator:""})}if(/[^ymdhisa\W]/i.test(F)){this._reformat=true;if(s.headerText!==false){p.headerText=$.proxy(this._setScrollerHeader,this)}}else{this._reformat=false}return p},_getRowForDateTime:function(){var d=s.rows||o.rows;if(!d||d<=3){return 3}return Math.min(window.innerWidth,window.innerHeight)<360?3:d},_getFocusInHandler:function(d,e){return function(){var E=e?d.firstFocusableDomRef():d.lastFocusableDomRef();$.sap.focus(E)}},_getKeyDownHandler:function(F){return function(e){var k=e.which,S=e.shiftKey,A=e.altKey,d=e.ctrlKey;if(!A&&!S&&!d){switch(k){case $.sap.KeyCodes.ARROW_RIGHT:var i=F.index(document.activeElement),j=F.eq(i+1).length?F.eq(i+1):F.eq(0);j.focus();break;case $.sap.KeyCodes.ARROW_LEFT:var i=F.index(document.activeElement),m=F.eq(i-1).length?F.eq(i-1):F.eq(F.length-1);m.focus();break;case $.sap.KeyCodes.HOME:F[0].focus();break;case $.sap.KeyCodes.END:F[F.length-1].focus();break;default:break}}else if(A&&!S&&!d){switch(k){case $.sap.KeyCodes.ARROW_UP:this._$input.scroller("select");break;default:break}}}},_rgxYear:new RegExp("y+"+b,"ig"),_rgxMonth:new RegExp("m+"+b,"ig"),_rgxDay:new RegExp("d+"+b,"g"),_rgxMinute:new RegExp("m"+b,"g"),_rgxAmPm:new RegExp("a"+b,"g"),_rgxDayOfWeekLong:new RegExp("EEEE"+b,"g"),_rgxDayOfWeekShort:new RegExp("E+"+b,"g"),_getLongDatePattern:function(p){p=(p||this.getDisplayFormat()).replace(this._rgxYear,"YY");return p.replace(this._rgxMonth,"MM").replace(this._rgxDay,"dd")},_convertTimePattern:function(p){p=p||this.getDisplayFormat();return p.replace(this._rgxMinute,"i").replace(this._rgxAmPm,"A")},_convertDatePattern:function(p){p=p||this.getDisplayFormat();var i=p.indexOf("M"),I=p.lastIndexOf("M"),F=p,n;if(i==-1){i=p.indexOf("L");I=p.lastIndexOf("L")}if(i>-1){switch(I-i){case 0:n="m";break;case 1:n="mm";break;case 2:n="M";break;case 5:n="m";break;default:n="MM";break}F=p.substring(0,i)+n+p.substring(I+1)}var N;i=F.indexOf("y");if(i>-1){I=F.lastIndexOf("y");if(I-i==1){N="y"}else{N="yy"}F=F.substring(0,i)+N+F.substring(I+1)}var d;i=F.indexOf("D");if(i>-1){I=F.lastIndexOf("D");if(I-i==1){d="o"}else{d="oo"}F=F.substring(0,i)+d+F.substring(I+1)}F=F.replace(this._rgxDayOfWeekLong,"DD").replace(this._rgxDayOfWeekShort,"D");return F}})})(jQuery,sap.ui.Device);
