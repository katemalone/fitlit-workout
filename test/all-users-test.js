const chai = require('chai');
const expect = chai.expect;

const AllUsers = require('../src/all-users');

describe('AllUsers', function() {
    it('should be a function', function() {
        expect(AllUsers).to.be.a('function');
    })
    })