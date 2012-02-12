class window.Lexer
  process: (code) ->
    code = code.replace(/(\n|\r)+$/g, '')