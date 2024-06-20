const neo4j = require('neo4j-driver');
class GraphFox {
    connect({ url, username, password }) {
        neo4j.driver(url, neo4j.auth.basic(username, password));
    }
};
module.exports = GraphFox;