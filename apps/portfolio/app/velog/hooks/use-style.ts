import * as styles from '../styles/Velog.css';
import { marked } from 'marked';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-typescript';

export function useVelogStyle() {
  const setVelogStyle = async (html: string) => {
    if (typeof window === "undefined" || !html) return html;

    const renderer = new marked.Renderer();
    renderer.code = ({ text, lang }) => {
      const language = lang || 'unsupported';
      let highlightedCode = text;
      if (Prism.languages[language]) {
        highlightedCode = Prism.highlight(text, Prism.languages[language], language);
      }
      return `<pre class="${styles.postPreBlock}"><code class="${styles.postCodeInPre} language-${language}">${highlightedCode}</code></pre>`;
    };

    const htmlContent = await marked(html, {
      gfm: true,
      breaks: true,
      renderer: renderer,
    });

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');

    doc.querySelectorAll('p').forEach(p => p.classList.add(styles.postParagraph));
    doc.querySelectorAll('span').forEach(span => span.classList.add(styles.postSpan));
    doc.querySelectorAll('strong').forEach(strong => strong.classList.add(styles.postStrong));
    doc.querySelectorAll('em').forEach(em => em.classList.add(styles.postEm));
    doc.querySelectorAll('a').forEach(link => link.classList.add(styles.postLink));
    doc.querySelectorAll('h1').forEach(h => h.classList.add(styles.postHeading1));
    doc.querySelectorAll('h2').forEach(h => h.classList.add(styles.postHeading2));
    doc.querySelectorAll('h3').forEach(h => h.classList.add(styles.postHeading3));
    doc.querySelectorAll('h4').forEach(h => h.classList.add(styles.postHeading4));
    doc.querySelectorAll('h5').forEach(h => h.classList.add(styles.postHeading5));
    doc.querySelectorAll('h6').forEach(h => h.classList.add(styles.postHeading6));
    doc.querySelectorAll('ul, ol').forEach(list => list.classList.add(styles.postList));
    doc.querySelectorAll('li').forEach(item => item.classList.add(styles.postListItem));
    doc.querySelectorAll('blockquote').forEach(quote => quote.classList.add(styles.postBlockquote));
    doc.querySelectorAll('code:not(pre code)').forEach(code => code.classList.add(styles.postCode));

    return doc.body.innerHTML;
  };

  return { setVelogStyle };
}