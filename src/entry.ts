import "@uxland/hes-cconf-shell/dist/style.css";
import { bootstrapPlugins, initializeShell,hesCConfApiFactory } from "@uxland/hes-cconf-shell";
import { getConfigurationsAndPlugins } from "./app/get-configurations";

export const createAndAppendSandboxApp = () => {
  const app = document.createElement("hes-cconf-app");
  document.body.appendChild(app);
  const sandbox = document.querySelector("hes-cconf-app");
  return sandbox;
};

export const initializeSandboxApp = async (sandbox) => {
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

const sandbox = createAndAppendSandboxApp();
initializeSandboxApp(sandbox);