YUI.add("editor-bidi",function(H){var G=function(){G.superclass.constructor.apply(this,arguments);},C="host",B="dir",D="BODY",A="nodeChange",F="bidiContextChange",E=D+" > p";H.extend(G,H.Base,{lastDirection:null,firstEvent:null,_checkForChange:function(){var J=this.get(C),L=J.getInstance(),K=new L.Selection(),I,M;if(K.isCollapsed){I=G.blockParent(K.focusNode);M=I.getStyle("direction");if(M!==this.lastDirection){J.fire(F,{changedTo:M});this.lastDirection=M;}}else{J.fire(F,{changedTo:"select"});this.lastDirection=null;}},_afterNodeChange:function(I){if(this.firstEvent||G.EVENTS[I.changedType]){this._checkForChange();this.firstEvent=false;}},_afterMouseUp:function(I){this._checkForChange();this.firstEvent=false;},initializer:function(){var I=this.get(C);this.firstEvent=true;I.after(A,H.bind(this._afterNodeChange,this));I.after("dom:mouseup",H.bind(this._afterMouseUp,this));}},{EVENTS:{"backspace-up":true,"pageup-up":true,"pagedown-down":true,"end-up":true,"home-up":true,"left-up":true,"up-up":true,"right-up":true,"down-up":true,"delete-up":true},BLOCKS:H.Selection.BLOCKS+",LI,HR,"+D,DIV_WRAPPER:"<DIV></DIV>",blockParent:function(K,J){var I=K,M,L;if(!I){I=H.one(D);}if(!I.test(G.BLOCKS)){I=I.ancestor(G.BLOCKS);}if(J&&I.test(D)){M=H.Node.create(G.DIV_WRAPPER);I.get("children").each(function(O,N){if(N===0){L=O;}else{M.append(O);}});L.replace(M);M.prepend(L);I=M;}return I;},_NODE_SELECTED:"bidiSelected",addParents:function(L){var I,K,J;for(I=0;I<L.length;I+=1){L[I].setData(G._NODE_SELECTED,true);}for(I=0;I<L.length;I+=1){K=L[I].get("parentNode");if(!K.test(D)&&!K.getData(G._NODE_SELECTED)){J=true;K.get("children").some(function(M){if(!M.getData(G._NODE_SELECTED)){J=false;return true;}});if(J){L.push(K);K.setData(G._NODE_SELECTED,true);}}}for(I=0;I<L.length;I+=1){L[I].clearData(G._NODE_SELECTED);}return L;},NAME:"editorBidi",NS:"editorBidi",ATTRS:{host:{value:false}}});H.namespace("Plugin");H.Plugin.EditorBidi=G;H.Plugin.ExecCommand.COMMANDS.bidi=function(L,P){var O=this.getInstance(),J=new O.Selection(),I,M,N,Q,K;O.Selection.filterBlocks();if(J.isCollapsed){M=G.blockParent(J.anchorNode);if(!P){K=M.getAttribute(B);if(!K||K=="ltr"){P="rtl";}else{P="ltr";}}M.setAttribute(B,P);I=M;}else{N=J.getSelected();Q=[];N.each(function(R){Q.push(G.blockParent(R));});Q=O.all(G.addParents(Q));Q.setAttribute(B,P);I=Q;}this.get(C).get(C).editorBidi._checkForChange();return I;};},"@VERSION@",{requires:["editor-base"],skinnable:false});