import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import {RFLBa_URL} from "../../consts/contractAddresses";
const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
    <embed src={RFLBa_URL}
    width='100%'
    height='700px'
    style={{border:"1px", borderRadius:"12px"}}
      ></embed>
    </div>
  );
};

export default Mint;
