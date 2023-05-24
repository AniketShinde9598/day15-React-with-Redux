import { useState } from "react";

function ImageDemo({ imageId, title }) {
  let [counter, setCounter] = useState(100);
  let imageUrl = `https://picsum.photos/id/${imageId}/200/200`;

  let likeMe = () => {
    counter = counter + 1;

    // Trigger the DOM Operation :: Asking the REACT to perform DOM
    setCounter(counter);
  };

  // UI
  return (
    <div>
      <img src={imageUrl} alt="" style={{ width: "50%", objectFit: "cover" }} />
      <h1>Like {counter}</h1>
      <input type="button" value="Like Me" onClick={likeMe} />
    </div>
  );
}

export default ImageDemo;
