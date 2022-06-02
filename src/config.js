const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Dragon";
const fee_recipient = "0x0Fee91dC8De1F052837A9e40C66954debF0d8383";
const seller_fee_basis_points = 100; //# Indicates a 1% seller fee.
const creator = "Mandaloka";
const description = "10000 Dragon invade the world";
const baseUri = "ipfs://QmP1vQKEios7jYUKVjWCxr4PZXbvTRzaVEpr2dt2SXhYmd";

const solanaMetadata = {
  symbol: "DGN",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  creators: [
    {
      address: "DD874MgQMcqBsBShXSDdgwgcY3GFQ6aCss27xEKqgLaV",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 10000,
    layersOrder: [
      // RABBIT
      // { name: "Background" },
      // { name: "Wing" },
      // { name: "Tail" },
      // { name: "Body" },
      // { name: "Chesthair" },
      // { name: "Clothes" },
      // { name: "Head" },
      // { name: "Eyes" },
      // { name: "Nose" },
      // { name: "Mouth" },
      // { name: "Hat" },
      // { name: "Ears" },
      // { name: "Accessories" },
      // { name: "Right Hand" },
      // { name: "Foot" },
      // { name: "Belonging" },
      // { name: "Left Hand" },
      // { name: "Mate" },

      // FLEMISH
      // { name: "Background" },
      // { name: "Fur" },
      // { name: "Eyes" },
      // { name: "Outfit" },
      // { name: "Headwear" },
      // { name: "Accessories" },
      // { name: "Mouth" },

      // DRAGON
      //{ name: "Background" },
      { name: "Body" },
      { name: "Eyes" },
      { name: "Face" },
      { name: "Accessories" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1080,
  height: 1080,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  creator,
  fee_recipient,
  seller_fee_basis_points,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
