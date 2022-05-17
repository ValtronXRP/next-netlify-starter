import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    
    <html>
<body>

<p id="demo"></p>

<script>
function display_image(src, width, height, alt) {
    var a = document.createElement("img");
    a.src = src;
    a.width = width;
    a.height = height;
    a.alt = alt;
    document.body.appendChild(a);
}
display_image('gen3d.jpg', 
                 500, 
                 500, 
                 'JavaScriptImage');
</script>
</body>
</html>
  
  
  
    
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="CONTRIBUTORS to Genfinity's LightHouse Report"/>
        <p className="description">
   
   
          Click here to <code><a href="mstemp.pdf" download>Download MARKET SENTIMENT TEMPLATE</a></code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
