"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const PatientList2: React.FC = () => {
    const { data: session } = useSession();
    const [patients, setPatients] = useState([]);
    const [sortOrder, setSortOrder] = useState<'ASC' | 'DESC'>('ASC'); // Estado para el ordenamiento
const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
};

  useEffect(() => {
    if (session?.user?.token) {
        fetchPacientes(currentPage);
    }
}, [session, currentPage, sortOrder]);

  const fetchPacientes = async (page: number) => {
       try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/patients/sort?s=${searchTerm}&sort=${sortOrder}&page=${page}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${session?.user?.token}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setPatients(data.data);
        setTotalPages(data.last_page);
    } catch (error) {
        console.error('Error fetching patients:', error);
    }
};

const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
        fetchPacientes(newPage);
    }
};

    // Función para cambiar el ordenamiento cuando el usuario hace clic en un botón
    const handleSortOrderChange = (newOrder: 'ASC' | 'DESC') => {
        setSortOrder(newOrder);
    };

    const handleSearch = () => {
    // Reiniciar la página a la primera página al realizar una nueva búsqueda
    setCurrentPage(1);
    fetchPacientes(1); // Inicia la búsqueda en la primera página
};

    return (
        <div className=" shadow  align-middle ">
            {/* Controles de ordenamiento */}
            <div>
                <button onClick={() => handleSortOrderChange('ASC')}>Ordenar ASC</button>
                <button onClick={() => handleSortOrderChange('DESC')}>Ordenar DESC</button>
            </div>

            <div className='pt-5'>
                <input
    type="text"
    value={searchTerm}
    onChange={handleSearchTermChange}
    placeholder="Buscar paciente"
                />
                <button onClick={() => handleSearch()}>Buscar</button>


        </div>
            <table className="w-max py-10 rounded-full">
            <thead className="bg-rose-300 border-b-2 border-gray-200 rounded-full">
                <tr className='rounded-full'>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">No ID.</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Nombre</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Doc. Identificación</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Fecha de Nacimiento</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Edad</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Teléfono Contacto</th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Acciones</th>
                </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
                {patients.map((paciente) => (
                    <tr key={paciente['id']}>
                        <td className="p-1 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="font-medium text-black">{paciente['id']}</div>
                            </div>
                        </td>
                        <td className="p-1 whitespace-nowrap">
                            <div className="text-left text-black">{paciente['nombrePaciente']}</div>
                        </td>
                        <td className="p-1 whitespace-nowrap">
                            <div className="text-left font-medium text-rose-900">{paciente['docIdentificacion']}</div>
                        </td>
                        <td className="p-1 whitespace-nowrap">
                            <div className="text-left text-black">{paciente['fechaNacimiento']}</div>
                        </td>
                        <td className="p-1 whitespace-nowrap">
                            <div className="text-left text-rose-900">{paciente['edadPaciente']}</div>
                        </td>
                        <td className="p-1 whitespace-nowrap">
                            <div className="text-left text-black">{paciente['telefono']}</div>
                        </td>
                        <td className="p-1 whitespace-nowrap">
                            <div className='pr-5 pl-5'>
                                <Link href={`/sys/dashboard/pacientes/${paciente['id']}`}>
                                    <button
                                        className="text-white bg-rose-900 border-0 py-2 px-6 focus:outline-none pl-5 hover:bg-rose-300  hover:text-black rounded text-lg">
                                        Editar
                                    </button>
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
            <div>
    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Anterior
    </button>
    <span>Página {currentPage} de {totalPages}</span>
    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Siguiente
    </button>
</div>
        </div>
    );
};

export default PatientList2;
