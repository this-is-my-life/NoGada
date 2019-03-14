const unicode = require('strutil')
let output

// eslint-disable-next-line no-unused-vars
function processing () {
  let input = document.getElementById('input').value
  output = input
  let lineByline = output.split('\n')
  if (document.getElementById('addLF').checked) {
    output = lineByline.join('\\n')
  }
  if (document.getElementById('deleteLF').checked) {
    output = output.split('\\n').join('\n')
  }
  if (document.getElementById('addEscape').checked) {
    output = output.split('"').join('\\"')
    output = output.split("'").join("\\'")
  }
  if (document.getElementById('deleteEscape').checked) {
    output = output.split('\\"').join('"')
    output = output.split("\\'").join("'")
  }
  if (document.getElementById('addUnicode').checked) {
    output = unicode.escapeToUtf16(output)
  }
  if (document.getElementById('deleteUnicode').checked) {
    output = unicode.unescapeFromUtf16(output)
  }
  document.getElementById('output').value = output
}

setInterval(() => {
  if (!output) {
    document.getElementById('output').value = '비었음'
  } else {
    document.getElementById('output').value = output
  }
}, 1)
