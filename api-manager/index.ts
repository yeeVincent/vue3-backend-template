/* eslint-disable no-console */
import { exec } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';

const apiURL = 'https://dev-server.xoxogf.ai/openapi.json';
const templatePath = './api-manager/templates/default';
const outputPath = './src/api/';
const fileName = 'automaticAPI.ts';
const fileFullPath = `${outputPath}${fileName}`;
const requestAPIShell = `npx swagger-typescript-api -p ${apiURL} --module-name-index 1 -t ${templatePath} -o ${outputPath} -n ${fileName}`;

const execShell = (cmd: string) => {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      if (error) reject(error);
      resolve(stdout || stderr);
    });
  });
};

async function main() {
  try {
    const result = await execShell(requestAPIShell);
    console.log(result);
    const file = await readFile(fileFullPath, 'utf-8');
    const formattedFile = `// noinspection JSUnusedGlobalSymbols \n${file}`;
    await writeFile(fileFullPath, formattedFile, 'utf-8');
    const lintResult = await execShell(`npx eslint --fix ${fileFullPath}`);
    console.log(lintResult);
    console.log('finish!');
  } catch (error) {
    console.error(error);
  }
}

main();
