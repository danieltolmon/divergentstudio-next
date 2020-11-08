import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Divergent studio 🚀</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <style jsx global>
        {`
          @font-face {
            font-family: 'Ariata Display';
            src: url(/Fonts/AriataDisplay-Regular.woff2) format('woff2');
          }

          @font-face {
            font-family: 'Graphik';
            src: url(/Fonts/GraphikRegular.woff2) format('woff2');
          }
          html,
          body {
            padding: 0;
            margin: 0;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          * {
            box-sizing: border-box;
          }

          .container {
            width: 100%;
            max-width: 1200px !important;
            margin: 0 auto;
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
