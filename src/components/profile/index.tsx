'use client';

import Image from 'next/image';
import { ReactElement, useState } from 'react';

import classes from './index.module.css';

enum Images {
    Stu = 'https://res.cloudinary.com/stuj89/image/upload/v1725542567/Stu.jpg',
    Dogs = 'https://res.cloudinary.com/stuj89/image/upload/v1725972735/Dogs.jpg',
    Plymouth = 'https://res.cloudinary.com/stuj89/image/upload/v1725975436/Plymouth.jpg',
}

export function Profile() {
    const [imagePath, setImagePath] = useState<string>(Images.Stu);

    const profile: ReactElement = (
        <div className={classes.profile}>
            <div className={classes.imageContainer}>
                <Image
                    src={imagePath}
                    alt="Stu"
                    fill
                    sizes="100%"
                    priority
                ></Image>
            </div>
            <div className={classes.titleContainer}>
                <h1>Stuart Jauncey</h1>
                <h2>Fullstack Software Developer</h2>
            </div>
        </div>
    );

    const description: ReactElement = (
        <div className={classes.descriptionContainer}>
            <div>
                <p>
                    My name is{' '}
                    <span
                        className={classes.highlight}
                        onMouseEnter={() => setImagePath(Images.Stu)}
                    >
                        Stuart
                    </span>{' '}
                    and I am a fullstack software developer.
                </p>
            </div>
            <div>
                <p>
                    I live in{' '}
                    <span
                        className={classes.highlight}
                        onMouseEnter={() => setImagePath(Images.Plymouth)}
                    >
                        Plymouth
                    </span>
                    , England with my wife and{' '}
                    <span
                        className={classes.highlight}
                        onMouseEnter={() => setImagePath(Images.Dogs)}
                    >
                        two dogs.
                    </span>
                </p>
            </div>
        </div>
    );

    return (
        <div className={classes.root}>
            {profile}
            {description}
        </div>
    );
}
