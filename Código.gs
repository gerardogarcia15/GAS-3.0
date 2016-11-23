//SISTEMA DE INSCRIPCIÓN CIRCUITO INTERNACIONAL DE TENIS.


function myFunction() { 

}//Fin funcion


function importarDatosPredefinidos(e){   //Funncion para Importar datos Predefinidos que voy a utilizar cada vez que se ejecute.
          /////////////////////////////////////////////////////////     Cambiar valor de "destino" para saber en que hoja debe ser introducido los datos
          var categoria = e.values[11];
          var mascu= 'MASCULINA';
          var feme= 'FEMENINA';
          
          var competicion= e.values[12];
          var atp250= 'ATP250';
          var atp500= 'ATP500';
          var atp1000= 'ATP1000';
          var grandSlam= 'GRAND SLAM';
          
          var destino;
          
          var destino;
          var ss = SpreadsheetApp.getActiveSpreadsheet();
          var sheet = ss.getSheetByName("INSCRITOS");
          var ultimaFila = sheet.getLastRow();
          
           if(categoria==mascu){
                  if(competicion==atp250){
                        destino="C.M ATP250";
                  }else if(competicion==atp500){
                        destino="C.M ATP500";
                  }else if(competicion==atp1000){
                        destino="C.M ATP1000";
                  }else if(competicion==grandSlam){
                        destino="C.M GRAND SLAM";
                  }else{
                         destino="ERROR EN SELECCION:1";
                  }//Fin Si              
          }else if(categoria==feme){
                  if(competicion==atp250){
                        destino="C.F ATP250";
                  }else if(competicion==atp500){
                        destino="C.F ATP500";
                  }else if(competicion==atp1000){
                        destino="C.F ATP1000";
                  }else if(competicion==grandSlam){
                        destino="C.F GRAND SLAM";
                  }else{
                         destino="ERROR EN SELECCION:2";
                  }//Fin Si
          }else{
                  destino="ERROR EN SELECCION:3";
          }//Fin Si
          ////////////////////////////////////////////////////////
         
           var importRanges = [{ 
              destinySheetName : destino, 
              fromFileKey : "1QznemvsqD1fr2_zhxc-isZt2KXRC6qh2QFZYnPoeqsA",
              fromSheet : "INSCRITOS",
              fromRange : "A"+ultimaFila+":Z"+ultimaFila
            },];
            
          importarConArray( importRanges );
}//Fin Funcion

 
 
 
function importarConArray( importRanges ){ // Funcion Para introducir los datos que quiero exportar en un ARRAY para luego exportarlos
        for (var i=0;i<importRanges.length;i++) {
          importarDatosExternos(importRanges[i].destinySheetName,importRanges[i].fromFileKey,importRanges[i].fromSheet,importRanges[i].fromRange);
        }//Fin Para
}//Fin Funcion



function importarDatosExternos(destinySheetName,fromFileKey,fromSheet,fromRange){ // Funcion para importar los datos que tengo, en la nueva hoja
        var ss = SpreadsheetApp.getActiveSpreadsheet();
        var sheet = ss.getSheetByName(destinySheetName);
        var ultimaFila = sheet.getLastRow()+1;
        
        if (sheet == null ) {
          ss.insertSheet(destinySheetName);
          sheet = ss.getSheetByName(destinySheetName);
        }//Fin Si
        
        var data = SpreadsheetApp.openById(fromFileKey).getSheetByName(fromSheet).getRange(fromRange).getValues();
        
        if ( data[0] ) {
          sheet.getRange( ultimaFila, 1, data.length, data[0].length).setValues( data );
         }//Fin Si
} //Fin Funcion