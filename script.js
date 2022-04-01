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