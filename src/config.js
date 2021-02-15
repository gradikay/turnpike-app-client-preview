// This file is exported to src/index.js
// **** NOTE **** FOR SECURITY REASONS -- Put variable in a .env (file) --
// ------ Communication with Backend / API

// Development Configuration from AWS
const dev = {
    s3: {
        REGION: "us-east-2", 
        ATTACHEMENTS_BUCKET_NAME: "turnpike-app-services-dev-attachmentsbucket-r43th0xn95aw"
    },
    apiGateway: {
        REGION: "us-east-2",
        SERVICE_ENDPOINT: "https://7pykm2z2b0.execute-api.us-east-2.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_pL37v1gI7",
        USER_POOL_CLIENT_ID: "7bm0spcr5u41ba6vdjaka83lck",
        IDENTITY_POOL_ID: "us-east-2:a48a11af-b8b0-4663-b13a-7ab35a893ca4"
    }
};

// Production Configuration from AWS
const prod = {
    s3: {
        REGION: "your region",
        ATTACHEMENTS_BUCKET_NAME: " your AttachemntsBucketName"
    },
    apiGateway: {
        REGION: "your region",
        SERVICE_ENDPOINT: "your ServiceEndpoint"
    },
    cognito: {
        REGION: "your region",
        USER_POOL_ID: "your UserPoolId",
        USER_POOL_CLIENT_ID: "your UserPoolClientId",
        IDENTITY_POOL_ID: "your IdentityPoolId"
    }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 1000000,
    ...config
};