import React, { useEffect, useState } from "react";

function Rutinas() {
  const [rutinas, setRutinas] = useState([]);
  const [nuevaRutina, setNuevaRutina] = useState("");
  const [editando, setEditando] = useState(null);
  const [nombreEditado, setNombreEditado] = useState("");
  const [loading, setLoading] = useState(true); // 👈 nuevo estado
  

  // GET → cargar rutinas
  useEffect(() => {
    fetch("https://gym-backend-dy4a.onrender.com/rutinas")
      .then(res => res.json())
      .then(data => {
        setRutinas(data);
        setLoading(false); // 👈 desactiva loading cuando termina
      })
      .catch(err => {
        console.error("Error cargando rutinas:", err);
        setLoading(false);
      });
  }, []);

  // POST → agregar rutina
  const agregarRutina = () => {
    if (!nuevaRutina.trim()) return;
    fetch("https://gym-backend-dy4a.onrender.com/rutinas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre: nuevaRutina, detalle: "Nueva rutina" })
    })
      .then(res => res.json())
      .then(data => setRutinas([...rutinas, data]));
    setNuevaRutina("");
  };

  // PUT → editar rutina
  const guardarEdicion = (id) => {
    fetch(`https://gym-backend-dy4a.onrender.com/rutinas/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre: nombreEditado })
    })
      .then(() => {
        setRutinas(rutinas.map(r => r.id === id ? { ...r, nombre: nombreEditado } : r));
        setEditando(null);
        setNombreEditado("");
      });
  };

  // DELETE → eliminar rutina
  const eliminarRutina = (id) => {
    fetch(`https://gym-backend-dy4a.onrender.com/rutinas/${id}`, { method: "DELETE" })
      .then(() => setRutinas(rutinas.filter(r => r.id !== id)));
  };

  return (
    <section id="rutinas" className="section">
      <h2 style={{ textAlign: "center" }}>Rutinas del Día 🏋️‍♀️</h2>

      {/* Input para agregar rutina */}
      <div className="mb-3 text-center">
        <input
          type="text"
          placeholder="Nueva rutina"
          value={nuevaRutina}
          onChange={(e) => setNuevaRutina(e.target.value)}
          className="form-control d-inline-block w-50"
        />
        <button onClick={agregarRutina} className="btn btn-primary ms-2">
          Agregar
        </button>
      </div>

      {/* Mostrar loading mientras Render despierta */}
      {loading ? (
        <p className="text-center">⏳ Cargando rutinas...</p>
      ) : (
        <div className="accordion" id="accordionRutinas">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingRutinas">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseRutinas"
                aria-expanded="false"
                aria-controls="collapseRutinas"
              >
                Rutinas dinámicas
              </button>
            </h2>
            <div
              id="collapseRutinas"
              className="accordion-collapse collapse"
              aria-labelledby="headingRutinas"
              data-bs-parent="#accordionRutinas"
            >
              <div className="accordion-body">
                <div className="cards d-flex justify-content-center gap-3">
                  {rutinas.map(r => (
                    <div key={r.id} className="card p-2">
                      {editando === r.id ? (
                        <>
                          <input
                            type="text"
                            value={nombreEditado}
                            onChange={(e) => setNombreEditado(e.target.value)}
                            className="form-control my-2"
                          />
                          <button
                            onClick={() => guardarEdicion(r.id)}
                            className="btn btn-success me-2"
                          >
                            Guardar
                          </button>
                          <button
                            onClick={() => setEditando(null)}
                            className="btn btn-secondary"
                          >
                            Cancelar
                          </button>
                        </>
                      ) : (
                        <>
                          <h3>{r.nombre}</h3>
                          <p>{r.detalle}</p>
                          <button
                            onClick={() => { setEditando(r.id); setNombreEditado(r.nombre); }}
                            className="btn btn-warning me-2"
                          >
                            Editar
                          </button>
                          <button
                            onClick={() => eliminarRutina(r.id)}
                            className="btn btn-danger"
                          >
                            Eliminar
                          </button>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Rutinas;
