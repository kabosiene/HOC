

Blockly.Blocks['spalva'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Kelio spalva")
            .appendField(new Blockly.FieldColour("#ff0000"), "spalva");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['spalva'] = function(block) {
    var colour_spalva = block.getFieldValue('spalva');
    // TODO: Assemble JavaScript into code variable.
    var code = ' route.strokeStyle ="' + colour_spalva + '";\n';
    return code;
};


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
    var code = " angleInDegrees+=90;\n lituanica.clearRect(0,0,canvas.width,canvas.height);\n lituanica.save(); lituanica.translate(route_x ,route_y);\n lituanica.rotate(angleInDegrees*Math.PI/180);\n lituanica.drawImage(plane,-plane.width/2,-plane.width/2);\n";
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
    var code = " angleInDegrees-=90;\n lituanica.clearRect(0,0,canvas.width,canvas.height);\n lituanica.save(); lituanica.translate(route_x ,route_y);\n lituanica.rotate(angleInDegrees*Math.PI/180);\n lituanica.drawImage(plane,-plane.width/2,-plane.width/2);\n";
    return code;
};

Blockly.Blocks['grid_goforward'] = {
    init: function() {
        this.setColour(320);
        this.appendDummyInput()
            .appendField('Skristi ')
            .appendField(new Blockly.FieldNumber(0), "STEPS")
            .appendField(' langelius');
        this.setTooltip('Eiti tiesia linija, be pasisukimų');
        this.setNextStatement(true);
        this.setPreviousStatement(true);
    }
};

Blockly.JavaScript['grid_goforward'] = function(block) {
    var number_zingsniai = block.getFieldValue('STEPS');
    var move = number_zingsniai*20; 
    var code=' if ('+move+' > 0) {animatePlane('+move+');}\n function animatePlane(x) { lituanica.clearRect(0,0,canvas.width,canvas.height);\n lituanica.drawImage(plane, plain_x, plain_y);\n plain_x += 1;\n  x -= 1;\n  frameID = requestAnimationFrame(function() {animatePlane(x);});\n if (x==0) {cancelAnimationFrame(frameID); } }\n';
        code += 'route.beginPath();\n route.moveTo(route_x,route_y);\n route.lineTo(route_x+'+move+', route_y);\n route.stroke();\n route_x +='+move+'; ';
        return code;


};

    
     
  