/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sst-ion-next-auth-template",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const infra = await import("./infra");
    return {
      url: infra.web.url,
      clientId: infra.webClient.id,
      authUrl: infra.authUrl,
    };
  },
});
