
Blockly.Blocks['grid_turnright'] = {
    init: function() {
        this.setColour(320);
        this.appendDummyInput()
            .appendField('Pasisuk į dešinę');
        this.setTooltip('Pasisukti 90 laipsnių į dešinę ');
        this.setNextStatement(true);
        this.setPreviousStatement(true);
    }
};

Blockly.JavaScript['grid_turnright'] = function(block) {
    var code = 'plane_state = "plane_right";\n';
       x_deg = 90;
        code += 'document.getElementById("lituanica_plane").style.transformOrigin = "0px 100px 0";\n'
       // document.getElementById("lituanica_plane").style.transform = "rotate(90deg)"'
    //code += "lituanica.clearRect(0,0,canvas.width,canvas.height);\n  lituanica.drawImage(plane_right, plain_x, plain_y);\n ";
    return code;
};
Blockly.Blocks['grid_forward'] = {
    init: function() {
        this.setColour(320);
        this.appendDummyInput()
            .appendField('Pasisuk tiesiai');
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
    return code;
};

Blockly.Blocks['grid_turnleft'] = {
    init: function() {
        this.setColour(320);
        this.appendDummyInput()
            .appendField('Pasisuk į kairę');
        this.setTooltip('Pasisukti 90 laipsnių į kairę');
        this.setNextStatement(true);
        this.setPreviousStatement(true);
    }
};

Blockly.JavaScript['grid_turnleft'] = function(block) {
    var code = 'plane_state = "plane_left";\n';
    x_deg = -90;
     code += ' document.getElementById("lituanica_plane").style.transformOrigin = "100px 50px 0";\n'
     // document.getElementById("lituanica_plane").style.transform = "rotate(-90deg)";'
    //code += "lituanica.clearRect(0,0,canvas.width,canvas.height);\n  lituanica.drawImage(plane_left, plain_x, plain_y);\n ";
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
    var code = 'move = '+number_zingsniai * 50+';\n';
        console.log(x_deg);
     code += 'update_plane(move, '+x_deg+');';
 return code;


};
