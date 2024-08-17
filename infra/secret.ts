/// <reference path="../.sst/platform/config.d.ts" />

export const secret = {
  nextAuthSecret: new sst.Secret("NextAuthSecret"),
  // Linux: npx sst secret set NextAuthSecret `openssl rand -hex 32` or go to https://generate-secret.vercel.app/32
  domain: new sst.Secret("Domain"),
};
