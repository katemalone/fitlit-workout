const chai = require('chai');
const expect = chai.expect;

const User = require('../src/userClass');

describe('User', function() {
    it('should be a function', function() {
        expect(User).to.be.a('function');
    })
    })