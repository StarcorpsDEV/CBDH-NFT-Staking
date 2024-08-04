import {
  ConnectWallet,
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useContractRead,
  useOwnedNFTs,
  useTokenBalance,
  Web3Button,
} from "@thirdweb-dev/react";
import { BigNumber, ethers } from "ethers";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import NFTCard from "../../components/NFTCardRRFSB";
import {
  RRFSBnftDropContractAddress,
  RRFSBstakingContractAddress,
  RRFSBtokenContractAddress,
} from "../../consts/contractAddresses";
import styles from "../../styles/Home.module.css";

const Stake: NextPage = () => {
  const address = useAddress();
  const { contract: nftDropContract } = useContract(
    RRFSBnftDropContractAddress,
    "nft-drop"
  );
  const { contract: tokenContract } = useContract(
    RRFSBtokenContractAddress,
    "token"
  );
  const { contract, isLoading } = useContract(RRFSBstakingContractAddress);
  const { data: ownedNfts } = useOwnedNFTs(nftDropContract, address);
  const { data: tokenBalance } = useTokenBalance(tokenContract, address);
  const [claimableRewards, setClaimableRewards] = useState<BigNumber>();
  const { data: stakedTokens } = useContractRead(contract, "getStakeInfo", [
    address,
  ]);

  useEffect(() => {
    if (!contract || !address) return;

    async function loadClaimableRewards() {
      const stakeInfo = await contract?.call("getStakeInfo", [address]);
      setClaimableRewards(stakeInfo[1]);
    }

    loadClaimableRewards();
  }, [address, contract]);

  async function stakeNft(id: string) {
    if (!address) return;

    const isApproved = await nftDropContract?.isApproved(
      address,
      RRFSBstakingContractAddress
    );
    if (!isApproved) {
      await nftDropContract?.setApprovalForAll(RRFSBstakingContractAddress, true);
    }
    await contract?.call("stake", [[id]]);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {!address ? (
        <ConnectWallet 
        className={styles.btn_gradient_connect}
      />
      ) : (
        <>
         <div className={styles.relative}>
         <ConnectWallet 
          className={styles.btn_gradient_connect}
        />
          </div>
          <h3>Refined Red Fluid Tokens</h3>
          <div className={styles.tokenGrid}>
            <div className={styles.tokenItem}>
              <h4 className={styles.tokenLabel}>Staking Rewards at 50% APR.</h4>
              <p className={styles.tokenValue}>
                <b>
                  {!claimableRewards
                    ? "Loading..."
                    : ethers.utils.formatUnits(claimableRewards, 18)}
                </b>{" "}
                {tokenBalance?.symbol}
              </p>
            </div>
            <div className={styles.tokenItem}>
              <h4 className={styles.tokenLabel}>Current Balance</h4>
              <p className={styles.tokenValue}>
                <b>{tokenBalance?.displayValue}</b> {tokenBalance?.symbol}
              </p>
            </div>
          </div>

          <Web3Button
            action={(contract) => contract.call("claimRewards")}
            contractAddress={RRFSBstakingContractAddress}
            className={styles.btn_gradient_red}
            >
            Claim Rewards
          </Web3Button>

          <hr className={`${styles.divider} ${styles.spacerTop}`} />
          <h3>Staked RRFSB NFTs</h3>
          <div className={styles.nftBoxGrid}>
            {stakedTokens &&
              stakedTokens[0]?.map((stakedToken: BigNumber) => (
                <NFTCard
                  tokenId={stakedToken.toNumber()}
                  key={stakedToken.toString()}
                />
              ))}
          </div>

          <hr className={`${styles.divider} ${styles.spacerTop}`} />
          <h3>Available RRFSB NFTs</h3>
          <div className={styles.nftBoxGrid}>
            {ownedNfts?.map((nft) => (
              <div className={styles.nftBox} key={nft.metadata.id.toString()}>
                <ThirdwebNftMedia
                  metadata={nft.metadata}
                  className={styles.nftMedia}
                />
                <h3>{nft.metadata.name}</h3>
                <Web3Button
                  contractAddress={RRFSBstakingContractAddress}
                  action={() => stakeNft(nft.metadata.id)}
                  className={styles.btn_gradient_red}
                  >
                  Stake
                </Web3Button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Stake;
