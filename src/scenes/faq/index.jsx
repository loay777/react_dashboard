import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m={"20px"}>
      <Header title={"FAQ"} subtitle="Frequently Asked Questions Page" />
      <Accordion defaultExpanded >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question 1
          </Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Consequat commodo duis voluptate pariatur laboris qui voluptate
              veniam esse consequat. Deserunt cupidatat laborum sit cupidatat
              dolor quis. Anim ea tempor deserunt anim esse consequat labore
              eiusmod irure in non. Quis aute adipisicing amet consequat ex
              minim ullamco laboris laboris qui laboris occaecat ullamco fugiat.
              Et cillum aute et minim dolore officia. Cupidatat sint voluptate
              aliqua adipisicing amet laboris.
            </Typography>
          </AccordionDetails>
      </Accordion>

      <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question 2
          </Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Consequat commodo duis voluptate pariatur laboris qui voluptate
              veniam esse consequat. Deserunt cupidatat laborum sit cupidatat
              dolor quis. Anim ea tempor deserunt anim esse consequat labore
              eiusmod irure in non. Quis aute adipisicing amet consequat ex
              minim ullamco laboris laboris qui laboris occaecat ullamco fugiat.
              Et cillum aute et minim dolore officia. Cupidatat sint voluptate
              aliqua adipisicing amet laboris.
            </Typography>
          </AccordionDetails>
      </Accordion>

      <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question 3
          </Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Consequat commodo duis voluptate pariatur laboris qui voluptate
              veniam esse consequat. Deserunt cupidatat laborum sit cupidatat
              dolor quis. Anim ea tempor deserunt anim esse consequat labore
              eiusmod irure in non. Quis aute adipisicing amet consequat ex
              minim ullamco laboris laboris qui laboris occaecat ullamco fugiat.
              Et cillum aute et minim dolore officia. Cupidatat sint voluptate
              aliqua adipisicing amet laboris.
            </Typography>
          </AccordionDetails>
      </Accordion>

      <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question 4
          </Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Consequat commodo duis voluptate pariatur laboris qui voluptate
              veniam esse consequat. Deserunt cupidatat laborum sit cupidatat
              dolor quis. Anim ea tempor deserunt anim esse consequat labore
              eiusmod irure in non. Quis aute adipisicing amet consequat ex
              minim ullamco laboris laboris qui laboris occaecat ullamco fugiat.
              Et cillum aute et minim dolore officia. Cupidatat sint voluptate
              aliqua adipisicing amet laboris.
            </Typography>
          </AccordionDetails>
      </Accordion>

      <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question 5
          </Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Consequat commodo duis voluptate pariatur laboris qui voluptate
              veniam esse consequat. Deserunt cupidatat laborum sit cupidatat
              dolor quis. Anim ea tempor deserunt anim esse consequat labore
              eiusmod irure in non. Quis aute adipisicing amet consequat ex
              minim ullamco laboris laboris qui laboris occaecat ullamco fugiat.
              Et cillum aute et minim dolore officia. Cupidatat sint voluptate
              aliqua adipisicing amet laboris.
            </Typography>
          </AccordionDetails>
      </Accordion>

      <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question 6
          </Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Consequat commodo duis voluptate pariatur laboris qui voluptate
              veniam esse consequat. Deserunt cupidatat laborum sit cupidatat
              dolor quis. Anim ea tempor deserunt anim esse consequat labore
              eiusmod irure in non. Quis aute adipisicing amet consequat ex
              minim ullamco laboris laboris qui laboris occaecat ullamco fugiat.
              Et cillum aute et minim dolore officia. Cupidatat sint voluptate
              aliqua adipisicing amet laboris.
            </Typography>
          </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
