import { useEffect, useRef } from "react";
import type { Message } from "../types";

type MessageListProps = {
    messages: Message[]
}

export default function MessageList({ messages }: MessageListProps) {
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({behavior: 'smooth'})
    }, [messages]);

    return (
        <div className="messages">
            {messages.map(m => (
                <div key={m.id} className={`bubble ${m.role}`}>
                    {m.text}
                </div>
            ))}
            <div ref={bottomRef} />
        </div>
    )
}