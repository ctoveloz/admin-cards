import React, { useState } from 'react';

interface FilterProps {
    administradoras: string[];
    selectedAdministradora: string | null;
    onAdministradoraChange: (administradora: string | null) => void;
}

const Filter: React.FC<FilterProps> = ({ administradoras, selectedAdministradora, onAdministradoraChange }) => {
    const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleAdministradoraChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        onAdministradoraChange(value === '' ? null : value);
    };

    const handleLetterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedLetter(value === '' ? null : value);
    };

    const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredAdministradoras = administradoras.filter(adm => {
        if (selectedLetter && !adm.toLowerCase().startsWith(selectedLetter.toLowerCase())) {
            return false;
        }
        if (selectedAdministradora && adm !== selectedAdministradora) {
            return false;
        }
        if (searchTerm && !adm.toLowerCase().includes(searchTerm.toLowerCase())) {
            return false;
        }
        return true;
    });

    const alphabet = Array.from(Array(26)).map((_, i) => String.fromCharCode(65 + i)); // ['A', 'B', ..., 'Z']

    return (
        <div className="filter">
            <label>
                <select className="form-select ml-2 btn-light bg-light" onChange={handleAdministradoraChange} value={selectedAdministradora || ''}>
                    <option value="">Administradora</option>
                    {filteredAdministradoras.map(adm => (
                        <option key={adm} value={adm}>{adm}</option>
                    ))}
                </select>
            </label>
            <label>
                <select className="form-select ml-2 btn-light bg-light" onChange={handleLetterChange} value={selectedLetter || ''}>
                    <option value="">Começa com</option>
                    {alphabet.map(letter => (
                        <option key={letter} value={letter}>{letter}</option>
                    ))}
                </select>
            </label>
            <label>
                <input
                    type="text"
                    placeholder="Filtrar por nome"
                    className="form-control ml-2"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
            </label>
        </div>
    );
};

export default Filter;