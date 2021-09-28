import styles from "../styles/Toppage.module.css";
import View from "../components/view";
import GoogleMap from "../components/Googlemap";

const Toppage = () => {
  return (
    <div className={styles.Toppagewrapper}>
      <GoogleMap />
    </div>
  );
};

export default Toppage;
