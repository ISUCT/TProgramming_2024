import * as readline from 'readline';

export function readAnswer(query: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => {
    rl.question(query, answer => {
      resolve(answer);
      rl.close();
    });
  });
}
