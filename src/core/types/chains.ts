import * as chain from 'viem/chains';
import type { Chain } from 'wagmi';

const HARDHAT_CHAIN_ID = 1337;
const BLAST_CHAIN_ID = 81457;
const BLAST_SEPOLIA_CHAIN_ID = 168587773;
const POLYGON_AMOY_CHAIN_ID = 80002;

const HARDHAT_OP_CHAIN_ID = 1338;

export const chainHardhat: Chain = {
  id: HARDHAT_CHAIN_ID,
  name: 'Hardhat',
  network: 'hardhat',
  nativeCurrency: {
    decimals: 18,
    name: 'Hardhat',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['http://127.0.0.1:8545'] },
    default: { http: ['http://127.0.0.1:8545'] },
  },
  testnet: true,
};

export const chainHardhatOptimism: Chain = {
  id: HARDHAT_OP_CHAIN_ID,
  name: 'Hardhat OP',
  network: 'hardhat-optimism',
  nativeCurrency: {
    decimals: 18,
    name: 'Hardhat OP',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['http://127.0.0.1:8545'] },
    default: { http: ['http://127.0.0.1:8545'] },
  },
  testnet: true,
};

export const chainBlast: Chain = {
  id: BLAST_CHAIN_ID,
  name: 'Blast',
  network: 'blast',
  rpcUrls: {
    public: { http: [process.env.BLAST_MAINNET_RPC as string] },
    default: {
      http: [process.env.BLAST_MAINNET_RPC as string],
    },
  },
  blockExplorers: {
    default: { name: 'Blastscan', url: 'https://blastscan.io/' },
  },
  nativeCurrency: {
    name: 'Blast',
    symbol: 'BLAST',
    decimals: 18,
  },
};

export const chainBlastSepolia: Chain = {
  id: BLAST_SEPOLIA_CHAIN_ID,
  name: 'Blast Sepolia',
  network: 'blast-sepolia',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://sepolia.blast.io'] },
    default: { http: ['https://sepolia.blast.io'] },
  },
  testnet: true,
};

export const chainPolygonAmoy: Chain = {
  id: POLYGON_AMOY_CHAIN_ID,
  name: 'Polygon Amoy',
  network: 'polygon-amoy',
  nativeCurrency: {
    decimals: 18,
    name: 'MATIC',
    symbol: 'MATIC',
  },
  rpcUrls: {
    public: { http: ['https://rpc-amoy.polygon.technology'] },
    default: { http: ['https://rpc-amoy.polygon.technology'] },
  },
  testnet: true,
};

export enum ChainName {
  arbitrum = 'arbitrum',
  arbitrumNova = 'arbitrum-nova',
  arbitrumSepolia = 'arbitrum-sepolia',
  avalanche = 'avalanche',
  avalancheFuji = 'avalanche-fuji',
  base = 'base',
  baseSepolia = 'base-sepolia',
  blast = 'blast',
  blastSepolia = 'blast-sepolia',
  bsc = 'bsc',
  bscTestnet = 'bsc-testnet',
  celo = 'celo',
  gnosis = 'gnosis',
  godwoken = 'godwoken',
  godwokenTestnet = 'godwoken-testnet',
  hardhat = 'hardhat',
  hardhatOptimism = 'hardhat-optimism',
  holesky = 'holesky',
  linea = 'linea',
  lineaTestnet = 'linea-testnet',
  mainnet = 'mainnet',
  manta = 'manta',
  mantaTestnet = 'manta-testnet',
  optimism = 'optimism',
  optimismSepolia = 'optimism-sepolia',
  palm = 'palm',
  palmTestnet = 'palm-testnet',
  polygon = 'polygon',
  polygonAmoy = 'polygon-amoy',
  polygonZkEvm = 'polygon-zkevm',
  polygonZkEvmTestnet = 'polygon-zkevm-testnet',
  proofOfPlay = 'proof-of-play',
  proofOfPlayTestnet = 'proof-of-play-testnet',
  rari = 'rari',
  rariTestnet = 'rari-testnet',
  scroll = 'scroll',
  scrollSepolia = 'scroll-sepolia',
  sepolia = 'sepolia',
  xai = 'xai',
  xaiSepolia = 'xai-sepolia',
  zkSync = 'zksync-era',
  zkSyncSepolia = 'zksync-era-sepolia',
  zora = 'zora',
  zoraSepolia = 'zora-sepolia',
}

