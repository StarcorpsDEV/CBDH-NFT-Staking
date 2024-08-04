import { Web3Button, ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { RPFSBnftDropContractAddress } from "../../consts/contractAddresses";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
        <div className={styles.relative}>
        <ConnectWallet 
          className={styles.btn_gradient_connect}
        />
        </div>
        <div className={styles.w33p}>
        <Image
            src={"/RPFSB_featured_image.webp"}
            alt="CBDH"
            className="mb-12"
            width="0"
            height="0"
            style={{width:"100%",height:"100%", border: '1px solid #f4aa11', borderRadius: '12px'}}
          />
      </div>
      <div className={styles.tokenItem}>
        <Web3Button
        className={styles.btn_gradient_purple}
        theme="dark"
        contractAddress={RPFSBnftDropContractAddress}
        action={(contract) => contract.erc721.claim(1)}
        onSuccess={() => {
          alert("NFT Claimed!");
          router.push("/RPFSB/stake");
        }}
        onError={(error) => {
          alert(error);
        }}
      >
        <a>
        <a style={{margin:"4px"}}>
        Mint for 105.27 
        </a>
         <Image src="/erc20-icons/dmf.png" alt="usdc" width={20} height={20} style={{  margin: "0",  position: "absolute",
        }} />
        </a>
        <a style={{marginLeft:"24px"}}>
        DMF
        </a>
      </Web3Button >
    </div>
    </div>
  );
};

export default Mint;
