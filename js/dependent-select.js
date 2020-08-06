var nFactorial_1=new Array("Cantidad compuesta (F/P)","Valor presente (P/F)");
var nFactorial_1_value=new Array("F/P","P/F");
var nFactorial_2=new Array("Cantidad compuesta (F/A)","Fondo de amortización (A/F)","Valor presente (P/A)","Recuperación de capital (A/P)");
var nFactorial_2_value=new Array("F/A","A/F", "P/A", "A/P");
var nFactorial_3=new Array("Valor presente del gradiente lineal (P/G)","Factor de conversión de pagos iguales (A/G)", "Valor presente del gradiente geométrico P/A1");
var nFactorial_3_value=new Array("P/G","A/G", "P/A1");
var todasNFactoriales = [
  [],
  nFactorial_1,
  nFactorial_2,
  nFactorial_3,
];

var todasNFactoriales_value = [
  [],
  nFactorial_1_value,
  nFactorial_2_value,
  nFactorial_3_value,
];

function cambia_notacionFactorial(){ 
   //tomo el valor del select del pais elegido 
   var flujo 
   flujo = document.f1.tipo_flujo[document.f1.tipo_flujo.selectedIndex].value 
   //miro a ver si el pais está definido 
   if (flujo != 0) { 
      document.getElementById('factor-container').className='';
      //si estaba definido, entonces coloco las opciones de la provincia correspondiente. 
      //selecciono el array de provincia adecuado 
      mis_nFactoriales=todasNFactoriales[flujo]
      mis_nFactoriales_value=todasNFactoriales_value[flujo]
      //calculo el numero de provincias 
      num_nFactorial = mis_nFactoriales.length 
      //marco el número de provincias en el select 
      document.f1.factor.length = num_nFactorial
      //para cada provincia del array, la introduzco en el select 
      for(i=0;i<num_nFactorial;i++){ 
         document.f1.factor.options[i].value=mis_nFactoriales_value[i] 
         document.f1.factor.options[i].text=mis_nFactoriales[i] 
      }	
   }else{ 
      //si no había provincia seleccionada, elimino las provincias del select 
      document.f1.factor.length = 1 
      //coloco un guión en la única opción que he dejado 
      document.f1.factor.options[0].value = "-" 
      document.f1.factor.options[0].text = "Debe seleccionar primero un tipo de flujo" 
   } 
   //marco como seleccionada la opción primera de provincia 
   document.f1.factor.options[0].selected = true 
}

function elige_grad_geometrico(){
   if(document.f1.factor[document.f1.factor.selectedIndex].value==="P/A1"){
      document.getElementById('datos').className="form__datos";
      document.getElementById('valor_g').className="";
   }
   else{
      document.getElementById('datos').className="form__datos";
      document.getElementById('valor_g').className="hidden";
      // document.getElementById('datos').innerHTML=
      //    "<label for='tasa'>Tasa de interés (en decimales)<input id='tasa' name='tasa' type='text'></label>"
      //    +"<label for='periodos'>Número de periodos<input id='periodos' name='periodos' type='number'></label>";
   }
}