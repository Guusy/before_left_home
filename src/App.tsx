import React, { useEffect, useState } from 'react';
import ItemsService, { Item } from './services/ItemsService'
import './App.css';
import AddItemForm from './components/AddItemForm';
import ItemsList from './components/ItemsList';

function App() {
  const [items, setItems] = useState<Item[]>([])
  const refreshList = () => {
    const itemsResponse = ItemsService.getAll()
    setItems(itemsResponse)
  }

  useEffect(()=> {
    const itemsResponse = ItemsService.getAll()
    setItems(itemsResponse)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        Before left home
      </header>
      <div>
       <AddItemForm onFinish={refreshList} />
      </div>
      <ItemsList items={items} refreshList={refreshList} />
    </div>
  );
}

export default App;
