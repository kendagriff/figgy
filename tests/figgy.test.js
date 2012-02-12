(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  $(document).ready(function() {
    module('lexer', {
      setup: __bind(function() {
        return this.lexer = new Lexer();
      }, this)
    });
    return test('remove extra line breaks', __bind(function() {
      var code;
      code = "1 + 1\n\n\n";
      return equal("1 + 1", this.lexer.process(code));
    }, this));
  });
}).call(this);
