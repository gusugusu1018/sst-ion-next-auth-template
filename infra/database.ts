/// <reference path="../.sst/platform/config.d.ts" />

export const table = new sst.aws.Dynamo("Table", {
  fields: {
    pk: "string",
    sk: "string",
    GSI1pk: "string",
    GSI1sk: "string",
  },
  primaryIndex: {
    hashKey: "pk",
    rangeKey: "sk",
  },
  globalIndexes: {
    GSI1: {
      hashKey: "GSI1pk",
      rangeKey: "GSI1sk",
    },
  },
});
