
import React, {useState, createContext} from 'react'


export const ModalContext = createContext()


export const ModalProvider = (props) => {
    const [whichModalToOpen, setWhichModalToOpen] = useState("")
    const [isOpen, setIsOpen] = useState(false)

    return(
        <ModalContext.Provider value={{isOpen, setIsOpen, whichModalToOpen, setWhichModalToOpen}}>
            {props.children}
        </ModalContext.Provider>
    )
}