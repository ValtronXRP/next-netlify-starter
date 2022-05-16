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
    
    <a href="/images/myw3schoolsimage.jpg" download="w3logo">
  <img src="/images/myw3schoolsimage.jpg" alt="W3Schools">
</a>
          Click here to <code>DOWNLOAD your template</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
