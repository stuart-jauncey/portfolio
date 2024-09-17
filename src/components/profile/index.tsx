'use client';

import Image from 'next/image';
import { Fragment, ReactElement, useEffect, useRef, useState } from 'react';

import { MessageBubble } from './components/message-bubble';

import classes from './index.module.css';

export type Message = {
    id: string;
    name: string;
    content: string;
    alignment: 'left' | 'right';
    imageURL?: string;
};

enum Images {
    Stu = 'https://res.cloudinary.com/stuj89/image/upload/v1725542567/Stu.jpg',
    Dogs = 'https://res.cloudinary.com/stuj89/image/upload/v1725972735/Dogs.jpg',
    Plymouth = 'https://res.cloudinary.com/stuj89/image/upload/v1725975436/Plymouth.jpg',
}

const messages: Message[] = [
    {
        id: '1',
        name: 'Curious Person',
        content:
            'Hi! I saw your profile and just wanted to know a little more about you.',
        alignment: 'right',
    },
    {
        id: '2',
        name: 'Stuart',
        content:
            'Hey! No problem, I am a fullstack software developer with 3 years experience.',
        alignment: 'left',
    },
    {
        id: '3',
        name: 'Curious Person',
        content: 'Where are you based?',
        alignment: 'right',
    },
    {
        id: '4',
        name: 'Stuart',
        content: 'I am based in Plymouth, England.',
        alignment: 'left',
        imageURL: Images.Plymouth,
    },
    {
        id: '5',
        name: 'Curious Person',
        content: 'What coding languages do you know?',
        alignment: 'right',
    },
    {
        id: '6',
        name: 'Stuart',
        content:
            'I know HTML, CSS, JavaScript, React.js, PHP, Laravel, TypeScript and Next.js.',
        alignment: 'left',
    },
    {
        id: '7',
        name: 'Curious Person',
        content: 'Do you have any pets?',
        alignment: 'right',
    },
    {
        id: '8',
        name: 'Stuart',
        content: 'Yes! I have two dogs, Luna and Albert.',
        alignment: 'left',
        imageURL: Images.Dogs,
    },
    {
        id: '9',
        name: 'Stuart',
        content: 'Thanks for taking out the time to learn more about me!',
        alignment: 'left',
        imageURL: Images.Stu,
    },
];

export function Profile() {
    const [currentMessages, setCurrentMessages] = useState<Message[]>([]);
    const [imagePath, setImagePath] = useState<string>(Images.Stu);
    const scrollAnchorRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (scrollAnchorRef.current) {
            scrollAnchorRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            });
        }
    };

    useEffect(() => {
        const currentMessagesLength = currentMessages.length;
        scrollToBottom();

        const addMessage = (message: Message) =>
            setTimeout(() => {
                setCurrentMessages([...currentMessages, message]);

                setTimeout(() => {
                    if (message.imageURL) {
                        setImagePath(message.imageURL);
                    }
                }, 2000);
            }, 3000);

        if (currentMessages.length < messages.length) {
            addMessage(messages[currentMessagesLength]);
        }
    }, [currentMessages]);

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

    const loadingElement: ReactElement = (
        <div className={classes.loadingMessage}>
            <h1>Connecting...</h1>
        </div>
    );

    const dateTimeElement: ReactElement = (
        <p className={classes.dateTime}>
            Today {new Date().toTimeString().slice(0, 5)}
        </p>
    );

    const messageLog: ReactElement = (
        <div className={classes.messageContainer}>
            {currentMessages.map((message) => {
                return (
                    <MessageBubble
                        key={message.id}
                        name={message.name}
                        content={message.content}
                        alignment={message.alignment}
                    />
                );
            })}
            <div ref={scrollAnchorRef} className={classes.scrollAnchor}></div>
        </div>
    );

    return (
        <div className={classes.root}>
            {profile}
            {currentMessages.length === 0 ? (
                loadingElement
            ) : (
                <Fragment>
                    {dateTimeElement}
                    {messageLog}
                </Fragment>
            )}
        </div>
    );
}
