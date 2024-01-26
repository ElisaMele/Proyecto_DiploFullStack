
import '../styles/pages/Customerfeedback.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ComentarioItem from '../components/comentarios/ComentarioItem';

const Customerfeedback = (props) => {

    const [loading, setLoading] = useState(false);
    const [comentarios, setComentarios] = useState([]);

    useEffect(() => {
        const cargarComentarios = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/comentarios');
            setComentarios(response.data);
            setLoading(false);
        };

        cargarComentarios();
    
    }, []);

    return (
        <section className="holder">
            {loading ? (
                <p>Loading...</p>
            ) : (
                    comentarios.map(item => <ComentarioItem key={item.id}
                    date={item.fecha} title={item.titulo}
                    comment={item.comentario} review={item.valoracion} />)
            )}
        </section>
    );
}

export default Customerfeedback;