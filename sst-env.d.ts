/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    "Domain": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "NextAuthSecret": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "UserPool": {
      "id": string
      "type": "sst.aws.CognitoUserPool"
    }
    "Web": {
      "type": "sst.aws.Nextjs"
      "url": string
    }
    "WebClient": {
      "id": string
      "secret": string
      "type": "sst.aws.CognitoUserPoolClient"
    }
  }
}
export {}
