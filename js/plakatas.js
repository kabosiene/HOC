    var workspace = Blockly.inject('blocklyDiv', {
        toolbox: document.getElementById('toolbox'),
        grid: {
            spacing: 20,
            length: 5,
            colour: '#f2f2f2',
            snap: true
        },
        trashcan: true
    });

    function toJavascript(event) {
        var code = Blockly.JavaScript.workspaceToCode(workspace);
        document.getElementById('content_javascript').innerHTML = code;
    }
    workspace.addChangeListener(toJavascript);

    var my_canvas = document.getElementById("canvas");
    var ctx = my_canvas.getContext("2d");
    var my_canvas2 = document.getElementById("canvas2");
    var icons = my_canvas2.getContext("2d");
    var my_canvas3 = document.getElementById("canvas3");
    var background = my_canvas3.getContext("2d");
        background.strokeStyle = 'black';
        background.strokeText("X:480", 460, 10);
        background.strokeText("Y:320", 5, 325);
        background.strokeText("X:0; Y:0", 0, 10);


    download.addEventListener("click", function() {
        // only jpeg is supported by jsPDF
         var imgData = canvas.toDataURL();
         var imgData2 = canvas2.toDataURL();
        var pdf = new jsPDF({
            orientation: 'landscape'
        })


         pdf.addImage(imgData, 'JPEG', 83, 60);
         pdf.addImage(imgData2, 'JPEG', 83, 60);

        pdf.save("plakatas.pdf");
    }, false);

    function runCode() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        icons.clearRect(0, 0, canvas.width, canvas.height);
        // Generate JavaScript code and run it.
        window.LoopTrap = 1000;
        Blockly.JavaScript.INFINITE_LOOP_TRAP =
            'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
        var code = Blockly.JavaScript.workspaceToCode(workspace);
        Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
        try {
            if (code.length > 0) {
                eval(code);
            } else {
                alert('Pridėk kodo blokelį.');
            }

        } catch (e) {
            alert(e);
        }
    }


    Blockly.Blocks['select_image'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Paveiksliukas")
                .appendField(new Blockly.FieldDropdown([
                    ["Adamkus", "adamkus"],
                    ["Basanavičius", "basanavicius"],
                    ["Estija", "estija"],
                    ["Latvija", "latvija"],
                    ["Lietuva", "lietuva"],
                    ["Euras", "euras"],
                    ["Kasa", "kasa"],
                    ["Litas", "litas"],
                    ["Lituanica", "lituanica"],
                    ["Šakotis", "sakotis"],
                    ["Mačiūnas 1", "maciunas1"],
                    ["Mačiūnas 2", "maciunas2"],
                    ["Mažylis", "mazylis"],
                    ["Meilutytė", "meilutyte"],
                    ["Mergina", "mergina"],
                    ["Palmės", "palmes"],
                    ["Šokėjų pora 1", "sokejai1"],
                    ["Šokėjų pora 2", "sokejai2"],
                    ["Šokėjų pora 3", "sokejai3"],
                    ["Šokėjų pora 4", "sokejai4"]
                ]), "image")
                .appendField("X: ")
                .appendField(new Blockly.FieldNumber(0, 0, 480), "x")
                .appendField("Y: ")
                .appendField(new Blockly.FieldNumber(0, 0, 320), "y");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['select_image'] = function(block) {
        var dropdown_image = block.getFieldValue('image');
        var number_x = block.getFieldValue('x');
        var number_y = block.getFieldValue('y');
        // TODO: Assemble JavaScript into code variable.
        var code = 'draw("' + dropdown_image + '",' + number_x + ',' + number_y + ');\n';
        // m_ctx.drawImage(img_maciunas, 140, 20, 200, 300);
        return code;
    };

    Blockly.Blocks['block_name'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Fonas su tavo vardu: ")
                .appendField(new Blockly.FieldTextInput("įrašyk vardą"), "kids_name");
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };
    Blockly.JavaScript['block_name'] = function(block) {
        var text_kids_name = block.getFieldValue('kids_name');
        // TODO: Assemble JavaScript into code variable.
        var code = 'write("'+text_kids_name+'");';
        return code;
    };

    function draw(name, x, y) {
        var img_name = new Image();
        img_name.setAttribute('crossOrigin', 'anonymous');
        img_name.src = '../img_lessons/plakatas/' + name + '.png';
        img_name.onload = function() { icons.drawImage(img_name, x, y); }
    }

    function write(name) {
        var img_name = new Image();
        img_name.setAttribute('crossOrigin', 'anonymous');
        img_name.src = '../img_lessons/plakatas/background.png';
        img_name.onload = function() { 
        ctx.drawImage(img_name, 0, 0);
        ctx.font = "16px Arial";
        ctx.fillText(name, 160, 162) }
    }
      