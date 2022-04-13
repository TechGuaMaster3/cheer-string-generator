import React, {useEffect, useState} from "react";
import "./App.css";
import Cheer from "./cheer.json";
import copy from "copy-to-clipboard";
import Converter from "./Converter";
import parse from "html-react-parser";

function App() {
  const [number, setNumber] = useState("0");
  const [result, setResult] = useState("");
  const [type, setType] = useState("");
  const [alert, setAlert] = useState(false);
  const [numberAlert, setNumberAlert] = useState(false);
  // const [random, setRandom] = useState(0);
  // const type = ["1", "100", "1000", "5000", "10000"];

  // useEffect(() => {
  //   let rotationInterval = setInterval(() => {
  //     setRandom((random) => (random + 1) % 5);
  //     console.log("AA");
  //   }, 1000);
  //   return () => clearInterval(rotationInterval);
  // }, [  ]);

  const clickCheer = (value) => {
    setType(value);
    if (parseInt(number) >= 1000) {
      setAlert(true);
    } else {
      addCheer(value);
    }
  };

  const addCheer = (value) => {
    setAlert(false);
    const amount = number && number !== "0" ? number : "87";
    const bitString =
      result === "" || result.slice(result.length - 1) === " "
        ? `${value + amount} `
        : ` ${value + amount} `;
    console.log(bitString);
    setResult((result) => result + bitString);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="flex flex-wrap bg-gray-400 p-5 mx-10 my-3 rounded shadow max-w-5xl">
          <div className="w-full bg-gray-400 p-5 mx-auto">
            <div className="text-lg font-semibold text-gray-900 m-1">
              Bits (defalut:87)
            </div>
            <input
              value={number}
              className="text-black px-2"
              onChange={(event) => {
                setNumber(event.target.value);
              }}
              type="number"
            />
          </div>
          <div className="justify-center">
            {Object.keys(Cheer).map((key, i) => (
              <button
                className="
                     transition-colors
                     flex-inline
                     w-10
                     h-10
                     shadow-sm
                     rounded
                     p-1
                     m-1.5
                     justify-center
                     items-center
                     text-md
                     bg-white text-gray-700
                   "
                key={key}
                title={key}
                onClick={() => clickCheer(key)}
              >
                <img src={Cheer[key][100]} alt="logo" />
              </button>
            ))}
          </div>
          <div className="flex flex-wrap bg-gray-400 w-full p-5 my-3 mx-4 md:mx-12 lg:mx-16">
            <div className="text-lg font-semibold text-gray-900 m-1">
              Preview
            </div>
            <span
              className="
              preview
              break-all
              form-control
              text-left
              inline-block
              w-full
              px-3
              py-1.5
              m-2
              h-auto
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none
            "
              style={{minHeight: "8em"}}
            >
              {parse(
                Converter.formatText(
                  result,
                  [".", "!", "?", ":", ";", ",", " "],
                  90,
                  null
                ).display
              )}
            </span>
            <div
              className={`text-lg font-semibold ${
                result.length < 500 ? "text-gray-900" : "text-red-600"
              } m-1`}
            >
              Input & Result ( {result.length} / 500 )
            </div>
            <textarea
              className="
              break-all
              form-control
              block
              w-full
              px-3
              py-1.5
              m-2
              h-32
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none
            "
              value={result}
              onChange={(event) => {
                setResult(event.target.value);
              }}
            ></textarea>
            <div
              className="
              flex
              items-center
              p-2
              mx-auto
            "
            >
              <button
                className="
                w-full
                bg-white
                hover:bg-gray-200
                text-gray-700
                text-lg
                font-bold
                py-1
                px-2
                mt-2
                rounded
                border border-gray-800
              "
                type="button"
                onClick={() => {
                  copy(result);
                }}
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`
          ${alert ? "flex" : "hidden"}
          bg-gray-700 bg-opacity-75
          overflow-y-auto overflow-x-hidden
          fixed
          right-0
          left-0
          top-0
          z-50
          justify-center
          items-center
          inset-0
          h-modal`}
      >
        <div className="relative px-4">
          <div
            className="
              h-auto
              w-auto
              relative
              bg-white
              rounded-lg
              shadow-2xl
              border-6 border-gray-600

            "
          >
            <div
              className="
                justify-between
                items-center
                pt-5
                rounded-t
                text-center
              "
            >
              <h3 className="text-3xl font-bold text-gray-900">冷靜</h3>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4">
                    <div
                      className="
                        text-lg text-gray-900
                        font-bold 
                        flex flex-wrap
                        place-content-center
                      "
                    >
                      <div className="preview w-full">
                        {parse(
                          Converter.formatText(
                            type + number,
                            [".", "!", "?", ":", ";", ",", " "],
                            90,
                            null
                          ).display
                        )}
                      </div>
                      <div className="flex flex-wrap my-1">
                        這是娛樂消費，請遵循量力而為原則
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              className="
                items-center
                p-6
                space-x-2
                rounded-b
                border-t border-gray-200
                grid grid-cols-2
              "
            >
              <button
                className="
                  w-full
                  bg-transparent
                  text-gray-800
                  hover:text-gray-400
                  font-bold
                  py-2
                  px-4
                  border border-gray-800
                  hover:border-gray-400
                  rounded
                  col-span-1
                "
                type="button"
                onClick={() => {
                  setAlert(false);
                }}
              >
                想一下
              </button>
              <button
                className="
                  w-full
                  bg-green-700
                  hover:bg-green-500
                  text-white
                  font-bold
                  py-2
                  px-4
                  rounded
                  col-span-1
                "
                type="button"
                onClick={() => addCheer(type)}
              >
                塞啦
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
