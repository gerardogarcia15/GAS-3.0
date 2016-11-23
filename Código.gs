//SISTEMA DE INSCRIPCIÓN CIRCUITO INTERNACIONAL DE TENIS.

function myFunction() { 

}//Fin funcion



 function launchPredefinedImports(){
       
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
  
  var importRanges = [
    { 
      destinySheetName : destino, 
      fromFileKey : "1QznemvsqD1fr2_zhxc-isZt2KXRC6qh2QFZYnPoeqsA",
      fromSheet : "INSCRITOS",
      fromRange : "A:Z"
    },
  ];
    
  launchImportsByArray( importRanges );
}

 
function launchImportsByArray( importRanges )
{
  
  for (var i=0;i<importRanges.length;i++) {
    importExternalData(importRanges[i].destinySheetName,importRanges[i].fromFileKey,importRanges[i].fromSheet,importRanges[i].fromRange);
  }
  
}


function importExternalData(destinySheetName,fromFileKey,fromSheet,fromRange)
{
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(destinySheetName);
  if (sheet == null )
  {
    ss.insertSheet(destinySheetName);
    sheet = ss.getSheetByName(destinySheetName);
  }
  
  var data = SpreadsheetApp.openById(fromFileKey).getSheetByName(fromSheet).getRange(fromRange).getValues();
  sheet.clearContents();
  
  if ( data[0] ) {
    sheet.getRange("1", 1, data.length, data[0].length).setValues( data );
  }
} 
