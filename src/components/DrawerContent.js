import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";

import MailIcon from "@material-ui/icons/Mail";
import React from "react";
import { Link } from "react-router-dom";
const pageRoute = [
  {
    title: "Home",
    route: "/home",
  },
  {
    title: "Company",
    route: "/company",
  },
  {
    title: "Payment",
    route: "/pay",
  },
  {
    title: "Employee",
    route: "/employee",
  },
];

function DrawerContent() {
  return (
    <div>
      <List>
        {pageRoute.map((page, index) => (
          <Link key={index} to={page.route}>
            <ListItem button>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>

              <ListItemText primary={page.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
}

export default DrawerContent;
