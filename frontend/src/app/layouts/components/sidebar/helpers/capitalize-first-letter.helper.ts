export function CapitalizeFirstLetter(str: string): string {
    return str[0].toUpperCase() + str.slice(1, str.length);
}