export enum ChainId {
  arbitrum = chain.arbitrum.id,
  arbitrumNova = chain.arbitrumNova.id,
  arbitrumSepolia = chain.arbitrumSepolia.id,
  avalanche = chain.avalanche.id,
  avalancheFuji = chain.avalancheFuji.id,
  base = chain.base.id,
  baseSepolia = chain.baseSepolia.id,
  blast = BLAST_CHAIN_ID,
  blastSepolia = BLAST_SEPOLIA_CHAIN_ID,
  bsc = chain.bsc.id,
  bscTestnet = chain.bscTestnet.id,
  celo = chain.celo.id,
  gnosis = chain.gnosis.id,
  godwoken = 71402,
  godwokenTestnet = 71401,
  hardhat = HARDHAT_CHAIN_ID,
  hardhatOptimism = chainHardhatOptimism.id,
  holesky = chain.holesky.id,
  linea = chain.linea.id,
  lineaTestnet = chain.lineaTestnet.id,
  mainnet = chain.mainnet.id,
  manta = chain.manta.id,
  mantaTestnet = chain.mantaTestnet.id,
  optimism = chain.optimism.id,
  optimismSepolia = chain.optimismSepolia.id,
  palm = 11297108109,
  palmTestnet = 11297108099,
  polygon = chain.polygon.id,
  polygonAmoy = chainPolygonAmoy.id,
  polygonZkEvm = chain.polygonZkEvm.id,
  polygonZkEvmTestnet = chain.polygonZkEvmTestnet.id,
  proofOfPlay = 70700,
  proofOfPlayTestnet = 3860316325893729,
  rari = 1380012617,
  rariTestnet = 1918988905,
  scroll = chain.scroll.id,
  scrollSepolia = chain.scrollSepolia.id,
  sepolia = chain.sepolia.id,
  xai = 660279,
  xaiSepolia = 37714555429,
  zkSync = 324,
  zkSyncSepolia = 300,
  zora = chain.zora.id,
  zoraSepolia = chain.zoraSepolia.id,
}

export const chainNameToIdMapping: {
  [key in ChainName | 'ethereum' | 'ethereum-sepolia']: ChainId;
} = {
  ['ethereum']: ChainId.mainnet,
  [ChainName.arbitrum]: ChainId.arbitrum,
  [ChainName.arbitrumNova]: ChainId.arbitrumNova,
  [ChainName.arbitrumSepolia]: ChainId.arbitrumSepolia,
  [ChainName.avalanche]: ChainId.avalanche,
  [ChainName.avalancheFuji]: ChainId.avalancheFuji,
  [ChainName.base]: ChainId.base,
  [ChainName.bsc]: ChainId.bsc,
  [ChainName.celo]: ChainId.celo,
  [ChainName.gnosis]: ChainId.gnosis,
  [ChainName.godwoken]: ChainId.godwoken,
  [ChainName.godwokenTestnet]: ChainId.godwokenTestnet,
  [ChainName.linea]: ChainId.linea,
  [ChainName.lineaTestnet]: ChainId.lineaTestnet,
  [ChainName.manta]: ChainId.manta,
  [ChainName.mantaTestnet]: ChainId.mantaTestnet,
  [ChainName.optimism]: ChainId.optimism,
  [ChainName.palm]: ChainId.palm,
  [ChainName.palmTestnet]: ChainId.palmTestnet,
  [ChainName.polygon]: ChainId.polygon,
  [ChainName.polygonZkEvm]: ChainId.polygonZkEvm,
  [ChainName.polygonZkEvmTestnet]: ChainId.polygonZkEvmTestnet,
  [ChainName.proofOfPlay]: ChainId.proofOfPlay,
  [ChainName.proofOfPlayTestnet]: ChainId.proofOfPlayTestnet,
  [ChainName.rari]: ChainId.rari,
  [ChainName.rariTestnet]: ChainId.rariTestnet,
  [ChainName.scroll]: ChainId.scroll,
  [ChainName.scrollSepolia]: ChainId.scrollSepolia,
  [ChainName.xai]: ChainId.xai,
  [ChainName.xaiSepolia]: ChainId.xaiSepolia,
  [ChainName.zkSync]: ChainId.zkSync,
  [ChainName.zkSyncSepolia]: ChainId.zkSyncSepolia,
  [ChainName.zora]: ChainId.zora,
  [ChainName.mainnet]: ChainId.mainnet,
  [ChainName.holesky]: ChainId.holesky,
  [ChainName.hardhat]: ChainId.hardhat,
  [ChainName.hardhatOptimism]: ChainId.hardhatOptimism,
  ['ethereum-sepolia']: ChainId.sepolia,
  [ChainName.sepolia]: ChainId.sepolia,
  [ChainName.optimismSepolia]: ChainId.optimismSepolia,
  [ChainName.bscTestnet]: ChainId.bscTestnet,
  [ChainName.baseSepolia]: ChainId.baseSepolia,
  [ChainName.zoraSepolia]: ChainId.zoraSepolia,
  [ChainName.blast]: ChainId.blast,
  [ChainName.blastSepolia]: ChainId.blastSepolia,
  [ChainName.polygonAmoy]: ChainId.polygonAmoy,
};

