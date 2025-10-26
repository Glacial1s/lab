import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation, matchPath } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar() {
    const location = useLocation();
    let contextText = ""; // Default context

    // Check for User Detail page: /users/:userId
    const matchUserDetail = matchPath("/users/:userId", location.pathname);
    if (matchUserDetail) {
        const userId = matchUserDetail.params.userId;
        const user = models.userModel(userId);
        if (user) {
            contextText = `${user.first_name} ${user.last_name}`;
        }
    }

    // Check for User Photos page: /photos/:userId
    const matchUserPhotos = matchPath("/photos/:userId", location.pathname);
    if (matchUserPhotos) {
        const userId = matchUserPhotos.params.userId;
        const user = models.userModel(userId);
        if (user) {
            contextText = `Photos of ${user.first_name} ${user.last_name}`;
        }
    }

    // Check for User List page: /users
    const matchUserList = matchPath("/users", location.pathname);
    if (matchUserList) {
        contextText = "User List";
    }

    return (
        <AppBar className="topbar-appBar" position="absolute">
            {/* Use style to spread content to left and right */}
            <Toolbar style={{ justifyContent: "space-between" }}>
                <Typography variant="h5" color="inherit">
                    B22DCAT036 - Nguyen Thai Bang
                </Typography>
                <Typography variant="h5" color="inherit">
                    {contextText}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;
