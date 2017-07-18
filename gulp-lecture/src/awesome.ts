const REGEXP: RegExp = /art\.?\s\d+(\/([a-z\d]+))[\s]?/i;

export interface ISuperscriptFilter {
    (input: string): string;
}

export function SuperscriptFilter(): ISuperscriptFilter {
    return function (input: string): string {
        let match = REGEXP.exec(input);

        if (match) {
            input = input.replace(match[1], `<sup>${match[2]}</sup>`);
        }

        return input;
    };
}