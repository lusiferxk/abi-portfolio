import { MongoClient } from "mongodb";

const uri =
  process.env.MONGODB_URI ||
  "mongodb://px349738_db_user:BA6L6KLA43XSglYi@ac-ixzd8w8-shard-00-00.1i1cdgf.mongodb.net:27017,ac-ixzd8w8-shard-00-01.1i1cdgf.mongodb.net:27017,ac-ixzd8w8-shard-00-02.1i1cdgf.mongodb.net:27017/portfolio?ssl=true&replicaSet=atlas-ctwqix-shard-0&authSource=admin&retryWrites=true&w=majority&appName=abiportfolio";

const options = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 8000,
  connectTimeoutMS: 10000,
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
