import { useState } from 'react';
import axios from 'axios';
import styles from './Formulario.module.css'

const FormOne = ({titulo, parrafo1, parrafo2}) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/enviar-correo', {
        nombre,
        correo,
        asunto,
        mensaje,
      });
      alert('Correo enviado correctamente');
      // Restablecer los campos del formulario después de enviar
      setNombre('');
      setCorreo('');
      setAsunto('');
      setMensaje('');
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      alert('Error al enviar el correo');
    }
  };

  return (
    <div className={styles.FormContainer}>
      <div className={styles.textoForm}>
        <h3>{titulo}</h3>      
        <p>{parrafo1}</p>  
        <p>{parrafo2}</p>
      </div>

      <div className={styles.FormForm}>
        <form className={styles.formOne} onSubmit={handleSubmit}>
          <div className={styles.nombreCorreo}>
            <div >
              <label htmlFor="nombre"></label>
              <input
                type="text"
                id="nombre"
                placeholder='Nombre'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="correo"></label>
              <input
                type="email"
                id="correo"
                placeholder='Tu Correo'
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>          
          </div>
          
          <div>
            <label htmlFor="asunto"></label>
            <input
              type="text"
              id="asunto"
              placeholder='Asunto del Correo'
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="mensaje"></label>
            <textarea
              id="mensaje"
              placeholder='Dejanos tu mensaje'
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            ></textarea>
          </div>
          <button className={styles.buttonForm} type="submit">Enviar</button>
        </form>          
      </div>
    </div>
    
  );
};

export default FormOne;
