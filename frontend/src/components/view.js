import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";
import { FaHeart　} from "react-icons/fa";
import styles from "../styles/modal_view.css";
import { favorite } from "../utils";
import { useState, useEffect } from "react";
import { TwitterShareButton, TwitterIcon } from "react-share";

function PostDetail({ isOpen, onClose, post }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
  }, [isOpen]);

  function handleFavorite() {
    favorite(post.id);
    setCount(count + 1);
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody>
            <img
              className={styles.picture}
              src={post.imagePath}
              alt={post.comment}
            />
          </ModalBody>
          <ModalBody>
            <Text>{post.comment}</Text>
          </ModalBody>

          <ModalCloseButton />

          <ModalFooter>
            <TwitterShareButton
              url={`https://maple-maple.web.app/${post.id}`}
              title="maple で知らない土地の良さを再発見しよう！"
              hashtags={["maple", "旅行"]}
            >
              <TwitterIcon size={35} round />
            </TwitterShareButton>

            {/* <Button colorScheme="twitter" leftIcon={<FaTwitter />}>
              share
            </Button> */}

            <Button
              variant="ghost"
              onClick={handleFavorite}
              leftIcon={<FaHeart color={"red"} />}
              ml={15}
            >
              {post.favorites + count}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PostDetail;
