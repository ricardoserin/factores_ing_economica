function program(){
  var factores={
    AP: function recuperacion_capital_AP(N,i) {
      let F=(i*Math.pow(1+i,N))/(Math.pow(1+i,N)-1);
      return F;
      }
  }
  var factor = document.getElementById("factor").value;
  var N = parseFloat(document.getElementById('periodos').value);
  var i = parseFloat(document.getElementById('tasa').value);

  //evaluamos si se ingresaron los datos
  if (isNaN(parseFloat(document.getElementById('tasa').value))) {
    document.getElementById('resultado').innerHTML="<span style='color: red;'>Por favor, ingrese la tasa.</span>";
    document.getElementsById("tasa").innerText = "0";
    document.getElementsById("tasa").focus();
  } 
  else if (isNaN(parseFloat(document.getElementById('periodos').value))) {
    document.getElementById('resultado').innerHTML="<span style='color: red;'>Por favor, escriba un número de periodos</span>";
    document.getElementById("periodos").innerText = "0";
    document.getElementById("periodos").focus();
  }
  else{
    switch(factor){
      case 'A/P':
        var resultado=factores.AP(N,i);
        document.getElementById('resultado').innerHTML="<span style='color: green;'>"+factores.AP(N,i)+"</span>";
        break;
    }
  }

}