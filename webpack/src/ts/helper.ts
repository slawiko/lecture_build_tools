export const greeting: string = 'Hello, Anton';

const greet = (): Promise<string> => {
  return Promise.resolve(greeting);
}

const doGreet = async () => {
  await greet();
}