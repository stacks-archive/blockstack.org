import React from 'react'
import Head from 'next/head'

export const Tracking = () => (
  <>
    <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
(function(f, a, t, h, o, m){
a[h]=a[h]||function(){
(a[h].q=a[h].q||[]).push(arguments)
};
o=f.createElement('script'),
m=f.getElementsByTagName('script')[0];
o.async=1; o.src=t; o.id='fathom-script';
m.parentNode.insertBefore(o,m)
})(document, window, 'https://cdn.usefathom.com/tracker.js', 'fathom');
fathom('set', 'siteId', 'EQGMCOLX');
fathom('set', 'spa', 'pushstate');
fathom('trackPageview');`
        }}
      />
    </Head>
  </>
)

