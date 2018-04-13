var move = 0;

Blockly.Blocks['fly_left'] = {
  init: function() {
    this.appendValueInput("fly")
        .setCheck(null)
        .appendField("Fly up");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['fly_left'] = function(block) {
  var value_fly = Blockly.JavaScript.valueToCode(block, 'fly', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
     var code = 'move = ' + value_fly * 40 +';\n';
    code += 'updatePlane(0,-move);';
    code += 'waitForSeconds(move/40);\n';
    code += 'move = 0;\n';
  return code;
};
Blockly.Blocks['fly_right'] = {
  init: function() {
    this.appendValueInput("fly")
        .setCheck(null)
        .appendField("Fly down");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['fly_right'] = function(block) {
  var value_fly = Blockly.JavaScript.valueToCode(block, 'fly', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
     var code = 'move = ' + value_fly * 40 +';\n';
    code += 'updatePlane(0,move);';
    code += 'waitForSeconds(move/40);\n';
    code += 'move = 0;\n';
  return code;
};
Blockly.Blocks['fly_straight'] = {
  init: function() {
    this.appendValueInput("fly")
        .setCheck(null)
        .appendField("Fly straight");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['fly_straight'] = function(block) {
  var value_fly = Blockly.JavaScript.valueToCode(block, 'fly', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
     var code = 'move = ' + value_fly * 40 +';\n';
    code += 'updatePlane(move, 0);';
    code += 'waitForSeconds(move/40);\n';
    code += 'move = 0;\n';
  return code;
};



Blockly.Blocks['blocks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0, 0, 7), "block")
        .appendField("squares ");
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['blocks'] = function(block) {
  var number_block = block.getFieldValue('block');
  // TODO: Assemble JavaScript into code variable.
    var code = number_block;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Blocks['wait_seconds'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("wait")
            .appendField(new Blockly.FieldTextInput("1"), "SECONDS")
            .appendField("s.");
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
                ["fly to", "default_point"],
                ["Newfoundland", "first_point"],
                ["Scotland", "second_point"],
                ["Poland", "third_point"],
                ["Lithuania", "fourth_point"]
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

     globalID = requestAnimationFrame(function() { changePoints(x, y); });
     console.log(globalID);
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
//console.log(x + " - " + y);
    //check if end point setTimeout(function() { $('#nextModal').modal('show'); }, 2000);
    if (410 > x && x >= 390 && 115 > y && y > 80) {
        if (points[0] == 1 && points[1] == 1 && points[2] == 1) {
            setTimeout(function() {
                document.getElementById("lituanica_plane").style.visibility = 'hidden';
                background.clearRect(0, 0, canvas.width, canvas.height);
                background.drawImage(map, 0, 0);
                background.drawImage(plane, 0, 50);
            }, 1000);
            setTimeout(function() { $('#nextModal').modal('show'); }, 2000);
        } else if ((x == 400 && y == 90)||(x == 400 && y == 110)  ) {
            
            setTimeout(function() { alert("Not all points are visited!"); }, 500);
        }
    } else if (100 >= x && x >= 80 && 140 >= y && y >= 120) {
        background.clearRect(0, 0, canvas.width, canvas.height);
        background.drawImage(map, 0, 0);
        drawGrid();
        background.strokeStyle = 'black';
        background.font = "12px Arial";
        background.strokeText("Newfoundland", 140, 135);
        points[0] = 1;
    } else if (290 >= x && x >= 270 && 100 >= y && y >= 88) {
        background.clearRect(0, 0, canvas.width, canvas.height);
        background.drawImage(map, 0, 0);
        drawGrid();
        background.strokeStyle = 'black';
        background.font = "12px Verdana";
        background.strokeText("Scotland", 320, 90);
        points[1] = 1;
    } else if (370 >= x && x >= 350 && 130 >= y && y >= 100) {
        background.clearRect(0, 0, canvas.width, canvas.height);
        background.drawImage(map, 0, 0);
        drawGrid();
        background.strokeStyle = 'black';
        background.font = "12px Verdana";
        background.strokeText("Poland", 410, 170);
        points[2] = 1;
    }

}