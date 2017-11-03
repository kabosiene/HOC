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
    code += 'updatePlane(0,move);';
    code += 'waitForSeconds(move/40);\n';
    code += 'move = 0;\n';
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
    code += 'updatePlane(move,0);';
    code += 'waitForSeconds(move/40);\n';
    code += 'move = 0;\n';
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
    var code += 'updatePlane(0,-move);';
    code += 'waitForSeconds(move/40);\n';
    code += 'move = 0;\n';

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
    var code = 'move = ' + number_zingsniai * 40 + ';\n';

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
            .appendField(new Blockly.FieldDropdown([
                ["Niufaunlandas", "first_point"],
                ["Škotija", "second_point"],
                ["Lenkija", "third_point"],
                ["Lietuva", "fourth_point"]
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
    var code = ""; 
    code += 'updatePlane(' + value_points_x_y + ');';
    code += 'waitForSeconds(3);\n';
    return code;
};

function changePoints(x, y) {
    if (x != 0 || y != 0) {

    var globalID = requestAnimationFrame(function() { changePoints(x, y); });
    } else { cancelAnimationFrame(globalID); }
    document.getElementById("lituanica_plane").style.transform = "translate(" + plain_x + "px, " + plain_y + "px)";
    checkPoint(plain_x, plain_y);
    if (x > 0) {
        plain_x += 1;
        x -= 1;
    } else if (x < 0) {
        plain_x -= 1;
        x += 1;
    }
    if (y > 0) {
        plain_y += 1;
        y -= 1;
    } else if (y < 0) {
        plain_y -= 1;
        y += 1;
    }


}

function checkPoint(x, y) {
    console.log(x + " - " + y);

    //check if end point setTimeout(function() { $('#nextModal').modal('show'); }, 1000);
    if (420 > x && x >= 400 && 100 > y && y > 88) {
        if (points[0] == 1 && points[1] == 1 && points[2] == 1) {
            setTimeout(function() {
                document.getElementById("lituanica_plane").style.visibility = 'hidden';
                background.clearRect(0, 0, canvas.width, canvas.height);
                background.drawImage(map, 0, 0);
                background.drawImage(plane, 0, 50);
            }, 1000);
            setTimeout(function() { $('#nextModal').modal('show'); }, 2000);
        } else if (x == 400 && y == 90) {
            setTimeout(function() { alert("Ne visi taškai aplankyti!"); }, 500);
        }
    } else if (100 >= x && x >= 80 && 140 >= y && y >= 120) {
        background.clearRect(0, 0, canvas.width, canvas.height);
        background.drawImage(map, 0, 0);
        drawGrid();
        background.strokeStyle = 'black';
        background.strokeText("Niufaunlandas", 140, 140);
        points[0] = 1;
    } else if (290 >= x && x >= 270 && 100 >= y && y >= 88) {
        background.clearRect(0, 0, canvas.width, canvas.height);
        background.drawImage(map, 0, 0);
        drawGrid();
        background.strokeStyle = 'black';
        background.strokeText("Škotija", 320, 95);
        points[1] = 1;
    } else if (370 >= x && x >= 350 && 130 >= y && y >= 100) {
        background.clearRect(0, 0, canvas.width, canvas.height);
        background.drawImage(map, 0, 0);
        drawGrid();
        background.strokeStyle = 'black';
        background.strokeText("Lenkija", 410, 160);
        points[2] = 1;
    }

}