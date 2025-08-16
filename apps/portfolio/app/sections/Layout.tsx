"use client";

import Header from '../components/Header';

const GITHUB_URL = 'https://github.com/oilater';
const VELOG_URL = 'https://velog.io/@oilater';

export default function Layout() {
  return (
    <>
      <Header 
        className="header"
        onGithub={() => {window.open(GITHUB_URL, '_blank');}}
        onVelog={() => {window.open(VELOG_URL, '_blank');}}
        onHome={() => {}}
      />
    </>
  );
}