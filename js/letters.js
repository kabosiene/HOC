
 Blockly.Blocks['kvadratas'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Rėmelis")
         this.setInputsInline(false);
         this.setNextStatement(true, null);
         this.setColour(0);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['kvadratas'] = function(block) {

     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.lineWidth=3;ctx.rect(150,100,100,100);ctx.stroke();';
     return code;
 };


 Blockly.Blocks['raide_A'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Raidė A")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_A'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath(); ctx.moveTo(200, 100); ctx.lineTo(150, 200); ctx.stroke(); ctx.beginPath(); ctx.moveTo(200, 100); ctx.lineTo(250, 200); ctx.stroke(); \n';
     return code;
 };

  Blockly.Blocks['raide_Ą'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Raidė Ą")
         this.setInputsInline(false);
         this.setPreviousStatement(true, null);
         this.setNextStatement(true, null);
         this.setColour(260);
         this.setTooltip("");
         this.setHelpUrl("");
     }
 };
 Blockly.JavaScript['raide_Ą'] = function(block) {
     //.arc(x, y, radius, startAngle, endAngle)
     var x = block.getFieldValue('XPOS');
     var y = block.getFieldValue('YPOS');
     var code = 'ctx.beginPath(); ctx.moveTo(200, 100); ctx.lineTo(150, 200); ctx.stroke(); ctx.beginPath(); ctx.moveTo(200, 100); ctx.lineTo(250, 200);ctx.lineTo(250, 210);ctx.lineTo(260, 210); ctx.stroke(); \n';
     return code;
 };


 Blockly.Blocks['raide_O'] = {
     // draw a line from current position to x,y
     init: function() {
         this.appendDummyInput()
             .appendField("Raidė O")
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
     var code = 'ctx.beginPath();ctx.arc(' + 200 + ',' + 150 + ',50,0,2*Math.PI);ctx.stroke();\n';
     return code;
 };
 Blockly.Blocks['raide_U'] = {
     // draw a line from current position to x,y
     init: function() {
         // this.appendDummyInput()
         // .appendField("Raidė U")
         //     .appendField(new Blockly.FieldDropdown([
         //         ["x"],["20"],
         //     ]), "XPOS")
         //     .appendField(new Blockly.FieldDropdown([
         //         ["y"],["20"],
         //     ]), "YPOS");
         // this.setInputsInline(false);
         // this.setPreviousStatement(true, null);
         // this.setNextStatement(true, null);
         // this.setColour(260);
         // this.setTooltip("");
         // this.setHelpUrl("");
         this.appendDummyInput()
             .appendField("Raidė U")
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
     var code = 'ctx.beginPath();ctx.arc(' + 200 + ',' + 150 + ',50,0,Math.PI);ctx.stroke();\n';
     var code ='ctx.beginPath(); ctx.bezierCurveTo(150, 100, 200, 325, 250, 100); ctx.stroke();\n';
     return code;
 };
 Blockly.Blocks['raide_C'] = {
     // draw a line from current position to x,y
     init: function() {
         // this.appendDummyInput()
         // .appendField("Raidė C")
         //     .appendField(new Blockly.FieldDropdown([
         //         ["x"],["50"],
         //     ]), "XPOS")
         //     .appendField(new Blockly.FieldDropdown([
         //         ["y"],["70"],
         //     ]), "YPOS");
         // this.setInputsInline(false);
         // this.setPreviousStatement(true, null);
         // this.setNextStatement(true, null);
         // this.setColour(260);
         // this.setTooltip("");
         // this.setHelpUrl("");
         this.appendDummyInput()
             .appendField("Raidė C")
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
     var code = 'ctx.beginPath();ctx.arc(' + 200 + ',' + 150 + ',50, 7, 1.7 * Math.PI);ctx.stroke();\n';
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
     var code = 'ctx.beginPath(); ctx.moveTo(250, 100); ctx.lineTo(150, 100); ctx.lineTo(150, 200); ctx.lineTo(250, 200); ctx.moveTo(150, 150); ctx.lineTo(250, 150); ctx.stroke();\n';
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
     var code = 'ctx.beginPath(); ctx.moveTo(250, 100); ctx.lineTo(150, 100); ctx.lineTo(150, 200); ctx.lineTo(250, 200); ctx.moveTo(150, 150); ctx.lineTo(250, 150); ctx.moveTo(170, 90); ctx.lineTo(230, 90); ctx.stroke();\n';

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
     var code = 'ctx.beginPath(); ctx.moveTo(150, 100); ctx.lineTo(250, 100); ctx.lineTo(200, 200); ctx.lineTo(151, 150); ctx.lineTo(225, 150); ctx.stroke();\n';
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
     var code = 'ctx.beginPath(); ctx.moveTo(150, 100); ctx.lineTo(250, 100); ctx.stroke(); ctx.beginPath(); ctx.moveTo(150, 100); ctx.lineTo(150, 150); ctx.stroke(); ctx.beginPath(); ctx.moveTo(150, 150); ctx.lineTo(250, 150); ctx.stroke(); ctx.beginPath(); ctx.moveTo(250, 150); ctx.lineTo(250, 200); ctx.stroke(); ctx.beginPath(); ctx.moveTo(250, 200); ctx.lineTo(150, 200); ctx.stroke();\n';
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
     var code = 'ctx.beginPath();ctx.beginPath();ctx.moveTo(150, 100);ctx.lineTo(250, 100);ctx.stroke();ctx.beginPath();ctx.moveTo(200, 100);ctx.lineTo(200, 200);ctx.stroke();\n';
     return code;
 };