function irpf() {
    let salarioBruto = prompt("Digite seu salario, use . no lugar da virgula:");
    while (salarioBruto.trim === '' || isNaN(salarioBruto)) {
        prompt("Valor invalido, digite novamente");
    }
    salarioBruto = parseFloat(salarioBruto);
    let salarioLiquido;
    let taxa;
    if (salarioBruto <= 2259.20) {
        alert("Você é isento do IRPF!");
    } else {
        if (salarioBruto <= 2826.65) {
            alert("Você Pagara 7,5% de IRPF!");
            salarioLiquido = (salarioBruto - 2259.20) * 0.075;
            alert(`Seu salario liquido sera de ${salarioLiquido.toFixed(2)} Reais`);
            taxa = salarioLiquido - salarioBruto;
            alert(`Será pago ${taxa.toFixed(2)} Reais de imposto`);
        } else {
            if (salario <= 3751.05) {
                alert("Você pagara 15% de IRPF");
                salarioLiquido = (salarioBruto - 2259.20) * 0.15;
                alert(`Seu salario liquido sera de ${salarioLiquido.toFixed(2)} Reais`);
                taxa = salarioLiquido - salarioBruto;
                alert(`Será pago ${taxa.toFixed(2)} Reais de imposto`);
            } else {
                if (salarioBruto <= 4664.68) {
                    alert("Você pagara 22,5% de IRPF");
                    salarioLiquido = (salarioBruto - 2259.20) * 0.225;
                    alert(`Seu salario liquido sera de ${salarioLiquido.toFixed(2)} Reais`);
                    taxa = salarioLiquido - salarioBruto;
                    alert(`Será pago ${taxa.toFixed(2)} Reais de imposto`);
                } else {
                    alert("Você pagara 27,5% de IRPF");
                    salarioLiquido = (salarioBruto - 2259.20) * 0.275;
                    alert(`Seu salario liquido sera de ${salarioLiquido.toFixed(2)} Reais`);
                    taxa = salarioLiquido - salarioBruto;
                    alert(`Será pago ${taxa.toFixed(2)} Reais de imposto`);
                }
            }
        }
    }
}
function calculoAngulo() {
    let catetoAdjascente = prompt("Digite o Valor do Cateto Adjascente:");
    while (catetoAdjascente <= 0 || isNaN(catetoAdjascente) || catetoAdjascente.trim === '') {
        catetoAdjascente = prompt("Valor inválido, digite novamente");
    }
    catetoAdjascente = parseFloat(catetoAdjascente);

    let catetoOposto = prompt("Digite o Valor do Cateto Oposto:");
    while (catetoOposto <= 0 || isNaN(catetoOposto) || catetoOposto.trim === '') {
        catetoOposto = prompt("Valor inválido, digite novamente");
    }
    catetoOposto = parseFloat(catetoOposto);
    let Hipotenusa = prompt("Digite o Valor do Hipotenusa:");
    while (Hipotenusa <= 0 || isNaN(Hipotenusa) || Hipotenusa.trim === '') {
        Hipotenusa = prompt("Valor inválido, digite novamente");
    }
    Hipotenusa = parseFloat(Hipotenusa);
    if (Hipotenusa <= catetoAdjascente || Hipotenusa <= catetoOposto) {
        alert("Valor inválido, Minha bola não deixa")
    } else {
        if ((Hipotenusa * Hipotenusa) != (catetoAdjascente * catetoAdjascente) + (catetoOposto * catetoOposto)) {
            alert("Valores inválidos, não é triangulo retangulo");
        } else {
            let tangente, seno, cosseno;
            tangente = catetoOposto / catetoAdjascente;
            cosseno = catetoAdjascente / Hipotenusa;
            seno = catetoOposto / Hipotenusa;
            alert(`A tenguente do angulo é de ${tangente.toFixed(2)}`);
            alert(`O cosseno do angulo é de ${cosseno.toFixed(2)}`);
            alert(`O seno do angulo é de ${seno.toFixed(2)}`);
        }
    }
}