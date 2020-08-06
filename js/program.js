function program(){
  var factores={
    FP: function cantidad_compuesta_FP (N,i){
      var F=Math.pow(1+i,N);
      return F;
    },
    PF: function valor_presente_PF (N,i){
      var F=Math.pow(1+i,-N);
      return F;
    },
    FA: function cantidad_compuesta_FA (N,i){
      var F=((Math.pow(1+i,N)-1)/(i));
      return F;
    },
    AF: function fondo_de_amortizacion_AF (N,i){
      var F=((i)/(Math.pow(1+i,N)-1));
      return F;
    },
    PA: function valor_presente_PA (N,i){
      var F=(Math.pow(1+i,N)-1)/(i*Math.pow(1+i,N));
      return F;
    },
    AP: function recuperacion_capital_AP(N,i) {
      let F=(i*Math.pow(1+i,N))/(Math.pow(1+i,N)-1);
      return F;
      },
    PG: function valor_presente_PG (N,i){
      var F=((Math.pow(1+i,N)-i*N-1)/(Math.pow(i,2)*Math.pow(1+i,N)));
      return F;
    },
    AG: function conversion_pagos_AG (N,i){
      var F=((Math.pow(1+i,N)-i*N-1)/(i*(Math.pow(1+i,N)-1)));
      return F;
    },
    PA1: function valor_presente_gradiente_geométrico (N,i,g){
      var F;
      if(i===g){
        F=(N/(1+i));
      }
      else{
        F=((1-(Math.pow((1+g)/(1+i),N)))/(i-g))
      }
      return F;
    }
  }
  var factor = document.getElementById("factor").value;
  var N = parseFloat(document.getElementById('periodos').value);
  var i = parseFloat(document.getElementById('tasa').value);
  var g = parseFloat(document.getElementById('g').value);

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
  else if (factor==='P/A1' && isNaN(parseFloat(document.getElementById('g').value))) {
    document.getElementById('resultado').innerHTML="<span style='color: red;'>Por favor, escriba el valor g.</span>";
    document.getElementById("g").innerText = "0";
    document.getElementById("g").focus();
  }
  else{
    switch(factor){
      case 'F/P':
        var resultado=factores.FP(N,i);
        break;
      case 'P/F':
        var resultado=factores.PF(N,i);
        break;
      case 'F/A':
        var resultado=factores.FA(N,i);
        break;
      case 'A/F':
        var resultado=factores.AF(N,i);
        break;
      case 'P/A':
        var resultado=factores.PA(N,i);
        break;
      case 'A/P':
        var resultado=factores.AP(N,i);
        break;
      case 'P/G':
        var resultado=factores.PG(N,i);
        break;
      case 'A/G':
        var resultado=factores.AG(N,i);
        break;
      case 'P/A1':
        var resultado=factores.PA1(N,i,g);
        break;
    }
    document.getElementById('resultado').innerHTML="<span class='resultado' style='color: green;'>Resultado factor ("+factor+"): "+resultado+"</span>";
  }

}