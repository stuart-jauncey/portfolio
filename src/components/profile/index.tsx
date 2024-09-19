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
            'Hi! I saw your profile and was wondering if I could ask you a few questions about what you do?',
        alignment: 'right',
    },
    {
        id: '2',
        name: 'Stuart',
        content:
            'Hey, thank you for reaching out! I am a fullstack software developer with three years experience of working at a fast paced logistics marketplace start-up.',
        alignment: 'left',
    },
    {
        id: '3',
        name: 'Curious Person',
        content: "That's great! Where are you based?",
        alignment: 'right',
    },
    {
        id: '4',
        name: 'Stuart',
        content:
            'I live in the city of Plymouth, which is on the south coast of Devon, England.',
        alignment: 'left',
        imageURL: Images.Plymouth,
    },
    {
        id: '5',
        name: 'Curious Person',
        content:
            'What programming languages and technologies have you worked with?',
        alignment: 'right',
    },
    {
        id: '6',
        name: 'Stuart',
        content:
            'I have experience working with HTML, CSS, JavaScript, React.js, PHP, Laravel, TypeScript, Next.js, MongoDB and SQL.',
        alignment: 'left',
    },
    {
        id: '7',
        name: 'Stuart',
        content:
            'I am also familiar with Git practices and Agile methodologies.',
        alignment: 'left',
    },
    {
        id: '8',
        name: 'Curious Person',
        content: 'Do you have any pets?',
        alignment: 'right',
    },
    {
        id: '9',
        name: 'Stuart',
        content: 'Yes! I have two dogs, Luna and Albert.',
        alignment: 'left',
        imageURL: Images.Dogs,
    },
    {
        id: '10',
        name: 'Curious Person',
        content:
            'Thank you for your time Stuart, it was a pleasure getting to know more about you!',
        alignment: 'right',
    },
    {
        id: '11',
        name: 'Stuart',
        content:
            "You're very welcome! If you would like to know more please don' hesitate to get it touch.",
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
