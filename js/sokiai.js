var anim_speed = 2;
      var audio = new Audio('../Kepurine.mp3');
      audio.pause();
      
audio.currentTime = 0;
Blockly.Blocks['anim_speed'] = {
    init: function() {
        this.appendValueInput("ANIM_SPEED")
            .setCheck(null)
            .appendField("animacijos greitis = ");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("Plaukimo animacijos greitis");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['anim_speed'] = function(block) {
    var value_anim_speed = Blockly.JavaScript.valueToCode(block, 'ANIM_SPEED', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    //var code = 'document.getElementById("test1").style.animationDuration = ""+(0.1/' + value_anim_speed + ')+"s;\n';
    //var code = 'document.getElementById("test1").style.animationDuration = "' + value_anim_speed + 's";\n';
    var code = 'anim_speed = ' + value_anim_speed + ';\n';
    code += 'aSpeed(anim_speed);';
    //anim_speed = true;
    return code;
};

Blockly.Blocks['wait_seconds'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("laukti")
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

Blockly.Blocks['musicplay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Groti muziką");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['musicplay'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'musicPlay();\n';
  return code;
};
Blockly.Blocks['dance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Šokis")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "sokiai");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['dance'] = function(block) {
  var dropdown_sokiai = block.getFieldValue('sokiai');
  // TODO: Assemble JavaScript into code variable.
  var code = 'costumeChange('+dropdown_sokiai+');\n';
  return code;
};

Blockly.Blocks['rotate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["suktis","spin"], ["šokti vietoje","stop"]]), "sukimasis");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['rotate'] = function(block) {
  var dropdown_sukimasis = block.getFieldValue('sukimasis');
  // TODO: Assemble JavaScript into code variable.
  
  var code = 'rotate("'+dropdown_sukimasis+'");\n';
  console.log(code);
  return code;
};