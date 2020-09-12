import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx:any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="js">
        <Head />
        <body>
          <div style={{height: "200px", background: "red", position: "fixed", width: "100%", zIndex: 1, top: 937, display: "block"}}>ciao</div>
          <Main />
          <NextScript />
          <script src="../../custom_template/js/classie.min.js" async/>
          <script src="../../custom_template/js/main.min.js" async/>
          <script src="https://code.jquery.com/jquery-3.4.0.min.js" />
        </body>
      </Html>
    )
  }
}

export default MyDocument