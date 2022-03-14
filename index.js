require('dotenv').config();
const {
  LogBuilder,
  Levels,
  UserSignature,
  AUDataCenter,
  OAuthBuilder,
  FileStore,
  InitializeBuilder,
  RecordOperations,
  ParameterMap,
  HeaderMap,
  BodyWrapper,
  ZCRMRecord
} = require('./zoho');
const { CustomStore } = require("./CustomStore.js");

const init = async () => {
  let logger = new LogBuilder()
    .level(Levels.INFO)
    .filePath("./node_sdk_logs.log")
    .build();

  let user = new UserSignature(process.env.CLIENT_EMAIL);
  let environment = AUDataCenter.PRODUCTION();
  let tokenstore = new CustomStore();
  let token = new OAuthBuilder()
    .clientId(process.env.CLIENT_ID)
    .clientSecret(process.env.CLIENT_SECRET)
    .grantToken(process.env.GRANT_TOKEN)
    .refreshToken(process.env.REFRESH_TOKEN)
    .build();

  try {
    (await new InitializeBuilder())
    .logger(logger)
      .user(user)
      .environment(environment)
      .token(token)
      .resourcePath(__dirname)
      .store(tokenstore)
      .initialize();
  } catch (error) {
    console.log(error);
  }
}

//example getting ZOHO CRM Module Leads Data
const fetchData = async () => {
  let moduleAPIName = "Leads";
  let recordOperations = new RecordOperations();
  let paramInstance = new ParameterMap();
  let headerInstance = new HeaderMap();
  let response = await recordOperations.getRecords(
    moduleAPIName,
    paramInstance,
    headerInstance
  );
  console.log(response.object.getData());
}

init().then(fetchData)
