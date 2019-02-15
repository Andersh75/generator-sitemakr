"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  // Prompting() {
  //   // Have Yeoman greet the user.
  //   this.log(
  //     yosay(`Welcome to the kickass ${chalk.red("generator-test")} generator!`)
  //   );
  //   const prompts = [
  //     // {
  //     //   type: "confirm",
  //     //   name: "someAnswer",
  //     //   message: "Would you like to enable this option?",
  //     //   default: true
  //     // },
  //     {
  //       type: "input",
  //       name: "title",
  //       message: "Your project title"
  //     }
  //   ];
  //   return this.prompt(prompts).then(props => {
  //     // To access props later use this.props.someAnswer;
  //     this.props = props;
  //   });
  // }

  async prompting() {
    this.log(
      yosay(`Welcome to the ${chalk.red("Create-sitemakr-app")} generator!`)
    );
    this.answers = await this.prompt([
      {
        type: "input",
        name: "title",
        message: "Your project title"
      }
    ]);
  }

  Writing() {
    this.fs.copyTpl(this.templatePath(), this.destinationPath(), {
      title: this.answers.title
    });
  }

  // Install() {
  //   this.installDependencies();
  // }
  writing() {
    const pkgJson = {
      name: this.answers.title
    };
    // Extend or create package.json file in destination path
    this.fs.extendJSON(this.destinationPath("package.json"), pkgJson);
  }

  install() {
    // This.npmInstall();
    this.spawnCommandSync("npm", ["install"]);
    this.spawnCommandSync("npm", ["run", "dev"]);
  }
};
