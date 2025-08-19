import { marked } from 'marked';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-typescript';
import * as styles from '../styles/Velog.css';

export const getStyledMarkdown = async (body: string) => {
    if (typeof window === "undefined" || !body) return body;
  
    const renderer = new marked.Renderer();
    renderer.code = ({ text, lang }) => {
      const language = lang || 'unsupported';
      let highlightedCode = text;
      if (Prism.languages[language]) {
        highlightedCode = Prism.highlight(text, Prism.languages[language], language);
      }
  
      return `<pre class="${styles.postPreBlock}"><code class="${styles.postCodeInPre} language-${language}">${highlightedCode}</code></pre>`;
    }
};