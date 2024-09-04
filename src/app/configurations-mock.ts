export const configurationsMock = [
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
    ]