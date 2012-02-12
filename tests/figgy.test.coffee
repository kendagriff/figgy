$(document).ready ->

  module 'lexer',
    setup: =>
      @lexer = new Lexer()

  test 'remove extra line breaks', =>
    code = "1 + 1\n\n\n"
    equal "1 + 1", @lexer.process(code)