import axios from "axios";
import { useState, useEffect } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(
        "http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>All Notes</h1>
    </div>
  );
};

export default Notes;
