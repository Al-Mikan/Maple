import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Lorem,
  Text
} from "@chakra-ui/react";
import { FaHeart } from 'react-icons/fa'
import styles from "../styles/modal_view.css";
import picture from "../assets/star5.jpg";

function Model() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Pin</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody>
            <img className={styles.picture} src={picture} />
            <div className={styles.modal_text}></div>
          </ModalBody>
          <ModalBody>
            <Text>テキスト</Text>
          </ModalBody>

          <ModalCloseButton />

          <ModalFooter>
            <Button variant="ghost"><FaHeart /> 10</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Model;
