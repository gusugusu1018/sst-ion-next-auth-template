import NextAuth from "next-auth";
import Cognito from "next-auth/providers/cognito";
import { Resource } from "sst";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";
import { DynamoDBAdapter } from "@auth/dynamodb-adapter";

const client = DynamoDBDocument.from(
  new DynamoDB({ region: process.env.NEXT_PUBLIC_REGION }),
  {
    marshallOptions: {
      convertEmptyValues: true,
      removeUndefinedValues: true,
      convertClassInstanceToMap: true,
    },
  }
);

export const { handlers, signIn, signOut, auth } = NextAuth({
  // read here https://authjs.dev/getting-started/deployment#auth_trust_host
  trustHost: true,
  theme: { logo: "https://next-auth.js.org/img/logo/logo-sm.png" },
  providers: [
    Cognito({
      clientId: Resource.WebClient.id,
      clientSecret: Resource.WebClient.secret,
      issuer:
        "https://cognito-idp." +
        process.env.NEXT_PUBLIC_REGION +
        ".amazonaws.com/" +
        Resource.UserPool.id,
    }),
  ],
  adapter: DynamoDBAdapter(client, {
    tableName: Resource.Table.name,
    partitionKey: "pk",
    sortKey: "sk",
    indexName: "GSI1",
    indexPartitionKey: "GSI1pk",
    indexSortKey: "GSI1sk",
  }),
  callbacks: {
    authorized({ request, auth }) {
      try {
        const { pathname } = request.nextUrl;
        if (pathname.startsWith("/protected-page")) return !!auth;
        return true;
      } catch (err) {
        console.log(err);
      }
    },
    jwt({ token, trigger, session }) {
      if (trigger === "update") token.name = session.user.email;
      return token;
    },
  },
});
