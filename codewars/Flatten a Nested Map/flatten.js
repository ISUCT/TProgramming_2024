
function flattenMap(map) {
    var ans = {};
    function rec(floor,key) {
        Object.keys(floor).forEach(function(i) {
            if (typeof floor[i] === 'object' && floor[i] !== null && !Array.isArray(floor[i])) {
                return rec(floor[i], key.concat(i));
            }
            ans[key.concat(i).join("/")] = floor[i];
        });
    }
    rec(map, []);
    return ans;
  }
