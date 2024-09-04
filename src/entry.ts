import "@uxland/hes-cconf-shell/dist/style.css";
import { bootstrapPlugins, initializeShell,hesCConfApiFactory } from "@uxland/hes-cconf-shell";
import { getConfigurationsAndPlugins } from "./app/get-configurations";

/**
 * Creates an instance of the HES CConf App and appends it to the body of the document.
 * @returns The created element.
 */
export const createAndAppendApp = () => {
  const app = document.createElement("hes-cconf-app");
  document.body.appendChild(app);
  const sandbox = document.querySelector("hes-cconf-app");
  return sandbox;
};

/**
 * Initializes Shell in the given element. Then bootstraps plugins.
 * @param sandbox The element where the HES CConf App will be initialized.
 * @returns A promise that resolves when the initialization is complete.
 */
export const initializeApp = async (sandbox) => {
  try {
      if (sandbox) {
        const {configurationSections, plugins} = await getConfigurationsAndPlugins();
        initializeShell(sandbox as HTMLElement,configurationSections);
        bootstrapPlugins(plugins, hesCConfApiFactory);
    }
  } catch (error) {
    console.warn(error);
  }
};

const sandbox = createAndAppendApp();
initializeApp(sandbox);