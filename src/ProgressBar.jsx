import React, { useEffect, useState } from "react";
import axios from "axios";
import Progress from "./Progress";

export const ProgressBar = () => {
  const [bars, setbars] = useState([]);
  const [buttons, setbuttons] = useState([]);
  const [selectedBar, setselectedBar] = useState(0);
  useEffect(() => {
    getbars();
  }, []);

  const handleChange = (e) => {
    setselectedBar(e.target.value);
  };

  const getbars = () => {
    axios
      .get("https://pb-api.herokuapp.com/bars")
      .then((res) => {
        let bars = [];
        res.data.bars.forEach((bar) => {
          let barObj = { bar, background: "lightblue", color: "black" };
          if (typeof bar === "number") {
            bars.push(barObj);
          }
        });

        setbars(bars);
        setbuttons(res.data.buttons);
      })
      .catch((error) => {
        alert(error);
      });
  };
  const handleBtnClick = (val) => {
    let newBar = { ...bars[selectedBar] };
    newBar.bar = newBar.bar + val;
    if (newBar.bar >= 100) {
      newBar.background = "red";
      newBar.color = "white";
    } else {
      if (newBar.bar <= 0) {
        newBar.bar = 0;
      }
      newBar.background = "lightblue";
      newBar.color = "black";
    }
    let allBars = [...bars];
    allBars[selectedBar] = newBar;
    setbars(allBars);
  };

  return (
    <div className="container">
      <h3 className="text-center">Progress Bars Demo</h3>
      <div className="row bars">
        <div className="col-sm"></div>
        <div className="col-sm">
          {bars.length > 0 &&
            bars.map((bar, i) => (
              <div key={i} className="col">
                {typeof bar.bar === "number" && <Progress bar={bar} />}
                {typeof bar.bar !== "number" && (
                  <div>
                    Error Loading Progressbar .. Please Refresh and try again
                  </div>
                )}
              </div>
            ))}
          {bars.length === 0 && <div>Loading....</div>}
          <div className="row buttons">
            <ul className="">
              <li>
                {bars.length > 0 && (
                  <select
                    name="bar"
                    value={selectedBar}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  >
                    {bars.map((bar, i) => (
                      <option key={i} value={i}>
                        Progress # {i + 1}
                      </option>
                    ))}
                  </select>
                )}{" "}
              </li>
              {buttons.map((button, i) => (
                <li key={i}>
                  <button
                    onClick={() => {
                      handleBtnClick(button, i);
                    }}
                  >
                    {button}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};
