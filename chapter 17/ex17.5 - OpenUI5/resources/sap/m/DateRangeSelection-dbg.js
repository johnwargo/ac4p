/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.DateRangeSelection.
jQuery.sap.declare("sap.m.DateRangeSelection");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.m.DatePicker");


/**
 * Constructor for a new DateRangeSelection.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getDelimiter delimiter} : string (default: '-')</li>
 * <li>{@link #getSecondDateValue secondDateValue} : object</li>
 * <li>{@link #getFrom from} : object</li>
 * <li>{@link #getTo to} : object</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.DateRangeSelection#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.m.DatePicker#constructor sap.m.DatePicker}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This is a date range selection control. It internal uses the sap.ui.unified.Calendar. So the sap.ui.unified library should be loaded from applications using this control.
 * @extends sap.m.DatePicker
 *
 * @author  
 * @version 1.22.5
 *
 * @constructor   
 * @public
 * @name sap.m.DateRangeSelection
 */
sap.m.DatePicker.extend("sap.m.DateRangeSelection", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"delimiter" : {type : "string", group : "Misc", defaultValue : '-'},
		"secondDateValue" : {type : "object", group : "Data", defaultValue : null},
		"from" : {type : "object", group : "Misc", defaultValue : null, deprecated: true},
		"to" : {type : "object", group : "Misc", defaultValue : null, deprecated: true}
	},
	events : {
		"change" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.DateRangeSelection with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.m.DateRangeSelection.extend
 * @function
 */

sap.m.DateRangeSelection.M_EVENTS = {'change':'change'};


/**
 * Getter for property <code>delimiter</code>.
 * Delimiter of starting and ending date. Default value is "-".
 *
 * Default value is <code>-</code>
 *
 * @return {string} the value of property <code>delimiter</code>
 * @public
 * @name sap.m.DateRangeSelection#getDelimiter
 * @function
 */

/**
 * Setter for property <code>delimiter</code>.
 *
 * Default value is <code>-</code> 
 *
 * @param {string} sDelimiter  new value for property <code>delimiter</code>
 * @return {sap.m.DateRangeSelection} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.DateRangeSelection#setDelimiter
 * @function
 */


/**
 * Getter for property <code>secondDateValue</code>.
 * Ending date of the range.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>secondDateValue</code>
 * @public
 * @name sap.m.DateRangeSelection#getSecondDateValue
 * @function
 */

/**
 * Setter for property <code>secondDateValue</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oSecondDateValue  new value for property <code>secondDateValue</code>
 * @return {sap.m.DateRangeSelection} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.DateRangeSelection#setSecondDateValue
 * @function
 */


/**
 * Getter for property <code>from</code>.
 * Starting date of the range.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>from</code>
 * @public
 * @deprecated Since version 1.22. 
 * Former property for starting date - since next release will be not supported. Use dateValue instead.
 * @name sap.m.DateRangeSelection#getFrom
 * @function
 */

/**
 * Setter for property <code>from</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oFrom  new value for property <code>from</code>
 * @return {sap.m.DateRangeSelection} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.22. 
 * Former property for starting date - since next release will be not supported. Use dateValue instead.
 * @name sap.m.DateRangeSelection#setFrom
 * @function
 */


/**
 * Getter for property <code>to</code>.
 * Ending date of the range.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {object} the value of property <code>to</code>
 * @public
 * @deprecated Since version 1.22. 
 * Former property for ending date - since next release will be not supported. Use secondDateValue instead.
 * @name sap.m.DateRangeSelection#getTo
 * @function
 */

/**
 * Setter for property <code>to</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {object} oTo  new value for property <code>to</code>
 * @return {sap.m.DateRangeSelection} <code>this</code> to allow method chaining
 * @public
 * @deprecated Since version 1.22. 
 * Former property for ending date - since next release will be not supported. Use secondDateValue instead.
 * @name sap.m.DateRangeSelection#setTo
 * @function
 */


/**
 * Event thrown in case of change of date range. 
 *
 * @name sap.m.DateRangeSelection#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {object} oControlEvent.getParameters.from Current starting date after change.
 * @param {object} oControlEvent.getParameters.to Current ending date after change.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.m.DateRangeSelection</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.DateRangeSelection</code>.<br/> itself. 
 *  
 * Event thrown in case of change of date range. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.DateRangeSelection</code>.<br/> itself.
 *
 * @return {sap.m.DateRangeSelection} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.DateRangeSelection#attachChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.m.DateRangeSelection</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.DateRangeSelection} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.DateRangeSelection#detachChange
 * @function
 */

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'from' of type <code>object</code> Current starting date after change.</li>
 * <li>'to' of type <code>object</code> Current ending date after change.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.DateRangeSelection} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.DateRangeSelection#fireChange
 * @function
 */


