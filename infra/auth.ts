/// <reference path="../.sst/platform/config.d.ts" />

import { secret } from "./secret";
import { web } from "./web";

export const userPool = new sst.aws.CognitoUserPool(
  "UserPool",
  {
    transform: {
      userPool: {
        usernameAttributes: ["email"],
        accountRecoverySetting: {
          recoveryMechanisms: [
            {
              name: "verified_email",
              priority: 1,
            },
          ],
        },
        autoVerifiedAttributes: ["email"],
      },
    },
  },
  { dependsOn: web }
);

const userPoolDomain = new aws.cognito.UserPoolDomain(
  "UserPoolDomain",
  {
    domain: $concat($app.name, "-", $app.stage), // Amazon Cognito domain
    userPoolId: userPool.id,
  },
  { dependsOn: [userPool] }
);

export const authUrl = $concat(
  userPoolDomain.domain,
  ".auth.",
  aws.getRegionOutput().name,
  ".amazoncognito.com"
);

export const webClient = userPool.addClient("WebClient", {
  transform: {
    client: {
      allowedOauthFlows: ["code"],
      refreshTokenValidity: 1,
      generateSecret: true,
      callbackUrls: [
        $interpolate`${secret.domain.value}/api/auth/callback/cognito`,
        "http://localhost:3000/api/auth/callback/cognito",
      ],
      logoutUrls: [
        $interpolate`${secret.domain.value}`,
        "http://localhost:3000",
      ],
      supportedIdentityProviders: ["COGNITO"],
    },
  },
});

export const uiCustomization = new aws.cognito.UserPoolUICustomization(
  "myUICustomization",
  {
    userPoolId: userPool.id,
    clientId: webClient.id, // UI customization can be set per client
    imageFile:
      "iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAABGdBTUEAALGPC/xhBQAAABJ0RVh0U29mdHdhcmUASmRlbnRpY29um8oJfgAAAC1QTFRFAAAAr8xmr8xmr8xm5eXlr8xmr8xmr8xm5eXl5eXlr8xmr8xm5eXlTExM5eXl4DgjiwAAAA90Uk5TACa/GT8f3/+//8yyOf9GDVcHjQAAAkhJREFUeJztmdl2wzAIRN1WiVGX/P/n9tRuLMsCNIDiJ89jArkZLwKJabp06ZJdb+8f6vcplr7odp/vNy2AYun/QbMalnIofQtSw0iD9NNLkBKWsgLpp++D5DBSIEB6FSSFpSxDgPRDkBBGMgRJPwaxYX9GBAiS3gZxYSRCoPTpswma5y/OSP7mIEg69lcWIzkTs7JgToCLuhoRMNA9AR4PylnBQE9X90FPuVKDgd6T3itLOesY6I3XF590ZLQYaO1Sl9HGCIOBVmGlIHBGWgxUT+TSxhtpMFBllIq0aOSIgWp89cu2cJ/0nmGM9J5hkNSeYZDUnmGUnj3DTyX+E6+2nuGVEDoBUnqGF0LoBMi6jOAQtruAjBggbHcBGbFA+CYGMGKDWDHPhd0IsWHICzFgtgrlgMAYCkEwTCm1TgiCoRoCSe0uVCMRCItJXM/jgXQctBgHpNt8NJjlU9uNRx4sCkKwLqrC2CHw+05+iKEdTO61y7YMm4uW1UjBWCGO6kjmomVmTNP0MEICWw0YEtlpwJDIngmFhLZMKCS0+QMhJ+z9gkZAyBmb2DOMnLIbt54r7M8t2O5C7xk8ow0Nw10i52hDxkiHqq7RhoBhjIRGGyxGObZ1jjZaTGtkwGjjiNEPht2jjQrTGBk32iDRyLjRRsEcjYwbbSx6sEbGjTZWIXcEvl7SA9J5R/R0cDYh9QxjRhs7CLuwDxltFIhQoQaMNnYQqULFRxsFIpfa6GhjB1FKbXC0UaT2DKHRxk56z2AebVy6dGnRL5xWYnUz5g46AAAAAElFTkSuQmCC",
    css: `
      .background-customizable {
        margin-top: 20vh;
        background-color: #FFF;
        box-shadow: 0px 2px 20px rgba(0, 0, 0, 20%), 0 0 0 10000px #f2f2f2;
        border-radius: 10px;
      }
      .banner-customizable {
        padding: 25px 0px 25px 0px;
        background-color: #FFF;
      }
      .submitButton-customizable {
        font-size: 14px;
        font-weight: bold;
        margin: 30px 0px;
        height: 48px;
        width: 100%;
        color: #fff;
        border: none;
        background-color: #0f1729;
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      }
      .submitButton-customizable:hover {
        color: #fff;
        background-color: #292d38;
      }
      `,
  },
  { dependsOn: [userPoolDomain] }
);
