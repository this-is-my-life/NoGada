const unicode = require('strutil')
const andro = require('gksdud')
const hangul = require('hangul-js')
const androEn = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'O', 'P']
const androKo = ['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ', 'ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ', 'ㅋ', 'ㅌ', 'ㅊ', 'ㅍ', 'ㅠ', 'ㅜ', 'ㅡ', 'ㅃ', 'ㅉ', 'ㄸ', 'ㄲ', 'ㅆ', 'ㅒ', 'ㅖ']
let output

// eslint-disable-next-line no-unused-vars
function processing () {
  let input = document.getElementById('input').value
  output = input
  if (document.getElementById('addAndro').checked) {
    output = hangul.disassemble(output)
    for (let counter = 0; counter !== androEn.length; counter++) {
      output = output.join('').split(androKo[counter]).join(androEn[counter]).split('')
    }
    output = hangul.assemble(output)
  }
  if (document.getElementById('deleteAndro').checked) {
    output = andro(output)
  }
  let lineByline = output.split('\n')
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
  if (document.getElementById('addLF').checked) {
    output = lineByline.join('\\n')
  }
  if (document.getElementById('deleteLF').checked) {
    output = output.split('\\n').join('\n')
  }
  if (document.getElementById('add<br />').checked) {
    output = lineByline.join('<br />\n')
  }
  if (document.getElementById('delete<br />').checked) {
    output = output.split('<br />').join('')
    output = output.split('<br>').join('')
    output = output.split('<br/>').join('')
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
