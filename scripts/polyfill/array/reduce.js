Array.prototype.reduce||(Array.prototype.reduce=function(e){"use strict";if(this==null)throw new TypeError("Array.prototype.reduce called on null or undefined");if(typeof e!="function")throw new TypeError(e+" is not a function");var t=Object(this),n=t.length>>>0,r=0,i;if(arguments.length==2)i=arguments[1];else{while(r<n&&!(r in t))r++;if(r>=n)throw new TypeError("Reduce of empty array with no initial value");i=t[r++]}for(;r<n;r++)r in t&&(i=e(i,t[r],r,t));return i});