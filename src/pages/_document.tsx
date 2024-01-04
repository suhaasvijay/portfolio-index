import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg" href="/src/app/icon.svg"></link>
      </Head>
      <body className='bg-[#0D1117]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument;