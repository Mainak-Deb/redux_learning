import logo from './logo.svg';
import './App.css';
import AddTodoBox from './components/AddTodoBox';
import TodoTile from './components/TodoTile';

function App() {
  return (
    <div className='w-full h-[100vh] bg-cyan-950 text-white'>
    <AddTodoBox/>
    <TodoTile/>
    </div>
  );
}

export default App;
