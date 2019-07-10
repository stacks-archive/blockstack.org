import React from 'react'
import Head from 'next/head'
import useCookie from 'react-use-cookie'
import { NOT_ACCEPTED } from '@common/cookies'

const Tracking = ({ ...rest }) => {
  const [cookie] = useCookie('cookiesBanner', NOT_ACCEPTED)
  if (!cookie || cookie === NOT_ACCEPTED) {
    return null
  } else {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
 analytics.load("9NQHKkMwnSJlGo4I8C8LSADpc5Gh3HHa");
 analytics.page();
 }}();`
            }}
          />
        </Head>
      </>
    )
  }
}

export default Tracking
