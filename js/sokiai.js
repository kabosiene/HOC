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
var code = 'anim_speed = '+value_anim_speed+';\n'
//anim_speed = true;
    return code;
};