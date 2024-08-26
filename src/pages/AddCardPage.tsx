import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Card {
  codigo: number;
  administradora: string;
  cep: number;
  endereco: string;
  numero: number;
  complemento: string;
}

interface AddCardPageProps {
  addCard: (newCard: Omit<Card, 'id'>) => void;
}

const AddCardPage: React.FC<AddCardPageProps> = ({ addCard }) => {
  const navigate = useNavigate();
  const [codigo, setCodigo] = useState('');
  const [administradora, setAdministradora] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newCard = {
      codigo: parseInt(codigo, 10),
      administradora,
      cep: parseInt(cep, 10),
      endereco,
      numero: parseInt(numero, 10),
      complemento
    };
    addCard(newCard);
    navigate('/cards');
  };

  return (
    <div className="container mt-3">
      <h1>Adicionar Cartão</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Código:</label>
          <input
            type="number"
            className="form-control"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Administradora:</label>
          <input
            type="text"
            className="form-control"
            value={administradora}
            onChange={(e) => setAdministradora(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>CEP:</label>
          <input
            type="number"
            className="form-control"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Endereço:</label>
          <input
            type="text"
            className="form-control"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Número:</label>
          <input
            type="number"
            className="form-control"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Bairro:</label>
          <input
            type="text"
            className="form-control"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Complemento:</label>
          <input
            type="text"
            className="form-control"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default AddCardPage;