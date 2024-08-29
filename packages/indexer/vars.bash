#database settings
export DATABASE_URL="postgresql://username:password@null:5432/spu-local?schema=public"

# EMBED model settings
export EMBED_MODE="azure-oai"

#open AI settings
export OPENAI_API_KEY="apikey"
export OPENAI_EMBED_MODEL="text-embedding-3-small"

#azure settings
export AZURE_OPENAI_API_KEYY="key"
export AZURE_OPENAI_BASE_PATHH="https://westeurope.api.cognitive.microsoft.com/openai/deployments"
export AZURE_OPENAI_EMBEDDING_API_DEPLOYMENT_NAME="text-embedding-ada-002"
export AZURE_OPENAI_EMBEDDING_API_VERSION="2023-05-15"

export VECTOR_STORE_TYPE="elasticsearch"

#elastic search settings
export ELASTIC_QUEUE_URL="https://127.0.0.1:9200"
export ELASTIC_QUEUE_USER="elastic"
export ELASTIC_QUEUE_PASSWORD="z6T1QgHSiKo*ubiU7nWW"
export ELASTIC_INDEX_QUEUE_INDEX="spu-index-queue"
export ELASTIC_QUEUE_FINGERPRINT="7175cbfd80ef5e7f611a38dc3562520f624f9ca56c8b860b628506b0225f93d3"

#elastic search settings
export ELASTIC_VECTOR_URL="https://127.0.0.1:9200"
export ELASTIC_VECTOR_USER="elastic"
export ELASTIC_VECTOR_PASSWORD="z6T1QgHSiKo*ubiU7nWW"
export ELASTIC_VECTOR_INDEX="spu-vector"
export ELASTIC_VECTOR_FINGERPRINT="7175cbfd80ef5e7f611a38dc3562520f624f9ca56c8b860b628506b0225f93d3"

#chunk size settings
export INDEX_BATCH_SIZE="2"

#internal communication settings
export INTERNAL_SOCKET_TOKEN="organisation-token-for-internal-communication-between-services"
export INTERNAL_SOCKET_URL="http://host.docker.internal:3000" # Path to main package

export PORT_INDEXER="3002"

node dist/src/index.js
