
        var my_canvas = document.getElementById("canvas");
    var ctx = my_canvas.getContext("2d");
    var button = new Image();
    var button_euras = new Image();
    var buy = new Image();
    var sakotis = new Image();
    my_canvas.addEventListener('click', clickReporterPirkti, false);
    var eurasKainuoja = 3.45;
    var litas;
    var euras;
    var paspausta;
    var callAgain;



    button.src = "../test_img/download.jpg";
    button_euras.src = "../test_img/euras.jpg";
    sakotis.src = "../test_img/sakotis.jpg";
    buy.src = "http://i.imgur.com/bCXdyYP.png";

    Blockly.Blocks['paspausta'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("paspaustas")
                .appendField(new Blockly.FieldDropdown([
                    ["euras", "EURO"],
                    ["litas", "LITAS"],
                    ["pirkti", "PIRKTI"]
                ]), "NAME");
            this.setOutput(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.JavaScript['paspausta'] = function(block) {
        var dropdown_name = block.getFieldValue('NAME');
        // TODO: Assemble JavaScript into code variable.
        var code ="";

        if (dropdown_name == "EURO") {
            //var a =  my_canvas.addEventListener('click', clickReporterEuras, false);
          // my_canvas.addEventListener('click', clickReporterEuras, false);
           code = "paspausta == 'eurai'";

        } else if (dropdown_name == "LITAS") {
            //var b = my_canvas.addEventListener('click', clickReporterLitas, false);
          // my_canvas.addEventListener('click', clickReporterLitas, false);
           //alert(paspausta);
           code = "paspausta == 'litai'";
}
        return [code, Blockly.JavaScript.ORDER_NONE];
    };
    //*****************************************************************************
    Blockly.Blocks['change'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("prie")
        .appendField(new Blockly.FieldDropdown([ ["eurai","euras"]]), "NAME")
        .appendField("pridėk")
        .appendField(new Blockly.FieldNumber(0), "NUMBER");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['change'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var number_name = block.getFieldValue('NUMBER');
  // TODO: Assemble JavaScript into code variable.
  var code = ''+dropdown_name+' += '+number_name+';\n';
  return code;
};
Blockly.Blocks['set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["eurai","euras"]]), "NAME")
        .appendField("=")
        .appendField(new Blockly.FieldNumber(0, 0), "NUMBER");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['set'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var number_name = block.getFieldValue('NUMBER');
  // TODO: Assemble JavaScript into code variable.
    var code = ''+dropdown_name+' = '+number_name+';\n';
  return code;
};



Blockly.Blocks['ifas'] = {
  init: function() {
    this.appendValueInput("if_reiksme")
        .setCheck(Boolean)
        .appendField("if");
    this.appendStatementInput("do_reiksme")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['ifas'] = function(block) {
  var value_if_reiksme = Blockly.JavaScript.valueToCode(block, 'if_reiksme', Blockly.JavaScript.ATOMIC);
  var statements_do_reiksme = Blockly.JavaScript.statementToCode(block, 'do_reiksme');
  // TODO: Assemble JavaScript into code variable.
  var code = 'callAgain(function(){if('+value_if_reiksme+'){\n'+statements_do_reiksme+'}});\n';
 // var code2 = 'if('+value_if_reiksme+'){\n'+statements_do_reiksme+'}\n;'
  return code;
};

Blockly.Blocks['convert'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("konvertuoti");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Konvertuoja eurus į litus. ");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['convert'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'litas = euras * 3.45;\n';
  code += 'euras = 0; \n';
  return code;
};
    //*****************************************************************************

    function callAgain(if_body){
     
      clicked = function(e){clickReporter(e,if_body)};
        my_canvas.addEventListener('click', clicked);

};

    button.onload = function() {
        draw(button, 10, 10);
    };
    button_euras.onload = function() {
        draw(button_euras, 10, 120);
    };
    buy.onload = function() {
        draw(buy, 250, 200);
    };
    sakotis.onload = function() {
        draw(sakotis, 300, 50);
        ctx.strokeText("Kaina: 30 Litų", 300, 50);
    };

    function draw(pic_name, x, y) {
        ctx.drawImage(pic_name, x, y);
    }

    function draw_elements() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw(button, 10, 10);
        draw(buy, 250, 200);
        draw(button_euras, 10, 120);
        draw(sakotis, 300, 50);
        ctx.strokeText("Kaina: 30 Litų", 300, 50);
        ctx.strokeText("Eurai: " + euras, 10, 120);
        ctx.strokeText("Litai: " + litas, 10, 10);
    }

   function clickReporter(e, if_body) { /// assign event to some variable

        /// adjust mouse click position to be relative to canvas:
        var rect = canvas.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        /// check x/y coordinate against the image position and dimension
        //button litas
        if (x >= 10 && x <= (10 + button.width) &&
            y >= 10 && y <= (10 + button.height)) {

            //exchangeLitai();
        paspausta = "litai";
        if_body();
        draw_elements();

        }
        //button_euras
         if (x >= 10 && x <= (10 + button_euras.width) &&
            y >= 120 && y <= (120 + button_euras.height)) {

           // exchangeLitai();
         paspausta = "eurai";
          if_body();
          draw_elements();
        }
        //buy
        // if (x >= 250 && x <= (250 + buy.width) &&
        //     y >= 200 && y <= (200 + buy.height)) {


        //     if (litas > 30) {
        //         ctx.clearRect(0, 0, 200, 100);
        //         ctx.strokeText("NUSIPIRKAI", 200, 100);
        //          setTimeout(function(){$('#nextModal').modal('show');},1000);
        //     } else {

        //         litas = 0;
        //         euras = 0;
        //         draw_elements();
        //         ctx.strokeText("TRUKSTA", 200, 100);
        //     }
        // }
    }

    function clickReporterPirkti(e) { /// assign event to some variable

        /// adjust mouse click position to be relative to canvas:
        var rect = this.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        if (x >= 250 && x <= (250 + buy.width) &&
            y >= 200 && y <= (200 + buy.height)) {


            if (litas >= 30) {
                ctx.clearRect(0,0,canvas.width, canvas.height);
                ctx.strokeText("NUSIPIRKAI", 200, 100);
                setTimeout(function(){$('#nextModal').modal('show');},1000);
            } else {

                litas = 0;
                euras = 0;
                draw_elements();
                ctx.strokeText("TRUKSTA", 200, 100);
            }
        }
    }



