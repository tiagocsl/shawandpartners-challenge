/* eslint-disable @typescript-eslint/no-explicit-any */

import morgan from 'morgan';
import logger from './wiston.logger';

const stream = {
    write: (message: any) => logger.http(message),
};

const skip = () => {
    const env = process.env.NODE_ENV || 'development';
    return env != 'development';
};

const morganMiddleware = morgan(
    ':remote-addr :method :url :status :res[content-length] - :response-time ms',
    { stream, skip }
);

export default morganMiddleware;
