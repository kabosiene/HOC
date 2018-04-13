Blockly.Blocks['nupiesk_veliava'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["pasirink", "P"],
                ["raudoną", "R"],
                ["geltoną", "Y"],
                ["žalią", "G"]
            ]), "spalva")
            .appendField("spalvą")
            .appendField(new Blockly.FieldDropdown([
                ["įjungti", "ON"],
                ["išjungti", "OFF"]
            ]), "I/O");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['nupiesk_veliava'] = function(block) {
    var dropdown_spalva = block.getFieldValue('spalva');
    var dropdown_i_o = block.getFieldValue('I/O');
    // TODO: Assemble JavaScript into code variable.
    if (dropdown_i_o === "ON") {
        if (dropdown_spalva === "R") {
            var code = "document.getElementById('red').style.backgroundColor='#ff1919';"
        } else if (dropdown_spalva === "Y") {
            var code = "document.getElementById('yellow').style.backgroundColor='#fced14';"
        } else if (dropdown_spalva === "G") {
            var code = "document.getElementById('green').style.backgroundColor='#008000';"
        }
    }
    if (dropdown_i_o === "OFF") {
        if (dropdown_spalva === "R") {
            var code = "document.getElementById('red').style.backgroundColor='#fff';"
        } else if (dropdown_spalva === "Y") {
            var code = "document.getElementById('yellow').style.backgroundColor='#fff';"
        } else if (dropdown_spalva === "G") {
            var code = "document.getElementById('green').style.backgroundColor='#fff';"
        }
    }
    return code;
};
