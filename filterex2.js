const companies = [
    {name:`Sansung`,marketValue:50,Ceo:`Kim Hyum Suk`,foundedOn: 1938},
    {name:`Microsoft`,marketValue:415,Ceo:`Satya Nadella`,foundedOn: 1975},
    {name:`Itel`,marketValue:117,Ceo:`Brian Krzanich`,foundedOn: 1968},
    {name:`Facebook`,marketValue:383,Ceo:`Marck Zuckenberg`,foundedOn: 2004},
    {name:`Soptfy`,marketValue:30,Ceo:`Daniel ek`,foundedOn: 2006},
    {name:`Apple`,marketValue:845,Ceo:`Tim Cook`,foundedOn: 1976},
];


const newCompany = companies.filter(companys => {
    if (companys.foundedOn <= 1975) return false
    if (companys.marketValue <= 200) return false

    return true
})

console.log(newCompany)