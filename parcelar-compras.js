const compras = [
    {nome: `lucas`, idade :18, sexo:`masculino`},
    {nome: `luke`, idade :19, sexo:`masculino`},
    {nome: `lucy`, idade :20, sexo:`Feminino`},
    {nome: `luana`, idade :38, sexo:`Feminino`},
    {nome: `luan`, idade :28, sexo:`masculino`},
    {nome: `livia`, idade :48, sexo:`Feminino`},
    {nome: `laura`, idade :17, sexo:`Feminino`},
    {nome: `lite`, idade :10, sexo:`masculino`},
];
function compra()
compras.forEach((nome,valor,primeiracompra) => {
    
    if(primeiracompra){
    if(valor > 1800){
        console.log(`Senhor ${nome} sua compra foi de ${valor} e obtve um desconto de ${(valor - 0.10.toFixed(2))}`)
    }else{
        console.log(`Senhor ${nome} sua compra foi de ${valor} e não obteve desconto`)
    }
}
})
compras(`Lucas`,1900)