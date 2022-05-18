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
    
    
    
        <Header title="CONTRIBUTOR TEMPLATES"/>
    
   
    
    
        <p className="html">
    
 

   
    
   
   
         <a href="mstemp.pdf" download>Download MARKET SENTIMENT TEMPLATE</a>

    <a href="artemp.pdf" download>Download ADOPTION REVIEW TEMPLATE</a>

 <a href="artemp.pdf" download>Download ADOPTION REVIEW TEMPLATE</a>

     <a href="TATEMP.pdf" download>Download TECHNICAL ANALYSIS TEMPLATE</a>

         <a href="TRADFITEMP.pdf" download>Download TRADFI TEMPLATE</a>

     <a href="DEFIWEB3TEMP.pdf" download>Download DEFI WEB3 TEMPLATE</a>

 <a href="ASIANMARKETSTEMP.pdf" download>Download ASIAN MARKETS TEMPLATE</a>

     <a href="REGREVIEWTEMP.pdf" download>Download REGULATION REVIEW TEMPLATE</a>
    
         <a href="RABBITHOLETEMP.pdf" download>Download RABBIT HOLE TEMPLATE</a>
    
     <a href="EXECSUITETEMP.pdf" download>Download EXECUTIVE SUITE TEMPLATE</a>
     
 <a href="CRYPTOEDUCATIONTEMP.pdf" download>Download CRYPTO EDUCATION TEMPLATE</a>
    
            </p>
    
    </main>

      <Footer />
    </div>
  )
}
