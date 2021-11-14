import '../App.css';
import {useState} from 'react'
import {Container, Navbar, Nav, Form} from 'react-bootstrap'
import shark from '../images/shark.svg'
import fox from '../images/fox.svg'
import { formatEther } from '@ethersproject/units'
import { ChainId, DAppProvider, useEtherBalance, useEthers } from '@usedapp/core'
import { formatUnits } from '@ethersproject/units'

function Navigation() {
    const { activateBrowserWallet, account } = useEthers()
    const etherBalance = useEtherBalance(account)

    const activate = async () => {
        await activateBrowserWallet()
      }
      const displ = () => {
          console.log(etherBalance)
      }

    return (
    
    <Navbar className="transparent navigation" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#">
                <img src={shark} alt="logo" />
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll>
            </Nav>
            {etherBalance && formatUnits(etherBalance)}
           
            {!account && <button onClick={activate}>Connect Wallet</button>}
            {account && account}
                <img src={fox} alt="logo" />
           
        </Navbar.Collapse>
    </Container>
</Navbar>

);
}

export default Navigation;



