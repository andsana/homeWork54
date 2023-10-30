import React, {useState} from 'react';
import './App.css';
import Button from './components/Button.tsx';
import GameBoard from './components/GameBoard.tsx';
import AttemptCounter from './components/AttemptCounter.tsx';

const createItems = () => {
  const initialItems = Array.from({length: 36}, () => ({
    hasItem: false,
    clicked: false,
  }));

  const itemIndices: number[] = [];
  while (itemIndices.length < 6) {
    const randomIndex = Math.floor(Math.random() * 36);
    if (!itemIndices.includes(randomIndex)) {
      itemIndices.push(randomIndex);
    }
  }

  itemIndices.forEach((index) => {
    initialItems[index].hasItem = true;
  });

  return initialItems;
};

const App: React.FC = () => {
  const [items, setItems] = useState(createItems());
  const [attempts, setAttempts] = useState(0);

  const handleCellClick = (index: number) => {
    const clickedItem = items[index];

    if (clickedItem.clicked) {
      if (!clickedItem.hasItem) {
        setAttempts((prevAttempts) => prevAttempts + 1);
      }
      return;
    }

    setAttempts((prevAttempts) => prevAttempts + 1);

    const updatedItems = items.map((item, currentIndex) => {
      if (currentIndex === index) {
        return {...item, clicked: true};
      }
      return item;
    });

    setItems(updatedItems);
  };

  const resetGame = () => {
    setItems(createItems());
    setAttempts(0);
  };

  return (
    <div className="app-container">
      <GameBoard items={items} onClick={handleCellClick}/>
      <AttemptCounter attempts={attempts}/>
      <Button onClick={resetGame}/>
    </div>
  );
};

export default App;
