import {
  ThirdwebNftMedia,
  useContract,
  useNFT,
  Web3Button,
} from "@thirdweb-dev/react";
import type { FC } from "react";
import {
  RBFSBnftDropContractAddress,
  RBFSBstakingContractAddress,
} from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";

interface NFTCardProps {
  tokenId: number;
}

const NFTCard: FC<NFTCardProps> = ({ tokenId }) => {
  const { contract } = useContract(RBFSBnftDropContractAddress, "nft-drop");
  const { data: nft } = useNFT(contract, tokenId);

  return (
    <>
      {nft && (
        <div className={styles.nftBox}>
          {nft.metadata && (
            <ThirdwebNftMedia
              metadata={nft.metadata}
              className={styles.nftMedia}
            />
          )}
          <h3>{nft.metadata.name}</h3>
          <Web3Button
            action={(contract) => contract?.call("withdraw", [[nft.metadata.id]])}
            contractAddress={RBFSBstakingContractAddress}
            className={styles.btn_gradient_blue}
          >
          <div>
          Withdraw
          </div>
          </Web3Button>
        </div>
      )}
    </>
  );
};
export default NFTCard;
