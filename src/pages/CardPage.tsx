import React from 'react';

interface Card {
  id: number;
  codigo: number;
  administradora: string;
  cep: number;
  endereco: string;
  numero: number;
  complemento: string;
}

interface CardPageProps {
  cards: Card[];
  deleteCard: (id: number) => void;
}

const CardPage: React.FC<CardPageProps> = ({ cards, deleteCard }) => {
  return (
    <div className="container-fluid mt-3">
      <h1>Gerenciador de Cartões</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Código</th>
            <th>Administradora</th>
            <th>CEP</th>
            <th>Endereço</th>
            <th>Número</th>
            <th>Complemento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {cards.map(card => (
            <tr key={card.id}>
              <td>{card.id}</td>
              <td>{card.codigo}</td>
              <td>{card.administradora}</td>
              <td>{card.cep}</td>
              <td>{card.endereco}</td>
              <td>{card.numero}</td>
              <td>{card.complemento}</td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteCard(card.id)}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CardPage;