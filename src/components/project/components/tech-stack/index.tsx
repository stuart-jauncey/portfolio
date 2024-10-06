import { LaravelIcon, MongoDBIcon, PHPIcon, ReactIcon, TypeScriptIcon } from 'app/icons/technologies';

import classes from './index.module.css';

type TechStackProps = {
    technologies: string[];
};

const IconMap: any = {
    laravel: <LaravelIcon />,
    mongoDB: <MongoDBIcon />,
    PHP: <PHPIcon />,
    react: <ReactIcon />,
    typeScript: <TypeScriptIcon />,
};

export function TechStack(props: TechStackProps) {
    const icons = props.technologies.map((technology) => {
        return (
            <div key={technology} className={classes.icon}>
                {IconMap[technology]}
                {technology}
            </div>
        );
    });

    return (
        <div className={classes.root}>
            <h2>Tech Stack</h2>
            <div className={classes.iconContainer}>{icons}</div>
        </div>
    );
}
