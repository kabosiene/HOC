    var my_canvas = document.getElementById("canvas");
    var ctx = my_canvas.getContext("2d");
    my_canvas.addEventListener('click', clickReporterPirkti, false);
    var button = new Image();
    var button_euras = new Image();
    var buy = new Image();
    var sakotis = new Image();

    var eurasKainuoja = 3.45;
    var turimLitų = 0;
    var turimEurų = 0;


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
            my_canvas.addEventListener('click', clickReporterEuras, false);

        } else if (dropdown_name == "LITAS") {
            my_canvas.addEventListener('click', clickReporterLitas, false);
}
        // else if (dropdown_name == "PIRKTI") {
        //     my_canvas.addEventListener('click', clickReporterPirkti, false);
        // }
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.JavaScript.ORDER_NONE];
    };

    Blockly.Blocks['keisti_valiuta'] = {
        init: function() {
            this.appendValueInput("padidink")
                .setCheck(null)
                .appendField("padidink")
                .appendField(new Blockly.FieldDropdown([
                    ["litai", "LITAS"],
                    ["eurai", "EURO"]
                ]), "pinigai");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(20);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

    Blockly.JavaScript['keisti_valiuta'] = function(block) {
        var dropdown_pinigai = block.getFieldValue('pinigai');
        var value_padidink = Blockly.JavaScript.valueToCode(block, 'padidink', Blockly.JavaScript.ORDER_ATOMIC);

        // TODO: Assemble JavaScript into code variable.
        if(dropdown_pinigai == "EURO"){
              turimEurų += value_padidink;
        }
        if (dropdown_pinigai == "LITAS"){
             turimLitų = turimEurų * value_padidink ;
        }
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw_elements();
        var code =  dropdown_pinigai + value_padidink+";\n";
        return code;
    };
    Blockly.Blocks['kintamasis'] = {
        init: function() {
            this.appendDummyInput()
                .appendField(new Blockly.FieldNumber(0), "KINTAMASIS");
            this.setOutput(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    }

    Blockly.JavaScript['kintamasis'] = function(block) {
        var number_kintamasis = block.getFieldValue('KINTAMASIS');
        // TODO: Assemble JavaScript into code variable.
        var code = number_kintamasis;
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.JavaScript.ORDER_NONE];
    };


    button.src = "../test_img/download.jpg";
    button_euras.src = "../test_img/euras.jpg";
    sakotis.src = "../test_img/sakotis.jpg";
    buy.src = "http://i.imgur.com/bCXdyYP.png";

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
        draw(button, 10, 10);
        draw(buy, 250, 200);
        draw(button_euras, 10, 120);
        draw(sakotis, 300, 50);
        ctx.strokeText("Kaina: 30 Litų", 300, 50);
        ctx.strokeText("Eurai: " + turimEurų, 10, 120);
        ctx.strokeText("Surinkta suma: " + turimLitų, 10, 10);
    }

    function exchangeLitai() {

        // turimEurų += 1;
        // turimLitų = turimEurų * eurasKainuoja;
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        // draw_elements();
    }

    function clickReporterEuras(e) { /// assign event to some variable

        /// adjust mouse click position to be relative to canvas:
        var rect = this.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        //button_euras
        if (x >= 10 && x <= (10 + button_euras.width) &&
            y >= 120 && y <= (120 + button_euras.height)) {
            exchangeLitai();
        }

    }

    function clickReporterLitas(e) { /// assign event to some variable

        /// adjust mouse click position to be relative to canvas:
        var rect = this.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        /// check x/y coordinate against the image position and dimension
        //button litas
        if (x >= 10 && x <= (10 + button.width) &&
            y >= 10 && y <= (10 + button.height)) {

            //exchangeLitai();
        }
    }

    function clickReporterPirkti(e) { /// assign event to some variable

        /// adjust mouse click position to be relative to canvas:
        var rect = this.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        if (x >= 250 && x <= (250 + buy.width) &&
            y >= 200 && y <= (200 + buy.height)) {


            if (turimLitų > 30) {
                ctx.clearRect(0, 0, 10, 10);
                ctx.strokeText("NUSIPIRKAI", 200, 100);
            } else {

                turimLitų = 0;
                turimEurų = 0;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                draw_elements();
                ctx.strokeText("TRUKSTA", 200, 100);
            }
        }
    }



    // function clickReporter(e) { /// assign event to some variable

    //     /// adjust mouse click position to be relative to canvas:
    //     var rect = this.getBoundingClientRect(),
    //         x = e.clientX - rect.left,
    //         y = e.clientY - rect.top;

    //     /// check x/y coordinate against the image position and dimension
    //     //button litas
    //     if (x >= 10 && x <= (10 + button.width) &&
    //         y >= 10 && y <= (10 + button.height)) {

    //         //exchangeLitai();
    //     }
    //     //button_euras
    //      if (x >= 10 && x <= (10 + button_euras.width) &&
    //         y >= 120 && y <= (120 + button_euras.height)) {

    //         exchangeLitai();
    //     }
    //     //buy
    //     if (x >= 250 && x <= (250 + buy.width) &&
    //         y >= 200 && y <= (200 + buy.height)) {


    //         if (turimLitų > 30) {
    //             ctx.clearRect(0, 0, 10, 10);
    //             ctx.strokeText("NUSIPIRKAI", 200, 100);
    //         } else {

    //             turimLitų = 0;
    //             turimEurų = 0;
    //             ctx.clearRect(0, 0, canvas.width, canvas.height);
    //             draw_elements();
    //             ctx.strokeText("TRUKSTA", 200, 100);
    //         }
    //     }
    // }