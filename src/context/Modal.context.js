
import React, {useState, createContext} from 'react'


export const ModalContext = createContext()


export const ModalProvider = (props) => {
    const [info, setInfo] = useState("asdasd")
    const [isOpen, setIsOpen] = useState(false)
    return(
        <ModalContext.Provider value={{isOpen, setIsOpen, info, setInfo}}>
            {props.children}
        </ModalContext.Provider>
    )
}