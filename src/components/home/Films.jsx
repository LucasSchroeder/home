import React from "react";
import Container from "react-bootstrap/Container";
import EmbedVideo from "./EmbedVideo.jsx";
import Paper from "@material-ui/core/Paper";

const Films = React.forwardRef((props, ref) => {
    return (
        <Container className="text-center portfolioTitle">
            <Paper className="videoPaperContainer">
                
                <div id="films" classname="filmsContainer">
                <h2 className="display-4 pb-3 text-center">Films</h2>
                    <EmbedVideo embedId="https://player.vimeo.com/video/333250866" />
                    <EmbedVideo embedId="https://player.vimeo.com/video/318869753" />
                    <EmbedVideo embedId="https://player.vimeo.com/video/387776966" />
                    <EmbedVideo embedId="https://www.youtube.com/embed/4wWkjEpqEck" />
                    <EmbedVideo embedId="https://drive.google.com/file/d/1aUmXEwVXXu6sBEayR0pA7U1ytCtEqa3M/preview" />
                    
                    <EmbedVideo embedId="https://drive.google.com/file/d/1UcYV7J-PgVnH8uZUBirw4nUF0h7T57ET/preview" />
                    
                    <EmbedVideo embedId="https://www.youtube.com/embed/QdPrNUbBhBA" />
                    
                    <EmbedVideo embedId="https://www.youtube.com/embed/NSazoTZGXbo" />
                    
                    
                    
                </div>
            </Paper>
            
        </Container>
    );
});

export default Films;
