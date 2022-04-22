const JokeGenerator = (props) => {
  return (
    <div>
      <div className="dadJoke">
        <div className="djHeader">
          <span>
            {" "}
            &#128514; &#128514; &#128514; &#128514; &#128514; &#128514;
            &#128514; &#128514; &#128514; &#128514; &#128514; &#128514;
            &#128514; &#128514; &#128514; &#128514; &#128514; &#128514;
            &#128514;{" "}
          </span>
        </div>

        <div className="jokeBg">
          <p id="joke">{props.joke}</p>
        </div>

        <button
          id="btn"
          value="btn"
          onClick={props.getJoke}
          className="btnjoke"
        >
          Generate Joke!
        </button>
      </div>
    </div>
  );
};

export default JokeGenerator;
