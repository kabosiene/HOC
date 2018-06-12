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

