Blockly.Blocks['game'] = {
    init: function() {
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("Žaidimo nustatymai:");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['game'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = "  function jump(){ \n var explodeIfColision = setInterval(function() {\nif (isStarllColision()){ clearInterval(explodeIfColision);\n$('<span>&#x2605;</span>').appendTo($('.rating'));\ncountStars += 1;\nanimTreasure('.star');\n}";
    code += statements_name;
    code += " \n }, 50); };";
    return code;
};
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
            .appendField(new Blockly.FieldDropdown([
                ["tarpas", "32"],
                ["rodyklė į viršų", "38"],
                ["ekranas", "screen"],
                ["testbutton", "mousedown"]
            ]), "button");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['jump'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("pašokti");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['run'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("bėgti");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['treasure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("treasure")
        .appendField(new Blockly.FieldDropdown([["on","visible"], ["off","hidden"]]), "visibility");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['treasure_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("treasure greitis")
        .appendField(new Blockly.FieldNumber(0, 0), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['valdymas'] = {
    init: function() {
        this.appendStatementInput("control")
            .setCheck()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Veikėjų nustatymai:");
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['valdymas'] = function(block) {
    var statements_control = Blockly.JavaScript.statementToCode(block, 'control');
    // TODO: Assemble JavaScript into code variable.
    var code = statements_control;
    return code;
};

Blockly.JavaScript['treasure'] = function(block) {
  var dropdown_visibility = block.getFieldValue('visibility');
  // TODO: Assemble JavaScript into code variable.
  var code = 'treasureOn("'+dropdown_visibility+'");\n';
  return code;
};
Blockly.JavaScript['treasure_speed'] = function(block) {
  var number_speed = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = 'treasureSpeed('+number_speed+');\n';
  return code;
};

Blockly.JavaScript['count'] = function(block) {
    var number_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'countStars == ' + number_name + '';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['end_game'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'endGame(countStars);\n';
    return code;
};

Blockly.JavaScript['button_clicked'] = function(block) {
    var dropdown_button = block.getFieldValue('button');
    // TODO: Assemble JavaScript into code variable.
    var code = true;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['jump'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = "clickJump('mousedown');";
    //code += " function clickJump(action) {$('#up').on(action, function(e) { if (e.type == action) { jump(); }});}";
    return code;
};

Blockly.JavaScript['run'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'run();\n';
    return code;
};