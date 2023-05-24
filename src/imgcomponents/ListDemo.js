import { useState } from "react";
import ImageDemo from "./ImageDemo";

function ListDemo() {
  // let list = ["237"]; // stateless
  let [list, setList] = useState(["237"]); // statefull
  let [imageInput, setImageInput] = useState("");
  let [isinvalid, setIsInvalid] = useState(false);

  let addNewImage = () => {
    // validation
    if (!imageInput) {
      // alert("Enter image id");
      setIsInvalid(true);
      return;
    }

    let imgInputInt = parseInt(imageInput);
    if (!imgInputInt) {
      // alert("Enter image id in Number Format");
      setIsInvalid(true);
      return;
    }

    // let newList = ["238", ...list];
    let newList = [imageInput, ...list];
    setList(newList);

    setIsInvalid(false);
  };

  let inputImageHandler = (e) => {
    setImageInput(e.target.value);
  };

  return (
    <div>
      <h1>List Demo</h1>

      <div className="my-2">
        <input
          type="text"
          placeholder="Enter Image Id"
          value={imageInput}
          onChange={inputImageHandler}
        />
        <input
          className="m-2"
          type="button"
          value="Add New Image"
          onClick={addNewImage}
        />

        {/** CONDITIONAL EXPRESSION */}
        {isinvalid && <div className="text-danger">Invalid Image Id</div>}
      </div>

      {list.map((item, index) => (
        <ImageDemo key={index} imageId={item} title="first" />
      ))}
    </div>
  );
}

export default ListDemo;
