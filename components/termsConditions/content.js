import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material";
import { terms } from "./terms";

const StyledLink = styled("List")(({ theme }) => ({
  // position: "relative",
  display: "block",
  //padding: "0.3rem 0rem",
  cursor: "pointer",
  "&:hover": {
    color: "white",
    backgroundColor: theme.palette.primary[1000],
  },
  color: "black",
  backgroundColor: theme.palette.grey[1000],
}));

const Content = () => {
  const [addIndex, setAddIndex] = React.useState("");
  const [open, setOpen] = React.useState({ [addIndex]: false });

  // const [InfoOpen, setInfoOpen] = React.useState(false);
  //const [RefundOpen, setRefundOpen] = React.useState(false);
  //const [HelpOpen, setHelpOpen] = React.useState(false);

  const collapseOpen = (index) => {
    setAddIndex(index);
    setOpen({ [index]: !open[index] });
  };

  const handleClick = (index) => {
    switch (index) {
      case 0:
        collapseOpen(index);
        break;
      case 1:
        collapseOpen(index);
        break;
      case 2:
        collapseOpen(index);
        break;
      case 3:
        collapseOpen(index);
        break;
      case 4:
        collapseOpen(index);
        break;
      default:
        setOpen({});
    }
  };

  return (
    <List>
      {terms.map((term, index) => {
        return (
          <div key={term.heading}>
            <StyledLink>
              <ListItem onClick={() => handleClick(index)}>
                {term.addIcon}
                <ListItemText primary={term.heading} sx={{ pl: "2rem" }} />
                {open[index] ? term.expandLess : term.expandMore}
              </ListItem>
            </StyledLink>
            <Collapse in={open[index]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemText sx={{ pl: 9 }}>
                  {!term.modifiedContent && !term.modifiedContentAnother && (
                      <ul style={{ listStyleType: "disc" }}>
                        {term.content?.map(data => <li>{data}</li>)}
                      </ul>
                  
                  )}
                  
                  {/*additional info*/}
                  {term.modifiedContent?.map((data) => (
                    <div>
                      <ul style={{ listStyleType: "disc" }}>
                        {data.productFirstType.map((first) => (
                          <li>{first}</li>
                        ))}
                      </ul>
                      {data.guideLines.map((guideLine) => (
                        <div>{guideLine}</div>
                      ))}
                      <ul style={{ listStyleType: "disc" }}>
                        {data.productSecondType.map((second) => (
                          <li>{second}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {/*refund*/}
                  {term.another_modifiedContent?.map((modified) => (
                    <div>
                      <ul style={{ listStyleType: "disc" }}>
                        {modified.refundRules1.map((ruleOne) => (
                          <li>{ruleOne}</li>
                        ))}
                      </ul>
                      <h3>{modified.heading1}</h3>
                      <ul style={{ listStyleType: "disc" }}>
                        {modified.refundRules2.map((ruleTwo) => (
                          <li>{ruleTwo}</li>
                        ))}
                      </ul>
                      <h3>{modified.heading2}</h3>
                      <ul style={{ listStyleType: "disc" }}>
                        <li>{modified.lastRules}</li>
                      </ul>
                    </div>
                  ))}
                </ListItemText>
              </List>
            </Collapse>
          </div>
        );
      })}
    </List>
  );
};

export default Content;
