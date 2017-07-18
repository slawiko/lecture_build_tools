const name: string = 'Jesus';

function A(name: string) {
    return `Hello, ${name}`;
}

export const helloAnton = A.bind(null, 'Jesus');