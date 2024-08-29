import { Client, ClientOptions } from "@elastic/elasticsearch";
import { ElasticDocStore } from "./elastic/elastic_doc_store.js";
import { vars } from "./LoadEnv/loadEnv.js";



//queue config
const queueConfig: ClientOptions = {};

if (vars.ELASTIC_QUEUE_URL) {
  queueConfig.node = vars.ELASTIC_QUEUE_URL;
} else {
  throw new Error("No URL provided for ElasticSearch");
}

if (!(vars.DISABLE_ELASTIC_TLS_VALIDATION_ONLY_FOR_DEV === "true" 
  && !queueConfig.node.includes("who.int") 
  && !queueConfig.node.includes("elastic.internal") 
  && !queueConfig.node.includes("elastic-cloud.com"))) 
{
  console.log("Enforcing TLS validation for PROD ElasticSearch");
  // Enforce TLS validation for prod environments
  if (vars.ELASTIC_QUEUE_FINGERPRINT) {
    queueConfig.caFingerprint = vars.ELASTIC_QUEUE_FINGERPRINT;
    queueConfig.tls = {
      // might be required if it's a self-signed certificate
      rejectUnauthorized: false
    };
  } 
  else{
    throw new Error("No fingerprint provided for ElasticSearch while in a PROD environment");
  }
}

if (vars.ELASTIC_QUEUE_USER && vars.ELASTIC_QUEUE_PASSWORD) {
  queueConfig.auth = {
    username: vars.ELASTIC_QUEUE_USER,
    password: vars.ELASTIC_QUEUE_PASSWORD,
  };
} else {
  throw new Error("No authentication provided for ElasticSearch");
}

const docStoreIndex = vars.ELASTIC_INDEX_QUEUE_INDEX || "spu-index-queue";

const queueClient = new Client(queueConfig);

//vector config
const vectorConfig: ClientOptions = {};

if (vars.ELASTIC_VECTOR_URL) {
  vectorConfig.node = vars.ELASTIC_VECTOR_URL;
} else {
  throw new Error("No URL provided for ElasticSearch");
}

if (!(vars.DISABLE_ELASTIC_TLS_VALIDATION_ONLY_FOR_DEV === "true" 
  && !vectorConfig.node.includes("who.int") 
  && !vectorConfig.node.includes("elastic.internal") 
  && !vectorConfig.node.includes("elastic-cloud.com"))) 
{
  console.log("Enforcing TLS validation for PROD ElasticSearch");
  // Enforce TLS validation for prod environments
  if (vars.ELASTIC_VECTOR_FINGERPRINT) {
    vectorConfig.caFingerprint = vars.ELASTIC_VECTOR_FINGERPRINT;
    vectorConfig.tls = {
      // might be required if it's a self-signed certificate
      rejectUnauthorized: false
    };
  } 
  else {
    throw new Error("No fingerprint provided for ElasticSearch while in a PROD environment");
  }
}

if (vars.ELASTIC_VECTOR_USER && vars.ELASTIC_VECTOR_PASSWORD) {
  vectorConfig.auth = {
    username: vars.ELASTIC_VECTOR_USER,
    password: vars.ELASTIC_VECTOR_PASSWORD,
  };
} else {
  throw new Error("No authentication provided for ElasticSearch");
}

const vectorClient = new Client(vectorConfig);

// these work fine
const queueClientinfoResponse = await queueClient.info();
console.log('queueClient Elasticsearch Version:', queueClientinfoResponse);
const vectorClientinfoResponse = await vectorClient.info();
console.log('vectorClient Elasticsearch Version:', vectorClientinfoResponse);

const docStore = await ElasticDocStore.fromIndex({
  client: queueClient,
  indexName: docStoreIndex,
});

console.log(docStore);
