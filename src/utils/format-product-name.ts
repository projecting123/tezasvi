export function formatString(str: string) {
    return str
        .split('-') // Split by hyphen
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(' '); // Join words with space
}