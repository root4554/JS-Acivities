const input = "VAR10,20.3,30,VAR40,20,20,VAR30,10.2,20,VAR10,10,20";
const matches = input.matchAll(/VAR(\d+),(\d+(?:.\d+)?),(\d+)/g);

const data = {};
for (const [, name, value, seconds] of matches) {
  if (seconds in data) {
    data[seconds].push({ name, value });
  } else {
    data[seconds] = [{ name, value }];
  }
}

Object.entries(data).forEach(([seconds, vars]) => {
  const formattedVars = vars
    .sort((a, b) => a.name - b.name)
    .map(({ name, value }) => `VAR${name}(${value})`)
    .join(",");

  console.log(`${seconds}(${vars.length}): ${formattedVars}`);
});
