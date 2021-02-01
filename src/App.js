import myImg from './Moon.jpg'
import "./App.css";

function App() {
  return (
    <div>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title-red">Med Amine Ghanmi</h1>

        <br />

        <img src={myImg} />

        <br />

        <img src="minion.jpg" />
      </div>

      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
