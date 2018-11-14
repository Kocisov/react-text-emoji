import React from"react";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,n=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var emojis={};function createEmojisStore(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("object"!==_typeof(e))throw Error("createEmojisStore expects Object of Emojis!");return emojis!==e&&(emojis=e)}function parseMessage(e){var t=-1;return e.split(/\s+/).map(function(e){return t++,emojis[e]?{key:t,type:"EMOJI",value:emojis[e]}:{key:t,type:"TEXT",value:e}})}var defaultComponents={container:function(e){var t=e.children,o=_objectWithoutProperties(e,["children"]);return React.createElement("div",_extends({style:{display:"flex",alignItems:"center"}},o),t)},text:function(e){var t=e.value,o=_objectWithoutProperties(e,["value"]);return React.createElement("span",_extends({style:{marginRight:5}},o),t)},emoji:function(e){var t=e.value,o=_objectWithoutProperties(e,["value"]);return React.createElement("img",_extends({style:{width:30,height:30,marginRight:5},src:t,alt:""},o))}};function Message(e){var t=e.children,o=e.containerComponent,r=void 0===o?defaultComponents.container:o,n=e.emojiComponent,i=void 0===n?defaultComponents.emoji:n,a=e.textComponent,c=void 0===a?defaultComponents.text:a,s=_objectWithoutProperties(e,["children","containerComponent","emojiComponent","textComponent"]),u=parseMessage(t).map(function(e){return"TEXT"===e.type?React.createElement(c,{key:e.key,value:e.value}):React.createElement(i,{key:e.key,url:e.value,value:e.value})});return React.createElement(r,s,u)}export{createEmojisStore,parseMessage,defaultComponents,Message};
