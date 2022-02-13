import './App.css';
import SearchWork from './component/work/work';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlertWork from './component/work/workAlert';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TO DO LIST</h1>
        <SearchWork/>
      </header>
    </div>
  );
}

export default App;
