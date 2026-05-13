import React, { useState, useEffect } from 'react';
import { Plus, LayoutGrid, CheckCircle2, Circle, Trash2 } from 'lucide-react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('focusgrid_data');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('focusgrid_data', JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filtered = tasks.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'done') return t.completed;
    return true;
  });

  return (
    <div className="app-container">
      <header className="header">
        <LayoutGrid size={28} className="logo-icon" />
        <h1>FocusGrid</h1>
      </header>

      <div className="input-box">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="Añadir nueva tarea..."
        />
        <button onClick={handleAdd}><Plus size={20} /></button>
      </div>

      <div className="task-list">
        {filtered.map(task => (
          <div key={task.id} className={`task-card ${task.completed ? 'is-done' : ''}`}>
            <div className="task-content" onClick={() => toggleTask(task.id)}>
              {task.completed ? <CheckCircle2 size={20} color="#4f46e5" /> : <Circle size={20} color="#cbd5e1" />}
              <span>{task.text}</span>
            </div>
            <button className="delete-btn" onClick={() => removeTask(task.id)}>
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      <footer className="filter-bar">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>Todas</button>
        <button className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>Pendientes</button>
        <button className={filter === 'done' ? 'active' : ''} onClick={() => setFilter('done')}>Completadas</button>
      </footer>
    </div>
  );
}

export default App;