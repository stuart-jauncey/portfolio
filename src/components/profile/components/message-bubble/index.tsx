import { Fragment, useEffect, useState } from 'react';
import classes from './index.module.css';

import { Message } from 'app/components/profile';

type MessageState = 'typing' | 'sent';

export function MessageBubble(props: Omit<Message, 'id'>) {
    const [messageState, setMessageState] = useState<MessageState>('typing');

    useEffect(() => {
        const typingMessage = setTimeout(() => {
            setMessageState('sent');
        }, 2000);

        return () => clearTimeout(typingMessage);
    }, []);

    const classNames = () => {
        return `${classes.root} ${classes[props.alignment]}`;
    };

    const renderMessage = () => {
        if (messageState === 'typing') {
            return (
                <div className={classes.ellipses}>
                    <p className={classes.ellipsisOne}>.</p>
                    <p className={classes.ellipsisTwo}>.</p>
                    <p className={classes.ellipsisThree}>.</p>
                </div>
            );
        }

        return (
            <Fragment>
                <p className={classes.name}>{props.name}</p>
                <p className={classes.content}>{props.content}</p>
            </Fragment>
        );
    };

    return <div className={classNames()}>{renderMessage()}</div>;
}
