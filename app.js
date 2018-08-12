var InputTextLayer, layerA, style, textLayer, weight,
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

layerA = new Layer;
