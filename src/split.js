const { program } = require("commander");

// program의 option 메소드는 커맨드라인의 실행 옵션을 정의한다.
program.option("--first").option("-s, --separator <char>");

// process.argv를 기본적으로 읽는다.
// program.parse(process.argv);랑 똑같음
program.parse();

// 실행한 명령어의 옵션을 읽는다. "--first" -> { first: true }, "-s /"" -> { separator: "/" }
const options = program.opts();
const limit = options.first ? 2 : undefined;

console.log(program.args[0].split(options.separator, limit));

// node ./src/split.js --first -s / a/b/c
// LOG: ['a']
