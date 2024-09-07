import Image from 'next/image';

import classes from './index.module.css';

export function Profile() {
    return (
        <div className={classes.root}>
            <div className={classes.profile}>
                <div className={classes.imageContainer}>
                    <Image
                        src="https://res.cloudinary.com/stuj89/image/upload/v1725542567/Stu.jpg"
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
            <div className={classes.descriptionContainer}>
                <p>Hi!</p>
                <p>
                    My name is Stuart and I am a fullstack software developer.
                </p>
                <p>I live in Plymouth, England with my wife and two dogs.</p>
            </div>
        </div>
    );
}
