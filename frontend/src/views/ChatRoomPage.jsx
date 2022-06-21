import React from "react"

import { io } from "socket.io-client";
import { Extra, Main, Sidebar } from '../components'

const socket = io('http://localhost:5500/'); //init socket io client

const name = 'Juicy-member-' + (Math.random() * 100).toFixed(0) + '-' + (Math.random() * 1050).toFixed(0)

export default function ChatRoom() {
    const [messages, setMessages] = React.useState([]);
    const [userName, setUserName] = React.useState(name)
    const [isSentBycurrentUser, setIsSentBycurrentUser] = React.useState(false);

    React.useEffect(() => {

        if (name) {
            socket.emit('online', {
                name: userName,
                room: 'Juice\'s Dev Team'
            });
        }
    }, [socket]);

    React.useEffect(() => {
        socket.on('message', (message) => {
            // Handle incoming message from the same user
            setMessages([...messages, message])
        })
    }, [socket, setMessages, messages])

    console.log('messages', messages)

    return (
        <div className="flex flex-row flex-wrap h-screen w-screen p-2">
            {/* User sidebar */}
            <div className='sm:w-96 w-20 '>
                <Sidebar socket={socket} />
            </div>
            {/* Main section */}
            <div className='flex-1'>
                <Main socket={socket} messages={messages} name={userName} />
            </div>
            {/* Extra */}
            <div className='lg:block hidden w-96'>
                <Extra />
            </div>
        </div>
    )
}
