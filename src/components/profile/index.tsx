'use client';

import Image from 'next/image';
import { Fragment, ReactElement, useEffect, useRef, useState } from 'react';

import { MessageBubble } from './components/message-bubble';

import classes from './index.module.css';

export type Message = {
    id: string;
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
        content:
            'Hi Stuart! I saw your profile and was wondering if I could ask you a few questions about what you do?',
        alignment: 'right',
    },
    {
        id: '2',
        content:
            'Hey, thank you for reaching out! I am a fullstack software developer with three years experience of working at a fast paced logistics marketplace start-up.',
        alignment: 'left',
    },
    {
        id: '3',
        content: "That's great! Where are you based?",
        alignment: 'right',
    },
    {
        id: '4',
        content: 'Thanks! I live in the city of Plymouth, Devon on the south coast of England.',
        alignment: 'left',
        imageURL: Images.Plymouth,
    },
    {
        id: '5',
        content: 'Looks nice! What programming languages and technologies have you worked with?',
        alignment: 'right',
    },
    {
        id: '6',
        content:
            "It's a great place to live! I mainly have experience working with JavaScript, TypeScript, React.js, PHP and Laravel.",
        alignment: 'left',
    },
    {
        id: '7',
        content: 'I am also familiar with Git practices and Agile methodologies.',
        alignment: 'left',
    },
    {
        id: '8',
        content: 'What would you say are your greatest strengths as a developer?',
        alignment: 'right',
    },
    {
        id: '9',
        content:
            "I'd say my team collaboration, attention to detail, determination to always succeed and positive attitude make me a great asset to any team.",
        alignment: 'left',
    },
    {
        id: '10',
        content: "That's great to hear! Okay, enough about all that, what do you like to do outside of work?",
        alignment: 'right',
    },
    {
        id: '11',
        content: 'I really enjoy working on personal projects to learn new technologies and skills.',
        alignment: 'left',
    },
    {
        id: '12',
        content:
            'Away from the computer my other interests include football, snooker, tennis, video games and anything funny on TV!',
        alignment: 'left',
    },
    {
        id: '13',
        content: 'Nice! Now the most important question... do you have any pets?',
        alignment: 'right',
    },
    {
        id: '14',
        content: 'Yes I do! I have two dogs, Luna and Albert.',
        alignment: 'left',
        imageURL: Images.Dogs,
    },
    {
        id: '15',
        content: 'So cute! Thank you for your time Stuart, it was a pleasure getting to know more about you!',
        alignment: 'right',
    },
    {
        id: '16',
        content:
            "You're very welcome! If you would like to know more please don't hesitate to get in touch using the Contact tab at the top of the screen.",
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

    const loadingElement: ReactElement = (
        <div className={classes.loadingMessage}>
            <h1>Connecting...</h1>
        </div>
    );

    const dateTimeElement: ReactElement = (
        <p className={classes.dateTime}>Today {new Date().toTimeString().slice(0, 5)}</p>
    );

    const messageLog: ReactElement = (
        <div className={classes.messageContainer}>
            {currentMessages.map((message) => {
                return <MessageBubble key={message.id} content={message.content} alignment={message.alignment} />;
            })}
            <div ref={scrollAnchorRef} className={classes.scrollAnchor}></div>
        </div>
    );

    return (
        <div className={classes.root}>
            <div className={classes.profile}>
                <div className={classes.imageContainer}>
                    <Image src={imagePath} alt="Profile Picture" fill sizes="100%" priority></Image>
                </div>
                <div className={classes.titleContainer}>
                    <h1>Stuart Jauncey</h1>
                    <h2>Fullstack Software Developer</h2>
                </div>
            </div>
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
