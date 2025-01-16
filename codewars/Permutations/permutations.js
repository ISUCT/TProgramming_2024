function permutations(lst) {
    if (lst.length === 0) {
        return [];
      }
      if (lst.length === 1) {
        return [lst];
      }
    const listOfPerms = new Set();
    function perms(currentcomb, remains) {
        if (remains.length == 0) {
            listOfPerms.add(currentcomb);
            return;
        }
        for (let i = 0; i < remains.length; i++) {
            const newCurComb = currentcomb + remains[i];
            const newRemains = remains.slice(0,i) + remains.slice(i+1);
            perms(newCurComb, newRemains);
        }
    }
    perms('', lst)
    return Array.from(listOfPerms)
}
