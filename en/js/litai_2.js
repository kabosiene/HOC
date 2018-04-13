Blockly.Blocks['paspausta'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("clicked")
            .appendField(new Blockly.FieldDropdown([
                ["euro", "EURO"],
                ["litas", "LITAS"],
                ["talonas", "TALONAS"],
                ["interwar period litas", "LITAS(23)"]
            ]), "NAME");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['paspausta'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = "";

    if (dropdown_name == "EURO") {
        //var a =  my_canvas.addEventListener('click', clickReporterEuras, false);
        // my_canvas.addEventListener('click', clickReporterEuras, false);
        code = "paspausta == 'eurai'";

    } else if (dropdown_name == "LITAS") {
        //var b = my_canvas.addEventListener('click', clickReporterLitas, false);
        // my_canvas.addEventListener('click', clickReporterLitas, false);
        //alert(paspausta);
        code = "paspausta == 'litai'";
    } else if (dropdown_name == "TALONAS") {
        //var b = my_canvas.addEventListener('click', clickReporterLitas, false);
        // my_canvas.addEventListener('click', clickReporterLitas, false);
        //alert(paspausta);
        code = "paspausta == 'talonas'";
    } else if (dropdown_name == "LITAS(23)") {
        //var b = my_canvas.addEventListener('click', clickReporterLitas, false);
        // my_canvas.addEventListener('click', clickReporterLitas, false);
        //alert(paspausta);
        code = "paspausta == 'litas_old'";
    }
    return [code, Blockly.JavaScript.ORDER_NONE];
};
//*****************************************************************************
Blockly.Blocks['change'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("to")
            .appendField(new Blockly.FieldDropdown([
                ["euro", "euras"]
            ]), "NAME")
            .appendField("add")
            .appendField(new Blockly.FieldNumber(0), "NUMBER");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['change'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var number_name = block.getFieldValue('NUMBER');
    // TODO: Assemble JavaScript into code variable.
    var code = '' + dropdown_name + ' += ' + number_name + ';\n';
    return code;
};
// Blockly.Blocks['set'] = {
//     init: function() {
//         this.appendDummyInput()
//             .appendField(new Blockly.FieldDropdown([
//                 ["litai", "litas"],
//                 ["litai(23m.)", "litas_old"],
//                 ["talonas", "talonas"],
//                 ["eurai", "euras"]
//             ]), "NAME")
//             .appendField("=")
//             .appendField(new Blockly.FieldNumber(0, 0), "NUMBER");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(330);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };
// Blockly.JavaScript['set'] = function(block) {
//     var dropdown_name = block.getFieldValue('NAME');
//     var number_name = block.getFieldValue('NUMBER');
//     // TODO: Assemble JavaScript into code variable.
//     var code = '' + dropdown_name + ' = ' + number_name + ';\n';
//     return code;
// };
Blockly.Blocks['set'] = {
    init: function() {
        this.appendValueInput("converted")
            .setCheck(null)
            .appendField(new Blockly.FieldDropdown([
                ["litas", "litas"],
                ["interwar period litas", "litas_old"],
                ["talonas", "talonas"],
                ["euro", "euras"]
            ]), "valiutos")
            .appendField("=");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['set'] = function(block) {
    var dropdown_valiutos = block.getFieldValue('valiutos');
    var value_converted = Blockly.JavaScript.valueToCode(block, 'converted', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '' + dropdown_valiutos + ' = ' + value_converted + ';\n';
    return code;
};

Blockly.Blocks['kintamieji'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["litas", "litas"],
                ["interwar period litas", "litas_old"],
                ["talonas", "talonas"],
                ["euro", "euras"]
            ]), "valiutos_name");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['kintamieji'] = function(block) {
    var dropdown_valiutos_name = block.getFieldValue('valiutos_name');
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_valiutos_name;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Blocks['ifas'] = {
    init: function() {
        this.appendValueInput("if_reiksme")
            .setCheck(Boolean)
            .appendField("If");
        this.appendStatementInput("do_reiksme")
            .setCheck(null)
            .appendField("do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['ifas'] = function(block) {
    var value_if_reiksme = Blockly.JavaScript.valueToCode(block, 'if_reiksme', Blockly.JavaScript.ATOMIC);
    var statements_do_reiksme = Blockly.JavaScript.statementToCode(block, 'do_reiksme');
    // TODO: Assemble JavaScript into code variable.
    var code = 'callAgain(function(){if(' + value_if_reiksme + '){\n' + statements_do_reiksme + '}});\n';
    // var code2 = 'if('+value_if_reiksme+'){\n'+statements_do_reiksme+'}\n;'
    return code;
};
//*****************************************************************************