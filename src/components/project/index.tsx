import { ProjectType } from 'app/app/projects/page';
import { TechStack } from './components/tech-stack';

import classes from './index.module.css';

type ProjectProps = {
    project: ProjectType | null;
};

export function Project(props: ProjectProps) {
    if (props.project === null) {
        return null;
    }

    return (
        <div className={classes.root}>
            <h1>{props.project.name}</h1>
            <p>{props.project.description}</p>
            <p>{props.project.role}</p>
            <TechStack technologies={props.project.techStack} />
            {/* <MediaGallery content={props.project.images} /> */}
        </div>
    );
}
