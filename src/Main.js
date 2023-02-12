import { useState} from 'react';
import Web3 from 'web3';
import InfuraIPFSUpload from './infura';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Buyerfront from './components/Buyerfront';
import TemporaryDrawer from './components/Sidebar';







export default function Main() {
  
  const [walletAddress, setWalletAddress] = useState('');
  async function handleConnectWalletClick() {
    const address = await getWalletAddress();
    setWalletAddress(address);
  }
  async function getWalletAddress() {
    if (window.ethereum) {
      // Modern dapp browsers
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        return accounts[0];
      } catch (error) {
        console.error(error);
      }
    } else if (window.web3) {
      // Legacy dapp browsers
      const web3 = new Web3(window.web3.currentProvider);
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    } else {
      <p>'Non-Ethereum browser detected. You should consider trying MetaMask!'</p>
    }
  }

  return (
    <div>
    
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <TemporaryDrawer/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Peer-To-Peer
          </Typography>
          {walletAddress ? (<InfuraIPFSUpload walletAddress={walletAddress} />) : (
        <Button onClick={handleConnectWalletClick}>Connect Wallet</Button>)}
        </Toolbar>
      </AppBar>
    </Box>
    

  
    </div>
    
  );
}

