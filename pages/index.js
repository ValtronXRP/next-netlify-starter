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
    
   
    
    
        <p className="html">
    
 

   
    
  
   <p
          Click here to <a href="mstemp.pdf" download>Download MARKET SENTIMENT TEMPLATE</a>
    </p>
    <p
          Click here to <a href="artemp.pdf" download>Download ADOPTION REVIEW TEMPLATE</a>
     </p>
    <p
          Click here to <a href="artemp.pdf" download>Download ADOPTION REVIEW TEMPLATE</a>
     </p>
    <p
          Click here to <a href="TATEMP.pdf" download>Download TECHNICAL ANALYSIS TEMPLATE</a>
     </p>
    <p
          Click here to <a href="TRADFITEMP.pdf" download>Download TRADFI TEMPLATE</a>
     </p>
    <p
          Click here to <a href="DEFIWEB3TEMP.pdf" download>Download DEFI WEB3 TEMPLATE</a>
    </p>
    <p
          Click here to <a href="ASIANMARKETSTEMP.pdf" download>Download ASIAN MARKETS TEMPLATE</a>
     </p>
    <p
          Click here to <a href="REGREVIEWTEMP.pdf" download>Download REGULATION REVIEW TEMPLATE</a>
     </p>
    <p
          Click here to <a href="RABBITHOLETEMP.pdf" download>Download RABBIT HOLE TEMPLATE</a>
     </p>
    <p
          Click here to <a href="EXECSUITETEMP.pdf" download>Download EXECUTIVE SUITE TEMPLATE</a>
     </p>
    <p
          Click here to <a href="CRYPTOEDUCATIONTEMP.pdf" download>Download CRYPTO EDUCATION TEMPLATE</a>
    
            </p>
    
    </main>

      <Footer />
    </div>
  )
}
