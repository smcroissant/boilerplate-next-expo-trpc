'use client';


import { useState } from "react"

export const WhatsappNull = () => {

    const [messages, setMessages] = useState<string[]>([])
    const [input, setInput] = useState('')
    function encliquant() {
        setMessages([...messages, input])
        setInput("")

    }

    return (
        <div className="">
            <div className="bg-blue-100">
                {
                    messages.map((message) => (
                        <div key={message}>
                            {message}
                        </div>
                    ))
                }
            
            </div>

            <input 
                type="text"
                onChange={(event) => {
                    setInput(event.currentTarget.value)
                }}
                value={input}
            />
            <input type="button" onClick={encliquant}
                
        
            value={"Envoyer"}
            />
        </div>
    )

}