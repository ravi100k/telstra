const chai = require('chai');
const chaiHttp = require('chai-http')
const app = require('../app');
// Configure chai
chai.use(chaiHttp);
chai.should();


describe("traffic signal", () => {
    describe("GET /", () => {
        // Test to get object with active color
        it("should get object with active color", (done) => {
             chai.request(app)
                 .get('/traffic')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
    });
});