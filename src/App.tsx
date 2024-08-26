// src/App.tsx
import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import CardPage from './pages/CardPage';
import AddCardPage from './pages/AddCardPage';
import Filter from './components/Filter';

interface Card {
  id: number;
  codigo: number;
  administradora: string;
  cep: number;
  endereco: string;
  numero: number;
  complemento: string;
}

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>(() => {
    const savedCards = localStorage.getItem('cards');
    return savedCards ? JSON.parse(savedCards) : [];
  });
  const [nextId, setNextId] = useState(() => {
    const savedNextId = localStorage.getItem('nextId');
    return savedNextId ? JSON.parse(savedNextId) : 1;
  });
  const [selectedAdministradora, setSelectedAdministradora] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  useEffect(() => {
    localStorage.setItem('nextId', JSON.stringify(nextId));
  }, [nextId]);

  const addCard = (newCard: Omit<Card, 'id'>) => {
    const cardWithId = { ...newCard, id: nextId };
    setCards([...cards, cardWithId]);
    setNextId(nextId + 1);
  };

  const deleteCard = (id: number) => {
    setCards(cards.filter(card => card.id !== id));
  };

  const uniqueAdministradoras = useMemo(() => {
    const administradoras = cards.map(card => card.administradora);
    return Array.from(new Set(administradoras));
  }, [cards]);

  const filteredCards = useMemo(() => {
    return selectedAdministradora
      ? cards.filter(card => card.administradora === selectedAdministradora)
      : cards;
  }, [cards, selectedAdministradora]);

  return (
    <Router>
      <Navbar />
      <div className="container-fluid">
        <Filter
          administradoras={uniqueAdministradoras}
          selectedAdministradora={selectedAdministradora}
          onAdministradoraChange={setSelectedAdministradora}
        />
        <Routes>
          <Route path="cards" element={<CardPage cards={filteredCards} deleteCard={deleteCard} />} />
          <Route path="add-card" element={<AddCardPage addCard={addCard} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;