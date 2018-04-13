var radius = 71;
var degreeAngle = 0;
var x1 = 73;
var y1 = 150;
var anim_speed;
var stop;
var spin;
var radius = 100; // adjust to move out items in and out 
var fields = $('.dance'),
    inner_fields = $('.d-inner'),
    container = $('#d5'),
    width = container.width(),
    height = container.height();
var angle = 0,
    step = (2 * Math.PI) / fields.length;
var danceCount = [];

fields.each(function() {
    var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
    var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);
    $(this).css({
        left: x + 'px',
        top: y + 'px'
    });

    angle += step;
});

function musicStop() {
    audio.pause();
    audio.currentTime = 0;
}

function runCode() {

    // Generate JavaScript code and run it.
    // window.LoopTrap = 1000;
    // Blockly.JavaScript.INFINITE_LOOP_TRAP =
    //     'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
    // var code = Blockly.JavaScript.workspaceToCode(workspace);
    // Blockly.JavaScript.INFINITE_LOOP_TRAP = null;

    Blockly.JavaScript.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
    Blockly.JavaScript.addReservedWords('highlightBlock');
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    var myInterpreter = new Interpreter(code, initApi);

    radius = 71;
    degreeAngle = 0;
    // animateCircle();                   
    anim_speed = 1;
    radius = 100; // adjust to move out items in and out 
    fields = $('.dance');
    container = $('#d5');
    width = container.width();
    height = container.height();
    angle = 0;
    step = (2 * Math.PI) / fields.length;
    danceCount = [];
    try {
        musicStop();
        if (code.length > 0) {
            //eval(code);

            function nextStep() {

                if (myInterpreter.step()) {

                    window.setTimeout(nextStep, 0);
                } else {
                    console.log(danceCount.join('').split('').length);
                    if (danceCount.join('').split('').length == 4) {
                        musicStop();
                        stopAnim();
                        stopDance();
                        setTimeout(function() { $('#nextModal').modal('show'); }, 2000);
                    } else {  
                        stopAnim();
                        stopDance();
                        musicStop();
                        alert("Panaudok 4 skirtingus šokio judesius");}
                }
            }
            nextStep();

        } else {
            alert('Pridėk kodo blokelį.');
        }

    } catch (e) {
        alert('Klaida! Patikrink blokelius');
    }
}

