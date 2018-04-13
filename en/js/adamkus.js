Blockly.Blocks['game'] = {
    init: function() {
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("Game settings:");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['game'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = "  function jump(index){ \n var explodeIfColision = setInterval(function() {\nif (isStarllColision()){ clearInterval(explodeIfColision);\n    if (treasureCollection[index] == 'not1' || treasureCollection[index] == 'not2' || treasureCollection[index] == 'not3' || treasureCollection[index] == 'not4') {alert('Laimėjimas neteisingas. Pakeisk ir pabandyk dar kartą.')}else{ \ncountStars += 1; document.getElementById('rating').innerHTML = 'Collected: ' +countStars;}\nanimTreasure('.star');\n} setTimeout(function() {clearInterval(explodeIfColision);}, 500);\n";
    code += statements_name;
    code += " }, 50); };";
    return code;
};
Blockly.Blocks['count'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("points = ")
            .appendField(new Blockly.FieldNumber(0), "NAME");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['end_game'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("end game");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['button_clicked'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("clicked")
            .appendField(new Blockly.FieldDropdown([
                ["arrow up", "38"],
                ["screen", "screen"]
            ]), "button");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
// Blockly.Blocks['jump'] = {
//     init: function() {
//         this.appendDummyInput()
//             .appendField("pašokti");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(330);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };
Blockly.Blocks['jump'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("jump, when")
        .appendField(new Blockly.FieldDropdown([
            ["screen","screen"],
          ["arrow up",38]]), "buttons")
        .appendField("clicked");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['run'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("run");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['treasure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("achievement")
        .appendField(new Blockly.FieldDropdown([["show","visible"], ["hide","hidden"]]), "visibility");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['treasure_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("achievement flying speed")
        .appendField(new Blockly.FieldNumber(0, 0, 19), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['valdymas'] = {
    init: function() {
        this.appendStatementInput("control")
            .setCheck()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Character settings:");
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['valdymas'] = function(block) {
    var statements_control = Blockly.JavaScript.statementToCode(block, 'control');
    // TODO: Assemble JavaScript into code variable.
    var code = statements_control;
    return code;
};

Blockly.JavaScript['treasure'] = function(block) {
  var dropdown_visibility = block.getFieldValue('visibility');
  // TODO: Assemble JavaScript into code variable.
  var code = 'treasureOn("'+dropdown_visibility+'");\n';
  return code;
};
Blockly.JavaScript['treasure_speed'] = function(block) {
  var number_speed = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  if (number_speed==0) {  var code = 'treasureSpeed(0);\n';} else{
  var code = 'treasureSpeed(20-'+number_speed+');\n';}
  return code;
};

Blockly.JavaScript['count'] = function(block) {
    var number_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'countStars == ' + number_name + '';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['end_game'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'clearInterval(explodeIfColision);endGame(countStars);\n';
    return code;
};

Blockly.JavaScript['button_clicked'] = function(block) {
    var dropdown_button = block.getFieldValue('button');
    // TODO: Assemble JavaScript into code variable.
    var code = 'var button = '+dropdown_button;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

// Blockly.JavaScript['jump'] = function(block) {
//     // TODO: Assemble JavaScript into code variable.
//     var code = "clickJump(button);";
//     //code += " function clickJump(action) {$('#up').on(action, function(e) { if (e.type == action) { jump(); }});}";
//     return code;
// };
Blockly.JavaScript['jump'] = function(block) {
  var dropdown_buttons = block.getFieldValue('buttons');
  // TODO: Assemble JavaScript into code variable.
   var code = "clickJump('"+dropdown_buttons+"');";
  return code;
};
Blockly.JavaScript['run'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'run();\n';
    return code;
};



/********treasures****************/
Blockly.Blocks['select_treasure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("achievement:")
        .appendField(new Blockly.FieldDropdown([[" Construction Engineer Diploma, 1960","1"], ["Active member of American-Lithuanian Community","2"], 
            ["International environmental award, 1988","3"], ["National record held in 100 meter swimming","not1"], 
            ["President of Lithuania, 1998-2003","4"], ["Artist, Fluxus movement initiator","not2"], 
            ["President of Lithuania, 2004-2009","5"], ["Record holder for 100 meter sprint","6"],
             ["President of Lithuania, 2014-2019","not3"], ["NATO membership negotiations for Lithuania","7"],
              ["EU membership negotiations for Lithuania","8"], ["Signatory of the 1918 Act of Reinstating Independence","not4"]]), "treasure_name");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['select_treasure'] = function(block) {
  var dropdown_treasure_name = block.getFieldValue('treasure_name');
  // TODO: Assemble JavaScript into code variable.
  var code = 'treasureCollect("'+dropdown_treasure_name+'");\n';
  return code;
};