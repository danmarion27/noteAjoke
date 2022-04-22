import "./styles.css";
import { useState } from "react";
import JokeGenerator from "./JokeGenerator.js";

function App() {
  const [checkList, setCheckList] = useState([]);
  const [item, setItem] = useState("");

  const [joke, setJoke] = useState(
    "How many programmers does it take to change a light bulb?? None! It’s a hardware problem"
  );

  const url =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

  function addItem() {
    const newList = checkList.concat({
      index: checkList.length + 1,
      name: item
    });
    setCheckList(newList);
    setItem("");
  }

  function clearList() {
    const clearedList = [];
    setCheckList(clearedList);
  }

  function handleRemove(index) {
    const updateList = checkList.filter((item) => item.index !== index);
    setCheckList(updateList);
  }

  const getJoke = () => {
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        setJoke(`${item.joke}`);
      });
  };

  return (
    <>
      <>
        <JokeGenerator joke={joke} getJoke={getJoke}></JokeGenerator>
        <div className="cListParent">
          <div className="cListSon">
            <header>
              <div>
                <div className="inputBg">
                  <input
                    placeholder="Place your list here"
                    type="text"
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                  />
                  <center>
                    <button className="btnadd" type="button" onClick={addItem}>
                      Add Item
                    </button>
                    <button className="btnclear" onClick={clearList}>
                      Clear Checklist
                    </button>
                  </center>
                </div>
                <ul>
                  {checkList.map((item) => (
                    <li
                      key={item.index}
                      onClick={() => handleRemove(item.index)}
                    >
                      {" "}
                      {item.name}{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </header>
          </div>
        </div>
      </>{" "}
    </>
  );
}
export default App;
