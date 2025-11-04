function calcular(){
    //  passo 1 - obter o valor que o usuário digitou no INPUT
    //  passo 2 - realizar o calculo
    //  passo 3 - alterar o conteúdo do que tem na tag SPAN

    let valorbr = document.getElementById("valorbr").value;
    fetch("https://api.frankfurter.dev/v1/latest?base=USD&to=BRL")
       .then(res => res.json())
       .then( res2 => {
          let valorus = valorbr * res2.rates.BRL;
          document.getElementById("valor").innerHTML = valorus;
          document.getElementById("cotacao").innerHTML = res2.rates.BRL;
          
       })
       .catch( err => {
          alert("Erro ao receber cotacao do dolar!")
       })








    
    
}