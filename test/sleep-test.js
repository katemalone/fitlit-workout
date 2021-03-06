const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/sleepUser.js');
const sleepSampleData = require('../test/sleep-sample-data.js')

describe('Sleep', function() {
    it.skip('should be a function', function() {
        expect(Sleep).to.be.a('function');
    })
    it.skip('should return a users average hours of sleep', function() {
        const sleep = new Sleep(sleepSampleData);
        expect(sleep.getAverageHours(1)).to.equal(7);
    })

    it.skip('should return user average quality of sleep over all time', function() {
        const sleep = new Sleep(sleepSampleData);
        expect(sleep.getAverageSleepQuality(1)).to.equal(3)
    })

    it.skip('should return the hours slept for a specific day', function() {
        const sleep = new Sleep(sleepSampleData);
        expect(sleep.getHoursForDay(1, '2019/07/03')).to.equal(10.1);
    })

    it.skip('should return sleep quality for a user for a specific day', function() {
        const sleep = new Sleep(sleepSampleData);
        expect(sleep.getQualityForDay(1, '2019/07/03')).to.equal(2.1);
    })

    it.skip('should return sleep hours for a week', function() {
        const sleep = new Sleep(sleepSampleData);
        expect(sleep.getSleepOverWeek(1, '2019/07/03')).to.deep.equal([" 2019/06/27 : 9.4 ", " 2019/06/28 : 7.6 ", " 2019/06/29 : 5.3 ", " 2019/06/30 : 6.9 ", " 2019/07/01 : 4.8 ", " 2019/07/02 : 5.7 ", " 2019/07/03 : 10.1 "]);
    })

    it.skip('should return average sleep quality over a week', function() {
        const sleep = new Sleep(sleepSampleData);
        expect(sleep.getSleepQualityOverWeek(1, '2019/07/03')).to.deep.equal([" 2019/06/27 : 4.6 ", " 2019/06/28 : 4.7 ", " 2019/06/29 : 1.2 ", " 2019/06/30 : 2.5 ", " 2019/07/01 : 4.3 ", " 2019/07/02 : 4.7 ", " 2019/07/03 : 2.1 "]);
    })

    it.skip('should return average sleep hours for a week', function () {
        const sleep = new Sleep(sleepSampleData);
        expect(sleep.getUserHoursWeekAverage(1, '2019/07/03')).to.equal(7);
    })
    
    it.skip('should return average sleep quality for a week', function () {
        const sleep = new Sleep(sleepSampleData);
        expect(sleep.getUserQualityWeekAverage(1, '2019/07/03')).to.equal(3);
    })
});


