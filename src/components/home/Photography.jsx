import Gallery from "react-photo-gallery";
import React from "react";
import Container from "react-bootstrap/Container";
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

const Photography = React.forwardRef((props, ref) => {
    return (
        <Container className="text-center" >
            <div id="photography">
            <Paper className="paperContainer">
            <h2 className="display-4 pb-3 text-center">Photography</h2>
                <Gallery photos={photos} />
            </Paper>
            </div>
        </Container>
    );
});

export default Photography;