export const chainIdToNameMapping: {
  [key in ChainId]: ChainName;
} = {
  [ChainId.arbitrum]: ChainName.arbitrum,
  [ChainId.arbitrumNova]: ChainName.arbitrumNova,
  [ChainId.arbitrumSepolia]: ChainName.arbitrumSepolia,
  [ChainId.avalanche]: ChainName.avalanche,
  [ChainId.avalancheFuji]: ChainName.avalancheFuji,
  [ChainId.base]: ChainName.base,
  [ChainId.baseSepolia]: ChainName.baseSepolia,
  [ChainId.blast]: ChainName.blast,
  [ChainId.blastSepolia]: ChainName.blastSepolia,
  [ChainId.bsc]: ChainName.bsc,
  [ChainId.bscTestnet]: ChainName.bscTestnet,
  [ChainId.celo]: ChainName.celo,
  [ChainId.gnosis]: ChainName.gnosis,
  [ChainId.godwoken]: ChainName.godwoken,
  [ChainId.godwokenTestnet]: ChainName.godwokenTestnet,
  [ChainId.hardhat]: ChainName.hardhat,
  [ChainId.hardhatOptimism]: ChainName.hardhatOptimism,
  [ChainId.holesky]: ChainName.holesky,
  [ChainId.linea]: ChainName.linea,
  [ChainId.mainnet]: ChainName.mainnet,
  [ChainId.manta]: ChainName.manta,
  [ChainId.optimism]: ChainName.optimism,
  [ChainId.optimismSepolia]: ChainName.optimismSepolia,
  [ChainId.palm]: ChainName.palm,
  [ChainId.palmTestnet]: ChainName.palmTestnet,
  [ChainId.polygon]: ChainName.polygon,
  [ChainId.polygonAmoy]: ChainName.polygonAmoy,
  [ChainId.polygonZkEvm]: ChainName.polygonZkEvm,
  [ChainId.proofOfPlay]: ChainName.proofOfPlay,
  [ChainId.proofOfPlayTestnet]: ChainName.proofOfPlayTestnet,
  [ChainId.rari]: ChainName.rari,
  [ChainId.rariTestnet]: ChainName.rariTestnet,
  [ChainId.sepolia]: ChainName.sepolia,
  [ChainId.scroll]: ChainName.scroll,
  [ChainId.xai]: ChainName.xai,
  [ChainId.xaiSepolia]: ChainName.xaiSepolia,
  [ChainId.zkSync]: ChainName.zkSync,
  [ChainId.zkSyncSepolia]: ChainName.zkSyncSepolia,
  [ChainId.zora]: ChainName.zora,
  [ChainId.zoraSepolia]: ChainName.zoraSepolia,
};

export const ChainNameDisplay = {
  [ChainId.arbitrum]: 'Arbitrum',
  [ChainId.arbitrumNova]: chain.arbitrumNova.name,
  [ChainId.arbitrumSepolia]: chain.arbitrumSepolia.name,
  [ChainId.avalanche]: 'Avalanche',
  [ChainId.avalancheFuji]: 'Avalanche Fuji',
  [ChainId.base]: 'Base',
  [ChainId.baseSepolia]: chain.baseSepolia.name,
  [ChainId.blast]: 'Blast',
  [ChainId.blastSepolia]: 'Blast Sepolia',
  [ChainId.bsc]: 'BSC',
  [ChainId.bscTestnet]: 'BSC Testnet',
  [ChainId.celo]: chain.celo.name,
  [ChainId.hardhat]: 'Hardhat',
  [ChainId.hardhatOptimism]: chainHardhatOptimism.name,
  [ChainId.holesky]: chain.holesky.name,
  [ChainId.linea]: 'Linea',
  [ChainId.mainnet]: 'Ethereum',
  [ChainId.manta]: 'Manta',
  [ChainId.optimism]: 'Optimism',
  [ChainId.optimismSepolia]: chain.optimismSepolia.name,
  [ChainId.polygon]: 'Polygon',
  [ChainId.polygonAmoy]: 'Polygon Amoy',
  [ChainId.polygonZkEvm]: chain.polygonZkEvm.name,
  [ChainId.rari]: 'RARI Chain',
  [ChainId.scroll]: chain.scroll.name,
  [ChainId.sepolia]: chain.sepolia.name,
  [ChainId.zkSync]: 'zkSync Era',
  [ChainId.zkSyncSepolia]: 'zkSync Era Sepolia',
  [ChainId.zora]: 'Zora',
  [ChainId.zoraSepolia]: 'Zora Sepolia',
} as const;
