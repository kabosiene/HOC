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


Blockly.Blocks['raide_O'] = {
    // draw a line from current position to x,y
     init: function() {
        this.appendDummyInput()
        .appendField("Raidė O")
            .appendField(new Blockly.FieldDropdown([
                ["x"],["50"],
            ]), "XPOS")
            .appendField(new Blockly.FieldDropdown([
                ["y"],["50"],
            ]), "YPOS");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['raide_O'] = function(block) {
  //.arc(x, y, radius, startAngle, endAngle)
    var x = block.getFieldValue('XPOS');
    var y = block.getFieldValue('YPOS');
    var code = 'context.beginPath();context.arc('+ x +','+ y +',35,0,2*Math.PI);context.stroke();\n';
    return code;
};
Blockly.Blocks['raide_U'] = {
    // draw a line from current position to x,y
     init: function() {
        this.appendDummyInput()
        .appendField("Raidė U")
            .appendField(new Blockly.FieldDropdown([
                ["x"],["10"],
            ]), "XPOS")
            .appendField(new Blockly.FieldDropdown([
                ["y"],["10"],
            ]), "YPOS");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['raide_U'] = function(block) {
  //.arc(x, y, radius, startAngle, endAngle)
    var x = block.getFieldValue('XPOS');
    var y = block.getFieldValue('YPOS');
    var code = 'context.beginPath();context.arc('+ x +','+ y +',35,0,Math.PI);context.stroke();\n';
    return code;
};
Blockly.Blocks['raide_C'] = {
    // draw a line from current position to x,y
     init: function() {
        this.appendDummyInput()
        .appendField("Raidė C")
            .appendField(new Blockly.FieldDropdown([
                ["x"],["50"],
            ]), "XPOS")
            .appendField(new Blockly.FieldDropdown([
                ["y"],["70"],
            ]), "YPOS");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['raide_C'] = function(block) {
  //.arc(x, y, radius, startAngle, endAngle)
    var x = block.getFieldValue('XPOS');
    var y = block.getFieldValue('YPOS');
    var code = 'context.beginPath();context.arc('+ x +','+ y +',35, 7, 1.7 * Math.PI);context.stroke();\n';
    return code;
};

Blockly.Blocks['raide_T'] = {
    // draw a line from current position to x,y
     init: function() {
        this.appendDummyInput()
        .appendField("Raidė T")
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['raide_T'] = function(block) {
  //.arc(x, y, radius, startAngle, endAngle)
    var x = block.getFieldValue('XPOS');
    var y = block.getFieldValue('YPOS');
    var code = 'context.beginPath();context.beginPath();context.moveTo(0, 0);context.lineTo(30, 0);context.stroke();context.beginPath();context.moveTo(15, 0);context.lineTo(15, 30);context.stroke();';
    return code;
};

Blockly.Blocks['raide_E'] = {
    // draw a line from current position to x,y
     init: function() {
        this.appendDummyInput()
        .appendField("Raidė E")
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['raide_E'] = function(block) {
  //.arc(x, y, radius, startAngle, endAngle)
    var x = block.getFieldValue('XPOS');
    var y = block.getFieldValue('YPOS');
    var code = 'context.beginPath(); context.moveTo(0, 0); context.lineTo(30, 0); context.stroke(); context.beginPath(); context.moveTo(0, 15); context.lineTo(30, 15); context.stroke(); context.beginPath(); context.moveTo(0, 30); context.lineTo(30, 30); context.stroke(); context.beginPath(); context.moveTo(0, 0); context.lineTo(0, 30); context.stroke();'; 
    return code;
};
Blockly.Blocks['raide_Ė'] = {
    // draw a line from current position to x,y
     init: function() {
        this.appendDummyInput()
        .appendField("Raidė Ė")
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['raide_Ė'] = function(block) {
  //.arc(x, y, radius, startAngle, endAngle)
    var x = block.getFieldValue('XPOS');
    var y = block.getFieldValue('YPOS');
    var code = 'context.beginPath(); context.moveTo(10, 0); context.lineTo(20, 0); context.stroke(); context.beginPath(); context.moveTo(0, 4); context.lineTo(30, 4); context.stroke(); context.beginPath(); context.moveTo(0, 4); context.lineTo(0, 34); context.stroke(); context.beginPath(); context.moveTo(0, 19); context.lineTo(30, 19); context.stroke(); context.beginPath(); context.moveTo(30, 34); context.lineTo(0, 34); context.stroke();';
     return code;
};

Blockly.Blocks['raide_J'] = {
    // draw a line from current position to x,y
     init: function() {
        this.appendDummyInput()
        .appendField("Raidė J")
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['raide_J'] = function(block) {
  //.arc(x, y, radius, startAngle, endAngle)
    var x = block.getFieldValue('XPOS');
    var y = block.getFieldValue('YPOS');
    var code = 'context.beginPath(); context.moveTo(0, 0); context.lineTo(30, 0); context.stroke(); context.beginPath(); context.moveTo(30, 0); context.lineTo(15, 30); context.stroke(); context.beginPath(); context.moveTo(15, 30); context.lineTo(0, 25); context.stroke(); context.beginPath(); context.moveTo(0, 25); context.lineTo(22, 15); context.stroke();'; 
    return code;
};

Blockly.Blocks['raide_S'] = {
    // draw a line from current position to x,y
     init: function() {
        this.appendDummyInput()
        .appendField("Raidė S")
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['raide_S'] = function(block) {
  //.arc(x, y, radius, startAngle, endAngle)
    var x = block.getFieldValue('XPOS');
    var y = block.getFieldValue('YPOS');
    var code = 'context.beginPath(); context.moveTo(0, 0); context.lineTo(30, 0); context.stroke(); context.beginPath(); context.moveTo(0, 0); context.lineTo(0, 15); context.stroke(); context.beginPath(); context.moveTo(0, 15); context.lineTo(30, 15); context.stroke(); context.beginPath(); context.moveTo(30, 15); context.lineTo(30, 30); context.stroke(); context.beginPath(); context.moveTo(30, 30); context.lineTo(0, 30); context.stroke();'; 
    return code;
};