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


Blockly.Blocks['number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0, 0, 50), "number");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['number'] = function(block) {
  var number_number = block.getFieldValue('number');
  // TODO: Assemble JavaScript into code variable.
  var code = ''+number_number+'';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.Blocks['apsisuk'] = {
    init: function() {
        this.setColour(230);
        this.appendDummyInput()
            .appendField('apsukti plaukikę');
        this.setTooltip('Blokelis prideda kintamąjį, nurodantį apsisukti.');
        this.setNextStatement(true);
        this.setPreviousStatement(true);
    }
};

Blockly.JavaScript['apsisuk'] = function(block) {
    var code = 'turn = edge;\n';
    // code += 'animateSwimmerBack();'
    return code;
};


Blockly.Blocks['keisti'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("judesys: ")
            .appendField(new Blockly.FieldDropdown([
                ["panerti", "add_costume_swim"],
                ["iškilti", "add_costume_swim2"]
            ]), "kostiumas");
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
    var code = 'costume = ' + dropdown_kostiumas + ';\n';
    if (dropdown_kostiumas == 'add_costume_swim') {add_costume_swim = true}
    if (dropdown_kostiumas == 'add_costume_swim2') {add_costume_swim2 = true}
   // dropdown_kostiumas = true;
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
    var code = 'document.getElementById("test1").style.animationDuration = "' + number_name + 's";\n';
    return code;
};


Blockly.Blocks['keisti_greiti'] = {
    init: function() {
        this.appendValueInput("padidink")
            .setCheck("Number")
            .appendField("padidinti greitį");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("Pakeičia plaukimo greitį");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['keisti_greiti'] = function(block) {
    var value_padidink = Blockly.JavaScript.valueToCode(block, 'padidink', Blockly.JavaScript.ORDER_NONE);
   // add_speed = value_padidink * 0.01;
    // TODO: Assemble JavaScript into code variable.
    var code = 'add_speed += ' + value_padidink * 0.01 + ';\n';
    return code;
};


Blockly.Blocks['on_click'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("paspausta ant ekrano");
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
            .appendField(new Blockly.FieldTextInput("plaukti"), "SWIM")
            .appendField(new Blockly.FieldVariable("greitis"), "speed_var");
        this.appendStatementInput("body")
            .setCheck(null);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['function'] = function(block) {
    var text_swim = block.getFieldValue('SWIM');
    var variable_speed_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('speed_var'), Blockly.Variables.NAME_TYPE);
    var statements_body = Blockly.JavaScript.statementToCode(block, 'body');
    // TODO: Assemble JavaScript into code variable.
    var code = 'function plaukti(greitis) {\n' + statements_body + '};\n';
    swim_do_f = true;
    return code;
};

Blockly.Blocks['function_call'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("plaukti(")
            .appendField(new Blockly.FieldVariable("greitis"), "NAME")
            .appendField(")");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['function_call'] = function(block) {
    var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble JavaScript into code variable.
    var code = 'plaukti(greitis);\n';
    swim_do = true;
    return code;
};

Blockly.Blocks['plaukti'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("plaukti");
        this.setColour(230);
        this.setTooltip('Blokelis prideda kintamąjį, nurodantį plaukti.');
        this.setNextStatement(true);
        this.setPreviousStatement(true);
    }
};

Blockly.JavaScript['plaukti'] = function(block) {
    var code = 'swim_do = true;\n ';
    swim_do = true;
    return code;
};
Blockly.Blocks['anim_speed'] = {
    init: function() {
        this.appendValueInput("ANIM_SPEED")
            .setCheck(null)
            .appendField("judesio greitis = ");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("Plaukimo judesio greitis");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['anim_speed'] = function(block) {
    var value_anim_speed = Blockly.JavaScript.valueToCode(block, 'ANIM_SPEED', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    //var code = 'document.getElementById("test1").style.animationDuration = ""+(0.1/' + value_anim_speed + ')+"s;\n';
    //var code = 'document.getElementById("test1").style.animationDuration = "' + value_anim_speed + 's";\n';
var code = 'anim_speed = '+value_anim_speed+';\n'
animation_speed = true;
    return code;
};
Blockly.Blocks['var_speed'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("greitis"), "var_speed");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['var_speed'] = function(block) {
    var variable_var_speed = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_speed'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble JavaScript into code variable.

    var code = speed;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Blocks['function_x'] = {
  init: function() {
    this.appendValueInput("plaukti_greitis")
        .setCheck(null)
        .appendField("funkcija:")
        .appendField("plaukti(");
    this.appendDummyInput()
        .appendField(");");
    this.appendStatementInput("body")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['function_x'] = function(block) {
  var value_plaukti_greitis = Blockly.JavaScript.valueToCode(block, 'plaukti_greitis', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_body = Blockly.JavaScript.statementToCode(block, 'body');
  // TODO: Assemble JavaScript into code variable.
     var code = 'function plaukti('+value_plaukti_greitis+') {\n' + statements_body + '};\n';
    swim_do_f = true;
  return code;
};
Blockly.Blocks['function_call_x'] = {
  init: function() {
    this.appendValueInput("f_plaukti")
        .setCheck(null)
        .appendField("plaukti(");
    this.appendDummyInput()
        .appendField(");");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['function_call_x'] = function(block) {
  var value_f_plaukti = Blockly.JavaScript.valueToCode(block, 'f_plaukti', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
      var code = 'plaukti('+value_f_plaukti+');\n';
    swim_do = true;
  return code;
};