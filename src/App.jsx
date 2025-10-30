import Saludo from "./components/Saludo";

function App() {
  return (
    <>
      <header className="py-3 text-center">
        <h1 className="display-4">Primera App con React</h1>
      </header>
      <main>
        <Saludo>  
        </Saludo>
      </main>
    </>
  );
}

export default App;
