var tekstas = [];
Blockly.Blocks['tekstas1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("A");
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['tekstas1'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  //var code = '("Lietuvos Taryba, kaip vienintelė lietuvių tautos atstovybė,")';
  var code = "3";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Blocks['tekstas2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("B");
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['tekstas2'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  //var code = 'remdamos pripažintąja tautų apsisprendimo teise ir lietuvių Vilniaus konferencijos nutarimu rugsėjo mėn. 18-23 d. 1917 metais,';
  var code = "1";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Blocks['tekstas3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("C");
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['tekstas3'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  //var code = 'skelbia atstatanti nepriklausomą demokratiniais pamatais sutvarkytą Lietuvos valstybę su sostine Vilniuje';
  var code = "2";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Blocks['tekstas4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("D");
    this.setOutput(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['tekstas4'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  //var code = '"ir tą valstybę atskirianti nuo visų valstybinių ryšių, kurie yra buvę su kitomis tautomis."';
  var code = "4";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
// Blockly.Blocks['tekstas5'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("E. Eilutė");
//     this.setOutput(true, null);
//     this.setColour(160);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };
// Blockly.JavaScript['tekstas5'] = function(block) {
//   // TODO: Assemble JavaScript into code variable.
//   //var code = 'Drauge Lietuvos Taryba pareiškia,';
//   var code = "5";
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.JavaScript.ORDER_NONE];
// };
// Blockly.Blocks['tekstas6'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("F. Eilutė");
//     this.setOutput(true, null);
//     this.setColour(160);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };
// Blockly.JavaScript['tekstas6'] = function(block) {
//   // TODO: Assemble JavaScript into code variable.
//   //var code = 'kad Lietuvos valstybės pamatus ir jos santykius su kitomis valstybėmis privalo galutinai nustatyti kiek galima greičiau sušauktas steigiamasis seimas,';
//   var code = "6";
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.JavaScript.ORDER_NONE];
// };
// Blockly.Blocks['tekstas7'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("G. Eilutė");
//     this.setOutput(true, null);
//     this.setColour(160);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };
// Blockly.JavaScript['tekstas7'] = function(block) {
//   // TODO: Assemble JavaScript into code variable.
//   var code = 'demokratiniu būdu visų jos gyventojų išrinktas.';
//   var code = "7";
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.JavaScript.ORDER_NONE];
// };
// Blockly.Blocks['tekstas8'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("H. Eilutė");
//     this.setOutput(true, null);
//     this.setColour(160);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };
// Blockly.JavaScript['tekstas8'] = function(block) {
//   // TODO: Assemble JavaScript into code variable.
//   //var code = 'Lietuvos Taryba pranešdama apie tai ....... vyriausybei, ';
//   var code = "8";
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.JavaScript.ORDER_NONE];
// };
// Blockly.Blocks['tekstas9'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("I. Eilutė");
//     this.setOutput(true, null);
//     this.setColour(160);
//  this.setTooltip("");
//  this.setHelpUrl("");
//   }
// };
// Blockly.JavaScript['tekstas9'] = function(block) {
//   // TODO: Assemble JavaScript into code variable.
//   //var code = 'prašo pripažinti nepriklausomą Lietuvos valstybę.';
//   var code = "9";
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.JavaScript.ORDER_NONE];
// };

//**************************************
//SAMPLE OF XML TO LOAD TO WORKSPACE
// <xml xmlns="http://www.w3.org/1999/xhtml">
//   <variables>
//     <variable type="" id="bIqqa+{5{%uX3JtyQuh5">litai</variable>
//     <variable type="" id="|RDL=+G-BPZ1^=;=BKqi">euras</variable>
//     <variable type="" id="Tz5xAOXdy(67GK8OKMLh">x</variable>
//     <variable type="" id="}t63oO7#(0}B3f%C_Nh3">list</variable>
//     <variable type="" id="Qgr%,iu.M=[w%WYFvHx)">tekstas</variable>
//   </variables>
//   <block type="lists_setIndex" id="?{+oKAq%)?zChb8!+Ht9" x="88" y="88">
//     <mutation at="true"></mutation>
//     <field name="MODE">SET</field>
//     <field name="WHERE">FROM_START</field>
//     <value name="LIST">
//       <block type="variables_get" id="k+^BK0C{dU6xg{:`s8Ta">
//         <field name="VAR" id="Qgr%,iu.M=[w%WYFvHx)" variabletype="">tekstas</field>
//       </block>
//     </value>
//     <next>
//       <block type="lists_setIndex" id="fgjRAQ+/[gu|!]DrJz~i">
//         <mutation at="true"></mutation>
//         <field name="MODE">SET</field>
//         <field name="WHERE">FROM_START</field>
//         <value name="LIST">
//           <block type="variables_get" id="d)Kgj_1?PvAJ~HZ`d#0l">
//             <field name="VAR" id="Qgr%,iu.M=[w%WYFvHx)" variabletype="">tekstas</field>
//           </block>
//         </value>
//       </block>
//     </next>
//   </block>
// </xml>