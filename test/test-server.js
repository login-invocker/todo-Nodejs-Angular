var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
chai.should();

chai.use(chaiHttp);
describe('Todos', function() {
 it('should list ALL todos on /api/todos GET', function(done) {
    chai.request(server)
      .get('/api/todos')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });

});
});


it('should list ALL blobs on /blobs GET', function(done) {
    chai.request(server)
      .get('/api')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        done();
      });
  });

  it('should add a SINGLE blob on /blobs POST', function(done) {
    chai.request(server)
      .post('/api/todo')
      .send({'name': 'Java', 'lastName': 'Script'})
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.SUCCESS.should.be.a('object');
        res.body.SUCCESS.should.have.property('_id');
        res.body.SUCCESS.should.have.property('text');
        res.body.SUCCESS.should.have.property('isDone');
        res.body.SUCCESS.name.should.equal('Java');
        res.body.SUCCESS.lastName.should.equal('Script');
        done();
      });
  });