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
    
    
    
        <Header title="CONTRIBUTORS to Genfinity's LightHouse Report"/>
    
    
        <p className="description">
  
   
    
   
   
          Click here to <a href="mstemp.pdf" download>Download MARKET SENTIMENT TEMPLATE          
    </a>
 
    
          Click here to <a href="artemp.pdf" download>Download ADOPTION REVIEW TEMPLATE</a>
    
          Click here to <a href="artemp.pdf" download>Download ADOPTION REVIEW TEMPLATE</a>
    
          Click here to <a href="artemp.pdf" download>Download TECHNICAL ANALYSIS TEMPLATE</a>
    
          Click here to <a href="artemp.pdf" download>Download TRADFI TEMPLATE</a>
          
          Click here to <a href="artemp.pdf" download>Download DEFI WEB3 TEMPLATE</a>
    
          Click here to <a href="artemp.pdf" download>Download ASIAN MARKETS TEMPLATE</a>
    
          Click here to <a href="artemp.pdf" download>Download REGULATION REVIEW TEMPLATE</a>
    
            </p>
    
    </main>

      <Footer />
    </div>
  )
}
