import './App.css';
import TodoForm from './component/TodoForm';
import TodoItems from './component/TodoItems.jsx';

function App() {
  /* TODO : How to handle addTodoItem, removeTodoItem callback */
  return (
    <div className='App'>
      <header></header>
      <TodoItems></TodoItems>
    </div>
  );
}

export default App;
