import "./style.css";
import cat2 from "./myImg/cat2.jpg";

function App() {
  return (
    <div className="App">
      <h1 className="title">Wael</h1>
      <div>
        {" "}
        <br />{" "}
      </div>
      <div className="img">
      <img className="C2" src={cat2} alt="myImage2" />
      <div>
        {" "}
        <br />{" "}
      </div>
      <img className="C1" src="/myImg/cat1.jpg" alt="myImage1" />
      <div>
      </div>
        {" "}
        <br />{" "}
      </div>
      <div className="video">
        <iframe
          width="320"
          height="240"
          src="https://www.youtube.com/embed/n6GEcdh5whk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default App;
