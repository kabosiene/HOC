Blockly.Blocks['keisti'] = {
  init: function() {
    this.appendStatementInput("IF")
        .setCheck(null)
        .appendField("Jei")
        .appendField(new Blockly.FieldDropdown([["pasirink","Option"], ["mergaites kepure","Kepure"], ["šunukio pavadėlis","Pavadelis"]]), "people")
        .appendField("spalva")
        .appendField(new Blockly.FieldDropdown([["pasirink","Option"], ["raudona","Kepure"], ["baltas","Pavadelis"]]), "color");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['keisti'] = function(block) {
  var dropdown_people = block.getFieldValue('people');
  var dropdown_color = block.getFieldValue('color');
  var statements_if = Blockly.JavaScript.statementToCode(block, 'IF');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};