import { ethers } from 'ethers'
import { useState, useEffect } from 'react'
import Upload from "./Components/Upload.json"
import Modal from './Components/Modal'
import FileUpload from "./Components/FileUpload"

function App() {
  const [account, setAcount] = useState("")
  const [contract, setContract] = useState(null)
  const [provider, setProvider] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {

        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        })

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        })


        await provider.send("eth_requestAccounts", [])
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAcount(address);
        let contractAddress = "0xa18F8F29E4F8FB479d352F884876Ca16573c6fc9";

        const contract = new ethers.Contract(
          contractAddress, Upload.abi, signer

        )
        console.log(contract);
        setContract(contract);
        setProvider(provider)
      }
      else {
        alert("metamask is not available")
      }
    }

    provider && loadProvider()
  }, [])

  return (
    <>
      <div>
        <h1>
          Google Drive 3.0
        </h1>
        <p>
          Account :{account.slice(0, 12) ? account.slice(0, 12) : "Not connected , Reload the page..."}
        </p>
      </div>
      <Modal />
      <FileUpload account={account} provider={provider} contract={contract} />
    </>
  );
}

export default App;
