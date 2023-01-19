import { Html, Head, Main, NextScript } from 'next/document';
const themeScript = `
(function () {
  const isDarkMode =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', isDarkMode);
})();
`;
export default function Document() {
  return (
    <Html lang="ko-KR" className="group/root dark">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }}></script>
      </Head>
      <body className="bg-bg text-text">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
