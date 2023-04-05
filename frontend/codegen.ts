
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8000/graphql/",
  documents: "**/*.{graphql}",
  generates: {
    "saleor/api.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        "typescript-apollo-client-helpers"
      ],
      config: {
        scalars: {
          JSONString: "string",
          UUID: "string",
          Metadata: "Record<string, string>",
          DateTime: "string"
        },
        dedupeOperationSuffix: true,
        enumsAsTypes:true,
      }  
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  }
};

export default config;
