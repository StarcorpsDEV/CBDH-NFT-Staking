import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
const router = useRouter();
  return (
    <div className={styles.container}>
    <div className={styles.color_black_trans}>
      {/* Title */}
      <h1 className={styles.h1}>Collectif of the Badgers Diamond Hands NFTs Staking Contracts</h1>

      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("https://badgerscollectif.com")}
        >
          {/* Mint a new NFT */}
          <img src="/cbdh_logo.webp" alt="token"  
					style={{width:"20%", border: '1px solid #f4aa11', borderRadius: '12px'}}
          />          
          <h2 className={styles.selectBoxTitle}>The Badgers Collectif Gallery</h2>
          <span className={styles.selectBoxDescription}>
            <p className={styles.color_black_trans}>
            For a better user experience use the gallery website.
            </p>
          </span>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("https://marketplace.badgerscollectif.com")}
        >
          {/* Staking an NFT */}
          <img src="/erc20-icons/dmf.png" alt="token"  
					style={{width:"20%", border: '1px solid #f4aa11', borderRadius: '12px'}}
          />          
          <h2 className={styles.selectBoxTitle}>NFTs Marketplace</h2>
          <span className={styles.selectBoxDescriptio}>
          <p className={styles.color_black_trans}>
           Join the Badgers Collectif Marketplace to trade your NFTs.
          </p>
          </span>
        </div>
      </div>

      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/RPFSB/mint")}
        >
          {/* Mint a new NFT */}
          <img src="/RPFSB_featured_image_small.webp" alt="token"  
					style={{width:"25%", border: '1px solid #f4aa11', borderRadius: '12px'}}
          />          <h2 className={styles.selectBoxTitle}>Mint a new RPFSB</h2>
          <span className={styles.selectBoxDescription}>
            <p className={styles.color_black_trans}>
            Use the NFT Drop Contract to claim an RPFSB NFT from the collection.
            </p>
          </span>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/RPFSB/stake")}
        >
          {/* Staking an NFT */}
          <img src="/RPFSB_banner_image.webp" alt="token"  
					style={{width:"100%", border: '1px solid #f4aa11', borderRadius: '12px'}}
          />          <h2 className={styles.selectBoxTitle}>Stake Your NFTs RPFSB</h2>
          <span className={styles.selectBoxDescriptio}>
          <p className={styles.color_black_trans}>
            Use the staking contract to stake your RPFSB NFTs and earn RPF tokens.
          </p>
          </span>
        </div>
      </div>


      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/RGFSB/mint")}
        >
          {/* Mint a new NFT */}
          <img src="/RGFSB_featured_image_small.webp" alt="token"  
					style={{width:"25%", border: '1px solid #f4aa11', borderRadius: '12px'}}
          />          <h2 className={styles.selectBoxTitle}>Mint a new RGFSB</h2>
          <span className={styles.selectBoxDescription}>
            <p className={styles.color_black_trans}>
            Use the NFT Drop Contract to claim an RGFSB NFT from the collection.
            </p>
          </span>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/RGFSB/stake")}
        >
          {/* Staking an NFT */}
          <img src="/RGFSB_banner_image.webp" alt="token"  
					style={{width:"100%", border: '1px solid #f4aa11', borderRadius: '12px'}}
          />          <h2 className={styles.selectBoxTitle}>Stake Your NFTs RGFSB</h2>
          <span className={styles.selectBoxDescription}>
          <p className={styles.color_black_trans}>
            Use the staking contract to stake your RGFSB NFTs and earn RGF tokens.
          </p>
          </span>
        </div>
      </div>

      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/RBFSB/mint")}
        >
          {/* Mint a new NFT */}
          <img src="/RBFSB_featured_image_small.webp" alt="token"  
					style={{width:"25%", border: '1px solid #f4aa11', borderRadius: '12px'}}
          />          <h2 className={styles.selectBoxTitle}>Mint a new RBFSB</h2>
          <span className={styles.selectBoxDescription}>
            <p className={styles.color_black_trans}>
            Use the NFT Drop Contract to claim an RBFSB NFT from the collection.
            </p>
          </span>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/RBFSB/stake")}
        >
          {/* Staking an NFT */}
          <img src="/RBFSB_banner_image.webp" alt="token"  
					style={{width:"100%", border: '1px solid #f4aa11', borderRadius: '12px'}}
          />          <h2 className={styles.selectBoxTitle}>Stake Your NFTs RBFSB</h2>
          <span className={styles.selectBoxDescription}>
          <p className={styles.color_black_trans}>
            Use the staking contract to stake your RBFSB NFTs and earn RBF tokens.
          </p>
          </span>
        </div>
      </div>


      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/RRFSB/mint")}
        >
          {/* Mint a new NFT */}
          <img src="/RRFSB_featured_image_small.webp" alt="token"  
					style={{width:"25%", border: '1px solid #f4aa11', borderRadius: '12px'}}
          />          <h2 className={styles.selectBoxTitle}>Mint a new RRFSB</h2>
          <span className={styles.selectBoxDescription}>
            <p className={styles.color_black_trans}>
            Use the NFT Drop Contract to claim an RRFSB NFT from the collection.
            </p>
          </span>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/RRFSB/stake")}
        >
          {/* Staking an NFT */}
          <img src="/RRFSB_banner_image.webp" alt="token"  
					style={{width:"100%", border: '1px solid #f4aa11', borderRadius: '12px'}}
          />          
          <h2 className={styles.selectBoxTitle}>Stake Your NFTs RRFSB</h2>
          <span className={styles.selectBoxDescription}>
          <p className={styles.color_black_trans}>
            Use the staking contract to stake your RRFSB NFTs and earn RRF tokens.
          </p>
          </span>
        </div>
      </div>

      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/DMFSB/mint")}
        >
          {/* Mint a new NFT */}
          <img src="/DMFSB_featured_image_small.webp" alt="token"  
					style={{width:"25%", border: '1px solid #f4aa11', borderRadius: '12px'}}
          />
          <h2 className={styles.selectBoxTitle}>Mint a new DMFSB</h2>
          <span className={styles.selectBoxDescription}>
            <p className={styles.color_black_trans}>
            Use the NFT Drop Contract to claim an DMFSB NFT from the collection.
            </p>
          </span>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/DMFSB/stake")}
        >
          {/* Staking an NFT */}
          <img src="/DMFSB_banner_image.webp" alt="token"  
					style={{width:"100%", border: '1px solid #f4aa11', borderRadius: '12px'}}
          />          <h2 className={styles.selectBoxTitle}>Stake Your DMFSB NFTs</h2>
          <span className={styles.selectBoxDescription}>
          <p className={styles.color_black_trans}>
            Use the staking contract to stake your DMFSB NFTs and earn DMF tokens.
          </p>
          </span>
        </div>
      </div>

      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/SMFSB/mint")}
        >
          {/* Mint a new NFT */}
          <img src="/SMFSB_featured_image_small.webp" alt="token"  
					style={{width:"25%", border: '1px solid #f4aa11', borderRadius: '12px'}}
          />
          <h2 className={styles.selectBoxTitle}>Mint a new SMFSB</h2>
          <span className={styles.selectBoxDescription}>
            <p className={styles.color_black_trans}>
            Use the NFT Drop Contract to claim an SMFSB NFT from the collection.
            </p>
          </span>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/SMFSB/stake")}
        >
          {/* Staking an NFT */}
          <img src="/SMFSB_banner_image.webp" alt="token"  
					style={{width:"100%", border: '1px solid #f4aa11', borderRadius: '12px'}}
          />
          <h2 className={styles.selectBoxTitle}>Stake Your SMFSB NFTs</h2>
          <span className={styles.selectBoxDescription}>
          <p className={styles.color_black_trans}>
            Use the staking contract to stake your SMFSB NFTs and earn SMF tokens.
          </p>
          </span>
        </div>
      </div>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/RFLBa/mint")}
        >
          {/* Mint a new NFT */}
          <img src="https://nftstorage.link/ipfs/bafybeiay4hmhtxoie47v4xxjk4z6gnfov4qwebuztkr64jihlip3ww7al4/logo.gif" alt="token"  
            style={{width:"25%", border: '1px solid #f4aa11', borderRadius: '12px'}}
           />
          <h2 className={styles.selectBoxTitle}>Mint a new RFLBa</h2>
          <span className={styles.selectBoxDescription}>
            <p className={styles.color_black_trans}>
            Use the NFT Drop Contract to claim an RFLBa NFT from the collection.
            </p>
          </span>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push("/RFLBa/stake")}
        >
          {/* Staking an NFT */}
          <img src="https://bafybeiay4hmhtxoie47v4xxjk4z6gnfov4qwebuztkr64jihlip3ww7al4.ipfs.nftstorage.link/banner.webp" alt="token"  
					style={{width:"100%", border: '1px solid #f4aa11', borderRadius: '12px'}}
          />
          <h2 className={styles.selectBoxTitle}>Stake Your NFTs RFLBa</h2>
          <span className={styles.selectBoxDescription}>
          <p className={styles.color_black_trans}>
            Use the staking contract to stake your RFLBa NFTs and earn SMF tokens.
          </p>
          </span>
        </div>
      </div>

    </div>
    </div>
  );
};

export default Home;
