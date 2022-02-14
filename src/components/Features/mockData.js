import Banner from "../../shared/Banner";
const image = { image: <Banner /> };
const mockData = [
  {
    title: "Trade crypto and stocks",
    description: [
      "Have $200 in Bitcoin and want to purchase $100 of a Tesla stock? No problem, Structure makes this easy with the tap of a button.",
    ],
    button: "Swap assets",
    ...image,
  },
  {
    title: "No market closes",
    description: [
      "Trade stocks, crypto, and other assets on Structure 24/7.¹ Markets are always open, weekends and holidays included.",
    ],
    button: "Get access now",
    ...image,
  },
  {
    title: "No trading pair limitations",
    description: [
      "Unlike Coinbase, Binance, and other crypto exchanges, any asset you own on Structure can be swapped with any crypto or stock we have available.",
      "Swap $1 or more of Bitcoin for your favorite new alt coin. Trade $1 or more of your Tesla stock for another stock or crypto coin.",
    ],
    button: "Start trading",
    ...image,
  },
  {
    title: "A better way to send and receive payments",
    description: [
      "Send payments in the asset of your choice. On Structure, all assets work like money.",
      "Received Bitcoin but really wanted Google stock? Accept payments in the asset of your choice.",
    ],
    button: "Send a payment",
    ...image,
  },
];

export default mockData;
