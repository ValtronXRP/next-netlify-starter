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
    
    var desc = "Test\n\nTest"
desc = desc.replace(/\n/g, "<br>");
$('#description').html(desc);
   
   
          Click here to <code><a href="mstemp.pdf" download>Download MARKET SENTIMENT TEMPLATE</a></code>
       \n
    
           Click here to <code><a href="artemp.pdf" download>Download ADOPTION REVIEW TEMPLATE</a></code>
         </p>
    
    
      </main>

      <Footer />
    </div>
  )
}
