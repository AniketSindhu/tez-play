import { Tezos } from "./taquito.js";
import { BeaconWallet } from "@taquito/beacon-wallet";

const options = {
  name: "Test Dapp",
  iconUrl: "https://tezostaquito.io/img/favicon.png",
  preferredNetwork: "florencenet",
};
const wallet = new BeaconWallet(options);

const connectWallet = async () => {
  await wallet.requestPermissions({
    network: {
      type: "florencenet",
    },
  });
  console.log(await wallet.getPKH());
  Tezos.setWalletProvider(wallet);
};

export default connectWallet;