function initApi(interpreter, scope) {

    // Add an API function for the alert() block.
    var wrapper = function(text) {
        text = text ? text.toString() : '';
        return interpreter.createPrimitive(alert(text));
    };
    interpreter.setProperty(scope, 'alert',
        interpreter.createNativeFunction(wrapper));

    // Add an API function for the prompt() block.
    wrapper = function(text) {
        text = text ? text.toString() : '';
        return interpreter.createPrimitive(prompt(text));
    };
    interpreter.setProperty(scope, 'prompt',
        interpreter.createNativeFunction(wrapper));
    // Add an API function for highlighting blocks.
    var wrapper = function(id) {
        id = id ? id.toString() : '';
        return interpreter.createPrimitive(Blockly.mainWorkspace.highlightBlock(id));
    };
    interpreter.setProperty(scope, 'highlightBlock',
        interpreter.createNativeFunction(wrapper));

    /*************************************************************************/

    Blockly.JavaScript.addReservedWords('aSpeed');

    var wrapper = interpreter.createNativeFunction(
        function(anim_speed) {
            var d_fields = document.getElementsByClassName('dance');
            for (i = 0; i < d_fields.length; i++) {

                d_fields[i].children[0].style.animationDuration = (anim_speed) + "s";
            }
        });
    interpreter.setProperty(scope, 'aSpeed', wrapper);

    Blockly.JavaScript.addReservedWords('rotate');

    var wrapper = interpreter.createNativeFunction(
        function(a_rotate) {
            var stop = "stop";
            var spin = "spin";
            var d_fields = document.getElementsByClassName('dance');
            var d_field = document.getElementById('d5');
            d_field.style.animationName = a_rotate;
            for (i = 0; i < d_fields.length; i++) {
                d_fields[i].style.WebkitAnimationName = a_rotate;
                d_fields[i].style.animationName = a_rotate;
            }
        });
    interpreter.setProperty(scope, 'rotate', wrapper);


    Blockly.JavaScript.addReservedWords('musicPlay');

    var wrapper = interpreter.createNativeFunction(
        function() {

            if (audio.paused) {
                audio.play();
            } else {
                audio.currentTime = 0;
            }
        });
    interpreter.setProperty(scope, 'musicPlay', wrapper);


    Blockly.JavaScript.addReservedWords('costumeChange');

    var wrapper = interpreter.createNativeFunction(
        function(costumeNumber) {
            var d_fields = document.getElementsByClassName('dance');

            var costumeClass;
            if (costumeNumber == 1) {
                costumeClass = "d-inner";
                addCostume(0);
            } else if (costumeNumber == 2) {
                costumeClass = "d-inner2";
                addCostume(1);
            } else if (costumeNumber == 3) {
                costumeClass = "d-inner3";
                addCostume(2);
            } else if (costumeNumber == 4) {
                costumeClass = "d-inner4";
                addCostume(3);
            }
            for (i = 0; i < d_fields.length; i++) {
                d_fields[i].children[0].className = costumeClass;
            }
        });
    interpreter.setProperty(scope, 'costumeChange', wrapper);


    Blockly.JavaScript.addReservedWords('waitForSeconds');

    var wrapper = interpreter.createAsyncFunction(
        function(timeInSeconds, callback) {
            // Delay the call to the callback.
            setTimeout(callback, timeInSeconds * 1000);
        });
    interpreter.setProperty(scope, 'waitForSeconds', wrapper);

}


var audio = new Audio('../Kepurine.mp3');
audio.pause();

audio.currentTime = 0;
Blockly.Blocks['anim_speed'] = {
    init: function() {
        this.appendValueInput("ANIM_SPEED")
            .setCheck(null)
            .appendField("judesių greitis (s) = ");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip("Šokio judesių greitis");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['anim_speed'] = function(block) {
    var value_anim_speed = Blockly.JavaScript.valueToCode(block, 'ANIM_SPEED', Blockly.JavaScript.ORDER_NONE);
    var code = 'anim_speed = ' + value_anim_speed + ';\n';
    code += 'aSpeed(anim_speed);';
    //anim_speed = true;
    return code;
};

Blockly.Blocks['wait_seconds'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("atlikti veiksmą")
            .appendField(new Blockly.FieldTextInput("1"), "SECONDS")
            .appendField("s");
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
    // code+='rotate("stop");aSpeed(0);'
    return code;
};

Blockly.Blocks['musicplay'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("groti muziką");
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
            .appendField("judesys")
            .appendField(new Blockly.FieldDropdown([
                ["1", "1"],
                ["2", "2"],
                ["3", "3"],
                ["4", "4"]
            ]), "sokiai");
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
    var code = 'costumeChange(' + dropdown_sokiai + ');\n';
    code += 'if (typeof anim_speed == "undefined") {aSpeed(1);}';
    return code;
};

Blockly.Blocks['rotate'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["suktis ratu", "spin"],
                ["šokti vietoje", "stop"]
            ]), "sukimasis");
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

    var code = 'rotate("' + dropdown_sukimasis + '");\n';
    return code;
};

function stopAnim() {
    var d_fields = document.getElementsByClassName('dance');
    var d_field = document.getElementById('d5');
    d_field.style.animationName = "stop";
    for (i = 0; i < d_fields.length; i++) {
        d_fields[i].style.WebkitAnimationName = "stop";
        d_fields[i].style.animationName = "stop";
    }
};

function stopDance() {
    var d_fields = document.getElementsByClassName('dance');
    for (i = 0; i < d_fields.length; i++) {
        d_fields[i].children[0].style.animationDuration = "0s";
    }
};

function addCostume(x) {
    danceCount[x] = 1;
}