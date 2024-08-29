export const vars = {
  // map the env vars to the config vars
  OPENAI_API_KEY: process.env["OPENAI_API_KEY"],
  OPENAI_EMBED_MODEL: process.env["OPENAI_EMBED_MODEL"],

  //local models settings
  FASTEMBED_URL: process.env["FASTEMBED_URL"],
  FASTEMBED_MODEL: process.env["FASTEMBED_MODEL"],

  //elastic search settings
  ELASTIC_QUEUE_URL: process.env["ELASTIC_QUEUE_URL"],
  ELASTIC_QUEUE_USER: process.env["ELASTIC_QUEUE_USER"],
  ELASTIC_QUEUE_PASSWORD: process.env["ELASTIC_QUEUE_PASSWORD"],
  ELASTIC_INDEX_QUEUE_INDEX: process.env["ELASTIC_INDEX_QUEUE_INDEX"],
  ELASTIC_QUEUE_FINGERPRINT: process.env["ELASTIC_QUEUE_FINGERPRINT"],

  //elastic search settings
  ELASTIC_VECTOR_URL: process.env["ELASTIC_VECTOR_URL"],
  ELASTIC_VECTOR_USER: process.env["ELASTIC_VECTOR_USER"],
  ELASTIC_VECTOR_PASSWORD: process.env["ELASTIC_VECTOR_PASSWORD"],
  ELASTIC_VECTOR_INDEX: process.env["ELASTIC_VECTOR_INDEX"],
  ELASTIC_VECTOR_FINGERPRINT: process.env["ELASTIC_VECTOR_FINGERPRINT"],

  //chunk size settings
  INDEX_BATCH_SIZE: process.env["INDEX_BATCH_SIZE"],

  //azure oai settings
  AZURE_OPENAI_API_KEYY: process.env["AZURE_OPENAI_API_KEYY"],
  AZURE_OPENAI_BASE_PATHH: process.env["AZURE_OPENAI_BASE_PATHH"],
  AZURE_OPENAI_EMBEDDING_API_DEPLOYMENT_NAME: process.env["AZURE_OPENAI_EMBEDDING_API_DEPLOYMENT_NAME"],
  AZURE_OPENAI_EMBEDDING_API_VERSION: process.env["AZURE_OPENAI_EMBEDDING_API_VERSION"],

  // embed settings
  EMBED_MODE: process.env["EMBED_MODE"] ?? "openai",

  //internal communication settings
  INTERNAL_SOCKET_TOKEN: process.env["INTERNAL_SOCKET_TOKEN"],
  INTERNAL_SOCKET_URL: process.env["INTERNAL_SOCKET_URL"],

  //database settings
  DATABASE_URL: process.env["DATABASE_URL"],

  PORT_INDEXER: process.env["PORT_INDEXER"],

  // chormadb settings
  CHROMA_URL: process.env["CHROMA_URL"],
  CHROMA_COLLECTION_NAME: process.env["CHROMA_COLLECTION_NAME"],

  VECTOR_STORE_TYPE: process.env["VECTOR_STORE_TYPE"],

  DISABLE_ELASTIC_TLS_VALIDATION_ONLY_FOR_DEV: process.env["DISABLE_ELASTIC_TLS_VALIDATION_ONLY_FOR_DEV"],
};
