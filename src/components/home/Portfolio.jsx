import Gallery from "react-photo-gallery";
import React from "react";
import Container from "react-bootstrap/Container";
import EmbedVideo from "./EmbedVideo.jsx";
import Paper from '@material-ui/core/Paper';

const photoURLS = [
    'photos/BSE-BUILD_STOVE_GARY_LAUGHS-LUCAS-021.jpg',
    'photos/SN-BUILD_GARDEN_LOCALS_FARM-LUCAS-004.jpg',
    'photos/COMP-INDOOR_WIRING-LUCAS-052.jpg',
    'photos/COMP-INSTALL_SOLAR_PANEL-LUCAS-002.jpg',
    'photos/EE-TRAINING_SOLAR-LUCAS-28.jpg',
    'photos/ELC-TEACHING_ENGLISH_LAST_DAY-LUCAS-060.jpg',
    'photos/ELC-TEACHING_ENGLISH-LUCAS-114.jpg',
    'photos/ELC-TEACHING_ENGLISH-LUCAS-129.jpg',
    'photos/FLICK_SWITCH-LUCAS-001.jpg',
    'photos/GROUP_EDUCATION_WALLACE-LUCAS-006.jpg',
    'photos/SN_PP-SLUM_WORK-LUCAS-72.jpg',
    'photos/SN_PP-SLUM_WORK-LUCAS-132.jpg',
    'photos/SN_PP-SLUM_WORK-LUCAS-138.jpg',
    'photos/SO-EYE_SIGHT_TESTS-LUCAS-062.jpg',
    'photos/SO-TRAINING-LUCAS-26.jpg',
]

let photos =
    photoURLS.map((value, index) => {
        return ({
            src: value,
            width: 5184,
            height: 3456
        });
    });

const Portfolio = React.forwardRef((props, ref) => {
    return (
        <Container className="text-center portfolioTitle" >
            <h1 className="display-4 pb-5 text-center" ref={ref}>
                    Lucas's CET Portfolio
                </h1>
            <Paper className="paperContainer">
                
                <h2 className="display-4 pb-3 text-center">Daffodil</h2>
                <p className="lead text-center pb-3"> <i>Written, Directed, and Edited by Lucas Schroeder</i></p>
                <div id="aboutme">
                    <EmbedVideo embedId="https://www.youtube.com/embed/4wWkjEpqEck" />
                </div>
            </Paper>

            <Paper className="paperContainer">
                <h1>Photography</h1>
                <Gallery photos={photos} />
            </Paper>
        </Container>
    );
});

export default Portfolio;