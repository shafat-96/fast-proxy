import serverlessExpress from '@vendia/serverless-express';
import app from './server.js';

export const handler = serverlessExpress({ app });
