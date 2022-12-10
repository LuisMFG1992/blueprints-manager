import "./App.css";
import Button from "./Components/Button/Button";
import InputSelect from "./Components/Inputs/inputSelect";

function App() {
  return (
    <div className="appContainer">
      <img className="logo" src="./assets/edenorLogo.png" alt="Logo-Edenor" />
      <p className="title">Administrador de planos SEAT-MT</p>
      <div className="flex justify-center items-center flex-col">
        <InputSelect />
        <Button />
      </div>
    </div>
  );
}

export default App;
