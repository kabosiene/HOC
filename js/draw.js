/**
 * Blockly Apps: Shape Graphics
 *
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @author jimbrown007@gmail.com (Jim Brown)
 */
'use strict';

// Extensions to Blockly's language and JavaScript generator.

Blockly.JavaScript = Blockly.Generator.get('JavaScript');

Blockly.Language.draw_moveto = {
  // move drawing point to x,y
  helpUrl: '',
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendTitle(BlocklyApps.getMsg('Shape_moveTo'));
    this.appendValueInput("XPOS")
        .setCheck("Number")
        .appendTitle("x");
    this.appendValueInput("YPOS")
        .setCheck("Number")
        .appendTitle("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('Shape_moveToTooltip'));
  }
};

Blockly.JavaScript.draw_moveto = function() {
  // Generate JavaScript for moving to absolute position
  var xpos = Blockly.JavaScript.valueToCode(this, 'XPOS', Blockly.JavaScript.ORDER_NONE) || '0';
  var ypos = Blockly.JavaScript.valueToCode(this, 'YPOS', Blockly.JavaScript.ORDER_NONE) || '0';
  return 'Shape.moveTo(' + xpos + ',' + ypos + ', \'block_id_' + this.id + '\');\n';
};

Blockly.Language.draw_line = {
  // draw a line from current position to x,y
  helpUrl: '',
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendTitle(BlocklyApps.getMsg('Shape_drawLine'));
    this.appendValueInput("XPOS")
        .setCheck("Number")
        .appendTitle("x");
    this.appendValueInput("YPOS")
        .setCheck("Number")
        .appendTitle("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('Shape_drawLineTooltip'));
  }
};

Blockly.JavaScript.draw_line = function() {
  // Generate JavaScript for drawing a line
  var xp = Blockly.JavaScript.valueToCode(this, 'XPOS', Blockly.JavaScript.ORDER_NONE) || '0';
  var yp = Blockly.JavaScript.valueToCode(this, 'YPOS', Blockly.JavaScript.ORDER_NONE) || '0';
  return 'Shape.drawLine(' + xp + ',' + yp + ', \'block_id_' + this.id + '\');\n';
};

Blockly.Language.draw_rect = {
  // draw a rect from current position with width,height
  helpUrl: '',
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendTitle(BlocklyApps.getMsg('Shape_drawRect'));
    this.appendValueInput("WIDTH")
        .setCheck("Number")
        .appendTitle("width");
    this.appendValueInput("HEIGHT")
        .setCheck("Number")
        .appendTitle("height");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('Shape_drawRectTooltip'));
  }
};

Blockly.JavaScript.draw_rect = function() {
  // Generate JavaScript for drawing a rectangle
  var wd = Blockly.JavaScript.valueToCode(this, 'WIDTH', Blockly.JavaScript.ORDER_NONE) || '0';
  var ht = Blockly.JavaScript.valueToCode(this, 'HEIGHT', Blockly.JavaScript.ORDER_NONE) || '0';
  return 'Shape.drawRect(' + wd + ',' + ht + ', \'block_id_' + this.id + '\');\n';
};

Blockly.Language.draw_circle = {
  // draw a circle from x,y with the specified radius
  helpUrl: '',
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendTitle(BlocklyApps.getMsg('Shape_drawCircle'));
    this.appendValueInput("RADIUS")
        .setCheck("Number")
        .appendTitle("radius");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('Shape_drawCircleTooltip'));
  }
};

Blockly.JavaScript.draw_circle = function() {
  // Generate JavaScript for drawing a circle
  var rad = Blockly.JavaScript.valueToCode(this, 'RADIUS', Blockly.JavaScript.ORDER_NONE) || '0';
  return 'Shape.drawCircle(' + rad + ', \'block_id_' + this.id + '\');\n';
};

Blockly.Language.stroke_width = {
  // Block for setting the stroke width.
  helpUrl: '',
  init: function() {
    this.setColour(160);
    this.appendValueInput('WIDTH')
        .setCheck('Number')
        .appendTitle(BlocklyApps.getMsg('Shape_strokeWidth'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('Shape_strokeWidthTooltip'));
  }
};

Blockly.JavaScript.stroke_width = function() {
  // Generate JavaScript for setting the stroke width.
  var width = Blockly.JavaScript.valueToCode(this, 'WIDTH',
      Blockly.JavaScript.ORDER_NONE) || '1';
  return 'Shape.strokeWidth(' + width + ', \'block_id_' + this.id + '\');\n';
};

Blockly.Language.draw_fillmode = {
  // Block for fill mode on or off
  helpUrl: '',
  init: function() {
    this.setColour(160);
    this.appendDummyInput()    
        .appendTitle(new Blockly.FieldDropdown(this.STATE), 'FILL');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('Shape_fillModeTooltip'));
  }
};

Blockly.Language.draw_fillmode.STATE =
    [[BlocklyApps.getMsg('Shape_fillModeOff'), 'fillModeOff'],
     [BlocklyApps.getMsg('Shape_fillModeOn'), 'fillModeOn']];

Blockly.JavaScript.draw_fillmode = function() {
  // Generate JavaScript for fill on/off
  return 'Shape.' + this.getTitleValue('FILL') +
      '(\'block_id_' + this.id + '\');\n';
};


