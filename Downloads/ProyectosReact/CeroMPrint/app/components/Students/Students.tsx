"use client";

import Slider from "react-slick";
import React, { Component } from "react";
import OpinionModal from './OpinionModal'; // Importa el componente OpinionModal

interface DataType {
    profesion: string;
    nombre: string;
    imgSrc: string;
    starimg: string;
    comentario: string;
}

const datosClientes: DataType[] = [
    // ... (tus datos de clientes aquí)
];

export default class TestimoniosClientes extends Component {
    state = {
        isModalOpen: false
    }

    openModal = () => {
        this.setState({ isModalOpen: true });
    };

    closeModal = () => {
        this.setState({ isModalOpen: false });
    };

    render() {
        const configuracion = {
            //... (aquí irían las mismas configuraciones que ya tenías)
        };

        return (
            <div id="seccion-testimonios" className='bg-bgpink'>
                <div className="mx-auto max-w-2xl px-4 pt-16 pb-64 sm:pt-32 lg:max-w-7xl lg:px-8">
                    <div className='sm:flex justify-between items-center pb-6'>
                        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Lo que dicen nuestros <br /> clientes:</h2>
                        <div>
                            <button onClick={this.openModal} className="bg-transparent hover:bg-purple text-purple font-semibold hover:text-white py-3 px-4 border border-lightgrey hover:border-transparent rounded">
                                Deja tu opinión
                            </button>
                        </div>
                    </div>

                    <p className='text-lg font-medium pb-12'>Descubre la experiencia de nuestros clientes con las impresoras 3D y nuestros servicios personalizados.</p>

                    <Slider {...configuracion}>
                        {datosClientes.map((cliente, i) => (
                            <div key={i}>
                                <div className='bg-white m-4 pt-8 px-12 pb-10 text-center rounded-lg'>
                                    <div className='relative'>
                                        <img src={cliente.imgSrc} alt="foto-cliente" className="inline-block h-16 w-16 m-auto rounded-full ring-2 ring-white" />
                                        <img src={'/assets/clientes/marcaverde.svg'} alt="marca-verde" className="absolute inline-block h-6 w-6 position-green" />
                                    </div>
                                    <h3 className='text-sm pt-4 pb-2'>{cliente.profesion}</h3>
                                    <h4 className='text-2xl font-semibold pb-3'>{cliente.nombre}</h4>
                                    <img src={cliente.starimg} alt="imagen-estrellas" className='m-auto pb-6' />
                                    <p className='text-lg font-medium leading-9'>{cliente.comentario}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    <OpinionModal isOpen={this.state.isModalOpen} onClose={this.closeModal} />
                </div>
            </div>
        );
    }
}
