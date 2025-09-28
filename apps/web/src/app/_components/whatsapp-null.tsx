import { useState } from "react"

export const WhatsappNull = () => {
    const [messages, setMessages] = useState<string[]>([])
    const [input, setInput] = useState('')


    return (
        <div>
            {
                messages.map((message) => (
                    <div key={message}>
                        {message}
                    </div>
                ))
            }

            <input 
                type="text"
                onChange={(event) => {
                    setInput(event.currentTarget.value)
                }}
                value={input}
            />
            <input type="button" onClick={() => {
                setMessages([...messages, input])
            }} />
        </div>
    )

}