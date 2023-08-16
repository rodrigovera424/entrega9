// MENTORS DATA

interface Product {
    id: number;
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
   
}

const products: Product[] = [
    {
        id: 1,
        name: 'FDM',
        href: '#',
        imageSrc: '/assets/mentor/Batman.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
       
    },
    {
        id: 2,
        name: 'Luces LED',
        href: '#',
        imageSrc: '/assets/mentor/Spawn.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
       
    },
    {
        id: 3,
        name: 'Gran Definicion',
        href: '#',
        imageSrc: '/assets/mentor/Wolverine.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        
    },
    {
        id: 4,
        name: 'SLA',
        href: '#',
        imageSrc: '/assets/mentor/Spider.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
         },
    {
        id: 5,
        name: 'Originalidad',
        href: '#',
        imageSrc: '/assets/mentor/Scorpion.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
       
    },
    {
        id: 6,
        name: 'Exteriores',
        href: '#',
        imageSrc: '/assets/mentor/Maceta.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        
    },
]

const Mentor = () => {
    return (
            <div id="mentors-section" className="mx-auto max-w-2xl pb-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">

                <div className='sm:flex justify-between items-center mb-12'>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Galeria</h2>
                    <div>
                       
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-center ">
                                <div>
                                    <div className='border border-white rounded-lg -mt-8 bg-white p-2 mentorShadow'>
                                        <h3 className="text-sm text-gray-700 text-center">
                                            <a href={product.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </a>
                                        </h3>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default Mentor;