Blockly.Language.draw_polygon = {
  // Set the status of polygon drawing
  helpUrl: '',
  init: function() {
    this.setColour(190);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown(this.STATE), 'STATE');
    this.setTooltip(BlocklyApps.getMsg('Shape_polygonTooltip'));
  }
};

Blockly.Language.draw_polygon.STATE =
    [[BlocklyApps.getMsg('Shape_beginPolygon'), 'beginPolygon'],
     [BlocklyApps.getMsg('Shape_endPolygon'), 'endPolygon']];

Blockly.JavaScript.draw_polygon = function() {
  // Generate JavaScript for setting polygon drawing state.
  return 'Shape.' + this.getTitleValue('STATE') +
      '(\'block_id_' + this.id + '\');\n';
};

Blockly.Language.draw_fillcolour = {
  // Block for setting the fill colour.
  helpUrl: '',
  init: function() {
    this.setColour(20);
    this.appendValueInput('COLOUR')
        .setCheck('Colour')
        .appendTitle(BlocklyApps.getMsg('Shape_fillColour'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('Shape_fillcolourTooltip'));
  }
};

Blockly.JavaScript.draw_fillcolour = function() {
  // Generate JavaScript for setting the fill colour.
  var colour = Blockly.JavaScript.valueToCode(this, 'COLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'Shape.fillColour(' + colour + ', \'block_id_' +
      this.id + '\');\n';
};

Blockly.Language.draw_strokecolour = {
  // Block for setting the stroke colour.
  helpUrl: '',
  init: function() {
    this.setColour(20);
    this.appendValueInput('COLOUR')
        .setCheck('Colour')
        .appendTitle(BlocklyApps.getMsg('Shape_strokeColour'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('Shape_strokecolourTooltip'));
  }
};

Blockly.JavaScript.draw_strokecolour = function() {
  // Generate JavaScript for setting the stroke colour.
  var colour = Blockly.JavaScript.valueToCode(this, 'COLOUR',
      Blockly.JavaScript.ORDER_NONE) || '\'#000000\'';
  return 'Shape.strokeColour(' + colour + ', \'block_id_' +
      this.id + '\');\n';
};

Blockly.Language.cross_visibility = {
  // Block for changing crosshairs visiblity.
  helpUrl: '',
  init: function() {
    this.setColour(160);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown(this.STATE), 'VISIBILITY');
    this.setTooltip(BlocklyApps.getMsg('Shape_crossVisibilityTooltip'));
  }
};

Blockly.Language.cross_visibility.STATE =
    [[BlocklyApps.getMsg('Shape_hideCross'), 'hideCross'],
     [BlocklyApps.getMsg('Shape_showCross'), 'showCross']];

Blockly.JavaScript.cross_visibility = function() {
  // Generate JavaScript for changing crosshairs visibility.
  return 'Shape.' + this.getTitleValue('VISIBILITY') +
      '(\'block_id_' + this.id + '\');\n';
};

Blockly.Language.draw_text = {
  // Block for drawing text.
  helpUrl: BlocklyApps.getMsg('Shape_printHelpUrl'),
  init: function() {
    this.setColour(160);
    this.appendValueInput('TEXT')
        .appendTitle(BlocklyApps.getMsg('Shape_drawText'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('Shape_drawTextTooltip'));
  }
};

Blockly.JavaScript.draw_text = function() {
  // Generate JavaScript for drawing text.
  var argument0 = String(Blockly.JavaScript.valueToCode(this, 'TEXT',
      Blockly.JavaScript.ORDER_NONE) || '\'\'');
  return 'Shape.drawText(' + argument0 + ', \'block_id_' +
      this.id + '\');\n';
};

Blockly.Language.draw_font = {
  // Block for setting the font.
  helpUrl: BlocklyApps.getMsg('Shape_fontHelpUrl'),
  init: function() {
    this.setColour(160);
    this.appendDummyInput()
        .appendTitle(BlocklyApps.getMsg('Shape_font'))
        .appendTitle(new Blockly.FieldDropdown(this.FONTLIST), 'FONT');
    this.appendDummyInput()
        .appendTitle(BlocklyApps.getMsg('Shape_fontSize'))
        .appendTitle(new Blockly.FieldTextInput('18',
                     Blockly.FieldTextInput.nonnegativeIntegerValidator),
                     'FONTSIZE');
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown(this.STYLE), 'FONTSTYLE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('Shape_fontTooltip'));
  }
};

Blockly.Language.draw_font.FONTLIST =
    // Common font names (intentionally not localized)
    [['Arial', 'Arial'], ['Courier New', 'Courier New'], ['Georgia', 'Georgia'],
     ['Impact', 'Impact'], ['Times New Roman', 'Times New Roman'],
     ['Trebuchet MS', 'Trebuchet MS'], ['Verdana', 'Verdana']];

Blockly.Language.draw_font.STYLE =
    [[BlocklyApps.getMsg('Shape_fontNormal'), 'normal'],
     [BlocklyApps.getMsg('Shape_fontItalic'), 'italic'],
     [BlocklyApps.getMsg('Shape_fontBold'), 'bold']];

Blockly.JavaScript.draw_font = function() {
  // Generate JavaScript for setting the font.
  return 'Shape.drawFont(\'' + this.getTitleValue('FONT') + '\',' +
      Number(this.getTitleValue('FONTSIZE')) + ',\'' +
      this.getTitleValue('FONTSTYLE') + '\', \'block_id_' +
      this.id + '\');\n';
};
