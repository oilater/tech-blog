import { QueryOptions, useQuery } from '@tanstack/react-query';
import { Post } from "../types/post";
import * as styles from '../styles/Velog.css';

type UseVelogOptions = Omit<QueryOptions<Post[]>, 'queryKey' | 'queryFn'>;

const getParser = () => {
  if (typeof window === "undefined") return null;
  
  return new DOMParser();
};

const getTextContent = (item: Element, selector: string): string => {
  return item.querySelector(selector)?.textContent ?? '';
}

const addStyleOnHtml = (html: string) => {
  if (typeof window === "undefined") return null;
  
  const parser = getParser();
  if (!parser) return null;
  
  const doc = parser.parseFromString(html, 'text/html');
  const paragraphs = doc.querySelectorAll('p');
  const spans = doc.querySelectorAll('span');
  const strongs = doc.querySelectorAll('strong');
  const ems = doc.querySelectorAll('em');
  const links = doc.querySelectorAll('a');
  const headings1 = doc.querySelectorAll('h1');
  const headings2 = doc.querySelectorAll('h2');
  const headings3 = doc.querySelectorAll('h3');
  const headings4 = doc.querySelectorAll('h4');
  const headings5 = doc.querySelectorAll('h5');
  const headings6 = doc.querySelectorAll('h6');
  const lists = doc.querySelectorAll('ul, ol');
  const listItems = doc.querySelectorAll('li');
  const blockquotes = doc.querySelectorAll('blockquote');
  const preBlocks = doc.querySelectorAll('pre');  
  const codes = doc.querySelectorAll('code:not(pre code)');
  
  paragraphs.forEach(p => p.className = styles.postParagraph);
  spans.forEach(span => span.className = styles.postSpan);
  strongs.forEach(strong => strong.className = styles.postStrong);
  ems.forEach(em => em.className = styles.postEm);
  links.forEach(link => link.className = styles.postLink);
  headings1.forEach(heading => heading.className = styles.postHeading1);
  headings2.forEach(heading => heading.className = styles.postHeading2);
  headings3.forEach(heading => heading.className = styles.postHeading3);
  headings4.forEach(heading => heading.className = styles.postHeading4);
  headings5.forEach(heading => heading.className = styles.postHeading5);
  headings6.forEach(heading => heading.className = styles.postHeading6);
  lists.forEach(list => list.className = styles.postList);
  listItems.forEach(item => item.className = styles.postListItem);
  blockquotes.forEach(quote => quote.className = styles.postBlockquote);
  codes.forEach(code => code.className = styles.postCode);

  preBlocks.forEach(pre => {
    pre.className = styles.postPreBlock;
    const codeInPre = pre.querySelector('code');
    if (codeInPre) codeInPre.className = styles.postCodeInPre;
    pre.parentNode?.insertBefore(doc.createElement('div'), pre);
  });

  return doc.body.innerHTML;
};

export function useVelog(options?: UseVelogOptions) {
  const {data, error, isLoading, isError} = useQuery({
    queryKey: ['velog'],
    queryFn: async (): Promise<Post[]> => {
      const response = await fetch('/api/velog')
      if (!response.ok) throw new Error('Velog 포스트를 가져오는데 실패했어요 🥲 ' + response.statusText);
      
      const xmlText = await response.text();
      
      const parser = getParser();
      if (!parser) return [];
      
      const xml = parser.parseFromString(xmlText, 'application/xml');
      const posts = xml.querySelectorAll('item');
      
      const allHtml = Array.from(posts).map(post => ({
        description: getTextContent(post, 'description'),
        content: getTextContent(post, 'content'),
      }));
      
      const processedHtml = allHtml.map(html => ({
        description: addStyleOnHtml(html.description),
        content: addStyleOnHtml(html.content),
      }));
      
      return Array.from(posts).map((post, index) => ({
        id: getTextContent(post, 'guid'),
        title: getTextContent(post, 'title'),
        description: processedHtml[index]?.description ?? '',
        content: processedHtml[index]?.content ?? '',
        createdAt: getTextContent(post, 'pubDate'),
        tags: getTextContent(post, 'category').split(',').filter(Boolean),
      }));
    },
    ...options,
  });

  return {data, error, isLoading, isError};
}