var arrOptionsSetor = [];
arrOptionsSetor.push("<option value='' selected>Selecione uma opção</option>");
arrOptionsSetor.push("<option value='Compras'>Compras</option>");
arrOptionsSetor.push("<option value='Financeiro'>Financeiro</option>");
arrOptionsSetor.push("<option value='Controladoria'>Controladoria</option>");

document.getElementById("setor").innerHTML = arrOptionsSetor.join();