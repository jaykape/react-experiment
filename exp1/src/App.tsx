import { useState } from 'react'

import Sidebar from "./components/Sidebar"
import MessageList from './components/MessageList'
import Composer from './components/Composer'
import type { Message } from "./types"

import "./App.css"


export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  function handleNewChat(): void {
    setMessages([]);
  }

  function handleSend(text: string): void {
    const newMsg: Message = {id: crypto.randomUUID(), role: 'user', text};
    const temp: Message = {id: crypto.randomUUID(), role: 'assistant', text: 'temp'};
    setMessages(prev => [...prev, newMsg, temp]);
  }

  return (
    <div className="layout">
      <Sidebar onNewChat={handleNewChat}/>

      <main className="chat">
        <MessageList messages={messages} />
        <Composer onSend={handleSend}/>
      </main>


    </div>
  )
}