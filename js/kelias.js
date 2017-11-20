var berniukas, mergina, vyriskis, lt, lv, est;
berniukas = "kepure";
mergina = "veliava";
vyriskis = "akiniai";
lt = 40;
var done = [];

Blockly.Blocks['keisti'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Jei ")
            .appendField(new Blockly.FieldDropdown([
                ["pasirinkti", "Option"],
                ["berniukas", "berniukas"],
                ["vyriškis", "vyriskis"],
                ["mergina", "mergina"]
            ]), "people")
            .appendField("spalva")
            .appendField(new Blockly.FieldDropdown([
                ["pasirinkti", "Option"],
                ["su vėliava", "veliava"],  
                ["su žydra kepure", "kepure"],
                ["su akinais", "akiniai"]
            ]), "color");
        this.appendStatementInput("IF")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
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
    var code = 'if(' + dropdown_people + ' == "' + dropdown_color + '")\n{var x=' + dropdown_people + ';\n' + statements_if + '}else{lost();};\n';
    return code;
};

Blockly.Blocks['add_person'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Pridėti vieną žmogų");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['add_person'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = ' animatePerson(x);\n ';
    return code;
};
/****************level2*********************************/
Blockly.Blocks['keisti2'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Jei ")
            .appendField(new Blockly.FieldDropdown([
                ["pasirinkti", "Option"],
                ["berniukas", "berniukas"],
                ["mergina", "mergina"]
            ]), "people")
            .appendField("spalva")
            .appendField(new Blockly.FieldDropdown([
                ["pasirinkti", "Option"],
                ["su vėliava", "veliava"],  
                ["su žydra kepure", "kepure"]
            ]), "color");
        this.appendStatementInput("IF")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['keisti2'] = function(block) {
    var dropdown_people = block.getFieldValue('people');
    var dropdown_color = block.getFieldValue('color');
    var statements_if = Blockly.JavaScript.statementToCode(block, 'IF');
    // TODO: Assemble JavaScript into code variable.
    var code = 'if(' + dropdown_people + ' == "' + dropdown_color + '")\n{var x=' + dropdown_people + ';\n' + statements_if + '}else{lost();};\n';
    return code;
};
Blockly.Blocks['add_person2'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Pridėti žmogų X centimetre");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['add_person2'] = function(block) {
    var code = "  if (centimetrai >= 110 && centimetrai <= 340) { animatePerson2(x, centimetrai);}else {alert('Netinkamas plotis');}";
    return code;
};

Blockly.Blocks['atstumas'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Jei atstumas tarp lietuvių")
            // .appendField(new Blockly.FieldDropdown([["lietuvių","lt"],]), "people")
            .appendField(">=")
            .appendField(new Blockly.FieldNumber(0, 0, 490), "distance")
            .appendField("cm");
        this.appendStatementInput("IF")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['atstumas'] = function(block) {
    //var dropdown_people = block.getFieldValue('people');
    var number_distance = block.getFieldValue('distance');
    var statements_if = Blockly.JavaScript.statementToCode(block, 'IF');
    // TODO: Assemble JavaScript into code variable.
    var code = 'var lt = 40; if ( ' + number_distance + ' >= lt)\n {var x="lt";\n' + statements_if + '};\n';
    return code;
};
/****************************************/

function animatePerson(x) {
    if (x == "kepure") { done[0]=1; $('.person').show().css({ "animation-name": "animatedPerson" }); } else if (x == "veliava") { done[1]=1; $('.person2').show().css({ "animation-name": "animatedPerson2" }); } else if (x == "akiniai") { done[2]=1; $('.person3').show().css({ "animation-name": "animatedPerson3" }); } else { lost(); }
}

function animatePerson2(x, i) {
  done[i] = 1;
    if (x == "lt") {
        var name = "person"+i;
  draw(eval(name), i, 220);
    }
}

function lost() {
    alert("Nėra tokio žmogaus")
}
  