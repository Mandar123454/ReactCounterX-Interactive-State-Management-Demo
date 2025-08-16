import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My First React Application</h1>
        <p>
          This is a simple React app created for MERN Stack
        </p>
      </header>
      <main>
        {/* Using our Counter component with different props */}
        <Counter title="Counter Example" name="User" />
        <Counter title="Second Counter" name="Guest" />
      </main>
    </div>
  );
}

export default App;
