import { useEffect, useState } from 'react';
import classes from './index.module.css';

import { Message } from 'app/components/profile';

type MessageState = 'typing' | 'sent';

type MessageBubbleProps = Omit<Message, 'id'> & {
    scrollToBottom: () => void;
};

export function MessageBubble(props: MessageBubbleProps) {
    const { scrollToBottom } = props;
    const [messageState, setMessageState] = useState<MessageState>('typing');

    useEffect(() => {
        const pendingMessage = setTimeout(() => {
            setMessageState('sent');

            // Scrolls the message container once a message is 'sent'
            setTimeout(() => {
                scrollToBottom();
            }, 1);
        }, 2000);

        return () => clearTimeout(pendingMessage);
    }, [scrollToBottom]);

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

        return <p className={classes.content}>{props.content}</p>;
    };

    return <div className={classNames()}>{renderMessage()}</div>;
}
