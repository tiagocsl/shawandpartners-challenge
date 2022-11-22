import app from './app';

import logger from './utils/wiston.logger';

const port = process.env.SERVER_PORT || 3000;

app.listen(port, () => {
    logger.info(`Server's running on port: ${port}`);
});
