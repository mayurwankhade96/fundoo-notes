import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import styles from "../styles/CreateNote.module.css";

const CreateNote = (props) => {
  // const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: title,
      description: description,
    };

    try {
      const response = await axios.post(
        "http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",
        payload,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }

    setTitle("");
    setDescription("");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {/* <Accordion
        className={styles.accordian}
        onChange={() => setIsExpanded(!isExpanded)}
      >
        <AccordionSummary>
          {isExpanded ? "Title" : "Take a note..."}
        </AccordionSummary>
        <AccordionDetails>Take a note...</AccordionDetails>
      </Accordion> */}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={title}
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <Button variant='text' type='submit'>
          Close
        </Button>
      </form>
    </Box>
  );
};

export default CreateNote;
