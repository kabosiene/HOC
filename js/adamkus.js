Blockly.Blocks['count'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("surinkti taškai = ")
        .appendField(new Blockly.FieldNumber(0), "NAME");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['end_game'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("baigti žaidimą");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['button_clicked'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("paspaustas")
        .appendField(new Blockly.FieldDropdown([["tarpas","32"], ["rodyklė į viršų","38"], ["ekranas","screen"]]), "button");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['count'] = function(block) {
  var number_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'countStars == '+number_name+';';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['end_game'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'gameOver();\n';
  return code;
};

Blockly.JavaScript['button_clicked'] = function(block) {
  var dropdown_button = block.getFieldValue('button');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};