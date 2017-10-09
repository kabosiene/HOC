 Blockly.Blocks['keisti'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
         .appendField("Keisti")
             .appendField(new Blockly.FieldDropdown([
                 ["x"],["20"],
             ]), "XPOS")
             .appendField(new Blockly.FieldDropdown([
                 ["y"],["20"],
             ]), "YPOS");
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['keisti'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath();ctx.arc(' + 200 + ',' + 150 + ',50,0,Math.PI);ctx.stroke();\n';
     var code ='ctx.beginPath(); ctx.bezierCurveTo(150, 100, 200, 325, 250, 100); ctx.stroke();\n';
     return code;
 };