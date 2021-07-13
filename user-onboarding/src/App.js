import "./App.css";
import Form from "./components/Form";

const initialFormValues = {
  username: "",
  email: "",
  password: "",
  tos: false,
};

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
  tos: "",
};

function App() {
  return (
    <div className="App">
      <h1>User Onboarding App</h1>
      <Form />
    </div>
  );
}

export default App;
