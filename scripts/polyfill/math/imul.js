Math.imul=Math.imul||function(e,t){var n=e>>>16&65535,r=e&65535,i=t>>>16&65535,s=t&65535;return r*s+(n*s+r*i<<16>>>0)|0};