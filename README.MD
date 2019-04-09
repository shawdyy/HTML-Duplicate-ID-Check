# Checkyl

With Checkyl you can check if a webpage has a used a html id for multiple items. According to [W3C](https://www.w3.org/TR/html401/struct/global.html#h-7.5.2) an id *"must be unique in a document"*. 

## Installation

For now you can use Checkyl only from the devTools of your browser. There will (hopefully) be a Browser-Extension for Firefox and Chrome soon.

1. Copy the Content of the checkForDuplicates.min.js to your clipboard.
2. Open your devtools.
3. Copy this code and paste it in the console of your devtools:
   ```javascript
   window.localStorage.setItem('checkyl', 'function check(){var e=[];if(cNodes(document.querySelectorAll("body"),[],e),console.clear(),console.log("%c-= Checkyl =-","background-color: darkred; color: white; font-size: 2em; font-weight: bold;"),console.log("%cby Nils Kummert","background-color: darkred; color: white; font-size: 1.1em; font-weight: bold;"),console.log(""),0===e.length)console.log("%cNo duplicate ids! Congratulations!","color: green; font-weight: bold;");else{console.log("%cOh no, there are "+e.length.toString()+" id duplicates:","color: red; font-weight: bold;");for(var o=0,n=e;o<n.length;o++){var l=n[o];console.groupCollapsed("ID: %c"+l.elements[0].id,"color: orange; font-weight: bold;"),console.group("Elements:");for(var t=0;t<l.elements.length;t++)console.log(l.elements[t]);console.groupEnd(),console.groupEnd()}}console.log("")}function cNodes(e,o,n){for(var l=function(e){if(e.children.length>0)cNodes(e.children,o,n);else if(""!==e.id)if(o.includes(e.id)){if(n.length<1){var l=new Duplicates(e.id);document.querySelectorAll("#"+e.id).forEach(function(e){l.push(e)}),n.push(l)}else if(duplicateInArray(n,e.id)){var t=new Duplicates(e.id);document.querySelectorAll("#"+e.id).forEach(function(e){t.push(e)}),n.push(t)}}else o.push(e.id)},t=0,c=e;t<c.length;t++){l(c[t])}}function duplicateInArray(e,o){for(var n=0,l=e;n<l.length;n++){if(l[n].id===o)return!1}return!0}var Duplicates=function(){function e(e){this.id=e,this.elements=[]}return e.prototype.push=function(e){this.elements.push(e)},e}();check();');
   ```
4. Now Checkyl is ready to use. To check an webpage just open your console and type in the following code:
   ```javascript
   eval(window.localStorage["checkyl"]);
   ```
   Keep in mind that you shouldn't use `eval()` from untrusted sources!