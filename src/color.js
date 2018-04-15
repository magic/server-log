const codes = {
  reset: [0, 0],

  bold: [1, 22],
  italic: [3, 23],
  underline: [4, 24],
  strikethrough: [9, 29],

  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  purple: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  grey: [94, 39],
}

const paint = (key, ...str) => {
  const val = paint.codes[key] || paint.codes['red']
  const style = {
    open: `\u001b[${val[0]}m`,
    close: `\u001b[${val[1]}m`,
  }

  return style.open + str + style.close
}

Object.keys(codes).forEach(code => {
  paint[code] = str => paint(code, str)
})

paint.codes = codes

module.exports = paint
