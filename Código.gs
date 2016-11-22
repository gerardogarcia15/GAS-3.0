//SISTEMA DE INSCRIPCIÓN CIRCUITO INTERNACIONAL DE TENIS.

function myFunction() { 

}//Fin funcion


function envios(e){
  var categoria = e.values[12];
  var mascu= "MASCULINA";
  var feme= "FEMENINA";
  
 
     if( categoria==mascu ){
    
     // The code below will send an email with the current date an time
     var now = new Date();
     GmailApp.sendEmail("gerardogarcia.15@campuscamara.es", "escogiste MASCULINA", "The time is: " + now.toString())
    
  
     }else if(categoria==feme){
  
       // The code below will send an email with the current date an time
     var now = new Date();
     GmailApp.sendEmail("gerardogarcia.15@campuscamara.es", "escogiste FEMENINA", "The time is: " + now.toString())
  
  }else{
  
  
       // The code below will send an email with the current date an time
       var now = new Date();
       GmailApp.sendEmail("gerardogarcia.15@campuscamara.es", "NADA", "The time is: " + now.toString())
  
  }//Fin si

}//fin funcion
