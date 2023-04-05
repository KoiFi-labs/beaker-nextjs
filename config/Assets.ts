import { NETWORK } from './Networks'

export type Asset = {
    id: number;
    name: string;
    symbol: string;
    icon: string
}

export type AssetsConfig = {
//  eslint-disable-next-line
  [key in NETWORK]: Asset[]
}

export const assetsConfig: AssetsConfig = {
  testnet: [
    {
      id: 159703771,
      name: 'Theter USDt',
      symbol: 'USDT',
      icon: 'https://seeklogo.com/images/T/tether-usdt-logo-FA55C7F397-seeklogo.com.png'
    },
    {
      id: 159719100,
      name: 'USD Coin',
      symbol: 'USDC',
      icon: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=024'
    },
    {
      id: 0,
      name: 'Algorand',
      symbol: 'ALGO',
      icon: 'https://seeklogo.com/images/A/algorand-algo-logo-267E891DCB-seeklogo.com.png'
    },
    {
      id: 465818554,
      name: 'bgoBTC',
      symbol: 'bgoBTC',
      icon: 'https://assets.algoexplorer.io/asset-logo-465818554.image'
    },
    {
      id: 465818555,
      name: 'bgoETH',
      symbol: 'bgoETH',
      icon: 'https://assets.algoexplorer.io/asset-logo-465818554.image'
    },
    {
      id: 7897456,
      name: 'OPULUS',
      symbol: 'OPUL',
      icon: 'https://assets.algoexplorer.io/asset-logo-287867876.image'
    },
    {
      id: 465318554,
      name: 'XET',
      symbol: 'XET',
      icon: 'https://assets.algoexplorer.io/asset-logo-283820866.image'
    },
    {
      id: 465418554,
      name: 'ARCC',
      symbol: 'ARCC',
      icon: 'https://assets.algoexplorer.io/asset-logo-465818554.image'
    },
    {
      id: 465518554,
      name: 'OBA',
      symbol: 'OBA',
      icon: 'https://assets.algoexplorer.io/asset-logo-465818554.image'
    },
    {
      id: 465718554,
      name: 'PLANET',
      symbol: 'PLANET',
      icon: 'https://assets.algoexplorer.io/asset-logo-27165954.image'
    }
  ],
  mainnet: [
    {
      id: 312769,
      name: 'Theter USDt',
      symbol: 'USDT',
      icon: 'https://www.creativefabrica.com/wp-content/uploads/2021/06/14/Cryptocurrency-Tether-Usdt-Logo-Graphics-13393983-1-1-580x435.jpg'
    },
    {
      id: 31566704,
      name: 'USD Coin',
      symbol: 'USDC',
      icon: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389'
    },
    {
      id: 0,
      name: 'Algorand',
      symbol: 'ALGO',
      icon: 'https://seeklogo.com/images/A/algorand-algo-logo-267E891DCB-seeklogo.com.png'
    },
    {
      id: 465818555,
      name: 'PLANET',
      symbol: 'PLANET',
      icon: 'https://assets.algoexplorer.io/asset-logo-465818547.image'
    },
    {
      id: 465818554,
      name: 'OPUL',
      symbol: 'OPUL',
      icon: 'https://assets.algoexplorer.io/asset-logo-465818547.image'
    },
    {
      id: 465818554,
      name: 'XET',
      symbol: 'XET',
      icon: 'https://assets.algoexplorer.io/asset-logo-465818547.image'
    },
    {
      id: 465818554,
      name: 'ARCC',
      symbol: 'ARCC',
      icon: 'https://assets.algoexplorer.io/asset-logo-465818547.image'
    },
    {
      id: 465818554,
      name: 'OBA',
      symbol: 'OBA',
      icon: 'https://assets.algoexplorer.io/asset-logo-465818547.image'
    }
  ],
  sandbox: [
    {
      id: 17,
      name: 'Theter USDt',
      symbol: 'USDT',
      icon: 'https://www.creativefabrica.com/wp-content/uploads/2021/06/14/Cryptocurrency-Tether-Usdt-Logo-Graphics-13393983-1-1-580x435.jpg'
    },
    {
      id: 18,
      name: 'USD Coin',
      symbol: 'USDC',
      icon: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389'
    },
    {
      id: 0,
      name: 'Algorand',
      symbol: 'ALGO',
      icon: 'https://seeklogo.com/images/A/algorand-algo-logo-267E891DCB-seeklogo.com.png'
    },
    {
      id: 465818555,
      name: 'bgoETH',
      symbol: 'bgoETH',
      icon: 'https://assets.algoexplorer.io/asset-logo-465818547.image'
    },
    {
      id: 465818554,
      name: 'bgoBTC',
      symbol: 'bgoBTC',
      icon: 'https://assets.algoexplorer.io/asset-logo-465818547.image'
    }
  ]
}
