const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Maestro Abraham Ocampo</h4>
            <p>
              Brujo, vidente y sanador espiritual con más de 40 años de experiencia ayudando a 
              personas a recuperar el amor y la felicidad.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>WhatsApp: +54 351 679-8793</p>
            <p>Atención: 24/7</p>
            <p>Argentina (atiendo todo el mundo)</p>
          </div>
          
          <div className="footer-section">
            <h4>Servicios</h4>
            <ul>
              <li><a href="#servicios">Amarres de Amor</a></li>
              <li><a href="#servicios">Retorno de Pareja</a></li>
              <li><a href="#servicios">Limpiezas Espirituales</a></li>
              <li><a href="#servicios">Consultas de Videncia</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="/terminos.html">Términos y Condiciones</a></li>
              <li><a href="/politica-privacidad.html">Política de Privacidad</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Maestro Abraham Ocampo. Todos los derechos reservados.</p>
          <p className="disclaimer">
            Los resultados pueden variar según cada caso. Los testimonios son experiencias reales de clientes. 
            Los servicios espirituales son complementarios y no sustituyen atención médica o psicológica profesional. 
            Al contratar nuestros servicios, usted acepta nuestros <a href="/terminos.html">términos y condiciones</a> que 
            incluyen política de no reembolsos.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

