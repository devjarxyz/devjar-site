// import Router from "next/router";

// Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))
// function MyApp({ Component, pageProps }) {
   
//     return <Component {...pageProps} />
//   }
  
//   // Only uncomment this method if you have blocking data requirements for
//   // every single page in your application. This disables the ability to
//   // perform automatic static optimization, causing every page in your app to
//   // be server-side rendered.
//   //
//   // MyApp.getInitialProps = async (appContext) => {
//   //   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   //   const appProps = await App.getInitialProps(appContext);
//   //
//   //   return { ...appProps }
//   // }

// export default MyApp;
  
//   export default withGA("UA-99740932-2", Router)(MyApp);

import React, { Fragment } from 'react'
import Router from 'next/router'

import * as gtag from '../components/lib/gtag'

// Notice how we track pageview when route is changed
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url))

export default ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  )
}