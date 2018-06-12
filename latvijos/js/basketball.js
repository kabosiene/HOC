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
    var code = '' + number_number + '';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
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


Blockly.Blocks['spin_ball'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("spin ball");
        this.setColour(230);
        this.setTooltip('');
        this.setNextStatement(true);
        this.setPreviousStatement(true);
    }
};

Blockly.JavaScript['spin_ball'] = function(block) {
    var code = 'spin_ball = true;\n ';
    // spin_ball = true;
    return code;
};

Blockly.Blocks['slap_ball'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("slap ball");
        this.setColour(230);
        this.setTooltip('');
        this.setNextStatement(true);
        this.setPreviousStatement(true);
    }
};

Blockly.JavaScript['slap_ball'] = function(block) {
    var code = 'slap_ball = true;\n ';
    // slap_ball = true;
    return code;
};

Blockly.Blocks['ball_slaped'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("ball slaped");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['ball_slaped'] = function(block) {
    var code = 'slap_ball == true';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

