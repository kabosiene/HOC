// mazylis

Blockly.Blocks['list_includes'] = {
    init: function() {
        this.appendValueInput("list_name")
            .setCheck("String")
            .appendField("in the list");
        this.appendValueInput("item_place")
            .setCheck(null)
            .appendField("find")
            .appendField(new Blockly.FieldDropdown([
                ["all", "all"],
                ["first", "first"],
                ["last", "last"]

            ]), "item_placement")
            .appendField("with date");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['list_includes'] = function(block) {
    var value_list_name = Blockly.JavaScript.valueToCode(block, 'list_name', Blockly.JavaScript.ORDER_NONE);
    var dropdown_item_placement = block.getFieldValue('item_placement');
    var value_item_place = Blockly.JavaScript.valueToCode(block, 'item_place', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = 'contains(' + value_list_name + ',' + value_item_place + ',"' + dropdown_item_placement + '")';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};
/*************L2******************/
Blockly.Blocks['list_includes2'] = {
    init: function() {
        this.appendValueInput("list_name")
            .setCheck("String")
            .appendField("in the list");
        this.appendValueInput("item_place")
            .setCheck(null)
            .appendField("find")
            .appendField(new Blockly.FieldDropdown([
                ["first", "first"],
                ["last", "last"]

            ]), "item_placement")
            .appendField("width date");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['list_includes2'] = function(block) {
    var value_list_name = Blockly.JavaScript.valueToCode(block, 'list_name', Blockly.JavaScript.ORDER_NONE);
    var dropdown_item_placement = block.getFieldValue('item_placement');
    var value_item_place = Blockly.JavaScript.valueToCode(block, 'item_place', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = 'contains(' + value_list_name + ',' + value_item_place + ',"' + dropdown_item_placement + '")';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Blocks['set_v2'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldDropdown([
                ["documents", "dokumentai"],
                ["final list", "last_list"],
                ["list according to date", "sorted_list"],
                ["first date", "first_v"],
                ["last date", "last_v"]
            ]), "kintamieji_set")
            .appendField("=");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['set_v2'] = function(block) {
    var dropdown_kintamieji_set = block.getFieldValue('kintamieji_set');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_kintamieji_set + '=' + value_name+ ';\n';
    return code;
};
/*********************************/


Blockly.Blocks['spausdinti'] = {
    init: function() {
        this.appendValueInput("last_list_name")
            .setCheck("Array")
            .appendField("show list: ");
        this.setPreviousStatement(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['spausdinti'] = function(block) {
    var value_last_list_name = Blockly.JavaScript.valueToCode(block, 'last_list_name', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = ' ctx.clearRect(0, 0, canvas.width, canvas.height);\n spausdinti(' + value_last_list_name + ');';
    return code;
};

Blockly.Blocks['v_dokumentai'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["documents", "dokumentai"],
                ["final list", "last_list"],
                ["list according to date", "sorted_list"],
                ["first date", "first_v"],
                ["last date", "last_v"]
            ]), "kintamieji");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['v_dokumentai'] = function(block) {
    var dropdown_kintamieji = block.getFieldValue('kintamieji');
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_kintamieji;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['set_v'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck("Array")
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldDropdown([
                ["documents", "dokumentai"],
                ["final list", "last_list"],
                ["list according to date", "sorted_list"]
            ]), "kintamieji_set")
            .appendField("=");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['set_v'] = function(block) {
    var dropdown_kintamieji_set = block.getFieldValue('kintamieji_set');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_kintamieji_set + '=' + value_name+ ';\n';
    return code;
};


function contains(a, obj, place) {

    var list_x = [];
    if (place == "all") {
        for (var i = 0; i < a.length; i++) {
            if (a[i].includes(obj)) {
                list_x.push(a[i]);
            }
        }
        return list_x;

    } else {
        for (var i = 0; i < a.length; i++) {
            if (a[i].includes(obj)) {
                list_x.push(i);
            }
        }

        if (place == "first") { return list_x[0] + 1; } else { return list_x[list_x.length - 1] + 1; }
    }
}


function spausdinti(list) {
    // ctx.fillStyle = "black";
    // ctx.font = "12px Verdana";
 document.getElementById('doclist').innerHTML ="";
    for (var i = 0; i < list.length; i++) {

       // ctx.strokeText("Dokumentas:" + list[i], 20, (i + 1) * 30);

        document.getElementById('doclist').innerHTML += "<div class=text"+i+"> Document:" + list[i] + "<br></div>";
    }

 // my_canvas.addEventListener('click', clickReporter, false);
}