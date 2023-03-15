import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [img, setImg] = useState("");

  const txtSrc = "https://api.kanye.rest";
  const picSrc = "https://picsum.photos/500";
  return (
    <div className="App">
      <div className="card">
        <button
          onClick={() => {
            fetch(picSrc)
              .then((response) => response.blob())
              .then((imageBlob) => {
                const imageObjectURL = URL.createObjectURL(imageBlob);
                setImg(imageObjectURL);
              });
            fetch(txtSrc)
              .then((res) => res.json())
              .then((res) => {
                let s = res.quote;
                var middle = Math.floor(s.length / 2);
                var before = s.lastIndexOf(" ", middle);
                var after = s.indexOf(" ", middle + 1);
                if (middle - before < after - middle) {
                  middle = before;
                } else {
                  middle = after;
                }
                var s1 = s.substr(0, middle);
                var s2 = s.substr(middle + 1);
                setText(s1);
                setText2(s2);
              });
          }}
        >
          Generate a Kanye meme
        </button>
        <p>{text} </p>
        <img src={img} />
        <p>{text2} </p>
      </div>
    </div>
  );
}

export default App;
