// _document.js
import fetch from 'isomorphic-unfetch';
import Document, { Html, Head, Main, NextScript } from 'next/document'
import svg from '@assets/icons/svg/sprite.symbol.svg';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    const generateSvgSprite = () => {
      const obj = { __html: svg };
      return obj;
    };

    return (
      <Html>
        <Head>
          <title>Conner and Carlee 2020</title>
          <link href="https://fonts.googleapis.com/css?family=Work+Sans:600&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap" rel="stylesheet" /> 
        </Head>
        <body>
          <div aria-hidden={true} className="is-hidden" dangerouslySetInnerHTML={generateSvgSprite()} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
