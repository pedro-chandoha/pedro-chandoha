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
            alert(`Seu salario liquido sera de ${salarioLiquido.toFixed(2)} Reais`);
        }else{
            if(salario <= 3751.05){
                alert("Você pagara 15% de IRPF");
                salarioLiquido = salario - (salario*0.15);
                alert(`Seu salario liquido sera de ${salarioLiquido.toFixed(2)} Reais`);
            }else{
                if(salario <= 4664.68){
                    alert("Você pagara 22,5% de IRPF");
                    salarioLiquido = salario - (salario*0.225);
                    alert(`Seu salario liquido sera de ${salarioLiquido.toFixed(2)} Reais`);
                }else{
                    alert("Você pagara 27,5% de IRPF");
                    salarioLiquido = salario - (salario*0.275);
                    alert(`Seu salario liquido sera de ${salarioLiquido.toFixed(2)} Reais`);
                }
            }
        }
    }
}
function calculoAngulo() {
    let catetoAdjascente = prompt("Digite o Valor do Cateto Adjascente:");
    while(catetoAdjascente<=0 || isNaN(catetoAdjascente) || catetoAdjascente.trim === ''){
      catetoAdjascente = prompt("Valor inválido, digite novamente");
    }
    catetoAdjascente = parseFloat(catetoAdjascente);
  
    let catetoOposto = prompt("Digite o Valor do Cateto Oposto:");
    while(catetoOposto<=0 || isNaN(catetoOposto) || catetoOposto.trim === ''){
      catetoOposto = prompt("Valor inválido, digite novamente");
    }
    catetoOposto = parseFloat(catetoOposto);
    let Hipotenusa = prompt("Digite o Valor do Hipotenusa:");
    while(Hipotenusa<=0 || isNaN(Hipotenusa) || Hipotenusa.trim === ''){
      Hipotenusa = prompt("Valor inválido, digite novamente");
    }
    if (Hipotenusa <= catetoAdjascente || Hipotenusa <= catetoOposto) {
      alert("Valor inválido, Minha bola não deixa")
    }else{
    Hipotenusa = parseFloat(Hipotenusa); 
    let tangente, seno, cosseno;
    tangente = catetoOposto/catetoAdjascente;
    cosseno = catetoAdjascente/Hipotenusa;
    seno = catetoOposto/Hipotenusa;
    alert(`A tenguente do angulo é de ${tangente.toFixed(2)}`);
    alert(`O cosseno do angulo é de ${cosseno.toFixed(2)}`);
    alert(`O seno do angulo é de ${seno.toFixed(2)}`);
  }
  }