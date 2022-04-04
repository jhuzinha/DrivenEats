function selecionar(item, tipo) {
    const item_selecionado = document.querySelector(`${tipo} .select`); 
    if (item_selecionado !== null) {
        item_selecionado.classList.remove("select")
    }
    item.classList.add("select")   
    finalizar_pedido('.dessert', '.drink', '.food')
}

function finalizar_pedido (tipo1, tipo2, tipo3) {
    const possuiClasse1  = document.querySelector(`${tipo1} .select`);
    const possuiClasse2  = document.querySelector(`${tipo2} .select`);
    const possuiClasse3  = document.querySelector(`${tipo3} .select`);
    if (possuiClasse1 && possuiClasse2 && possuiClasse3) {
        retirar = document.querySelector('.baseboard-hidden')
        retirar.classList.remove('display-none')
    }
}

function realizarPedido(tipo1, tipo2, tipo3) {
    let texto;
    let total;

    
    const sobremesa = document.querySelector(`${tipo1} .select h2`).innerHTML;
    const bebida  = document.querySelector(`${tipo2} .select h2`).innerHTML;
    const prato_principal = document.querySelector(`${tipo3} .select h2`).innerHTML;
    const valor_sobremesa = document.querySelector(`${tipo1} .select h4`).innerHTML.slice(3).replace(",", ".");
    const valor_bebida = document.querySelector(`${tipo2} .select h4`).innerHTML.slice(3).replace(",", ".");
    const valor_prato = document.querySelector(`${tipo3} .select h4`).innerHTML.slice(3).replace(",", ".");

    total =  Number(valor_prato) + Number(valor_bebida) + Number(valor_sobremesa);
    total = total.toFixed(2)
    texto = encodeURIComponent(`Olá, gostaria de fazer o pedido:
- Prato: ${prato_principal}
- Bebida: ${bebida}
- Sobremesa: ${sobremesa}
Total: R$ ${total}`) 
    
    window.open("https://wa.me/55061998234001?text=" + texto)  
}
