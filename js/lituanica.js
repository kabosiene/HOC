var move = 0;


Blockly.Blocks['grid_turnright'] = {
    init: function() {
        this.setColour(320);
        this.appendDummyInput()
            .appendField('Skristi į dešinę');
        this.setTooltip('Pasisukti 90 laipsnių į dešinę ');
        this.setNextStatement(true);
        this.setPreviousStatement(true);
    }
};

Blockly.JavaScript['grid_turnright'] = function(block) {
    var code = 'plane_state = "plane_right";\n';
    x_deg = 90;
    //code += 'document.getElementById("lituanica_plane").style.transformOrigin = "0px 100px 0";\n'
    // document.getElementById("lituanica_plane").style.transform = "rotate(90deg)"'
    //code += "lituanica.clearRect(0,0,canvas.width,canvas.height);\n  lituanica.drawImage(plane_right, plain_x, plain_y);\n ";
    code += 'updatePlane(0,move);';
        code += 'waitForSeconds(5);\n';
    return code;
};
Blockly.Blocks['grid_forward'] = {
    init: function() {
        this.setColour(320);
        this.appendDummyInput()
            .appendField('Skristi tiesiai');
        this.setTooltip('Skrisk tiesia trajektorija. ');
        this.setNextStatement(true);
        this.setPreviousStatement(true);
    }
};

Blockly.JavaScript['grid_forward'] = function(block) {
    var code = ' plane_state = "plane";\n';
    x_deg = 0;
    //code += "lituanica.clearRect(0,0,canvas.width,canvas.height);\n  lituanica.drawImage(plane, plain_x, plain_y);\n ";  
    //code += 'update_plane(move, x_deg);';     
    code += 'updatePlane(move,0);';
        code += 'waitForSeconds(5);\n';
    return code;
};

Blockly.Blocks['grid_turnleft'] = {
    init: function() {
        this.setColour(320);
        this.appendDummyInput()
            .appendField('Skristi į kairę');
        this.setTooltip('Pasisukti 90 laipsnių į kairę');
        this.setNextStatement(true);
        this.setPreviousStatement(true);
    }
};

Blockly.JavaScript['grid_turnleft'] = function(block) {
    var code = 'plane_state = "plane_left";\n';
    x_deg = -90;
    //code += ' document.getElementById("lituanica_plane").style.transformOrigin = "100px 50px 0";\n'
    // document.getElementById("lituanica_plane").style.transform = "rotate(-90deg)";'
    //code += "lituanica.clearRect(0,0,canvas.width,canvas.height);\n  lituanica.drawImage(plane_left, plain_x, plain_y);\n ";
    code += 'updatePlane(0,-move);';
        code += 'waitForSeconds(5);\n';
    return code;
};

Blockly.Blocks['grid_goforward'] = {
    init: function() {
        this.setColour(320);
        this.appendDummyInput()
            .appendField('Skristi per')
            .appendField(new Blockly.FieldNumber(0), "STEPS")
            .appendField(' langelius');
        this.setTooltip('Eiti tiesia linija, be pasisukimų');
        this.setNextStatement(true);
        this.setPreviousStatement(true);
    }
};

Blockly.JavaScript['grid_goforward'] = function(block) {
    var number_zingsniai = block.getFieldValue('STEPS');
    var code = 'move = ' + number_zingsniai * 50 + ';\n';

    return code;


};

Blockly.Blocks['wait_seconds'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("wait")
            .appendField(new Blockly.FieldTextInput("1"), "SECONDS")
            .appendField("seconds");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

/**
 * Generator for wait block creates call to new method
 * <code>waitForSeconds()</code>.
 */
Blockly.JavaScript['wait_seconds'] = function(block) {
    var seconds = Number(block.getFieldValue('SECONDS'));
    var code = 'waitForSeconds(' + seconds + ');\n';
    return code;
};

/********************Level2*****************************/
Blockly.Blocks['fly_to'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(" x :")
            .appendField(new Blockly.FieldNumber(0, 0, 500), "fly_x")
            .appendField("y :")
            .appendField(new Blockly.FieldNumber(0, 0, 500), "fly_y");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['fly_to'] = function(block) {
    var number_fly_x = block.getFieldValue('fly_x');
    var number_fly_y = block.getFieldValue('fly_y');
    // TODO: Assemble JavaScript into code variable.
    var code = number_fly_x;
    code += ','
    code += number_fly_y;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['fly_points'] = {
    init: function() {
        this.appendValueInput("points_x_y")
            .setCheck(null)
            .appendField("Skristi į")
            .appendField(new Blockly.FieldDropdown([
                ["pirmas taškas", "first_point"],
                ["antras taškas", "second_point"],
                ["trečias taškas", "third_point"],
                ["ketvirtas taškas", "fourth_point"],
                ["penktas taškas", "fifth_point"]
            ]), "d_points");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['fly_points'] = function(block) {
    var dropdown_d_points = block.getFieldValue('d_points');
    var value_points_x_y = Blockly.JavaScript.valueToCode(block, 'points_x_y', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = ""; //dropdown_d_points;
    //code += value_points_x_y;
    code += 'updatePlane(' + value_points_x_y + ');';
    code += 'waitForSeconds(5);\n';
    return code;
};

function changePoints(x, y) {
    console.log(x);
    console.log(y);
   if (x != 0 || y != 0) {
        var globalID = requestAnimationFrame(function() { changePoints(x, y); });
    } else { cancelAnimationFrame(globalID); }
    document.getElementById("lituanica_plane").style.transform = "translate(" + plain_x + "px, " + plain_y + "px)";

    if (x > 0) { plain_x += 1;
        x -= 1; } else if (x < 0) {plain_x -= 1; x += 1;}
    if (y > 0) { plain_y += 1;
        y -= 1; }else if (y < 0) {plain_y -= 1; y += 1; }

checkPoint(plain_x,plain_y);
}
function checkPoint(x,y){

//check if end point setTimeout(function() { $('#nextModal').modal('show'); }, 1000);

}