import React from "react";
import { Divider, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models";

/**
 * Define UserList, a React component of Project 4.
 */
function UserList() {
    const users = models.userListModel();

    return (
        <div>
            <List component="nav">
                {users.map((user) => (
                    // Use React.Fragment for key and Divider logic
                    <React.Fragment key={user._id}>
                        {/* Use `component={Link}` and `to` props to make
              the ListItem a navigable link.
            */}
                        <ListItem button component={Link} to={`/users/${user._id}`}>
                            <ListItemText primary={`${user.first_name} ${user.last_name}`} />
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                ))}
            </List>
        </div>
    );
}

export default UserList;
