const { Command } = require("commander");
const program = new Command();

program
  .name("string-util")
  .description("CLI to some JavaScript string utilities")
  .version("0.8.0");

program
  .command("split")
  .description("Split a string into substrings and display as an array")
  .argument("<string>", "string to split")
  .option("--first", "display just the first substring")
  .option("-s, --separator <char>", "separator character", ",")
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

program.parse();

/*
인자없이 실행했을 경우
node ./src/string-util.js           
Usage: string-util [options] [command]
CLI to some JavaScript string utilities

Options:
  -V, --version             output the version number -> 0.8.0 으로 지정했음. (version 함수 호출안하면 없음!)
  -h, --help                display help for command -> commander 라이브러리의 기본 기능

Commands:
  split [options] <string>  Split a string into substrings and display as an array
  help [command]            display help for command
*/
