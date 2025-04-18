import './App.css';

function App() {
  const rickroll = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  };

  return (
    <div className="card-container">
      <div className="detail"></div>
      <div className="left">
        <img
          className="gif"
          src="https://spinningfishgame.com/sprites/spinning_fish_optimized.gif"
          alt="GIF animado"
        />
        <div className="box nome">RUPER FISH</div>
      </div>
      <div className="right">
        <div className="boxN" onClick={rickroll} style={{ cursor: 'pointer' }}>
          Celular: (19) 11011-1101
        </div>
          <div className="boxE" onClick={rickroll} style={{ cursor: 'pointer' }}>
            Email: spinning.fish@email.com
          </div>
          <div className="boxW" onClick={rickroll} style={{ cursor: 'pointer' }}>
          Website: spinningfishgame.com
        </div>
      </div>
    </div>
  );
}

export default App;