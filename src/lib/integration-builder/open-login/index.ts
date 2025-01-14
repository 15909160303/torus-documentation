import { IntegrationBuilder, IntegrationStep } from "../interfaces";
import STEPS from "./steps";

const AVAILABLE_EXAMPLES = {
  Ethereum: {
    langs: ["HTML"],
  },
  Solana: {
    langs: ["React"],
  },
  Polygon: {
    langs: ["React"],
  },
  "Binance Smart Chain": {
    langs: ["React"],
  },
  Avalanche: {
    langs: ["React"],
  },
  ZkSync: {
    langs: ["React"],
  },
  Arbitrum: {
    langs: ["React"],
  },
};

const AVAILABLE_LANGS = {
  React: {
    examples: [
      "Solana",
      "Polygon",
      "Binance Smart Chain",
      "Avalanche",
      "ZkSync",
      "Arbitrum",
    ],
  },
  HTML: {
    examples: ["Ethereum"],
  },
};

const openLoginIntegrationBuilder: IntegrationBuilder = {
  // Name of the integration builder
  displayName: "OpenLogin",

  // Options that will be displayed in the UI for selection
  options: {
    chain: {
      displayName: "Blockchain",
      default: "Ethereum",
      choices: [
        "Ethereum",
        "Solana",
        "Polygon",
        "Binance Smart Chain",
        "Avalanche",
        "ZkSync",
        "Arbitrum",
      ],
    },
    // Hide Language/Framework for now
    // lang: {
    //   displayName: "Language/Framework",
    //   default: "HTML",
    //   choices: ["HTML", "React"],
    // },
  },

  // Return available options when user selects a value,
  // .e.g there're integrations with Conflux for React and Vue, but not for Android
  getAvailableOptions(optionKey, optionValue) {
    console.log("options", optionKey, optionValue);
    const availableOptions: Record<string, string>[] = [];
    switch (optionKey) {
      case "chain":
        const availableChainLangs = AVAILABLE_EXAMPLES[optionValue].langs;
        // Hide Language/Framework for now
        // for(let i = 0; i < availableChainLangs.length; i++) {
        //   let lang = availableChainLangs[i];
        //   availableOptions.push({ lang });
        // }
        // break;
        return [];
      // Hide Language/Framework for now
      // case "lang":
      //   const availableLangExamples = AVAILABLE_LANGS[optionValue].examples;
      //   for(let i = 0; i < availableLangExamples.length; i++) {
      //     let example = availableLangExamples[i];
      //     availableOptions.push({ chain: example });
      //   }
      //   break;
      default:
        throw new Error(`Unknown option key ${JSON.stringify(optionKey)}`);
    }
    return availableOptions;
  },

  // Build integrations based on input values
  build(values: Record<string, string>) {
    const filenames: string[] = [];
    const steps: IntegrationStep[] = [];
    const { chain, lang } = values;
    if (chain === "Solana" /*&& lang === "React"*/) {
      filenames.push("solana/login.js");
      // Add markdown steps
      steps.push(
        {
          ...STEPS.installSDK,
          pointer: { filename: "solana/login.js", range: "2" },
        },
        {
          ...STEPS.registerApp,
        },
        {
          ...STEPS.connectSolana,
          pointer: { filename: "solana/login.js", range: "10-17" },
        },
        {
          ...STEPS.instantiateSDK,
          pointer: { filename: "solana/login.js", range: "29-33" },
        },
        {
          ...STEPS.reactLogin,
          pointer: { filename: "solana/login.js", range: "60-74" },
        },
        {
          ...STEPS.generateSolanaKey,
          pointer: { filename: "solana/login.js", range: "46-49" },
        },
        {
          ...STEPS.useSolanaPrivateKey,
          pointer: { filename: "solana/login.js", range: "51-58" },
        },
        {
          ...STEPS.reactLogout,
          pointer: { filename: "solana/login.js", range: "76-80" },
        }
      );
    } else if (chain === "Polygon" /*&& lang === "React"*/) {
      filenames.push("polygon/login.js");
      // Add markdown steps
      steps.push(
        {
          ...STEPS.installSDK,
          pointer: { filename: "polygon/login.js", range: "2" },
        },
        {
          ...STEPS.registerApp,
        },
        {
          ...STEPS.connectPolygon,
          pointer: { filename: "polygon/login.js", range: "12-20" },
        },
        {
          ...STEPS.instantiateSDK,
          pointer: { filename: "polygon/login.js", range: "62-66" },
        },
        {
          ...STEPS.reactLogin,
          pointer: { filename: "polygon/login.js", range: "76-91" },
        },
        {
          ...STEPS.usePolygonPrivateKey,
          pointer: { filename: "polygon/login.js", range: "40-55" },
        },
        {
          ...STEPS.reactLogout,
          pointer: { filename: "polygon/login.js", range: "93-97" },
        }
      );
    } else if (chain === "Binance Smart Chain" /*&& lang === "React"*/) {
      filenames.push("binance/login.js");
      // Add markdown steps
      steps.push(
        {
          ...STEPS.installSDK,
          pointer: { filename: "binance/login.js", range: "2" },
        },
        {
          ...STEPS.registerApp,
        },
        {
          ...STEPS.connectBinance,
          pointer: { filename: "binance/login.js", range: "6" },
        },
        {
          ...STEPS.instantiateSDK,
          pointer: { filename: "binance/login.js", range: "15-19" },
        },
        {
          ...STEPS.reactLogin,
          pointer: { filename: "binance/login.js", range: "38-52" },
        },
        {
          ...STEPS.useBinancePrivateKey,
          pointer: { filename: "binance/login.js", range: "31-36" },
        },
        {
          ...STEPS.reactLogout,
          pointer: { filename: "binance/login.js", range: "54-58" },
        }
      );
    } else if (chain === "Avalanche" /*&& lang === "React"*/) {
      filenames.push("avalanche/login.js");
      // Add markdown steps
      steps.push(
        {
          ...STEPS.installSDK,
          pointer: { filename: "avalanche/login.js", range: "2" },
        },
        {
          ...STEPS.registerApp,
        },
        {
          ...STEPS.connectAvalanche,
          pointer: { filename: "avalanche/login.js", range: "7-8" },
        },
        {
          ...STEPS.instantiateSDK,
          pointer: { filename: "avalanche/login.js", range: "17-21" },
        },
        {
          ...STEPS.reactLogin,
          pointer: { filename: "avalanche/login.js", range: "47-61" },
        },
        {
          ...STEPS.useAvaxPrivateKey,
          pointer: { filename: "avalanche/login.js", range: "33-45" },
        },
        {
          ...STEPS.reactLogout,
          pointer: { filename: "avalanche/login.js", range: "63-67" },
        }
      );
    } else if (chain === "ZkSync" /*&& lang === "React"*/) {
      filenames.push("zkSync/login.js");
      // Add markdown steps
      steps.push(
        {
          ...STEPS.installSDK,
          pointer: { filename: "zkSync/login.js", range: "2" },
        },
        {
          ...STEPS.registerApp,
        },
        {
          ...STEPS.connectZkSync,
          pointer: { filename: "zkSync/login.js", range: "10-40" },
        },
        {
          ...STEPS.instantiateSDK,
          pointer: { filename: "zkSync/login.js", range: "52-57" },
        },
        {
          ...STEPS.reactLogin,
          pointer: { filename: "zkSync/login.js", range: "69-82" },
        },
        {
          ...STEPS.importZkSyncWallets,
          pointer: { filename: "zkSync/login.js", range: "84-94" },
        },
        {
          ...STEPS.getTestEthRinkebyZkSync,
          pointer: { filename: "zkSync/login.js" },
        },
        {
          ...STEPS.unlockZkSyncWallet,
          pointer: { filename: "zkSync/login.js", range: "124-148" },
        },
        {
          ...STEPS.depositWithdrawZkSync,
          pointer: { filename: "zkSync/login.js", range: "149-186" },
        },
        {
          ...STEPS.reactLogout,
          pointer: { filename: "zkSync/login.js", range: "201-205" },
        }
      );
    } else if (chain === "Arbitrum" /*&& lang === "React"*/) {
      filenames.push("arbitrum/login.js");
      filenames.push("arbitrum/accountInfo.js");

      // Add markdown steps
      steps.push(
        {
          ...STEPS.installSDK,
          pointer: { filename: "arbitrum/login.js", range: "2" },
        },
        {
          ...STEPS.registerApp,
        },
        {
          ...STEPS.connectArbitrum,
          pointer: { filename: "arbitrum/login.js", range: "9-17" },
        },
        {
          ...STEPS.instantiateSDK,
          pointer: { filename: "arbitrum/login.js", range: "27-31" },
        },
        {
          ...STEPS.reactLogin,
          pointer: { filename: "arbitrum/login.js", range: "42-54" },
        },
        {
          ...STEPS.importArbitrumWallets,
          pointer: { filename: "arbitrum/login.js", range: "56-61" },
        },
        {
          ...STEPS.getTestEthKovan,
          pointer: { filename: "arbitrum/login.js" },
        },
        {
          ...STEPS.depositWithdrawArbitrum,
          pointer: { filename: "arbitrum/accountInfo.js", range: "27-51" },
        },
        {
          ...STEPS.reactLogout,
          pointer: { filename: "arbitrum/login.js", range: "201-205" },
        }
      );
    } else if (chain === "Ethereum" /*&& lang === "HTML"*/) {
      filenames.push("web/index.html"); // Show code files in browsers

      // Add markdown steps
      steps.push(
        {
          ...STEPS.installSDK,
          pointer: { filename: "web/index.html", range: "20" },
        },
        {
          ...STEPS.registerApp,
          pointer: { filename: "web/index.html", range: "27-31" },
        },
        {
          ...STEPS.instantiateSDK,
          pointer: { filename: "web/index.html", range: "27-31" },
        },
        {
          ...STEPS.retrievePrivateKey,
          pointer: { filename: "web/index.html", range: "33-43" },
        },
        {
          ...STEPS.triggerLogin,
          pointer: { filename: "web/index.html", range: "55-56" },
        },
        {
          ...STEPS.connectWithWeb3,
          pointer: { filename: "web/index.html", range: "46-52" },
        },
        {
          ...STEPS.logout,
          pointer: { filename: "web/index.html", range: "59" },
        }
      );
    }

    return {
      // Use files in `open-login` folders instead of root folder
      filenames: filenames.map((it) => `open-login/${it}`),
      steps: steps.map((it) => ({
        ...it,
        pointer: it.pointer
          ? { ...it.pointer, filename: `open-login/${it.pointer.filename}` }
          : undefined,
      })),
    };
  },
};

export default openLoginIntegrationBuilder;
