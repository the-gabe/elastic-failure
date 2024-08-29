import { Client, estypes } from "@elastic/elasticsearch";


// stolen from common
export type VectorStoreFilter = {
  field: string;
  operator: string;
  value: any;
}[];

// stolen from common
export type ElasticClientArgs = {
  client: Client;
  indexName: string;
};

// stolen from common
export function buildElasticFilter(
  filter?: VectorStoreFilter
): { [operator: string]: { [field: string]: any } }[] {
  if (filter == null) {
    return [];
  }

  const filters = Array.isArray(filter)
    ? filter
    : Object.entries(filter).map(([key, value]) => ({
        operator: "term",
        field: key,
        value,
      }));

  return filters.flatMap((condition) => {
    return {
      [condition.operator]: {
        [`metadata.${condition.field}`]: condition.value,
      },
    };
  });
}


export class ElasticDocStore {
  private readonly client: Client;

  private readonly indexName: string;

  private constructor(args: ElasticClientArgs) {
    this.client = args.client.child({
      headers: { "user-agent": "langchain" },
    });
    this.indexName = args.indexName ?? "timanage-docs";
  }

  static async fromIndex(
    dbConfig: ElasticClientArgs
  ): Promise<ElasticDocStore> {
    const store = new ElasticDocStore(dbConfig);

    await store.ensureIndexExists();

    return store;
  }

  async ensureIndexExists(): Promise<void> {
    const exists = await this.client.indices.exists({ index: this.indexName });

    if (exists) {
      return;
    }

    const request: estypes.IndicesCreateRequest = {
      index: this.indexName,
      mappings: {
        dynamic_templates: [
          {
            metadata: {
              match_mapping_type: "*",
              match: "metadata.*",
              unmatch: "metadata.loc",
              mapping: {
                type: "keyword",
              },
            },
          },
        ],
        properties: {
          text: { type: "text" },
          metadata: { type: "object" },
        },
      },
    };

    await this.client.indices.create(request);
  }

}
