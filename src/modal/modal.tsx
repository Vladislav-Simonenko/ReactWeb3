import { Box, Button, ListItem, Modal } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { AiOutlineClose } from "react-icons/ai";
import { connectors } from "../components/connectors/connectors";

export default function SelectWalletModal({ isOpen, setIsOpen }) {
  const { activate } = useWeb3React();

  const setProvider = (type: string) => {
    window.localStorage.setItem("provider", type);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal open={isOpen}>
      <>
        <Box style={styles.backgroundModal}>
          <div>Select Wallet</div>
          <div>
            <Button
              onClick={() => {
                activate(connectors.walletConnect);
                setProvider("walletConnect");
                closeModal();
              }}
            >
              <div style={{ width: "100%", justifyContent: "center" }}>
                <p>Wallet Connect</p>
              </div>
            </Button>
            <Button
              onClick={() => {
                activate(connectors.injected);
                setProvider("injected");
                closeModal();
              }}
            >
              <div style={{ width: "100%", justifyContent: "center" }}>
                <p>Metamask</p>
              </div>
            </Button>
          </div>
        </Box>
      </>
    </Modal>
  );
}

const styles = {
  backgroundModal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "30%",
    height: "30%",
    backgroundColor: "white",
    position: "fixed",
    top: "35%",
    left: "35%",
  },
};
