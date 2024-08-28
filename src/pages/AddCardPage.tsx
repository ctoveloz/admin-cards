import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Card {
  codigo: number;
  administradora: string;
  cep: number;
  endereco: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  pais: string;
  page: string;
  email: string;
  corrente: string;
  agencial: string;
  banco: string;
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
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('');
  const [page, setPage] = useState('');
  const [email, setEmail] = useState('');
  const [corrente, setCorrente] = useState('');
  const [agencial, setAgencial] = useState('');
  const [banco, setBanco] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newCard = {
      codigo: parseInt(codigo, 10),
      administradora,
      cep: parseInt(cep, 10),
      endereco,
      numero: parseInt(numero, 10),
      complemento,
      bairro,      
      cidade,
      estado,
      pais,
      page,
      email,
      corrente,
      agencial,
      banco
    };
    addCard(newCard);
    navigate('/');
  };

  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-2">
            <label>Código:</label>
            <input
              type="number"
              className="form-control"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              required
            />
          </div>
          <div className="form-group col-6">
            <label>Administradora de Cartão *</label>
            <input
              type="text"
              className="form-control"
              value={administradora}
              onChange={(e) => setAdministradora(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='row'>
          <div className="form-group col-2">
            <label>CEP:</label>
            <input
              type="number"
              className="form-control"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              required
            />
          </div>
          <div className="form-group col-4">
            <label>Endereço:</label>
            <input
              type="text"
              className="form-control"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              required
            />
          </div>
          <div className="form-group col-2">
            <label>Número:</label>
            <input
              type="number"
              className="form-control"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              required
            />
          </div>
          <div className="form-group col-4">
            <label>Bairro:</label>
            <input
              type="text"
              className="form-control"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-3">
            <label>Complemento:</label>
            <input
              type="text"
              className="form-control"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />
          </div>
          <div className="form-group col-3">
            <label>Cidade:</label>
            <input
              type="text"
              className="form-control"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </div>
          <div className="form-group col-1">
            <label>Estado:</label>
            <input
              type="text"
              className="form-control"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            />
          </div>
          <div className="form-group col-2">
            <label>País:</label>
            <input
              type="text"
              className="form-control"
              value={pais}
              onChange={(e) => setPais(e.target.value)}
            />
          </div>
          <div className="form-group col-3">
            <label>Home Page:</label>
            <input
              type="text"
              className="form-control"
              value={page}
              onChange={(e) => setPage(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
        
        </div>
        <div className="row">
          <div className="form-group col-3">
            <label>Email:</label>
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group col-3">
            <label>Corrente:</label>
            <input
              type="text"
              className="form-control"
              value={corrente}
              onChange={(e) => setCorrente(e.target.value)}
            />
          </div>
          <div className="form-group col-3">
            <label>Agencial:</label>
            <input
              type="text"
              className="form-control"
              value={agencial}
              onChange={(e) => setAgencial(e.target.value)}
            />
          </div>
          <div className="form-group col-3">
            <label>Banco:</label>
            <input
              type="text"
              className="form-control"
              value={banco}
              onChange={(e) => setBanco(e.target.value)}
            />
          </div>
        </div>
        

        <button type="submit" className="btn btn-primary">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default AddCardPage;