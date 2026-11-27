import { useState } from 'react'
import type { SyntheticEvent } from 'react'

type ComposerProps = {
    onSend: (text: string) => void;
}

export default function Composer({ onSend }: ComposerProps) {
    const [input, setInput] = useState('');

    function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        const text = input.trim();
        if (!text) return;
        onSend(text);
        setInput('');
    }

    return (
        <form className='composer' onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Message..."
            />
            <button type="submit">Send</button>
        </form>
    )

}
