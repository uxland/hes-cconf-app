import {IHESCConfSection,PluginDefinition} from "@uxland/hes-cconf-shell";
import { configurationsMock } from "./configurations-mock";


  /**
   * Given an array of configuration sections, it will return an array of PluginDefinition
   * @param configurationSections an array of configuration sections
   * @returns an array of PluginDefinition
   */
const buildHarmonixPlugins = (configurationSections: IHESCConfSection[]) => { 
  const plugins = configurationSections
    .map((c) => c.plugins)
    .flat()
    .map((p) => {
      return {
        pluginId: p.pluginId,
        importer: ()=>import(p.pluginUrl),
      };
    });
  return plugins;
}

  /**
   * Fetches the configuration sections and builds the plugins.
   * @returns A promise that resolves with an object containing the configuration sections and the plugins.
   */
export const getConfigurationsAndPlugins = async () => {
  const configurationSections = await fetchConfigurations();
  const plugins = buildHarmonixPlugins(configurationSections) as PluginDefinition[];
  return {configurationSections, plugins};
};


  /**
   * Fetches the configuration sections from the server. Right now, it only returns a mock.
   * @returns A promise that resolves with the configuration sections.
   */
export const fetchConfigurations = () => {
    return Promise.resolve(configurationsMock);
}
