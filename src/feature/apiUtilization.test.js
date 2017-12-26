describe('utilize api', () => {
    it('should call api.get', () => {
        jest.doMock('../common', () => ({
            api: {
                get: jest.fn(() => console.error('called from mock')),
            },
        }));

        const {apiUtilization} = require('./');

        apiUtilization();
    });
})