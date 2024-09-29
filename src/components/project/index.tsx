import MediaGallery from './components/media-gallery';
import { ProjectType } from 'app/app/projects/page';

import classes from './index.module.css';
import { useEffect, useState } from 'react';

type ProjectProps = {
    project: ProjectType | null;
};

export function Project(props: ProjectProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const numberOfImages = props.project?.images.length ?? 0;

    useEffect(() => {
        const switchImage = setTimeout(() => {
            setCurrentImageIndex((current) => {
                if (current !== numberOfImages - 1) {
                    return current + 1;
                }

                return 0;
            });
        }, 3000);

        return () => {
            clearTimeout(switchImage);
        };
    }, [currentImageIndex, numberOfImages]);

    if (props.project === null) {
        return null;
    }

    return (
        <div className={classes.root}>
            <h1>{props.project.name}</h1>
            <p>{props.project.description}</p>
            <p>{props.project.role}</p>
            <p>{props.project.techStack}</p>
            <MediaGallery content={props.project.images[currentImageIndex]} />
        </div>
    );
}