// Start of sap\m\DateRangeSelection.js
/**
* This file defines behavior for the control
* @public
*/
sap.m.DateRangeSelection.prototype.init = function(){
   this.setProperty("valueFormat", null, true); //valueFormat is undefined in this control

   sap.m.DatePicker.prototype.init.apply(this, arguments);
};

jQuery.sap.require("sap.ui.model.type.Date");

(function() {

  // Overwrite InputBase's getPlaceholder()
  sap.m.DateRangeSelection.prototype._getPlaceholder = function() {
    var sPlaceholder = this.getPlaceholder();

    if (!sPlaceholder) {
      sPlaceholder = this.getDisplayFormat();

      if (!sPlaceholder) {
        sPlaceholder = "medium";
      }

      if (sPlaceholder === "short" || sPlaceholder === "medium" || sPlaceholder === "long") {
        var oLocale = sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale();
        var oLocaleData = sap.ui.core.LocaleData.getInstance(oLocale);
        sPlaceholder = oLocaleData.getDatePattern(sPlaceholder);
      }

      if (this.getDelimiter() && this.getDelimiter() !== "") {
        sPlaceholder = sPlaceholder +" "+this.getDelimiter()+" "+ sPlaceholder;
      }
    }

    return sPlaceholder;
  };

  // Overwrite InputBase's setValue to support two date range processing
  sap.m.DateRangeSelection.prototype.setValue = function(sValue) {

    if (sValue !== this.getValue()) {
      this._lastValue = sValue;
    }
    // Set the property in any case but check validity on output
    this.setProperty("value", sValue, true);

    // Convert to date object(s)
    this._parseValue(sValue);

    // Do not call InputBase.setValue because the displayed value and the output value might have different pattern
    if (this.getDomRef()) {
      // Convert to output
      var sOutputValue = this._formatValue();

      if (this._$input.val() !== sOutputValue) {
        this._$input.val(sOutputValue);
        this._setLabelVisibility();
        this._curpos = this._$input.cursorPos();
      }
    }

    return this;

  };


  //Following setters/getters are due to backward compatibility with original primary version of composite sap.m.DateRangeSelection,
  //that consisted of original primary sap.m.DateRangeSelection

  sap.m.DateRangeSelection.prototype.setFrom = function(oFrom) {
    this.setDateValue(oFrom);
  };

  sap.m.DateRangeSelection.prototype.getFrom = function() {
    return this.getDateValue();
  };

  sap.m.DateRangeSelection.prototype.setTo = function(oTo) {
    this.setSecondDateValue(oTo);
  };

  sap.m.DateRangeSelection.prototype.getTo = function() {
    return this.getSecondDateValue();
  };

  // Overwrite DatePicker's setDateValue to support two date range processing
  sap.m.DateRangeSelection.prototype.setDateValue = function(oDateValue) {

    this.setProperty("dateValue", oDateValue, true);

    // Convert date object(s) to value
    var sValue = this._formatValue();

    if (sValue !== this.getValue()) {
      this._lastValue = sValue;
    }
    // Set the property in any case but check validity on output
    this.setProperty("value", sValue, true);

    if (this.getDomRef()) {
      // convert to output
      var sOutputValue = this._formatValue();

      if (this._$input.val() !== sOutputValue) {
        this._$input.val(sOutputValue);
        this._setLabelVisibility();
        this._curpos = this._$input.cursorPos();
      }
    }

    return this;

  };

  sap.m.DateRangeSelection.prototype.setSecondDateValue = function(oSecondDateValue) {

    this.setProperty("secondDateValue", oSecondDateValue, true);

    // Convert date object(s) to value
    var sValue = this._formatValue();

    if (sValue !== this.getValue()) {
      this._lastValue = sValue;
    }
    // Set the property in any case but check validity on output
    this.setProperty("value", sValue, true);

    if (this.getDomRef()) {
      // convert to output
      var sOutputValue = this._formatValue();

      if (this._$input.val() !== sOutputValue) {
        this._$input.val(sOutputValue);
        this._setLabelVisibility();
        this._curpos = this._$input.cursorPos();
      }
    }

    return this;
  };

  //Support of two date range version added into original DatePicker's version
  sap.m.DateRangeSelection.prototype._parseValue = function(sValue) {
    var sInputPattern = "";
    var oFormat;
    var aDates = "";

    //If we have version of control with delimiter, then sValue should consist of two dates delimited with delimiter,
    //hence we have to split the value to these dates
    if ((this.getDelimiter() && (this.getDelimiter() !== "")) && sValue) {
      aDates = sValue.split(" " + this.getDelimiter() + " ");
    }

    if (((!this.getDelimiter() || (this.getDelimiter() === "")) && sValue) ||
       (this.getDelimiter() && (this.getDelimiter() !== "") && sValue && aDates && (aDates.length === 2))) {

      sInputPattern = this.getDisplayFormat();

      if (!sInputPattern) {
        // still no pattern -> use locale format
      sInputPattern = "medium";
      }

      if (sInputPattern === "short" || sInputPattern === "medium" || sInputPattern === "long") {
        oFormat = sap.ui.core.format.DateFormat.getInstance({style: sInputPattern});
      } else {
        oFormat = sap.ui.core.format.DateFormat.getInstance({pattern: sInputPattern});
      }

      //Convert to date object(s)
      if ((!this.getDelimiter() || (this.getDelimiter() === "")) && sValue) {
        this.setProperty("dateValue", oFormat.parse(sValue), true);
      }
      else if (aDates !== "") {
        if ((oFormat.parse(aDates[0]) === null) || (oFormat.parse(aDates[1]) === null)) {
          this.setProperty("dateValue", null, true);
          this.setProperty("secondDateValue", null, true);
          this.setProperty("value", null, true);
        }
        else {
          this.setProperty("dateValue", oFormat.parse(aDates[0]), true);
          this.setProperty("secondDateValue", oFormat.parse(aDates[1]), true);
        }
      }
    }
    else {
        this.setProperty("dateValue", null, true);
        this.setProperty("secondDateValue", null, true);
        this.setProperty("value", null, true);
    }
  };

  //Support of two date range version added into original DatePicker's version
  sap.m.DateRangeSelection.prototype._formatValue = function(oDate1, oDate2) {
    var oDateValue;
    var oSecondDateValue;
    if (oDate1) {
      oDateValue = oDate1;
    }
    else {
      oDateValue = this.getProperty("dateValue");
    }

    if (oDate2) {
      oSecondDateValue = oDate2;
    }
    else {
      oSecondDateValue = this.getProperty("secondDateValue");
    }

    var sValue = "";

    if (((!this.getDelimiter() || (this.getDelimiter() === "")) && oDateValue) ||                 //1) If no delimiter specified, then value is formatted from oDateValue
       (this.getDelimiter() && (this.getDelimiter() !== "") && oDateValue && oSecondDateValue)) { //2) If there is delimiter, then value is formatted from both oDateValue and oSecondDateValue

      var sOutputPattern = "";
      var oFormat;

      sOutputPattern = this.getDisplayFormat();

      if (!sOutputPattern) {
        // still no pattern -> use locale format
          sOutputPattern = "medium";
      }

      if (sOutputPattern === "short" || sOutputPattern === "medium" || sOutputPattern === "long") {
        oFormat = sap.ui.core.format.DateFormat.getInstance({style: sOutputPattern});
      } else {
        oFormat = sap.ui.core.format.DateFormat.getInstance({pattern: sOutputPattern});
      }

      if (this.getDelimiter() && (this.getDelimiter() !== "")) {
        sValue = oFormat.format(oDateValue) + " " + this.getDelimiter() + " " + oFormat.format(oSecondDateValue);
      }
      else {
        sValue = null;
      }
    }

    return sValue;

  };

  sap.m.DateRangeSelection.prototype.onChange = function() {

    var oDateValueOld = this.getDateValue();
    var oSecondDateValueOld = this.getSecondDateValue();
    var sLastValueOld = this._lastValue;

    this._getInputValue();
    _dateRangeValidityCheck(this, oDateValueOld, oSecondDateValueOld);
    this._lastValue = sLastValueOld;

    var sValue = this._formatValue();

    if ((sValue !== this._lastValue) || (sValue === "")) {
      if (this.getDomRef()) {
        this._$input.val(sValue);
      }
      this.setProperty("value", sValue, true);
      this._curpos = this._$input.cursorPos();
      this._setLabelVisibility();
      this._lastValue = sValue;

      if(this._oPopup && this._oPopup.isOpen()) {

        var oStartDate = this.getDateValue();
        if (oStartDate) {
          if (!this._oDateRange.getStartDate() || this._oDateRange.getStartDate().getTime() !== oStartDate.getTime()) {
            this._oDateRange.setStartDate(new Date(oStartDate.getTime()));
            this._oCalendar.focusDate(oStartDate);
          }
        } else {
          if (this._oDateRange.getStartDate()) {
            this._oDateRange.setStartDate(undefined);
          }
        }

        var oEndDate = this.getSecondDateValue();
        if (oEndDate) {
          if (!this._oDateRange.getEndDate() || this._oDateRange.getEndDate().getTime() !== oEndDate.getTime()) {
            this._oDateRange.setEndDate(new Date(oEndDate.getTime()));
            this._oCalendar.focusDate(oEndDate);
          }
        } else {
          if (this._oDateRange.getEndDate()) {
            this._oDateRange.setEndDate(undefined);
          }
        }
      }

      _fireChange(this);

    }
  };

  // Overwrite DatePicker's _getInputValue  to support two date range processing
  sap.m.DateRangeSelection.prototype._getInputValue = function() {

    var sValue = this._$input.val();

    this._parseValue(sValue);
    sValue = this._formatValue();

    return sValue;

  };

  sap.m.DateRangeSelection.prototype.onclick = function(oEvent) {

    if (jQuery(oEvent.target).hasClass("sapUiIcon")) {
      var that = this;
      _toggleOpen(that);
    }

  };

  sap.m.DateRangeSelection.prototype.onfocusin = function(oEvent) {

  if (sap.ui.Device.browser.mobile) {
    if (!jQuery(oEvent.target).hasClass("sapUiIcon")) {
      // on mobile devices open calendar
      var that = this;
      _toggleOpen(that);
    }
  }
  };

  sap.m.DateRangeSelection.prototype.onsapshow = function(oEvent) {

    var that = this;

    _toggleOpen(that);

    oEvent.preventDefault(); // otherwise IE opens the address bar history

  };

  sap.m.DateRangeSelection.prototype.onsapenter = function(oEvent) {

    this.onChange(oEvent);

  };

  //Do nothing in case of PageUp
  sap.m.DateRangeSelection.prototype.onsappageup = function(){}; //EXC_JSLINT_021
  sap.m.DateRangeSelection.prototype.onsappageupmodifiers = function(){}; //EXC_JSLINT_021

  //Do nothing in case of PageDown
  sap.m.DateRangeSelection.prototype.onsappagedown = function(){}; //EXC_JSLINT_021
  sap.m.DateRangeSelection.prototype.onsappagedownmodifiers = function(){}; //EXC_JSLINT_021

  //Support of two date range version of Calendar added into original DatePicker's version
  function _open(oThis){

    if(!oThis._oPopup) {
      jQuery.sap.require("sap.ui.core.Popup");
      oThis._oPopup = new sap.ui.core.Popup();
      oThis._oPopup.setAutoClose(true);
      oThis._oPopup.setDurations(0, 0); // no animations
    }

    if (!oThis._oCalendar) {
      sap.ui.getCore().loadLibrary("sap.ui.unified");
      jQuery.sap.require("sap.ui.unified.library");
      oThis._oCalendar = new sap.ui.unified.Calendar(oThis.getId()+"-cal", {intervalSelection: true});
      oThis._oDateRange = new sap.ui.unified.DateRange();
      oThis._oCalendar.addSelectedDate(oThis._oDateRange);
      oThis._oCalendar.attachSelect(_selectDate, oThis);
      oThis._oCalendar.attachCancel(_cancel, oThis);
      oThis._oPopup.setContent(oThis._oCalendar);
      if (oThis.$().closest(".sapUiSizeCompact").length > 0) {
        oThis._oCalendar.addStyleClass("sapUiSizeCompact");
      }
      oThis._oCalendar.setPopupMode(true);
      oThis._oCalendar.setParent(oThis, undefined, true);
    }

    var oStartDate = oThis.getDateValue();
    var oEndDate = oThis.getSecondDateValue();

    if (oStartDate) {
      if (!oThis._oDateRange.getStartDate() || oThis._oDateRange.getStartDate().getTime() !== oStartDate.getTime()) {
        oThis._oDateRange.setStartDate(new Date(oStartDate.getTime()));
      }
    } else {
      if (oThis._oDateRange.getStartDate()) {
        oThis._oDateRange.setStartDate(undefined);
      }
    }

    if (oEndDate) {
      if (!oThis._oDateRange.getEndDate() || oThis._oDateRange.getEndDate().getTime() !== oEndDate.getTime()) {
        oThis._oDateRange.setEndDate(new Date(oEndDate.getTime()));
      }
    } else {
      if (oThis._oDateRange.getEndDate()) {
        oThis._oDateRange.setEndDate(undefined);
      }
    }

    oThis._oPopup.setAutoCloseAreas([oThis.getDomRef()]);

    var eDock = sap.ui.core.Popup.Dock;
    var sAt = eDock.BeginBottom + "-4"; // as m.Input has some padding around
    oThis._oPopup.open(0, eDock.BeginTop, sAt, oThis, null, "fit", true);
  }

  function _toggleOpen(oThis){
    if (oThis.getEditable() && oThis.getEnabled()) {
      if(!oThis._oPopup || !oThis._oPopup.isOpen()) {
        _open(oThis);
      } else {
        oThis._oPopup.close();
      }
    }

  }

  function _selectDate(){
    var aSelectedDates = this._oCalendar.getSelectedDates();

    if (aSelectedDates.length > 0) {
      var oDate1 = aSelectedDates[0].getStartDate();
      var oDate2 = aSelectedDates[0].getEndDate();

      if (oDate1 && oDate2) {
        var sOutputValue = this._formatValue(oDate1, oDate2);
        if (this._$input.val() !== sOutputValue) {
          this._$input.val(sOutputValue);
          this._setLabelVisibility();
          this._curpos = sOutputValue.length;
          this._$input.cursorPos(this._curpos);
        }

        this._oPopup.close();
        this.focus();
        this.onChange(); //as no change event will be triggered from browser

        //To prevent opening keyboard on mobile device after dates are selected
        if (sap.ui.Device.browser.mobile) {
          window.document.activeElement.blur();
        }
      }
    }
  }

  function _cancel() {
    if(this._oPopup && this._oPopup.isOpen()) {
      this._oPopup.close();
      this.focus();
    }
  }

  function _fireChange(oThis) {
    oThis.fireChange({
      from: oThis.getDateValue(),
      to: oThis.getSecondDateValue()
    });
  }

  function _dateRangeValidityCheck(oThis, oDateValueOld, oSecondDateValueOld) {
    var currentDateValue = oThis.getDateValue();
    var currentSecondDateValue = oThis.getSecondDateValue();

    if ((currentDateValue !== null) && (currentSecondDateValue !== null) && (!_bCorrectDateRange(currentDateValue, currentSecondDateValue))) {
      if ((oDateValueOld !== null) && (currentDateValue.getTime() === oDateValueOld.getTime())) {
        //secondDateValue, i.e. "to" changed and "from" > "to". Hence, "from" (dateValue) has to have same value as "to".
        oThis.setProperty("dateValue", currentSecondDateValue, true);
      }
      else if ((oSecondDateValueOld !== null) && (currentSecondDateValue.getTime() === oSecondDateValueOld.getTime())) {
        //dateValue, i.e. "from" changed and "from" > to. Hence, "to" (secondDateValue) has to have same value as "from".
        oThis.setProperty("secondDateValue", currentDateValue, true);
      }
      else {
        //Both dates changed => "to" will have the same value as "from".
        oThis.setProperty("secondDateValue", currentDateValue, true);
      }
    }
  }

  function _bCorrectDateRange(fromDate, toDate) {
    if (fromDate.getTime() < toDate.getTime()) {
      return true;
    }

    return false;
  }


// to overwrite JS doc

 /**
 * Setter for property <code>value</code>.
 *
 * Property <code>value</code> is not supported in <code>sap.m.DateRangeSelection</code> control.
 *
 * @protected
 * @name sap.m.DateRangeSelection#setValue
 * @function
 */

 /**
 * Getter for property <code>value</code>.
 *
 * Property <code>value</code> is not supported in <code>sap.m.DateRangeSelection</code> control.
 *
 * @protected
 * @name sap.m.DateRangeSelection#getValue
 * @function
 */

 /**
 * Setter for property <code>dateValue</code>.
 *
 * Starting date of the range.
 * Default value is empty/undefined
 *
 * @param {object} oDateValue new value for property dateValue
 * @returns {sap.m.DateRangeSelection} <code>this</code> to allow method chaining.
 * @protected
 * @name sap.m.DateRangeSelection#setDateValue
 * @function
 */

 /**
 * Getter for property <code>dateValue</code>.
 *
 * Starting date of the range.
 * Default value is empty/undefined
 *
 * @returns {object} the value of property secondDateValue
 * @protected
 * @name sap.m.DateRangeSelection#getDateValue
 * @function
 */

 /**
 * Setter for property <code>valueFormat</code>.
 *
 * Property <code>valueFormat</code> is not supported in <code>sap.m.DateRangeSelection</code> control.
 *
 * @protected
 * @name sap.m.DateRangeSelection#setValueFormat
 * @function
 */

 /**
 * Getter for property <code>valueFormat</code>.
 *
 * Property <code>valueFormat</code> is not supported in <code>sap.m.DateRangeSelection</code> control.
 *
 * @protected
 * @name sap.m.DateRangeSelection#getValueFormat
 * @function
 */

 /**
 * On change of date range event.
 *
 * @name sap.m.DateRangeSelection#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {object} oControlEvent.getParameters.from Current starting date after change.
 * @param {object} oControlEvent.getParameters.to Current ending date after change.

 * @public
 */
}());

