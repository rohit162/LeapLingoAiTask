import React, { useEffect, useState } from "react";
import "./styles.css";

export default function CountInputChanges() {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(-1);

  useEffect(() => {
    setCount(count + 1);
  }, [value]);

  const onChange = ({ target }) => setValue(target.value);

  return (
    <div>
      <span>Enter some text: </span>
      <input type="text" value={value} class="box" onChange={onChange} />

      <div>
        Number of changes:
        <span class="chnge-clr">{count}</span>
      </div>
    </div>
  );
}
