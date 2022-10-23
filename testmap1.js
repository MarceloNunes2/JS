
const list = [
    {name: `Rodolfo`, vip:true},
    {name: `Rodolfo`, vip:false},
    {name: `Rodolfo`, vip:true},
    {name: `Rodolfo`, vip:true},
    {name: `Rodolfo`, vip:false},
    {name: `Rodolfo`, vip:true},
    {name: `Rodolfo`, vip:false},
];


const newlist =  list.map((client) =>{

    const newList = {
        name: client.name,
        vip: client.vip,
        sector: client.vip ? `Black` : `Green`
    } 
    return newList
}
)

console.log(newlist)