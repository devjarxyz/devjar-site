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
              <script dangerouslySetInnerHTML={{ __html: `<!-- Facebook Pixel Code -->
                <script>
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '448127819492309');
                fbq('track', 'PageView');
                </script>
                <noscript><img height="1" width="1" style="display:none"
                src="https://www.facebook.com/tr?id=448127819492309&ev=PageView&noscript=1"
                /></noscript>
                <!-- End Facebook Pixel Code -->`}} 
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