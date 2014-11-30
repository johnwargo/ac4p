/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.DatePicker");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.m.InputBase");sap.m.InputBase.extend("sap.m.DatePicker",{metadata:{library:"sap.m",properties:{"displayFormat":{type:"string",group:"Appearance",defaultValue:null},"valueFormat":{type:"string",group:"Data",defaultValue:null},"dateValue":{type:"object",group:"Data",defaultValue:null}}}});jQuery.sap.require("sap.ui.model.type.Date");(function(){sap.m.DatePicker.prototype.init=function(){sap.m.InputBase.prototype.init.apply(this,arguments);this._inputProxy=jQuery.proxy(e,this)};sap.m.DatePicker.prototype.exit=function(){sap.m.InputBase.prototype.exit.apply(this,arguments);if(this._oPopup){if(this._oPopup.isOpen()){this._oPopup.close()}delete this._oPopup}if(this._oCalendar){this._oCalendar.destroy();delete this._oCalendar}};sap.m.DatePicker.prototype.onAfterRendering=function(){sap.m.InputBase.prototype.onAfterRendering.apply(this,arguments);this.bindToInputEvent(this._inputProxy)};sap.m.DatePicker.prototype.invalidate=function(o){if(!o||o!=this._oCalendar){sap.ui.core.Control.prototype.invalidate.apply(this,arguments)}};sap.m.DatePicker.prototype.setWidth=function(w){return sap.m.InputBase.prototype.setWidth.call(this,w||"100%")};sap.m.DatePicker.prototype.getWidth=function(w){return this.getProperty("width")||"100%"};sap.m.DatePicker.prototype.onfocusin=function(E){if(sap.ui.Device.browser.mobile&&!jQuery(E.target).hasClass("sapUiIcon")&&!this._bFocusByCancel){var t=this;if(!this._oPopup||!this._oPopup.isOpen()){_(t)}}this._bFocusByCancel=undefined};sap.m.DatePicker.prototype.onsapshow=function(E){var t=this;if(E.keyCode==jQuery.sap.KeyCodes.ARROW_DOWN){if(!this._oPopup||!this._oPopup.isOpen()){_(t)}}else{a(t)}E.preventDefault()};sap.m.DatePicker.prototype.onsaphide=function(E){if(this._oPopup&&this._oPopup.isOpen()){this._oPopup.close()}};sap.m.DatePicker.prototype.onsappageup=function(E){var t=this;d(t,1,"day")};sap.m.DatePicker.prototype.onsappageupmodifiers=function(E){var t=this;if(!E.ctrlKey&&E.shiftKey){d(t,1,"month")}else{d(t,1,"year")}};sap.m.DatePicker.prototype.onsappagedown=function(E){var t=this;d(t,-1,"day")};sap.m.DatePicker.prototype.onsappagedownmodifiers=function(E){var t=this;if(!E.ctrlKey&&E.shiftKey){d(t,-1,"month")}else{d(t,-1,"year")}};sap.m.DatePicker.prototype.onclick=function(E){var t=this;if(jQuery(E.target).hasClass("sapUiIcon")){a(t)}else if(sap.ui.Device.browser.mobile&&(!this._oPopup||!this._oPopup.isOpen())){_(t)}};sap.m.DatePicker.prototype.setValue=function(v){var o=this.getValue();if(v==o){return this}else{this._lastValue=v}this.setProperty("value",v,true);var D=this._parseValue(v);this.setProperty("dateValue",D,true);if(this.getDomRef()){var O=this._formatValue(D);if(this._$input.val()!==O){this._$input.val(O);this._setLabelVisibility();this._curpos=this._$input.cursorPos()}}return this};sap.m.DatePicker.prototype.setDateValue=function(D){if(jQuery.sap.equal(this.getDateValue(),D)){return this}this.setProperty("dateValue",D,true);var v=this._formatValue(D,true);if(v!==this.getValue()){this._lastValue=v}this.setProperty("value",v,true);if(this.getDomRef()){var o=this._formatValue(D);if(this._$input.val()!==o){this._$input.val(o);this._setLabelVisibility();this._curpos=this._$input.cursorPos()}}return this};sap.m.DatePicker.prototype.setValueFormat=function(v){this.setProperty("valueFormat",v,true);var V=this.getValue();if(V){var D=this._parseValue(V);this.setProperty("dateValue",D,true)}return this};sap.m.DatePicker.prototype.setDisplayFormat=function(D){this.setProperty("displayFormat",D,true);var o=this._formatValue(this.getDateValue());if(this.getDomRef()&&(this._$input.val()!==o)){this._$input.val(o);this._curpos=this._$input.cursorPos()}return this};sap.m.DatePicker.prototype.onChange=function(E){if(!this.getEditable()||!this.getEnabled()){return}var v=this._$input.val();var D=undefined;if(v!=""){D=this._parseValue(v,true);if(D){v=this._formatValue(D)}else{v=""}}this.setProperty("dateValue",D,true);if(this.getDomRef()&&(this._$input.val()!==v)){this._$input.val(v);this._curpos=this._$input.cursorPos();if(this._$label){this._$label.css("display",v?"none":"inline")}}if(D){v=this._formatValue(D,true)}if(v!==this._lastValue){this.setProperty("value",v,true);this._lastValue=v;this.fireChangeEvent(v)}if(this._oPopup&&this._oPopup.isOpen()){this._oCalendar.focusDate(D);var s=this._oDateRange.getStartDate();if((!s&&D)||(s&&D&&s.getTime()!=D.getTime())){this._oDateRange.setStartDate(new Date(D.getTime()))}else if(s&&!D){this._oDateRange.setStartDate(undefined)}}};sap.m.DatePicker.prototype._getInputValue=function(v){v=(typeof v=="undefined")?this._$input.val():v.toString();var D=this._parseValue(v,true);v=this._formatValue(D,true);return v};sap.m.DatePicker.prototype._parseValue=function(v,D){var i="";var F;var B=this.getBinding("value");if(B&&B.oType&&(B.oType instanceof sap.ui.model.type.Date)){i=B.oType.getOutputPattern()}if(!i){if(D){i=this.getDisplayFormat()}else{i=this.getValueFormat()}}if(!i){if(D){i="medium"}else{i="short"}}if(i=="short"||i=="medium"||i=="long"){F=sap.ui.core.format.DateFormat.getInstance({style:i})}else{F=sap.ui.core.format.DateFormat.getInstance({pattern:i})}var o=F.parse(v);return o};sap.m.DatePicker.prototype._formatValue=function(D,v){var V="";if(D){var o="";var B=this.getBinding("value");var F;if(B&&B.oType&&(B.oType instanceof sap.ui.model.type.Date)){o=B.oType.getOutputPattern()}if(!o){if(v){o=this.getValueFormat()}else{o=this.getDisplayFormat()}}if(!o){if(v){o="short"}else{o="medium"}}if(o=="short"||o=="medium"||o=="long"){F=sap.ui.core.format.DateFormat.getInstance({style:o})}else{F=sap.ui.core.format.DateFormat.getInstance({pattern:o})}V=F.format(D)}return V};sap.m.DatePicker.prototype._getPlaceholder=function(){var p=this.getPlaceholder();if(!p){var B=this.getBinding("value");if(B&&B.oType&&(B.oType instanceof sap.ui.model.type.Date)){p=B.oType.getOutputPattern()}else{p=this.getDisplayFormat()}if(!p){p="medium"}if(p=="short"||p=="medium"||p=="long"){var l=sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale();var L=sap.ui.core.LocaleData.getInstance(l);p=L.getDatePattern(p)}}return p};function _(t){if(!t._oPopup){jQuery.sap.require("sap.ui.core.Popup");t._oPopup=new sap.ui.core.Popup();t._oPopup.setAutoClose(true);t._oPopup.setDurations(0,0);t._oPopup.attachOpened(f,t)}if(!t._oCalendar){sap.ui.getCore().loadLibrary("sap.ui.unified");jQuery.sap.require("sap.ui.unified.library");t._oCalendar=new sap.ui.unified.Calendar(t.getId()+"-cal");t._oDateRange=new sap.ui.unified.DateRange();t._oCalendar.addSelectedDate(t._oDateRange);t._oCalendar.attachSelect(b,t);t._oCalendar.attachCancel(c,t);t._oCalendar.attachEvent("_renderMonth",g,t);t._oPopup.setContent(t._oCalendar);if(t.$().closest(".sapUiSizeCompact").length>0){t._oCalendar.addStyleClass("sapUiSizeCompact")}t._oCalendar.setPopupMode(true);t._oCalendar.setParent(t,undefined,true)}t.onChange();var D=t.getDateValue();if(D){t._oCalendar.focusDate(D);if(!t._oDateRange.getStartDate()||t._oDateRange.getStartDate().getTime()!=D.getTime()){t._oDateRange.setStartDate(new Date(D.getTime()))}}else{if(t._oDateRange.getStartDate()){t._oDateRange.setStartDate(undefined)}}t._oPopup.setAutoCloseAreas([t.getDomRef()]);var h=sap.ui.core.Popup.Dock;var A=h.BeginBottom+"-4";t._oPopup.open(0,h.BeginTop,A,t,null,"fit",true)};function a(t){if(t.getEditable()&&t.getEnabled()){if(!t._oPopup||!t._oPopup.isOpen()){_(t)}else{t._oPopup.close()}}};function b(E){var s=this._oCalendar.getSelectedDates();var D;var v="";if(s.length>0){D=s[0].getStartDate();v=this._formatValue(D);if(this._$input.val()!==v){this._$input.val(v);this._setLabelVisibility();this._curpos=v.length;this._$input.cursorPos(this._curpos)}}this._oPopup.close();this.focus();this.setProperty("dateValue",D,true);sap.m.InputBase.prototype.onChange.apply(this,arguments)};function c(E){if(this._oPopup&&this._oPopup.isOpen()){this._oPopup.close();this._bFocusByCancel=true;this.focus()}};function d(t,n,u){var o=t.getDateValue();if(o&&t.getEditable()&&t.getEnabled()){var D=new Date(o.getTime());switch(u){case"day":D.setDate(D.getDate()+n);break;case"month":D.setMonth(D.getMonth()+n);break;case"year":D.setFullYear(D.getFullYear()+n);break;default:break}t.setDateValue(D);var v=t._getInputValue();t.fireChangeEvent(v)}};function e(E){if(this.getDomRef()&&this._$label){var v=this._$input.val();this._$label.css("display",v?"none":"inline")}};function f(E){this._renderedDays=this._oCalendar.$("days").children(".sapUiCalDay").length};function g(E){var D=E.getParameter("days");if(D>this._renderedDays){this._renderedDays=D;this._oPopup._applyPosition(this._oPopup._oLastPosition)}}}());
