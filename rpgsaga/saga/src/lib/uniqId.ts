export const getUniqId = (() => {
    let id = 0
    return () => `uniqId-${id++}`
})()