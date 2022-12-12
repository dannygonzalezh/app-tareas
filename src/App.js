import React from 'react';
import './App.css';
import ListaTareas from './components/ListaTareas';

function App() {

  return (
    <div className='aplicacion-tareas'>
      <div className='tareas-lista-principal'>
        <h1>MIS TAREAS</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
