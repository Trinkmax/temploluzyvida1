import { Helmet } from 'react-helmet-async'

const SEOHead = () => {
  return (
    <Helmet>
      <title>Maestro Abraham Ocampo | Amarres de Amor Efectivos y Brujo Experto en Argentina</title>
      <meta 
        name="description" 
        content="Maestro Abraham Ocampo, brujo con +40 años de experiencia en amarres de amor efectivos, retorno de pareja, limpiezas espirituales. Resultados reales garantizados. Consulta inmediata por WhatsApp." 
      />
      <meta 
        name="keywords" 
        content="amarres de amor, amarres para mi ex, brujo experto, magia blanca, retorno de pareja, amarres efectivos, brujo en Argentina, limpiezas espirituales, hechizos de amor, magia para el amor, vidente experto, como recuperar a mi ex, amarres de amor que funcionan, amarres de amor urgentes, recuperar ex pareja, volver con mi ex, amarres de amor caseros, brujo para amarrar, trabajos de amor efectivos, amarres rapidos, unir parejas separadas, amarres de amor poderosos, recuperar amor perdido, magia para recuperar pareja, brujo confiable" 
      />
      <meta name="author" content="Lic. Abraham Ocampo" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.maestroabrahamocampo.com" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Maestro Abraham Ocampo | Amarres de Amor Efectivos" />
      <meta property="og:description" content="Brujo experto con +40 años de experiencia. Amarres de amor efectivos, retorno de pareja y soluciones espirituales reales." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.maestroabrahamocampo.com" />
      <meta property="og:image" content="https://www.maestroabrahamocampo.com/images/maestro-abraham.jpg" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Maestro Abraham Ocampo | Amarres de Amor Efectivos" />
      <meta name="twitter:description" content="Brujo experto con +40 años de experiencia. Resultados reales garantizados." />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Maestro Abraham Ocampo",
            "image": "https://www.maestroabrahamocampo.com/images/maestro-abraham.jpg",
            "description": "Brujo y vidente experto especializado en amarres de amor, limpiezas espirituales y protección. Más de 40 años de experiencia con resultados reales.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "AR"
            },
            "telephone": "+54-351-6798793",
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "487"
            },
            "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
            "areaServed": ["AR", "LatAm", "ES", "US"],
            "serviceType": ["Amarres de Amor", "Retorno de Pareja", "Limpiezas Espirituales", "Trabajos Espirituales"]
          }
        `}
      </script>
    </Helmet>
  )
}

export default SEOHead

