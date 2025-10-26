import React from "react";
import {
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
    // Use useParams hook to get the userId from the URL
    const { userId } = useParams();
    const user = models.userModel(userId);

    if (!user) {
        return <Typography>User not found.</Typography>;
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="h4" gutterBottom>
                    {`${user.first_name} ${user.last_name}`}
                </Typography>

                <Typography variant="body1" gutterBottom>
                    <strong>Location:</strong> {user.location}
                </Typography>

                <Typography variant="body1" gutterBottom>
                    <strong>Occupation:</strong> {user.occupation}
                </Typography>

                <Typography variant="body1" style={{ marginTop: "15px" }}>
                    <strong>Description:</strong> {user.description}
                </Typography>
            </CardContent>

            <CardActions>
                {/* Button to navigate to this user's photos */}
                <Button
                    component={Link}
                    to={`/photos/${user._id}`}
                    variant="contained"
                    color="primary"
                >
                    View Photos
                </Button>
            </CardActions>
        </Card>
    );
}

export default UserDetail;
