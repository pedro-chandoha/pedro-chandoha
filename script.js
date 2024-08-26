function irpf(){
    let salario = prompt("Digite seu salario, use . no lugar da virgula:");
    while (salario.trim === '' || isNaN(salario)){
        prompt("Valor invalido, digite novamente");
    }
    salario = parseFloat(salario);
    let salarioLiquido;
    if(salario <= 2259.20){
        alert("Você é isento do IRPF!");
    }else{
        if(salario <= 2826.65){
            alert("Você Pagara 7,5% de IRPF!");
            salarioLiquido = salario - (salario*0.075);
            alert(`Seu salario liquido sera de ${salarioLiquido}`);
        }else{
            if(salario <= 3751.05){
                alert("Você pagara 15% de IRPF");
                salarioLiquido = salario - (salario*0.15);
                alert(`Seu salario liquido sera de ${salarioLiquido}`);
            }else{
                if(salario <= 4664.68){
                    alert("Você pagara 22,5% de IRPF");
                    salarioLiquido = salario - (salario*0.225);
                    alert(`Seu salario liquido sera de ${salarioLiquido}`);
                }else{
                    alert("Você pagara 27,5% de IRPF");
                    salarioLiquido = salario - (salario*0.275);
                    alert(`Seu salario liquido sera de ${salarioLiquido}`)
                }
            }
        }
    }
}