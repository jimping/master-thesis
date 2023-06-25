import {
  Html, Main, Head, NextScript,
} from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <Script src="https://player.vimeo.com/api/player.js" />
      </Head>
      <body>
        <main>
          <Main />
        </main>
        <NextScript />
      </body>
    </Html>
  );
}
