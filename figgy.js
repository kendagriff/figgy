(function() {
  window.Lexer = (function() {
    function Lexer() {}
    Lexer.prototype.process = function(code) {
      return code = code.replace(/(\n|\r)+$/g, '');
    };
    return Lexer;
  })();
}).call(this);
