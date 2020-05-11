const testRouter = require('./test-router');

const mock = (app) => {
    app.use('/test', testRouter);
};
module.exports = mock;
