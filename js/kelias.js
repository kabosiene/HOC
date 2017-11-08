var kepure, SPavadelis, Kepure, Pavadelis, lt, lv, est;
kepure = "raudona";
pavadelis = "baltas";
batai = "zali";
lt = 30;
lv=50;
est = 10;

Blockly.Blocks['keisti'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Jei ")
        .appendField(new Blockly.FieldDropdown([["pasirink","Option"], ["mergaitės kepurė","kepure"], ["šunukio pavadėlis","pavadelis"], ["berniuko batai","batai"]]), "people")
        .appendField("spalva")
        .appendField(new Blockly.FieldDropdown([["pasirink","Option"], ["raudona","raudona"], ["baltas","baltas"],["žali","zali"]]), "color");
    this.appendStatementInput("IF")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['keisti'] = function(block) {
  var dropdown_people = block.getFieldValue('people');
  var dropdown_color = block.getFieldValue('color');
  var statements_if = Blockly.JavaScript.statementToCode(block, 'IF');
  // TODO: Assemble JavaScript into code variable.

  var code = 'if('+dropdown_people+' == "'+ dropdown_color+'")\n{var x='+dropdown_people+';\n'+statements_if+'};\n';
  return code;
};

Blockly.Blocks['add_person'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pridėti žmogų");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['add_person'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = ' animatePerson(x,i);\n ';
    code += 'waitForSeconds(3);\n';
  return code;
};
/****************level2*********************************/
Blockly.Blocks['add_person2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pridėti žmogų");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['add_person2'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = ' updatePerson(x,i);\n ';
    return code;
};
Blockly.Blocks['atstumas'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Jei atstumas tarp")
        .appendField(new Blockly.FieldDropdown([["lietuvių","lt"], ["latvių","lv"], ["estų","est"]]), "people")
        .appendField(">")
        .appendField(new Blockly.FieldNumber(0, 0, 490), "distance")
        .appendField("m.");
    this.appendStatementInput("IF")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['atstumas'] = function(block) {
  var dropdown_people = block.getFieldValue('people');
  var number_distance = block.getFieldValue('distance');
  var statements_if = Blockly.JavaScript.statementToCode(block, 'IF');
  // TODO: Assemble JavaScript into code variable.
  var code = 'var lt = 20;\nvar lv = 30\n;var est = 40;\n if ('+dropdown_people+' > '+number_distance+')\n {var x="'+dropdown_people+'";\n'+statements_if+'}else{lost()};\n';
  return code;
};


    function animatePerson(x, i) {
        if (x == "lt") {
        draw(girl, i, 10);
         // $('.person').show().css({ "animation-name": "animatedPerson" });
          } 
        if (x == "lv") { $('.person2').show().css({ "animation-name": "animatedPerson2" }); } 
        if (x == "est") { $('.person3').show().css({ "animation-name": "animatedPerson3" }); };

    }
