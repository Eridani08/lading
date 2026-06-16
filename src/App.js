import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProgressChart from "./ProgressChart";
import Rutinas from "./Rutinas";

function App() {
  return (
    <div>
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">GYM HOLA 🚀</a>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#rutinas">Rutinas</a></li>
              <li className="nav-item"><a className="nav-link" href="#progreso">Progreso</a></li>
              <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Body 👇 */}
      <Rutinas />
      <Body />
      <Footer />
    </div>
  );
}

function Body() {
  return (
    <main className="body">
      <section id="rutinas" className="section">
        <h2 style={{ textAlign: "center" }}>Rutinas del Día 🏋️‍♀️</h2>

        <div className="cards d-flex justify-content-center gap-3">
          {/* Accordion con cards */}
          <div className="accordion" id="accordionRutinas">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingLunes">
                <button 
                  className="accordion-button collapsed" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#collapseLunes" 
                  aria-expanded="false" 
                  aria-controls="collapseLunes"
                >
                  Rutina del Lunes
                </button>
              </h2>
              <div 
                id="collapseLunes" 
                className="accordion-collapse collapse" 
                aria-labelledby="headingLunes" 
                data-bs-parent="#accordionRutinas"
              >
                <div className="accordion-body">
                  <div className="cards d-flex justify-content-center gap-3">
                    
                    <div className="card">
                      <h3>Pecho</h3>
                      <p>Press banca - 4x11</p>
                      <img src="/pressbanca.jpg" alt="Press banca" width="150" />
                    </div>

                    <div className="card">
                      <h3>Espalda</h3>
                      <p>Dominadas - 3x8</p>
                      <img src="/Dominadas.jpg" alt="Dominadas" width="150" />
                    </div>

                    <div className="card">
                      <h3>Cardio</h3>
                      <p>30 min cinta</p>
                      <img src="/cardio.jpg" alt="Cinta" width="150" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="progreso" className="section">
        <h2 style={{ textAlign: "center" }}>Tu Progreso 📈</h2>
        <div className="chart-container">
          <ProgressChart />
        </div>
      </section>

      <section id="contacto" className="section">
        <h2>Contacto 🤝</h2>
        <form>
          <input type="text" placeholder="Tu nombre" />
          <input type="email" placeholder="Tu correo" />
          <textarea placeholder="Tu mensaje"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <p>© 2026 GYM HOLA 🚀 | Todos los derechos reservados</p>
        <p>
          Síguenos en:
          <a href="https://facebook.com" className="text-white mx-2">Facebook</a> |
          <a href="https://instagram.com" className="text-white mx-2">Instagram</a> |
          <a href="https://twitter.com" className="text-white mx-2">Twitter</a>
        </p>
      </div>
    </footer>
  );
}

export default App;


