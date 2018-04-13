var berniukas, mergina, vyriskis, lt, lv, est;
berniukas = "kepure";
mergina = "veliava";
vyriskis = "akiniai";
lt = 40;
var done = [];

Blockly.Blocks['keisti'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("If ")
            .appendField(new Blockly.FieldDropdown([
                ["choose", "Option"],
                ["boy", "berniukas"],
                ["man", "vyriskis"],
                ["girl", "mergina"]
            ]), "people")
            .appendField("with")
            .appendField(new Blockly.FieldDropdown([
                ["choose", "Option"],
                ["flag", "veliava"],
                ["blue hat", "kepure"],
                ["glasses", "akiniai"]
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
            .appendField("Add a person");
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

Blockly.Blocks['add_person_side'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Add a person from the ")
            .appendField(new Blockly.FieldDropdown([
                ["left", "right"],
                ["right", "left"]
            ]), "side");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['add_person_side'] = function(block) {
    var dropdown_side = block.getFieldValue('side');
    // TODO: Assemble JavaScript into code variable.
    var code = ' animatePerson(x,"' + dropdown_side + '");\n ';
    return code;
};
/****************level2*********************************/
Blockly.Blocks['keisti2'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("If ")
            .appendField(new Blockly.FieldDropdown([
                ["choose", "Option"],
                ["boy", "berniukas"],
                ["girl", "mergina"]
            ]), "people")
            .appendField("with")
            .appendField(new Blockly.FieldDropdown([
                ["choose", "Option"],
                ["flag", "veliava"],
                ["blue hat", "kepure"]
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
// Blockly.Blocks['add_person2'] = {
//     init: function() {
//         this.appendDummyInput()
//             .appendField("Pridėti žmogų X centimetre");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };
Blockly.Blocks['add_person2'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Add person to")
            .appendField(new Blockly.FieldDropdown([
                ["gap", "space"]
            ]), "space");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['add_person2'] = function(block) {
    var code = "  if (gap >= 110 && gap <= 340) { animatePerson2(x, gap);}else {alert('Netinkamas plotis');  $('.person_lost').show();}";
    return code;
};

Blockly.Blocks['atstumas'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("If the distance between Lithuanians")
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

function animatePerson(x, side) {
    // function animatePerson(x) {

    if (x == "kepure") {
        // $('.person').show().css({ "animation-name": "animatedPerson" }); 
        if (side == "left") {
            alert('Wrong side of the boy');
            $('.person_lost').show();
            // var left = $('.person').offset().left;
            // $('.person').show().css({ left: left }).animate({ left: "189px" }, "slow");
        } else {
            done[0] = 1;
            var right = $('.person').offset().right;
            $('.person').show().css({ right: right }).animate({ right: "230px" }, "slow");
        }

    } else if (x == "veliava") {
        // $('.person2').show().css({ "animation-name": "animatedPerson2" }); 
        if (side == "left") {
             alert('Wrong side of the girl');
              $('.person_lost').show();
            // var left = $('.person2').offset().left;
            // $('.person2').show().css({ left: left }).animate({ left: "107px" }, "slow");
        } else { 
            done[1] = 1;
            var right = $('.person2').offset().right;
            $('.person2').show().css({ right: right }).animate({ right: "330px" }, "slow");
        }

    } else if (x == "akiniai") {
        // $('.person3').show().css({ "animation-name": "animatedPerson3" }); 
        if (side == "left") {
            done[2] = 1;
            var left = $('.person3').offset().left;
            $('.person3').show().css({ left: left }).animate({ left: "258px" }, "slow");
        } else {
             alert('Wrong side of the man');
              $('.person_lost').show();
            // var right = $('.person3').offset().right;
            // $('.person3').show().css({ right: right }).animate({ right: "190px" }, "slow");
        }
    } else { lost(); }
}

function animatePerson2(x, i) {
    done[i] = 1;
    if (x == "lt") {
        var name = "person" + i;
        draw(eval(name), i, 220);
    }
}

function lost() {
    alert("Person not found");
     $('.person_lost').show();
}