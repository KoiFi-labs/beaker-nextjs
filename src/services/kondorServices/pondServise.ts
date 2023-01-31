import { contract } from './contract'
import algosdk  from "algosdk";
import { config } from '../../../config'
import { Algodv2 } from 'algosdk/dist/types/main';
const client = new algosdk.Algodv2(config.network.token, config.network.server, config.network.port);


export const swap = async (addr: string, sk: Uint8Array, amount: number, assetA: number, assetB: number) => {
        const sp = await client.getTransactionParams().do();
        const abiContract = new algosdk.ABIContract(contract);

        const commonParams = {
            appID: config.appId,
            sender: addr,
            suggestedParams: sp,
            signer: algosdk.makeBasicAccountTransactionSigner({addr, sk}),
            };

            const comp = new algosdk.AtomicTransactionComposer();

            const assetTransferTxn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
                from: addr,
                to: config.appAddress,
                amount,
                assetIndex: assetA,
                suggestedParams: {...sp, fee: 3000, flatFee: true}, //todo: validate fee
            })

            comp.addMethodCall({
                method: abiContract.getMethodByName("swap"),
                methodArgs: [
                  {
                    txn: assetTransferTxn,
                    signer: algosdk.makeBasicAccountTransactionSigner({addr, sk}),
                  },
                    assetB,
                    assetA,
                ],
                ...commonParams,
              });
            const results = await comp.execute(client, 2);
            return {
                result: results.methodResults[0].returnValue,
                txId: results.methodResults[0].txID,
            };
    }


  export const mint = async (addr: string, sk: Uint8Array, amount: number, assetA: number, assetB: number) => {

      const sp = await client.getTransactionParams().do();
      const abiContract = new algosdk.ABIContract(contract);

      const commonParams = {
          appID: config.appId,
          sender: addr,
          suggestedParams: sp,
          signer: algosdk.makeBasicAccountTransactionSigner({addr, sk}),
          };

          const comp = new algosdk.AtomicTransactionComposer();

          console.log("Creating asset transfer transaction")
          const assetTransferTxnA = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
              from: addr,
              to: config.appAddress,
              amount: 1000,
              assetIndex: assetA,
              suggestedParams: {...sp, fee: 3000}, //todo: validate fee
          })

          const assetTransferTxnB = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
            from: addr,
            to: config.appAddress,
            amount: 1000,
            assetIndex: assetB,
            suggestedParams: {...sp, fee: 3000}, //todo: validate fee
        })
        console.log("Created asset transfer transaction", assetTransferTxnA, assetTransferTxnB)

          comp.addMethodCall({
              method: abiContract.getMethodByName("mint"),
              methodArgs: [
                {
                  txn: assetTransferTxnA,
                  signer: algosdk.makeBasicAccountTransactionSigner({addr, sk}),
                },
                {
                  txn: assetTransferTxnB,
                  signer: algosdk.makeBasicAccountTransactionSigner({addr, sk}),
                },
                  assetA,
                  assetB,
                  127
              ],
              ...commonParams,
            });
          const results = await comp.execute(client, 2);
          return {
              result: results.methodResults[0].returnValue,
              txId: results.methodResults[0].txID,
          };
  }




