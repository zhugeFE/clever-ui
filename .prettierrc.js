module.exports = {
  semi: false, // 不使用行尾分号，仅在可能引入ASI故障的行的开头添加分号
  singleQuote: true, // 使用单引号
  // 可爱的分界线 ------------ 以下为prettier默认配置，防止本地编辑器覆盖
  trailingComma: 'none', // 尾随逗号
  jsxSingleQuote: false, // jsx 使用双引号
  printWidth: 80, // 最大文本不换行长度(ps:80为推荐长度，当编辑器分屏对比时80刚好为整个屏幕的一半左右)
  useTabs: false, // 使用空格代替tab
  tabWidth: 2, // 每个缩进占用2个空格
  bracketSpacing: true, // Example: { foo: bar }   Error: {foo: bar}
  jsxBracketSameLine: false, // 当 element 的属性过多换行时，闭合 “>” 将与 起始“<“ 对齐
  endOfLine: 'auto', // 保持现有的行结尾
  htmlWhitespaceSensitivity: 'css', // 尊重CSS显示属性的默认值
  arrowParens: 'avoid', // Example: x => x   Error: (x) => x
  proseWrap: 'preserve',
}
