YUI.add("datasource-xmlschema",function(b){var a=function(){a.superclass.constructor.apply(this,arguments);};b.mix(a,{NS:"schema",NAME:"dataSourceXMLSchema",ATTRS:{schema:{}}});b.extend(a,b.Plugin.Base,{initializer:function(c){this.doBefore("_defDataFn",this._beforeDefDataFn);},_beforeDefDataFn:function(f){var d=(b.DataSource.IO&&(this.get("host") instanceof b.DataSource.IO)&&f.data.responseXML&&(f.data.responseXML.nodeType===9))?f.data.responseXML:f.data,c=b.DataSchema.XML.apply.call(this,this.get("schema"),d);if(!c){c={meta:{},results:d};}this.get("host").fire("response",b.mix({response:c},f));return new b.Do.Halt("DataSourceXMLSchema plugin halted _defDataFn");}});b.namespace("Plugin").DataSourceXMLSchema=a;},"@VERSION@",{requires:["datasource-local","plugin","dataschema-xml"]});