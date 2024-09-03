import {IHESCConfSection,PluginDefinition} from "@uxland/hes-cconf-shell";

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

export const getConfigurationsAndPlugins = async () => {
  const configurationSections = await fetchConfigurations();
  const plugins = buildHarmonixPlugins(configurationSections) as PluginDefinition[];
  return {configurationSections, plugins};
};


export const fetchConfigurations = () => {
    return Promise.resolve([
        {
            id: "notifications",
            name: "Notificacions",
            description: "Configuració i manteniment de notificacions i alertes",
            icon: "notification",
            plugins: [
                {
                    pluginId: "patient-notifications",
                    pluginUrl: "",
                name: "Notificacions del pacient",
                    category: ["user", "admin"]
                },
                {
                    pluginId: "professional-notifications",
                    pluginUrl: "",
                  name: "Notificacions del professional",
                    category: ["user", "admin"]
                },
            ],
        },
        {
            id: "user-management",
            name: "Gestió d'usuari",
            description: "Configuració de les teves dades i connexions",
            icon: "user",
            plugins: [
                {
                    pluginId: "user-administrative-data",
                    pluginUrl: "",
                name: "Dades administratives de l'usuari",
                    category: ["user"]
                },
            ],
        },
    ]);
}
