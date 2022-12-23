const { Client } = require('pg');

const client = new Client({
  connectionString: `postgres://xtmrxqnzfeqmre:3dc62b0303eb3926bee8e1114044f1d58c04c9d3d1753da32bf657d690f240f3@ec2-3-217-251-77.compute-1.amazonaws.com:5432/ddjtn0qbm6tcs5`,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

module.exports = {
  client
}