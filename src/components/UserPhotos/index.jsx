import React from "react";
import {
    Typography,
    Card,
    CardContent,
    CardMedia,
    List,
    Paper,
    Grid,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import "./styles.css";
import models from "../../modelData/models";

/**
 * Helper function to format date/time strings nicely.
 */
function formatDateTime(dateTimeString) {
    return new Date(dateTimeString).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos() {
    const { userId } = useParams();
    const photos = models.photoOfUserModel(userId);

    if (!photos || photos.length === 0) {
        return <Typography>This user has not posted any photos.</Typography>;
    }

    return (
        <Grid container spacing={3}>
            {photos.map((photo) => (
                <Grid item xs={12} key={photo._id}>
                    <Card>
                        {/* Display the photo */}
                        <CardMedia
                            component="img"
                            image={`/images/${photo.file_name}`} // Construct image path
                            alt={`Photo by user ${photo.user_id}`}
                            style={{ maxHeight: 600, objectFit: "contain" }} // Style image
                        />
                        <CardContent>
                            {/* Display photo creation time */}
                            <Typography variant="caption" display="block" gutterBottom>
                                Posted on: {formatDateTime(photo.date_time)}
                            </Typography>

                            <Typography
                                variant="h6"
                                gutterBottom
                                style={{ marginTop: "15px" }}
                            >
                                Comments:
                            </Typography>

                            {/* Check if there are comments */}
                            {photo.comments && photo.comments.length > 0 ? (
                                <List dense>
                                    {/* Map over each comment */}
                                    {photo.comments.map((comment) => (
                                        <Paper
                                            key={comment._id}
                                            style={{ padding: "10px", marginBottom: "10px" }}
                                        >
                                            <Typography variant="body2">
                                                {`"${comment.comment}"`}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                display="block"
                                                align="right"
                                            >
                                                &mdash;
                                                {/* Link to the user who made the comment */}
                                                <Link to={`/users/${comment.user._id}`}>
                                                    {`${comment.user.first_name} ${comment.user.last_name}`}
                                                </Link>
                                                {` | ${formatDateTime(comment.date_time)}`}
                                            </Typography>
                                        </Paper>
                                    ))}
                                </List>
                            ) : (
                                <Typography variant="body2">No comments yet.</Typography>
                            )}
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default UserPhotos;
