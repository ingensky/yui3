YUI.add("editor-br",function(C){var D=function(){D.superclass.constructor.apply(this,arguments);},A="host",B="li";C.extend(D,C.Base,{_onKeyDown:function(I){if(I.stopped){I.halt();return;}if(I.keyCode==13){var F=this.get(A),H=F.getInstance(),G=new H.Selection(),E="";if(G){if(C.UA.ie){if(!G.anchorNode||(!G.anchorNode.test(B)&&!G.anchorNode.ancestor(B))){G._selection.pasteHTML("<br>");G._selection.collapse(false);G._selection.select();I.halt();}}if(C.UA.webkit){if(!G.anchorNode.test(B)&&!G.anchorNode.ancestor(B)){F.frame._execCommand("insertlinebreak",null);I.halt();}}}}},_afterEditorReady:function(){var E=this.get(A).getInstance();try{E.config.doc.execCommand("insertbronreturn",null,true);}catch(F){}if(C.UA.ie||C.UA.webkit){E.on("keydown",C.bind(this._onKeyDown,this),E.config.doc);}},_onNodeChange:function(G){switch(G.changedType){case"backspace-up":case"backspace-down":case"delete-up":var F=this.get(A).getInstance();var H=G.changedNode;var E=F.config.doc.createTextNode(" ");H.appendChild(E);H.removeChild(E);break;}},initializer:function(){var E=this.get(A);if(E.editorPara){C.error("Can not plug EditorBR and EditorPara at the same time.");return;}E.after("ready",C.bind(this._afterEditorReady,this));if(C.UA.gecko){E.on("nodeChange",C.bind(this._onNodeChange,this));}}},{NAME:"editorBR",NS:"editorBR",ATTRS:{host:{value:false}}});C.namespace("Plugin");C.Plugin.EditorBR=D;},"@VERSION@",{requires:["node"],skinnable:false});