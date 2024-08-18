/// <reference path="../.sst/platform/config.d.ts" />

import { authUrl, userPool, webClient } from "./auth";
import { table } from "./database";
import { secret } from "./secret";

const commonConfig = {
  link: [userPool, webClient, table],
  environment: {
    AUTH_SECRET: secret.nextAuthSecret.value,
    NEXT_PUBLIC_REGION: aws.getRegionOutput().name,
    NEXT_PUBLIC_USER_POOL_DOMAIN: authUrl,
  },
};

const domain = secret.domain.value;
const webConfig =
  $app.stage === "production" ? { ...commonConfig, domain } : commonConfig;

export const web = new sst.aws.Nextjs("Web", webConfig);
