import DetentionPhrase from './component/detentionPhrase'
import './App.css';

function App() {
  let counter = Array(100).fill(0)
  return (
    <div className='board'>
    {counter.map((item) => (
      <DetentionPhrase />
    ))}
    </div>
  );
}

export default App;
