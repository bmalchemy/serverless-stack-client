export default {
  STRIPE_KEY: "pk_test_nNNM2EUMjVr3AOoHivMsQkJL00tFkxsVpw",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "note-file-bm-upload-bucket",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://b2xr6iwzxg.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_NGVKdlXGl",
    APP_CLIENT_ID: "eal7n1psp1mjvfl9u8k11soo4",
    IDENTITY_POOL_ID: "us-east-2:901ad3e2-234e-4169-a0aa-2163514e1195",
  },
};
