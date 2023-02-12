import contract from 'truffle-contract';
import MyContract from './contracts/MyContract.json';

const myContract = contract(MyContract);
myContract.setProvider(web3.currentProvider);

async function readFromContract() {
  const instance = await myContract.deployed();
  const result = await instance.read.call();
  console.log(result);
}
