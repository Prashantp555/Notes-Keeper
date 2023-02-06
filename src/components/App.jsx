import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = React.useState([]);
  function addData(data) {
    setNote((prevNote) => {
      return [...prevNote, data];
    });
  }
  function deleteData(id) {
    setNote((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addData} />
      {note.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            isClicked={deleteData}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
