import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Fab from "@mui/material/Fab";

function CreateArea(props) {
  const [isExpanded, setExpanded] = React.useState(false);
  const [data, setData] = React.useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const Ename = event.target.name;
    const newValue = event.target.value;
    setData((prevValue) => {
      return { ...prevValue, [Ename]: newValue };
    });
  }
  function expand() {
    setExpanded(true);
  }
  function submitNote(event) {
    props.onAdd(data);
    setData({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={data.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={data.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Fab onClick={submitNote}>
          <AddCircleIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
