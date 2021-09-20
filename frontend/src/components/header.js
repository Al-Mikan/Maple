import { Img } from "@chakra-ui/image";
import styles from "../styles/header.module.css"

const Header = () => {
    return <div className={styles.Headerwrapper} >
        <img className={styles.Headerlogo} src={`${process.env.PUBLIC_URL}/logo512.png`} alt="Logo" />
        <p className={styles.Headertitle}>GariGari</p>
    </div>;
};

export default Header;