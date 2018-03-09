var InputTextLayer, backgroundLayer, layer11, layer12, layer13, layer14, layer21, layer22, layer23, layer24, layer31, layer32, layer33, layer34, layer41, layer42, layer43, layer44, layer51, layer52, layer53, layer54, ov, style, textLayer, weight,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

InputTextLayer = (function(superClass) {
  extend(InputTextLayer, superClass);

  function InputTextLayer(options) {
    this._update = bind(this._update, this);
    InputTextLayer.__super__.constructor.call(this, options);
    this.ignoreEvents = false;
    this.input = document.createElement("input");
    _.extend(this.input.style, {
      "-webkit-user-select": "text",
      "-webkit-box-sizing": "border-box",
      "cursor": "auto"
    });
    this._update();
    this._element.appendChild(this.input);
    this.on("change:width", this._update);
    this.on("change:height", this._update);
  }

  InputTextLayer.prototype._update = function() {
    return _.extend(this.input.style, {
      width: this.width + "px",
      height: this.height + "px"
    });
  };

  return InputTextLayer;

})(Framer.Layer);

textLayer = new InputTextLayer({
  width: Screen.width,
  height: 120,
  y: 112,
  x: 4
});

textLayer.states.animationOptions = {
  curve: "spring(250, 20, 0)"
};

textLayer.input.style.font = "56px/1.35em Helvetica";

textLayer.input.style.font - (style = "normal");

textLayer.input.style.font - (weight = "100");

textLayer.input.style.padding = "24px";

textLayer.input.style.textAlign = "left";

textLayer.input.style.background = "transparent";

textLayer.input.style.outline = '0';

textLayer.input.style.color = "#ffffff";

textLayer.input.style.border = "0px solid";

textLayer.backgroundColor = "rgba(255, 255, 255, 0)";

backgroundLayer = new Layer({
  image: "images/bg.png",
  width: 720,
  height: 1280
});

backgroundLayer.sendToBack();

ov = 0;

layer11 = new Layer({
  x: 0,
  y: 498,
  width: 180,
  height: 147,
  opacity: ov
});

layer12 = new Layer({
  x: 180,
  y: 498,
  width: 180,
  height: 147,
  opacity: ov
});

layer13 = new Layer({
  x: 360,
  y: 498,
  width: 180,
  height: 147,
  opacity: ov
});

layer14 = new Layer({
  x: 540,
  y: 498,
  width: 180,
  height: 147,
  opacity: ov
});

layer21 = new Layer({
  x: 0,
  y: 645,
  width: 180,
  height: 147,
  opacity: ov
});

layer22 = new Layer({
  x: 180,
  y: 645,
  width: 180,
  height: 147,
  opacity: ov
});

layer23 = new Layer({
  x: 360,
  y: 645,
  width: 180,
  height: 147,
  opacity: ov
});

layer24 = new Layer({
  x: 540,
  y: 645,
  width: 180,
  height: 147,
  opacity: ov
});

layer31 = new Layer({
  x: 0,
  y: 792,
  width: 180,
  height: 147,
  opacity: ov
});

layer32 = new Layer({
  x: 180,
  y: 792,
  width: 180,
  height: 147,
  opacity: ov
});

layer33 = new Layer({
  x: 360,
  y: 792,
  width: 180,
  height: 147,
  opacity: ov
});

layer34 = new Layer({
  x: 540,
  y: 792,
  width: 180,
  height: 147,
  opacity: ov
});

layer41 = new Layer({
  x: 0,
  y: 939,
  width: 180,
  height: 147,
  opacity: ov
});

layer41 = new Layer({
  x: 0,
  y: 939,
  width: 180,
  height: 147,
  opacity: ov
});

layer41 = new Layer({
  x: 0,
  y: 939,
  width: 180,
  height: 147,
  opacity: ov
});

layer42 = new Layer({
  x: 180,
  y: 939,
  width: 180,
  height: 147,
  opacity: ov
});

layer43 = new Layer({
  x: 360,
  y: 939,
  width: 180,
  height: 147,
  opacity: ov
});

layer44 = new Layer({
  x: 540,
  y: 939,
  width: 180,
  height: 147,
  opacity: ov
});

layer51 = new Layer({
  x: 0,
  y: 1086,
  width: 180,
  height: 147,
  opacity: ov
});

layer52 = new Layer({
  x: 180,
  y: 1086,
  width: 180,
  height: 147,
  opacity: ov
});

layer53 = new Layer({
  x: 360,
  y: 1086,
  width: 180,
  height: 147,
  opacity: ov
});

layer54 = new Layer({
  x: 540,
  y: 1086,
  width: 180,
  height: 147,
  opacity: ov
});

layer11.onClick(function() {
  return textLayer.input.value = textLayer.input.value + "√(";
});

layer12.onClick(function() {
  return textLayer.input.value = textLayer.input.value + "^2";
});

layer21.onClick(function() {
  return textLayer.input.value = textLayer.input.value + "7";
});

layer22.onClick(function() {
  return textLayer.input.value = textLayer.input.value + "8";
});

layer23.onClick(function() {
  return textLayer.input.value = textLayer.input.value + "9";
});

layer24.onClick(function() {
  return textLayer.input.value = textLayer.input.value + "÷";
});

layer31.onClick(function() {
  return textLayer.input.value = textLayer.input.value + "4";
});

layer32.onClick(function() {
  return textLayer.input.value = textLayer.input.value + "5";
});

layer33.onClick(function() {
  return textLayer.input.value = textLayer.input.value + "6";
});

layer34.onClick(function() {
  return textLayer.input.value = textLayer.input.value + "×";
});

layer41.onClick(function() {
  return textLayer.input.value = textLayer.input.value + "1";
});

layer42.onClick(function() {
  return textLayer.input.value = textLayer.input.value + "2";
});

layer43.onClick(function() {
  return textLayer.input.value = textLayer.input.value + "3";
});

layer44.onClick(function() {
  return textLayer.input.value = textLayer.input.value + "-";
});

layer51.onClick(function() {
  return textLayer.input.value = textLayer.input.value + "0";
});

layer52.onClick(function() {
  return textLayer.input.value = textLayer.input.value + ".";
});

layer53.onClick(function() {
  return textLayer.input.value = textLayer.input.value + ")";
});

layer54.onClick(function() {
  return textLayer.input.value = textLayer.input.value + "+";
});
