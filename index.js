const languages = [
  {
    name: "TestPrettierPlugin",
    since: "1.0.0",
    parsers: ["babel"],
    extensions: [".jss"],
    linguistLanguageId: 303,
    vscodeLanguageIds: ["jss"]
  },
]

const options = {
}

const printers = {
  quickapp: {}
}

module.exports = {
  languages,
  printers,
  // parsers,
  options,
  defaultOptions: {
    semi: false,
    tabWidth: 2
  }
}