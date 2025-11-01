import { useState } from "react";
import Saludo from "./components/Saludo";

function App() {
  const saludo = "my friend";
  const [msj, setMsj] = useState(""); // state inicial vacío

  const handleClick = () => {
    setMsj("(from changed state)"); // cambia el state al hacer click
  };

  return (
    <>
      <section className="py-3 container">
        <h1 className="display-4">
          <Saludo saludo={`${saludo} ${msj}!`} />
        </h1>
        <div>
          <button onClick={handleClick}>Click me</button>
        </div>
      </section>
    </>
  );
}

export default App;
