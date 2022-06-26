import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };
  // It is used for collapsing and expanding
  return (
    <div>
      {/* This is wrapper component */}
      {/* for group only one item expand in 1 time we use here exapnded and setexpanded  */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(e, isExpanded) => {
          handleChange(isExpanded, "panel1");
        }}
      >
        <AccordionSummary
          id="panell-header"
          aria-controls="panell-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus, odio temporibus error obcaecati vero, asperiores iure
            totam exercitationem praesentium voluptate suscipit cum quisquam
            voluptatem, vitae dolorem. Vel quae fuga dolores.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(e, isExpanded) => {
          handleChange(isExpanded, "panel2");
        }}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus, odio temporibus error obcaecati vero, asperiores iure
            totam exercitationem praesentium voluptate suscipit cum quisquam
            voluptatem, vitae dolorem. Vel quae fuga dolores.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(e, isExpanded) => {
          handleChange(isExpanded, "panel3");
        }}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus, odio temporibus error obcaecati vero, asperiores iure
            totam exercitationem praesentium voluptate suscipit cum quisquam
            voluptatem, vitae dolorem. Vel quae fuga dolores.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
