'use client';

import { Project } from 'app/components/project';
import { useEffect, useState } from 'react';

export type ImageType = {
    title: string;
    url: string;
};

export type ProjectType = {
    id: string;
    name: string;
    description: string;
    role: string;
    techStack: string;
    images: ImageType[];
};

const projects: ProjectType[] = [
    {
        id: '1',
        name: 'Smart Flows',
        description:
            'Developed by Shift, Smart Flows is a SaaS customer journey support system which allows you to build out website flows using pre-made components. The flows can then be embedded into websites or popups and can capture end user data and fetch data via a third party endpoint.',
        role: 'As part of a three person team I played an integral part in the design, development and testing of Smart Flows.',
        techStack: 'Built with React.js, TypeScript, PHP and Laravel.',
        images: [
            {
                title: 'Home Page',
                url: 'https://res.cloudinary.com/stuj89/image/upload/v1727598181/Home_Page.png',
            },
            {
                title: 'Projects',
                url: 'https://res.cloudinary.com/stuj89/image/upload/v1727598182/Projects.png',
            },
            {
                title: 'Stream Settings',
                url: 'https://res.cloudinary.com/stuj89/image/upload/v1727598181/Stream_Settings.png',
            },
            {
                title: 'Stream Editor',
                url: 'https://res.cloudinary.com/stuj89/image/upload/v1727598182/Stream_Editor.png',
            },
            {
                title: 'Module Settings',
                url: 'https://res.cloudinary.com/stuj89/image/upload/v1727598181/Module_Settings.png',
            },
            {
                title: 'Stream Preview',
                url: 'https://res.cloudinary.com/stuj89/image/upload/v1727598182/Stream_Preview.png',
            },
            {
                title: 'Documentation',
                url: 'https://res.cloudinary.com/stuj89/image/upload/v1727598731/Documentation.png',
            },
        ],
    },
];

export default function Page() {
    const [currentProject, setCurrentProject] = useState<ProjectType | null>(
        null
    );

    useEffect(() => {
        setCurrentProject(() => projects[0]);
    }, []);

    return <Project project={currentProject} />;
}
