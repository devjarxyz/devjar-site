import { Fragment } from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID, GTM_TRACKING_ID } from '../components/lib/gtag'

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    // const sheet = new ServerStyleSheet()
    // const originalRenderPage = ctx.renderPage

    const initialProps = await Document.getInitialProps(ctx)

    // Check if in production
    const isProduction = process.env.NODE_ENV === 'production'

    return {
      ...initialProps,
      isProduction,
    }
  }

  render() {
    const { isProduction } = this.props

    return (
      <html lang="en">
        <Head>
        <title>Devjar</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/static/assets/css/main.css" rel="stylesheet" />
          {/* We only want to add the scripts if in production */}
          {isProduction && (
            <Fragment>

              {/* Global Site Tag (gtag.js) - Google Analytics */}
              <script
                async
                src={`https://handler.devjar.xyz/gtag/js?id=${GA_TRACKING_ID}`}
              />
              
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
              <script dangerouslySetInnerHTML={{ __html: `<!-- Google Tag Manager -->
                <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_TRACKING_ID}');</script>
                <!-- End Google Tag Manager -->`}} 
              />
            </Fragment>
          )}
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}