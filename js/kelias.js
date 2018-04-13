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
            .appendField("su")
            .appendField(new Blockly.FieldDropdown([
                ["pasirinkti", "Option"],
                ["vėliava", "veliava"],
                ["žydra kepure", "kepure"],
                ["akiniais", "akiniai"]
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

Blockly.Blocks['add_person_side'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Pridėti žmogų iš")
            .appendField(new Blockly.FieldDropdown([
                ["kairės", "right"],
                ["dešinės", "left"]
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
            .appendField("Jei ")
            .appendField(new Blockly.FieldDropdown([
                ["pasirinkti", "Option"],
                ["berniukas", "berniukas"],
                ["mergina", "mergina"]
            ]), "people")
            .appendField("su")
            .appendField(new Blockly.FieldDropdown([
                ["pasirinkti", "Option"],
                ["vėliava", "veliava"],
                ["žydra kepure", "kepure"]
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
            .appendField("Pridėti žmogų į")
            .appendField(new Blockly.FieldDropdown([
                ["tarpas", "space"]
            ]), "space");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['add_person2'] = function(block) {
    var code = "  if (tarpas >= 110 && tarpas <= 340) { animatePerson2(x, tarpas);}else {alert('Netinkamas plotis');  $('.person_lost').show();}";
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

function animatePerson(x, side) {
    // function animatePerson(x) {

    if (x == "kepure") {
        // $('.person').show().css({ "animation-name": "animatedPerson" }); 
        if (side == "left") {
            alert('Netinkama berniuko pusė');
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
             alert('Netinkama merginos pusė');
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
             alert('Netinkama vyro pusė');
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
    alert("Nėra tokio žmogaus");
     $('.person_lost').show();
}