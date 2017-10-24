Blockly.Blocks['krastas'] = {
    init: function() {

        this.appendDummyInput()
            .appendField('baseino kraštas');
        this.setTooltip('Blokelis prideda baseino kraštą, kad turėtume starto, apsisukimo ir finišo vietą.');
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['krastas'] = function(block) {
    var code = 'edge = true';
    return [code, Blockly.JavaScript.ORDER_NONE];
};



Blockly.Blocks['apsisuk'] = {
    init: function() {
        this.setColour(230);
        this.appendDummyInput()
            .appendField('Apsukti plaukiką');
        this.setTooltip('Blokelis prideda kintamąjį, nurodantį apsisukti.');
        this.setNextStatement(true);
        this.setPreviousStatement(true);
    }
};

Blockly.JavaScript['apsisuk'] = function(block) {
    var code = 'turn = true;\n';
    return code;
};
Blockly.Blocks['irtis'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("irtis");
        this.setColour(230);
        this.setTooltip('Blokelis prideda plaukimo animaciją.');
        this.setNextStatement(true);
        this.setPreviousStatement(true);
    }
};

Blockly.JavaScript['irtis'] = function(block) {
      var code = 'swim_do = true;\n ';
   //swim_do = true;
    return code;
};


Blockly.Blocks['keisti_greiti'] = {
    init: function() {
        this.appendValueInput("padidink")
            .setCheck("Number")
            .appendField("padidink greitį");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("Pakeičia plaukimo greitį");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['keisti_greiti'] = function(block) {
    var value_padidink = Blockly.JavaScript.valueToCode(block, 'padidink', Blockly.JavaScript.ORDER_ATOMIC);
    add_speed = value_padidink * 0.01;
    // TODO: Assemble JavaScript into code variable.
    var code = 'speed += ' + value_padidink * 0.01 + ';\n';
    return code;
};


Blockly.Blocks['on_click'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("paspausta pelė");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['on_click'] = function(block) {
    var code = 'mouse_click = true';
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Blocks['function'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("komanda: ")
        .appendField(new Blockly.FieldTextInput("plaukti"), "SWIM");
    this.appendStatementInput("FUNCTION_BODY")
        .setCheck(null);
    this.setColour(290);
 this.setTooltip("Funkcija");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['function'] = function(block) {
  var text_swim = block.getFieldValue('SWIM');
  var statements_body = Blockly.JavaScript.statementToCode(block, 'FUNCTION_BODY');
  // TODO: Assemble JavaScript into code variable.
  var code = 'function plaukti() {'+statements_body+'};\n';
  swim_do = true;
  return code;
};

Blockly.Blocks['function_call'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("plaukti");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("Funkcijos kvietimas");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['function_call'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'plaukti();\n';
  return code;
};
