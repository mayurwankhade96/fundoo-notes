import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import { useState } from "react";
import styles from "../styles/CreateNote.module.css";

const CreateNote = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Accordion
        className={styles.accordian}
        onChange={() => setIsExpanded(!isExpanded)}
      >
        <AccordionSummary>
          {isExpanded ? "Title" : "Take a note..."}
        </AccordionSummary>
        <AccordionDetails>Take a note...</AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CreateNote;
