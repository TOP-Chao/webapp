Array.prototype.findIndex||(Array.prototype.findIndex=function(e){if(this===null)throw new TypeError("Array.prototype.findIndex called on null or undefined");if(typeof e!="function")throw new TypeError("predicate must be a function");var t=Object(this),n=t.length>>>0,r=arguments[1],i;for(var s=0;s<n;s++){i=t[s];if(e.call(r,i,s,t))return s}return-1});