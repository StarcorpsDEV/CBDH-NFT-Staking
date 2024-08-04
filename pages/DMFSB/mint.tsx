import { Web3Button, ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { DMFSBnftDropContractAddress } from "../../consts/contractAddresses";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

const Mint: NextPage = (GALLERY_URL) => {
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
            src={"/DMFSB_featured_image.webp"}
            alt="CBDH"
            className="mb-12"
            width="0"
            height="0"
            style={{width:"100%",height:"100%", border: '1px solid #f4aa11', borderRadius: '12px'}}
          />
      </div>
      <div className={styles.tokenItem}>
        <Web3Button
        className={styles.btn_gradient_silver}
        theme="dark"
        contractAddress={DMFSBnftDropContractAddress}
        action={(contract) => contract.erc721.claim(1)}
        onSuccess={() => {
          alert("NFT Claimed!");
          router.push("/DMFSB/stake");
        }}
        onError={(error) => {
          alert(error);
        }}
      >
        <a>
        <a style={{margin:"4px"}}>
        Mint for 105.27  
        </a>
         <Image src="/erc20-icons/usdc.png" alt="usdc" width={20} height={20} style={{  margin: "0",  position: "absolute",
  }} />         
        <a style={{marginLeft:"24px"}}>
        USDC
        </a>
        </a>
      </Web3Button >
    </div>
    </div>

  );
};

export default Mint;
