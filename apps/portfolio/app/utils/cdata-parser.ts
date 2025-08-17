export function extractCDATA(content: string): string {
    const cdataRegex = /<!\[CDATA\[(.*?)\]\]>/s;
    const match = content.match(cdataRegex);
    
    if (match && match[1]) {
      return match[1].trim();
    }
    
    return content;
  }