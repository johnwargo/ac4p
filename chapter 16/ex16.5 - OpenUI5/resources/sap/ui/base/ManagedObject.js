/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./BindingParser','./DataType','./EventProvider','./ManagedObjectMetadata','sap/ui/model/CompositeBinding','sap/ui/model/ContextBinding','sap/ui/model/Model','sap/ui/model/Type','jquery.sap.act','jquery.sap.script','jquery.sap.strings'],function(q,B,D,E,M,C,b,c,T){"use strict";var d=E.extend("sap.ui.base.ManagedObject",{metadata:{"abstract":true,publicMethods:["getId","getMetadata","getModel","setModel","hasModel","bindProperty","unbindProperty","bindAggregation","unbindAggregation","bindObject","unbindObject","getObjectBinding"],library:"sap.ui.core",properties:{},aggregations:{},associations:{},events:{"validationSuccess":{enableEventBubbling:true},"validationError":{enableEventBubbling:true},"parseError":{enableEventBubbling:true},"formatError":{enableEventBubbling:true}}},constructor:function(i,s,S){E.apply(this);if(typeof(i)!="string"&&arguments.length>0){S=s;s=i;if(s&&s.id){i=s["id"]}else{i=null}}if(!i){i=this.getMetadata().uid()||q.sap.uid()}else{var p=d._fnIdPreprocessor;i=(p?p.call(this,i):i);var t=D.getType("sap.ui.core.ID");if(!t.isValid(i)){throw new Error("\""+i+"\" is not a valid ID.")}}this.sId=i;this.mProperties=this.getMetadata().createPropertyBag();this.mAggregations={};this.mAssociations={};this.mMethods={};this.oParent=null;this.aDelegates=[];this.aBeforeDelegates=[];this.iSuppressInvalidate=0;this.oPropagatedProperties={oModels:{},oBindingContexts:{}};this.oModels={};this.oBindingContexts={};this.mBindingInfos={};this.sBindingPath=null;this.mBindingParameters=null;this.mBoundObjects={};this._sOwnerId=d._sOwnerId;try{if(this.register)this.register();if(this._initCompositeSupport){this._initCompositeSupport(s)}if(this.init){this.init()}this.applySettings(s,S)}catch(e){if(this.deregister)this.deregister();throw e}}},M);d.create=function(v,k){if(!v||v instanceof d||typeof v!=="object"||v instanceof String){return v}function g(t){if(typeof t==="function"){return t}if(typeof t==="string"){return q.sap.getObject(t)}}var f=g(v.Type)||g(k&&k.type);if(typeof f==="function"){return new f(v)}var m="Don't know how to create a ManagedObject from "+v+" ("+(typeof v)+")";q.sap.log.fatal(m);throw new Error(m)};d._fnIdPreprocessor=null;d._fnSettingsPreprocessor=null;d.runWithPreprocessors=function(f,p){var o={id:this._fnIdPreprocessor,settings:this._fnSettingsPreprocessor};p=p||{};this._fnIdPreprocessor=p.id;this._fnSettingsPreprocessor=p.settings;try{var r=f.call();this._fnIdPreprocessor=o.id;this._fnSettingsPreprocessor=o.settings;return r}catch(e){this._fnIdPreprocessor=o.id;this._fnSettingsPreprocessor=o.settings;throw e}};d.getOwnerIdFor=function(o){return o&&o._sOwnerId};d.runWithOwner=function(f,o){var a=d._sOwnerId;try{d._sOwnerId=o.getId();var r=f.call();d._sOwnerId=a;return r}catch(e){d._sOwnerId=a;throw e}};d.prototype.applySettings=function(s,S){if(!s||q.isEmptyObject(s)){return this}var m=this.getMetadata(),v=m.getJSONKeys(),a=d.create,p=d._fnSettingsPreprocessor,k,V,K;p&&p.call(this,s);if(s.models){if(typeof s.models!=="object"){throw new Error("models must be a simple object")}if(s.models instanceof c){this.setModel(s.models)}else{for(k in s.models){this.setModel(s.models[k],k==="undefined"?undefined:k)}}delete s.models}if(s.bindingContexts){if(typeof s.bindingContexts!=="object"){throw new Error("bindingContexts must be a simple object")}if(s.bindingContexts instanceof sap.ui.model.Context){this.setBindingContext(s.bindingContexts)}else{for(k in s.bindingContexts){this.setBindingContext(s.bindingContexts[k],k==="undefined"?undefined:k)}}delete s.bindingContexts}if(s.objectBindings){if(typeof s.objectBindings!=="string"&&typeof s.objectBindings!=="object"){throw new Error("binding must be a string or simple object")}if(typeof s.objectBindings==="string"||s.objectBindings.path){this.bindObject(s.objectBindings)}else{for(var k in s.objectBindings){s.objectBindings.model=k;this.bindObject(s.objectBindings[k])}}delete s.objectBindings}for(k in s){if(K=v[k]){V=s[k];switch(K._iKind){case 0:var o=this.extractBindingInfo(V,S);if(o&&typeof o==="object"){this.bindProperty(k,o)}else{this[K._sMutator](o||V)}break;case 1:var o=K.altTypes&&this.extractBindingInfo(V,S);if(o&&typeof o==="object"){this.bindProperty(k,o)}else{this[K._sMutator](a(o||V,K))}break;case 2:var o=this.extractBindingInfo(V,S);if(o&&typeof o==="object"){this.bindAggregation(k,o)}else{V=o||V;if(V&&!q.isArray(V)){V=[V]}if(V){for(var i=0,l=V.length;i<l;i++){this[K._sMutator](a(V[i],K))}}}break;case 3:this[K._sMutator](V);break;case 4:if(V&&!q.isArray(V)){V=[V]}if(V){for(var i=0,l=V.length;i<l;i++){this[K._sMutator](V[i])}}break;case 5:if(typeof V=="function"){this[K._sMutator](V)}else{this[K._sMutator](V[0],V[1],V[2])}break;default:break}}}return this};d.prototype.toString=function(){return"ManagedObject "+this.getMetadata().getName()+"#"+this.getId()};d.prototype.getId=function(){return this.sId};d.prototype.setProperty=function(p,v,s){var o=this.mProperties[p];v=this.validateProperty(p,v);if(q.sap.equal(o,v)){return this}if(s){q.sap.act.refresh();this.iSuppressInvalidate++}this.mProperties[p]=v;if(!this.isInvalidateSuppressed()){this.invalidate()}this.updateModelProperty(p,v,o);E.prototype.fireEvent.apply(this,["_change",{"id":this.getId(),"name":p,"oldValue":o,"newValue":v}]);if(s){this.iSuppressInvalidate--}return this};d.prototype.getProperty=function(p){var v=this.mProperties[p],m=this.getMetadata(),P=m.getAllProperties()[p],t;if(!P){throw new Error("Property \""+p+"\" does not exist in "+this)}t=D.getType(P.type);if(t instanceof D&&t.isArrayType()&&q.isArray(v)){v=v.slice(0)}if(v instanceof String){v=v.valueOf()}return v};d.prototype.validateProperty=function(p,v){var m=this.getMetadata(),P=m.getAllProperties()[p],t;if(!P){throw new Error("Property \""+p+"\" does not exist in "+this)}t=D.getType(P.type);if(t instanceof D&&t.isArrayType()&&q.isArray(v)){v=v.slice(0)}if(v===null||v===undefined){if(P.defaultValue!==null){v=P.defaultValue}else{v=t.getDefaultValue()}}else if(t instanceof D){if(t.getName()=="string"){if(!(typeof v=="string"||v instanceof String)){v=""+v}}else if(t.getName()=="string[]"){for(var i=0;i<v.length;i++){if(!typeof v[i]=="string"){v[i]=""+v[i]}}}else if(!t.isValid(v)){throw new Error("\""+v+"\" is of type "+typeof v+", expected "+t.getName()+" for property \""+p+"\" of "+this)}}else if(!(v in t)){throw new Error("\""+v+"\" is not a valid entry of the enumeration for property \""+p+"\" of "+this)}if(t&&t.normalize&&typeof t.normalize==="function"){v=t.normalize(v)}return v};d.prototype.getOriginInfo=function(p){var v=this.mProperties[p];if(!(v instanceof String&&v.originInfo)){return null}return v.originInfo};d.prototype.setAssociation=function(a,i,s){if(i instanceof d){i=i.getId()}else if(i!=null&&typeof i!=="string"){return this}if(this.mAssociations[a]===i){return this}if(s){this.iSuppressInvalidate++}this.mAssociations[a]=i;if(!this.isInvalidateSuppressed()){this.invalidate()}if(s){this.iSuppressInvalidate--}return this};d.prototype.getAssociation=function(a,o){var r=this.mAssociations[a];if(!r){r=this.mAssociations[a]=o||null}else{if(typeof r.length==='number'&&!(r.propertyIsEnumerable('length'))){return r.slice()}return r}return r};d.prototype.addAssociation=function(a,i,s){if(i instanceof d){i=i.getId()}else if(typeof i!=="string"){return this}if(s){this.iSuppressInvalidate++}var I=this.mAssociations[a];if(!I){I=this.mAssociations[a]=[i]}else{I.push(i)}if(!this.isInvalidateSuppressed()){this.invalidate()}if(s){this.iSuppressInvalidate--}return this};d.prototype.removeAssociation=function(a,o,s){var I=this.mAssociations[a];var e=null;if(s){this.iSuppressInvalidate++}if(typeof(o)=="object"&&o.getId){o=o.getId()}if(typeof(o)=="string"){for(var i=0;i<I.length;i++){if(I[i]==o){o=i;break}}}if(typeof(o)=="number"){if(o<0||o>=I.length){q.sap.log.warning("ManagedObject.removeAssociation called with invalid index: "+a+", "+o)}else{e=I[o];I.splice(o,1);if(!this.isInvalidateSuppressed()){this.invalidate()}}}if(s){this.iSuppressInvalidate--}return e};d.prototype.removeAllAssociation=function(a,s){var i=this.mAssociations[a];if(!i){return[]}if(s){this.iSuppressInvalidate++}delete this.mAssociations[a];if(!this.isInvalidateSuppressed()){this.invalidate()}if(s){this.iSuppressInvalidate--}return i};d.prototype.validateAggregation=function(a,o,m){var e=this.getMetadata(),A=e.getManagedAggregation(a),f,t,i,g;if(!A){if(a&&e._mHiddenAggregations&&e._mHiddenAggregations[a]){A=e._mHiddenAggregations[a];q.sap.log.error("Support for '_mHiddenAggregations' is about to be removed (with 1.12 latest). Hidden aggregations like '"+e.getName()+"."+a+"' instead can be declared like normal aggregations but with visibility:'hidden'.")}else{g="Aggregation \""+a+"\" does not exist in "+this;if(/^sap\.(ui\.core|ui\.commons|ui\.table|ui\.ux3|m|makit|viz|uiext\.inbox)$/.test(e.getLibraryName()||"")){throw new Error(g)}else{q.sap.log.error("Support for undeclared aggregations is about to be removed (with 1.12 latest). Hidden aggregations like '"+e.getName()+"."+a+"' can be declared like normal aggregations but with visibility:'hidden'.");return o}}}if(A.multiple!==m){throw new Error("Aggregation '"+a+"' of "+this+" used with wrong cardinality (declared as "+(A.multiple?"0..n":"0..1")+")")}if(!A.multiple&&!o){return o}t=q.sap.getObject(A.type);if(typeof t==="function"&&o instanceof t){return o}if(o&&o.getMetadata&&o.getMetadata().isInstanceOf(A.type)){return o}f=A.altTypes;if(f&&f.length){if(o==null){return o}for(i=0;i<f.length;i++){t=D.getType(f[i]);if(t instanceof D){if(t.isValid(o)){return o}}else if(o in t){return o}}}g="\""+o+"\" is not valid for aggregation \""+a+"\" of "+this;if(D.isInterfaceType(A.type)){return o}else{throw new Error(g)}};d.prototype.setAggregation=function(a,o,s){var O=this.mAggregations[a];if(O===o){return this}o=this.validateAggregation(a,o,false);if(s){this.iSuppressInvalidate++}if(O instanceof d){O.setParent(null)}this.mAggregations[a]=o;if(o instanceof d){o.setParent(this,a,s)}else{if(!this.isInvalidateSuppressed()){this.invalidate()}}if(s){this.iSuppressInvalidate--}return this};d.prototype.getAggregation=function(a,o){var e=this.mAggregations[a];if(!e){e=this.mAggregations[a]=o||null}if(e){if(typeof e.length==='number'&&!(e.propertyIsEnumerable('length'))){return e.slice()}return e}else{return null}};d.prototype.indexOfAggregation=function(a,o){var e=this.mAggregations[a];if(e){if(e.length==undefined){return-2}for(var i=0;i<e.length;i++){if(e[i]==o){return i}}}return-1};d.prototype.insertAggregation=function(a,o,I,s){if(!o){return this}o=this.validateAggregation(a,o,true);var e=this.mAggregations[a]||(this.mAggregations[a]=[]);var i=I<0?0:(I>e.length?e.length:I);if(i!==I){q.sap.log.warning("ManagedObject.insertAggregation: index '"+I+"' out of range [0,"+e.length+"], forced to "+i)}e.splice(i,0,o);o.setParent(this,a,s);return this};d.prototype.addAggregation=function(a,o,s){if(!o){return this}o=this.validateAggregation(a,o,true);var e=this.mAggregations[a];if(!e){e=this.mAggregations[a]=[o]}else{e.push(o)}o.setParent(this,a,s);return this};d.prototype.removeAggregation=function(a,o,s){var e=this.mAggregations[a],f=null,i;if(!e){return null}if(s){this.iSuppressInvalidate++}if(typeof(o)=="string"){for(i=0;i<e.length;i++){if(e[i]&&e[i].getId()===o){o=i;break}}}if(typeof(o)=="object"){for(i=0;i<e.length;i++){if(e[i]==o){o=i;break}}}if(typeof(o)=="number"){if(o<0||o>=e.length){q.sap.log.warning("ManagedObject.removeAggregation called with invalid index: "+a+", "+o)}else{f=e[o];e.splice(o,1);f.setParent(null);if(!this.isInvalidateSuppressed()){this.invalidate()}}}if(s){this.iSuppressInvalidate--}return f};d.prototype.removeAllAggregation=function(a,s){var e=this.mAggregations[a];if(!e){return[]}if(s){this.iSuppressInvalidate++}delete this.mAggregations[a];for(var i=0;i<e.length;i++){e[i].setParent(null)}if(!this.isInvalidateSuppressed()){this.invalidate()}if(s){this.iSuppressInvalidate--}return e};d.prototype.destroyAggregation=function(a,s){var e=this.mAggregations[a],i,f;if(!e){return this}if(s){this.iSuppressInvalidate++}delete this.mAggregations[a];if(e instanceof d){e.destroy(s)}else if(q.isArray(e)){for(i=e.length-1;i>=0;i--){f=e[i];if(f){f.destroy(s)}}}if(!this.isInvalidateSuppressed()){this.invalidate()}if(s){this.iSuppressInvalidate--}return this};d.prototype.invalidate=function(){if(this.oParent){this.oParent.invalidate(this)}};d.prototype.isInvalidateSuppressed=function(){var i=this.iSuppressInvalidate>0;if(this.oParent&&this.oParent instanceof d){i=i||this.oParent.isInvalidateSuppressed()}return i};d.prototype._removeChild=function(o,a,s){if(!a){q.sap.log.error("Cannot remove aggregated child without aggregation name.",null,this)}else{if(s){this.iSuppressInvalidate++}var i=this.indexOfAggregation(a,o);var A=this.getMetadata().getJSONKeys()[a];if(i==-2){if(A&&this[A._sMutator]){this[A._sMutator](null)}else{this.setAggregation(a,null,s)}}else if(i>-1){if(A&&this[A._sRemoveMutator]){this[A._sRemoveMutator](i)}else{this.removeAggregation(a,i,s)}}else{}if(!this.isInvalidateSuppressed()){this.invalidate()}if(s){this.iSuppressInvalidate--}}};d.prototype.setParent=function(p,a,s){var t=this;if(!p){this.oParent=null;this.sParentAggregationName=null;this.oPropagatedProperties={oModels:{},oBindingContexts:{}};q.sap.act.refresh();return}if(s){q.sap.act.refresh();this.iSuppressInvalidate++}var o=this.getParent();if(o){o._removeChild(this,this.sParentAggregationName)}this.oParent=p;this.sParentAggregationName=a;this.oPropagatedProperties=p._getPropertiesToPropagate();if(this.hasModel()){this.updateBindingContext(false,true,undefined,true);this.updateBindings(true,null);this.propagateProperties(true)}if(p&&!this.isInvalidateSuppressed()){p.invalidate(this)}if(s){this.iSuppressInvalidate--}return this};d.prototype.getParent=function(){return this.oParent};d.prototype.destroy=function(s){var t=this;if(s){this.iSuppressInvalidate++}if(this.exit){this.exit()}if(this._exitCompositeSupport){this._exitCompositeSupport()}for(var a in this.mAggregations){this.destroyAggregation(a,s)}if(this.deregister)this.deregister();if(this.oParent&&this.sParentAggregationName){this.oParent._removeChild(this,this.sParentAggregationName,s)}delete this.oParent;q.each(this.mBindingInfos,function(n,o){if(o.factory){t.unbindAggregation(n,true)}else{t.unbindProperty(n,true)}});if(s){this.iSuppressInvalidate--}E.prototype.destroy.apply(this,arguments);this.setParent=function(){throw Error("The object with ID "+t.getId()+" was destroyed and cannot be used anymore.")};this.bIsDestroyed=true};d.bindingParser=B.simpleParser;d.prototype.isBinding=function(v,k){return"object"===typeof this.extractBindingInfo(v)};d.prototype.extractBindingInfo=function(v,s){if(v&&typeof v==="object"){if(v.ui5object){delete v.ui5object}else if(v.path||v.parts){if(v.template){v.template=d.create(v.template)}return v}}if(typeof v==="string"){return d.bindingParser(v,s,true)}};d.prototype.getBindingInfo=function(n){return this.mBindingInfos[n]};d.prototype.bindObject=function(p,P){var a={},o,m,s;if(typeof p=="object"){var e=p;p=e.path;P=e.parameters;m=e.model;a.events=e.events}s=p.indexOf(">");a.sBindingPath=p;a.mBindingParameters=P;if(s>0){m=p.substr(0,s);a.sBindingPath=p.substr(s+1)}o=this.mBoundObjects[m];if(o&&o.binding){o.binding.detachChange(o.fChangeHandler);o.binding.detachEvents(o.events)}this.mBoundObjects[m]=a;if(this.getModel(m)){this._bindObject(m,a)}return this};d.prototype._bindObject=function(m,o){var a,p,e,t=this;var f=function(g){t.setBindingContext(a.getBoundContext(),m)};e=this.getModel(m);if(this.oParent&&e==this.oParent.getModel(m)){p=this.oParent.getBindingContext(m)}a=e.bindContext(o.sBindingPath,p,o.mBindingParameters);a.attachChange(f);o.binding=a;o.fChangeHandler=f;a.attachEvents(o.events);a.initialize()};d.prototype.bindContext=function(p){return this.bindElement(p)};d.prototype.unbindContext=function(m){return this.unbindElement(m)};d.prototype.unbindObject=function(m){var o=this.mBoundObjects[m];if(o){if(o.binding){o.binding.detachChange(o.fChangeHandler);o.binding.detachEvents(o.events)}delete this.mBoundObjects[m];delete this.oBindingContexts[m];this.updateBindingContext(false,false,m)}return this};d.prototype.bindProperty=function(n,o){var p,f,m,s,F,t,S,a=true,e=this,g=this.getMetadata(),P=g.getAllProperties()[n],k=g.getJSONKeys()[n];if(!P&&!(k&&k.altTypes)){throw new Error("Property \""+n+"\" does not exist in "+this)}if(typeof o=="string"){p=arguments[1];f=arguments[2];m=arguments[3];if(typeof f=="function"){F=f}else if(f instanceof T){t=f}o={formatter:F,parts:[{path:p,type:t,mode:m}]}}if(!o.parts){o.parts=[];o.parts[0]={path:o.path,type:o.type,formatOptions:o.formatOptions,constraints:o.constraints,model:o.model,mode:o.mode};delete o.path;delete o.mode;delete o.model}q.each(o.parts,function(i,h){if(typeof h=="string"){h={path:h};o.parts[i]=h}S=h.path.indexOf(">");if(S>0){h.model=h.path.substr(0,S);h.path=h.path.substr(S+1)}if(o.parts.length>1){h.mode=sap.ui.model.BindingMode.OneWay}if(!e.getModel(h.model)){a=false}});if(this.isBound(n)){this.unbindProperty(n,true)}this.mBindingInfos[n]=o;if(a){this._bindProperty(n,o)}return this};d.prototype._bindProperty=function(n,o){var m,s,a,e,t,f,p=this.getMetadata().getJSONKeys()[n],g=this,h=[],j=function(i){g.updateProperty(n)};a=this.getBindingContext(o.model);q.each(o.parts,function(i,P){a=g.getBindingContext(P.model);m=g.getModel(P.model);t=P.type;if(typeof t=="string"){f=q.sap.getObject(t);t=new f(P.formatOptions,P.constraints)}e=m.bindProperty(P.path,a,o.parameters);e.setType(t,p.type);e.setFormatter(P.formatter);s=!P.mode?m.getDefaultBindingMode():P.mode;e.setBindingMode(s);h.push(e)});if(h.length>1||(o.formatter&&o.formatter.textFragments)){t=o.type;if(typeof t=="string"){f=q.sap.getObject(t);t=new f(o.formatOptions,o.constraints)}e=new C(h,o.useRawValues);e.setType(t,p.type);e.setBindingMode(o.mode)}else{e=h[0]}e.attachChange(j);e.setFormatter(q.proxy(o.formatter,this));o.binding=e;o.modelChangeHandler=j;e.attachEvents(o.events);e.initialize();if(e.getBindingMode()===sap.ui.model.BindingMode.OneTime){e.detachChange(j);e.detachEvents(o.events)}};d.prototype.unbindProperty=function(n,s){var o=this.mBindingInfos[n],p=this.getMetadata().getJSONKeys()[n];if(o){if(o.binding){o.binding.detachChange(o.modelChangeHandler);o.binding.detachEvents(o.events)}delete this.mBindingInfos[n];if(!s){this[p._sMutator](null)}}return this};d.prototype.updateProperty=function(n){var o=this.mBindingInfos[n],a=o.binding,p=this.getMetadata().getJSONKeys()[n];if(o.skipPropertyUpdate)return;try{var v=a.getExternalValue();o.skipModelUpdate=true;this[p._sMutator](v);o.skipModelUpdate=false}catch(e){if(e instanceof sap.ui.model.FormatException){this.fireFormatError({element:this,property:n,type:a.getType(),newValue:a.getValue(),oldValue:this.getProperty(n),exception:e},false,true)}else{throw e}}};d.prototype.updateModelProperty=function(n,v,o){if(this.isBound(n)){var a=this.mBindingInfos[n],e=a.binding;if(a.skipModelUpdate)return;if(e&&e.getBindingMode()==sap.ui.model.BindingMode.TwoWay){try{a.skipPropertyUpdate=true;e.setExternalValue(v);a.skipPropertyUpdate=false;var f=e.getExternalValue();if(v!=f){this.updateProperty(n)}if(e.getType()){this.fireValidationSuccess({element:this,property:n,type:e.getType(),newValue:v,oldValue:o},false,true)}}catch(g){if(g instanceof sap.ui.model.ParseException){this.fireParseError({element:this,property:n,type:e.getType(),newValue:v,oldValue:o,exception:g},false,true)}else if(g instanceof sap.ui.model.ValidateException){this.fireValidationError({element:this,property:n,type:e.getType(),newValue:v,oldValue:o,exception:g},false,true)}else{throw g}}}}};d.prototype.bindAggregation=function(n,o){var p,t,s,f,m=this.getMetadata(),a=m.getAllAggregations()[n];if(!a){throw new Error("Aggregation \""+n+"\" does not exist in "+this)}if(typeof o=="string"){p=arguments[1];t=arguments[2];s=arguments[3];f=arguments[4];o={path:p,sorter:s,filters:f};if(t instanceof d){o.template=t}else if(typeof t==="function"){o.factory=t}}if(this.isBound(n)){this.unbindAggregation(n,true)}if(!(o.template||o.factory)){if(a._doesNotRequireFactory){o.factory=function(){throw new Error("dummy factory called unexpectedly ")}}else{throw new Error("Missing template or factory function for aggregation "+n+" of "+this+" !")}}if(o.template){o.factory=function(i){return o.template.clone(i)}}var S=o.path.indexOf(">");if(S>0){o.model=o.path.substr(0,S);o.path=o.path.substr(S+1)}this.mBindingInfos[n]=o;if(this.getModel(o.model)){this._bindAggregation(n,o)}return this};d.prototype._bindAggregation=function(n,o){var t=this,a,m=function(g){var u="update"+n.substr(0,1).toUpperCase()+n.substr(1);if(t[u]){var s=g&&g.getParameter("reason");if(s){t[u](s)}else{t[u]()}}else{t.updateAggregation(n)}},f=function(g){var r="refresh"+n.substr(0,1).toUpperCase()+n.substr(1);if(t[r]){t[r](g.getParameter("reason"))}else{m(g)}};var e=this.getModel(o.model);if(this.isTreeBinding(n)){a=e.bindTree(o.path,this.getBindingContext(o.model),o.filters,o.parameters)}else{a=e.bindList(o.path,this.getBindingContext(o.model),o.sorter,o.filters,o.parameters)}if(this.bUseExtendedChangeDetection===true){a.enableExtendedChangeDetection()}o.binding=a;o.modelChangeHandler=m;o.modelRefreshHandler=f;a.attachChange(m);a.attachRefresh(f);a.attachEvents(o.events);a.initialize()};d.prototype.unbindAggregation=function(n,s){var o=this.mBindingInfos[n],a=this.getMetadata().getJSONKeys()[n];if(o){if(o.binding){o.binding.detachChange(o.modelChangeHandler);o.binding.detachRefresh(o.modelRefreshHandler);o.binding.detachEvents(o.events)}delete this.mBindingInfos[n];if(!s){this[a._sDestructor]()}}return this};d.prototype.updateAggregation=function(n){var o=this.mBindingInfos[n],a=o.binding,f=o.factory,A=this.getMetadata().getJSONKeys()[n],e,N=null,g=null,G=null,s=null,t=this;this[A._sDestructor]();if(this.isTreeBinding(n)){var i=0,u=function(h,f,a,p){q.each(h,function(I,j){var k=t.getId()+"-"+i++;e=f(k,j);e.setBindingContext(j,o.model);p[A._sMutator](e);u(a.getNodeContexts(j),f,a,e)})};u(a.getRootContexts(),f,a,this)}else{g=A._sMutator+"Group";G=a.isGrouped()&&this[g];q.each(a.getContexts(o.startIndex,o.length),function(I,h){if(G&&a.aSorters.length>0){N=a.aSorters[0].fnGroup(h);if(typeof N=="string"){N={key:N}}if(N.key!==s){var j;if(o.groupHeaderFactory){j=o.groupHeaderFactory(N)}t[g](N,j);s=N.key}}var k=t.getId()+"-"+I;e=f(k,h);e.setBindingContext(h,o.model);t[A._sMutator](e)})}};d.prototype.refreshAggregation=function(n){var o=this.mBindingInfos[n],a=o.binding;a.getContexts(o.startIndex,o.length)};d.prototype.isTreeBinding=function(n){return false};d.prototype.updateBindings=function(u,m){var t=this;function a(o){var p=o.parts,i;if(p&&p.length>1){for(i=0;i<p.length;i++){if((u||p[i].model==m)&&!o.binding.aBindings[i].updateRequired(t.getModel(p[i].model))){return true}}}else if(o.factory){return(u||o.model==m)&&!o.binding.updateRequired(t.getModel(o.model))}else{return(u||p[0].model==m)&&!o.binding.updateRequired(t.getModel(p[0].model))}return false}function e(o){var p=o.parts,i;if(p){for(i=0;i<p.length;i++){if(!t.getModel(p[i].model)){return false}}return true}else if(o.factory){return!!t.getModel(o.model)}return false}q.each(this.mBindingInfos,function(n,o){if(o.binding&&a(o)){o.binding.detachChange(o.modelChangeHandler);if(o.modelRefreshHandler){o.binding.detachRefresh(o.modelRefreshHandler)}o.binding.detachEvents(o.events);delete o.binding}if(!o.binding&&e(o)){if(o.factory){t._bindAggregation(n,o)}else{t._bindProperty(n,o)}}})};d.prototype.isBound=function(n){return(n in this.mBindingInfos)};d.prototype.getObjectBinding=function(m){return this.mBoundObjects[m]&&this.mBoundObjects[m].binding};d.prototype.getEventingParent=function(){return this.oParent};d.prototype.getBinding=function(n){return this.mBindingInfos[n]&&this.mBindingInfos[n].binding};d.prototype.getBindingPath=function(n){var i=this.mBindingInfos[n];return i&&(i.path||(i.parts&&i.parts[0]&&i.parts[0].path))};d.prototype.setBindingContext=function(o,m){var O=this.oBindingContexts[m];if(O!==o){this.oBindingContexts[m]=o;this.updateBindingContext(true,true,m);this.propagateProperties(m)}return this};d.prototype.updateBindingContext=function(s,S,m,u){var o,a={},p,e,t=this;if(u){for(m in this.oModels){if(this.oModels.hasOwnProperty(m)){a[m]=m}}for(m in this.oPropagatedProperties.oModels){if(this.oPropagatedProperties.oModels.hasOwnProperty(m)){a[m]=m}}}else{a[m]=m}for(m in a){if(a.hasOwnProperty(m)){m=m==="undefined"?undefined:m;o=this.getModel(m);e=this.mBoundObjects[m];if(o&&e&&e.sBindingPath&&!s){if(!e.binding){this._bindObject(m,e)}else{p=null;if(this.oParent&&o==this.oParent.getModel(m)){p=this.oParent.getBindingContext(m)}if(p!==e.binding.getContext()){e.binding.setContext(p)}}continue}q.each(this.mBindingInfos,function(n,g){var h=g.binding;var P=g.parts,i;if(!h){return}if(P&&P.length>1){for(i=0;i<P.length;i++){if(P[i].model==m){h.aBindings[i].setContext(t.getBindingContext(P[i].model))}}}else if(g.factory){if(g.model==m){h.setContext(t.getBindingContext(g.model))}}else{if(P[0].model==m){h.setContext(t.getBindingContext(P[0].model))}}});if(!S){var f=this.getBindingContext(m);q.each(this.mAggregations,function(n,A){if(A instanceof d){A.oPropagatedProperties.oBindingContexts[m]=f;A.updateBindingContext(false,false,m)}else if(A instanceof Array){for(var i=0;i<A.length;i++){A[i].oPropagatedProperties.oBindingContexts[m]=f;A[i].updateBindingContext(false,false,m)}}})}}}};d.prototype.getBindingContext=function(m){var o=this.getModel(m);if(this.oBindingContexts[m]){return this.oBindingContexts[m]}else if(o&&this.oParent&&this.oParent.getModel(m)&&o!=this.oParent.getModel(m)){return undefined}else{return this.oPropagatedProperties.oBindingContexts[m]}};d.prototype.setModel=function(m,n){if(!m&&this.oModels[n]){delete this.oModels[n];this.propagateProperties(n);this.updateBindings(false,n)}else if(m&&m!==this.oModels[n]){this.oModels[n]=m;this.propagateProperties(n);this.updateBindingContext(false,true,n);this.updateBindings(false,n)}else{}return this};d.prototype.propagateProperties=function(n){var p=this._getPropertiesToPropagate(),u=n===true,N=u?undefined:n,t=this;q.each(this.mAggregations,function(a,A){if(A instanceof d){t._propagateProperties(n,A,p,u,N)}else if(A instanceof Array){for(var i=0;i<A.length;i++){if(A[i]instanceof d){t._propagateProperties(n,A[i],p,u,N)}}}})};d.prototype._propagateProperties=function(n,o,p,u,N){if(!p){p=this._getPropertiesToPropagate(),u=n===true,N=u?undefined:n}o.oPropagatedProperties=p;o.updateBindings(u,N);o.updateBindingContext(false,true,N,u);o.propagateProperties(n)};d.prototype._getPropertiesToPropagate=function(){var n=q.isEmptyObject(this.oModels),N=q.isEmptyObject(this.oBindingContexts);function m(e,o,a){return e?o:q.extend({},o,a)}if(N&&n){return this.oPropagatedProperties}else{return{oModels:m(n,this.oPropagatedProperties.oModels,this.oModels),oBindingContexts:m(N,this.oPropagatedProperties.oBindingContexts,this.oBindingContexts)}}};d.prototype.getModel=function(n){return this.oModels[n]||this.oPropagatedProperties.oModels[n]};d.prototype.hasModel=function(){return!(q.isEmptyObject(this.oModels)&&q.isEmptyObject(this.oPropagatedProperties.oModels))};d.prototype.clone=function(I,l,o){var t=this,a=true,e=true;if(o){a=!!o.cloneChildren;e=!!o.cloneBindings}if(!I){I=M.uid("clone")||q.sap.uid()}if(!l&&a){l=q.map(this.findAggregatedObjects(true),function(O){return O.getId()})}var m=this.getMetadata(),f=m._oClass,s=this.getId()+"-"+I,S={},p=this.mProperties,k,g,h=d.bindingParser.escape;for(k in p){if(p.hasOwnProperty(k)&&!(this.isBound(k)&&e)){if(typeof p[k]==="string"){S[k]=h(p[k])}else{S[k]=p[k]}}}S["models"]=this.oModels;S["bindingContexts"]=this.oBindingContexts;if(a){q.each(this.mAggregations,function(n,A){if(m.hasAggregation(n)&&!(t.isBound(n)&&e)){if(A instanceof d){S[n]=A.clone(I,l)}else if(q.isArray(A)){S[n]=[];for(var i=0;i<A.length;i++){S[n].push(A[i].clone(I,l))}}else{S[n]=A}}});q.each(this.mAssociations,function(n,A){if(q.isArray(A)){A=A.slice(0);for(var i=0;i<A.length;i++){if(q.inArray(A[i],l)>=0){A[i]+="-"+I}}}else if(q.inArray(A,l)>=0){A+="-"+I}S[n]=A})}g=new f(s,S);q.each(this.mBoundObjects,function(n,i){g.mBoundObjects[n]=q.extend({},i)});q.each(this.mEventRegistry,function(n,L){g.mEventRegistry[n]=L.slice()});if(e){q.each(this.mBindingInfos,function(n,i){var j=q.extend({},i);delete j.binding;if(i.factory){g.bindAggregation(n,j)}else{g.bindProperty(n,j)}})}return g};d._handleLocalizationChange=function(p){var i;if(p===1){q.each(this.oModels,function(n,m){if(m&&m._handleLocalizationChange){m._handleLocalizationChange()}})}else if(p===2){q.each(this.mBindingInfos,function(n,o){var P=o.parts;if(P){for(i=0;i<P.length;i++){if(o.type&&o.type._handleLocalizationChange){o.type._handleLocalizationChange()}}if(o.modelChangeHandler){o.modelChangeHandler()}}})}};d._mapAggregation=function(p,o,n){var k=p.getMetadata().getJSONKeys();var O=k[o];var N=k[n];if(!O||!N||O._iKind!=2||N._iKind!=2){return}var f={"insert":true,"add":true,"remove":true,"removeAll":false,"indexOf":true,"destroy":false,"get":false};function m(P,g){return P+g.substring(0,1).toUpperCase()+g.substring(1)}function a(F){return function(){return this[F].apply(this,arguments)}}for(var P in f){var s=m(P,f[P]?O.singularName:O._sName);var e=m(P,f[P]?N.singularName:N._sName);p[s]=a(e)}};d.prototype.findAggregatedObjects=function(r){var A=[];function f(o){for(var n in o.mAggregations){var a=o.mAggregations[n];if(q.isArray(a)){for(var i=0;i<a.length;i++){A.push(a[i]);if(r){f(a[i])}}}else if(a instanceof d){A.push(a);if(r){f(a)}}}}f(this);return A};return d},true);
