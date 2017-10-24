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


// Blockly.Blocks['keisti'] = {
//     init: function() {
//         this.appendDummyInput()
//             .appendField("keisti kostiumą");
//         this.setColour(230);
//         this.setTooltip('Blokelis prideda plaukimo animaciją.');
//         this.setNextStatement(true);
//         this.setPreviousStatement(true);
//     }
// };

// Blockly.JavaScript['keisti'] = function(block) {
//       var code = "costume = 'swim_anim';\n";
//       add_costume = true;
//     return code;
// };
Blockly.Blocks['keisti'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("keisti kostiumą į ")
        .appendField(new Blockly.FieldDropdown([["swim","swim"], ["swim2","swim2"]]), "kostiumas");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['keisti'] = function(block) {
  var dropdown_kostiumas = block.getFieldValue('kostiumas');
  // TODO: Assemble JavaScript into code variable.
  var code = 'costume = '+dropdown_kostiumas+';\n';
  add_costume = true;
  return code;
};
Blockly.Blocks['set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("laukti")
        .appendField("= ")
        .appendField(new Blockly.FieldNumber(0, 0), "NUMBER")
         .appendField("s");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['set'] = function(block) {
  var number_name = block.getFieldValue('NUMBER');
  // TODO: Assemble JavaScript into code variable.
    var code = 'document.getElementById("test1").style.animationDuration = "'+number_name+'s";\n';
  return code;
};


Blockly.Blocks['keisti_greiti'] = {
    init: function() {
        this.appendValueInput("padidink")
            .setCheck("Number")
            .appendField("padidink greitį");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
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
  var code = 'function plaukti() {\n'+statements_body+'};\n';
  swim_do_f = true;
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
   swim_do = true;
  return code;
};
