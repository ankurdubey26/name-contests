const { nodeEnv } = require('./util');
console.log(`Running in ${nodeEnv} mode...`);

//read the query from the command prompt
const query = process.argv[2];

// importing the important lib
const ncSchema = require('../schema');
const { graphql } = require('graphql');

// running the query
graphql(ncSchema,query).then(result => {
    console.log(result);
});