import logo from "../../assets/image/logo.svg";
import "./app.scss";

function App() {
  return (
    <div>
      <h1 data-testid="title" id="title">
        Pinterest
      </h1>
      <img src={logo} alt="react-logo" />
    </div>
  );
}

export default App;
