"use client"

import * as React from "react";
import { useState } from "react";

interface Name {
    course: string;
    imageSrc: string;
    profession: string;
    category: 'Impresoras' | 'Pedidos';
}

const names: Name[] = [
    // ... (los mismos datos de names) ...
];

const NamesList = () => {
    const [selectedButton, setSelectedButton] = useState<'Impresoras' | 'Pedidos' | null>('Impresoras');

    const mobileDevelopment = names.filter((name) => name.category === 'Impresoras');
    const webDevelopment = names.filter((name) => name.category === 'Pedidos');

    let selectedNames: Name[] = [];

    if (selectedButton === 'Impresoras') {
        selectedNames = mobileDevelopment;
    } else if (selectedButton === 'Pedidos') {
        selectedNames = webDevelopment;
    }

    const nameElements = selectedNames.map((name, index) => {
        // Si el índice excede la cantidad de imágenes, reutilizamos la primera imagen
        if (index >= 6) {
            name.imageSrc = '/assets/courses/m1.svg';
        }

        return (
            <div key={index}>
                {/* ... El resto del código que muestra cada item sigue igual ... */}
            </div>
        );
    });

    return (
        <div>
            {nameElements}
        </div>
    );
}

export default NamesList;
