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
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<div id="description"></div>
    
        <Header title="CONTRIBUTORS to Genfinity's LightHouse Report"/>
        <p className="description">
    
    
   
          Click here to <code><a href="mstemp.pdf" download>Download MARKET SENTIMENT TEMPLATE</a></code>
     <br>
    
           Click here to <code><a href="artemp.pdf" download>Download ADOPTION REVIEW TEMPLATE</a></code>
         </p>
    
    
      </main>

      <Footer />
    </div>
  )
}
