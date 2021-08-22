import { TezosToolkit } from "@taquito/taquito";

const Tezos = new TezosToolkit("https://florencenet.smartpy.io");

const init = () =>
  new Promise((resolve, reject) => {
    Tezos.contract
      .at("KT1RKAZ18gtL5AzzP85HTqtEsRHX8VM7PB3t")
      .then(function (contract) {
        contract.storage().then(function (storage) {
          /* console.log(storage["c"][0]); */
          resolve(storage["c"][0]);
        });
      });
  });

const add = async (number1, number2) => {
  const contract = await Tezos.wallet.at(
    "KT1RKAZ18gtL5AzzP85HTqtEsRHX8VM7PB3t"
  );
  return new Promise((resolve, reject) => {
    contract.methods
      .add(number1, number2)
      .send()
      .then((op) => {
        console.log(`Hash: ${op.opHash}`);
        op.confirmation().then((result) => {
          if (result.completed) {
            console.log(`Transaction completed ${result.block.hash}`);
            resolve();
          } else {
            console.log(`Transaction failed ${result}`);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

export { init as default, Tezos, add };
