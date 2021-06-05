import React from "react";
import ProjectData from "../utils/API";
import Project from "../components/Project";
// need to import images for projects

function Projects() {
    return (
        <section className="container">
            <div className="row">
                <h2 className="col-sm-12" style={{ paddingTop: "25px" }}>Portfolio</h2>
            </div>
            <hr />
            <Wrapper>
                <Project
                    image={ConcoctionsImg}
                    title={ProjectData[0].title}
                    description={ProjectData[0].description}
                    technology={ProjectData[0].technology}
                    deployedUrl={ProjectData[0].deployedUrl}
                    gitHubUrl={ProjectData[0].gitHubUrl}
                />
                <Project
                    image={WeatherDashImg}
                    title={ProjectData[1].title}
                    description={ProjectData[1].description}
                    technology={ProjectData[1].technology}
                    deployedUrl={ProjectData[1].deployedUrl}
                    gitHubUrl={ProjectData[1].gitHubUrl}
                />
                <Project
                    image={WorkdaySchImg}
                    title={ProjectData[2].title}
                    description={ProjectData[2].description}
                    technology={ProjectData[2].technology}
                    deployedUrl={ProjectData[2].deployedUrl}
                    gitHubUrl={ProjectData[2].gitHubUrl}
                />
            </Wrapper>
            <Wrapper>
                <Project
                    image={TechBlogImg}
                    title={ProjectData[3].title}
                    description={ProjectData[3].description}
                    technology={ProjectData[3].technology}
                    deployedUrl={ProjectData[3].deployedUrl}
                    gitHubUrl={ProjectData[3].gitHubUrl}
                />
                <Project
                    image={HaggleImg}
                    title={ProjectData[4].title}
                    description={ProjectData[4].description}
                    technology={ProjectData[4].technology}
                    deployedUrl={ProjectData[4].deployedUrl}
                    gitHubUrl={ProjectData[4].gitHubUrl}
                />
                <Project
                    image={RandPasswordImg}
                    title={ProjectData[7].title}
                    description={ProjectData[7].description}
                    technology={ProjectData[7].technology}
                    deployedUrl={ProjectData[7].deployedUrl}
                    gitHubUrl={ProjectData[7].gitHubUrl}
                />
            </Wrapper>
            <Wrapper>
                <Project
                    image={WorkoutImg}
                    title={ProjectData[6].title}
                    description={ProjectData[6].description}
                    technology={ProjectData[6].technology}
                    deployedUrl={ProjectData[6].deployedUrl}
                    gitHubUrl={ProjectData[6].gitHubUrl}
                />
                <Project
                    image={NotesImg}
                    title={ProjectData[5].title}
                    description={ProjectData[5].description}
                    technology={ProjectData[5].technology}
                    deployedUrl={ProjectData[5].deployedUrl}
                    gitHubUrl={ProjectData[5].gitHubUrl}
                />
            </Wrapper>
        </section>
    );
}

export default Projects;