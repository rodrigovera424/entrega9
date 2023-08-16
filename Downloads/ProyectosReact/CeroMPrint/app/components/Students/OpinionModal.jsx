"use client";

import React, { useState } from 'react';

const OpinionModal = ({ isOpen, onClose }) => {
    const [opinion, setOpinion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Opinión enviada:", opinion);
        onClose(); // Cierra el modal una vez enviada la opinión
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded shadow-lg">
                <button onClick={onClose} className="absolute top-2 right-2">&times;</button>
                <h2 className="text-xl font-bold mb-4">Deja tu opinión</h2>
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={opinion}
                        onChange={(e) => setOpinion(e.target.value)}
                        placeholder="Escribe tu opinión aquí..."
                        className="w-full p-2 border rounded mb-4"
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Enviar</button>
                </form>
            </div>
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
        </div>
    );
};

export default OpinionModal;
