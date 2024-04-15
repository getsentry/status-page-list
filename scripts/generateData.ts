import * as fs from "node:fs";
import type { ParseArgsConfig } from "node:util";
import { parseArgs } from "node:util";

import { generateCode, loadFile } from "magicast";
import { format } from "prettier";

const options: NonNullable<ParseArgsConfig["options"]> = {
  name: { type: "string", short: "n" },
  statusPageUrl: { type: "string", short: "s" },
  domains: { type: "string", short: "d", multiple: true },
};

async function run() {
  const { values } = parseArgs({ args: process.argv.slice(2), options });
  if (!values.name || !values.statusPageUrl || !values.domains) {
    throw new Error(
      `$Missing required arguments. Provided values:\n${JSON.stringify(values, null, 2)}`,
    );
  }

  const mod = await loadFile("./templates/data.template.ts");

  mod.exports.name = values.name;
  mod.exports.statusPageUrl = values.statusPageUrl;
  mod.exports.domains = values.domains;

  const temp = mod.exports.REPLACE_statusInfo;

  delete mod.exports.REPLACE_statusInfo;

  mod.exports[
    `${String(values.name).replaceAll(" ", "").toLowerCase()}StatusInfo: StatusPageInfo`
  ] = temp;

  const { code } = generateCode(mod);

  await fs.promises.writeFile(
    `src/data/${String(values.name).replaceAll(" ", "_").toLowerCase()}.ts`,
    await format(
      code.replace(
        "// @ts-expect-error Wrong import location because template\n",
        "",
      ),
      { parser: "typescript" },
    ),
  );
}

run();
