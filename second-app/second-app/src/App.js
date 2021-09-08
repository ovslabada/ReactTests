import MessageComponent from "./Components/Message/MessageComponent";

const messageText = "The text of message";


function App() {
  return (
    <div className="App">
      <MessageComponent message={messageText}/>
    </div>
  );
}

export default App;
