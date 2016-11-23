//SISTEMA DE INSCRIPCIÓN CIRCUITO INTERNACIONAL DE TENIS.


function myFunction() { 

}//Fin funcion


function importarDatosPredefinidos(){   //Funncion para Importar datos Predefinidos que voy a utilizar cada vez que se ejecute.
          /////////////////////////////////////////////////////////     Cambiar valor de "destino" para saber en que hoja debe ser introducido los datos
          var categoria = 'FEMENINA';
          var mascu= 'MASCULINA';
          var feme= 'FEMENINA';
          var destino;
          
          if(categoria==mascu){
              destino="CATEGORIA MASCULINA";
          }else if(categoria==feme){
              destino="CATEGORIA FEMENINA";
          }else{
              destino="NADA";
          }//Fin Si
          ////////////////////////////////////////////////////////
         
           var importRanges = [{ 
              destinySheetName : destino, 
              fromFileKey : "1QznemvsqD1fr2_zhxc-isZt2KXRC6qh2QFZYnPoeqsA",
              fromSheet : "INSCRITOS",
              fromRange : "A:Z"
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
