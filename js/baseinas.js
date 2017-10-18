Blockly.Blocks['krastas'] = {
    init: function() {
        this.setColour(320);
        this.appendDummyInput()
            .appendField('Pridėti baseiną');
        this.setTooltip('Blokelis prideda baseino kraštą, kad turėtume starto, apsisukimo ir finišo vietą.');
        this.setNextStatement(true);
        this.setPreviousStatement(false);
    }
};

Blockly.JavaScript['krastas'] = function(block) {
    var code = 'edge = true;\n';
    return code;
};

Blockly.Blocks['apsisuk'] = {
    init: function() {
        this.setColour(320);
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
  // TODO: Assemble JavaScript into code variable.
  var code = 'speed += '+value_padidink*0.01+';\n';
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