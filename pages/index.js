import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Genfinity's LightHouse Report" />
        <p className="description">
    
    <html>
<body>

<p>Click on the w3schools logo to download the image:<p>

   <a href="marketsentiment" download="market_sentiment.html">
  <img src="marketsent" alt="W3Schools">
</a>

</body>
</html>
    
          Click here to <code>DOWNLOAD your template</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
