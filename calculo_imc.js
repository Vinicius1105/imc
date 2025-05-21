
    function calcularIMC(){

        const peso = parseFloat(document.getElementById("peso").value);
        const altura = parseFloat(document.getElementById("altura").value);
        const resultado = document.getElementById("resultado");
        if (!peso || !altura) {
          resultado.textContent = "Por favor, preencha todos os campos.";
          return;
        }
        const imc = peso / (altura * altura);
        let classificacao = "";
        if (imc <= 18.5)
        {
        classificacao = "Abaixo do normal";
        } else if (imc <= 24.9) {
          classificacao = "Normal";
        } else if (imc <= 29.9) {
          classificacao = "Sobrepeso";
        } else if (imc <= 34.9) {
          classificacao = "Obesidade grau I";
        } else if (imc <= 39.9) {
          classificacao = "Obesidade grau II";
        } else {
          classificacao = "Obesidade grau III";
        }
        
        document.getElementById('resultado').textContent = classificacao;
      }


      