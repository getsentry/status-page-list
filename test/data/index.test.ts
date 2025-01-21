import * as fs from "node:fs";

import * as sentryData from "../../src/data/sentry";

import { describe, expect, test } from "vitest";

describe("index", () => {
  test("it exports status page from everything in data folder", async () => {
    const indexExports = Object.keys(await import("../../src/data"));

    // iterate through all files in data folder
    const files = (await fs.promises.readdir("src/data")).filter(
      (file) => file !== "index.ts" && file.endsWith(".ts"),
    );

    const dataExports = (
      // need to replace .ts with empty string to import the file because
      // the import statement expects static file extensions
      await Promise.all(files.map((file) => import(`../../src/data/${file.replace(".ts", "")}.ts`)))
    ).map((i: typeof sentryData) => {
      const { name, statusPageUrl, domains, isServiceDefunct, ...rest } = i;
      return Object.keys(rest)[0] as string;
    });

    expect(indexExports).toEqual(dataExports);
  });
});
