import { useState } from "react";
import "./App.css";
import { MdDone } from "react-icons/md";

const App = () => {
  const data = [
    { num: 1, flag: true },
    { num: 2, flag: false },
    { num: 3, flag: false },
    { num: 4, flag: false },
    { num: 5, flag: false },
  ];

  const [color, setColor] = useState(data);

  const changeColor = (id) => {
    const newdata = data.map((item) => {
      if (item.num <= id) {
        return { ...item, flag: true };
      }
      return item;
    });
    setColor(newdata);
  };
  return (
    <div className="app">
      {color.map((item) => {
        return (
          <main>
            <span className={item.flag ? `color` : "noncolor"}></span>
            <div
              className="child"
              style={{ background: item.flag ? "green" : "" }}
              onClick={() => changeColor(item.num)}
            >
              <h1>{item?.num}</h1>
            </div>
          </main>
        );
      })}
    </div>
  );
};
export default App;
