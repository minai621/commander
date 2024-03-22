const { program } = require("commander");

describe("split command", () => {
  it("should split the input based on the separator and apply the limit", () => {
    process.argv = ["node", "split.js", "--first", "-s", "/", "a/b/c"];

    program.option("--first").option("-s, --separator <char>");
    program.parse(process.argv);

    const options = program.opts();
    const limit = options.first ? 1 : undefined;

    const result = program.args[0].split(options.separator, limit);
    expect(result).toEqual(["a"]);
  });
});
