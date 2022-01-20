import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* favicon */}
          {/* Webfonts */}
          {/* stylesheet */}
          {/* script/js (CDN) */}
        </Head>
        <body className="my-body-class">
          <Main /> {/* Here is our application */}
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
