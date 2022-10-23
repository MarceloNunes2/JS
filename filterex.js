const list = [20,4,8,1000];

const result = list.filter ( par => {
    if(par % 2 !== 0) return false
    if(par % 5  !== 0) return false

    return true
})

console.log(result)