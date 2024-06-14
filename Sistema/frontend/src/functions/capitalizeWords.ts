export function capitalizeWords(input: string | null | undefined): string {
    if (input == null) {
      return '';
    }
  
    if (/^\b[A-Z]/.test(input)) {
      return input;
    }
  
    return input.replace(/\b\w/g, (match) => match.toUpperCase());
  }