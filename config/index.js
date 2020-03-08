var configValues =  require(`./config`);

module.exports={
getDbConnectionString:()=>{
    return `mongodb+srv://${configValues.username}:${configValues.password}@cluster0-qdwi8.mongodb.net/test?retryWrites=true&w=majority`;
}
}                                                                                                      