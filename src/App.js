import "./App.css";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App flex justify-center items-center h-screen bg-wsp-black">
      <div className="h-full flex justify-center items-center h-screen">
        <Chat />
      </div>
    </div>
  );
}

export default App;
