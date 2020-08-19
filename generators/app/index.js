var Generator = require('yeoman-generator');
module.exports = class extends Generator {
  writing() {
    this.fs.copy (
      this.templatePath('.'),
      this.destinationPath('./')
    )
  }

  install() {
    this.npmInstall()
  }
};