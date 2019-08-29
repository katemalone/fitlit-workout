// const data = require('../data/users.js');
let uniqueUserId = Math.floor(Math.random() * (50 - 1 + 1)) +1;

// const uniqueUserId = uniqueUserIndex + 1;
// const currentUser = userRepo.data.find(function(user) {
//   return user.id === uniqueUserIndex
// })
const userRepo = new UserRepository(userData);
const today = findToday();
const currentUser = userRepo.data.find(user => user.id === uniqueUserId)
const user = new User(currentUser);
const hydrationRepo = new Hydration(hydrationData);
const currentUserHydration = hydrationRepo.waterData.filter(user => user.userID === uniqueUserId);
const sleepRepo = new Sleep(sleepData);
const currentUserSleep = sleepRepo.sleepData.filter(user => user.userID === uniqueUserId)
const activityRepo = new Activity(activityData);
const currentUserActivity = activityRepo.moveData.filter(user => user.userID === uniqueUserId)

$('.header_date-span').text(findToday());
$('.user_card-name-span').text(user.getUserFirstName(uniqueUserId));
$('.step_goal-user-span').text(`${user.dailyStepGoal}`);
$('.step_goal-all-average-span').text(userRepo.averageStepGoal());
$('.main_daily-water-span').text(hydrationRepo.dailyHydration(uniqueUserId, findToday()));
$('.main_weekly-water-span').text(displayWeek());

$('.main_daily-sleep-span').text(sleepRepo.getHoursForDay(uniqueUserId, findToday()));
$('.main_quality-sleep-span').text(sleepRepo.getQualityForDay(uniqueUserId, findToday()));

$('.main_alltime-sleep-span').text(sleepRepo.getAverageSleepQuality(uniqueUserId));
$('.main_alltime-sleep-hours-span').text(sleepRepo.getAverageHours(uniqueUserId));

$('.main_weekly-sleep-hours-span').text(sleepRepo.getUserHoursWeekAverage(uniqueUserId, findToday()));

$('.main_weekly-sleep-quality-span').text(sleepRepo.getUserQualityWeekAverage(uniqueUserId, findToday()));

$('.main_weekly-sleep-quality-span').text(sleepRepo.getUserQualityWeekAverage(uniqueUserId, findToday()));

$('.main_daily-minutes-active-span').text(activityRepo.getMinutesActive(uniqueUserId, findToday(), 'minutesActive'));

$('.main_daily-steps-span').text(activityRepo.getMinutesActive(uniqueUserId, findToday(), 'numSteps'));

$('.main_weekly-steps-span').text(activityRepo.getActivityForWeek(uniqueUserId, findToday(), 'numSteps'))

$('.main_weekly-minutes-span').text(activityRepo.getActivityForWeek(uniqueUserId, findToday(), 'minutesActive'))

$('.main_weekly-stairs-span').text( activityRepo.getActivityForWeek(uniqueUserId, findToday(), 'flightsOfStairs'))
$('.main_daily-miles-span').text(activityRepo.getMilesWalked(uniqueUserId, today));




function findToday() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = `${yyyy}/${mm}/${dd}`;
    return today;
}

function displayWeek() {
    return display = hydrationRepo.weeklyHydration(uniqueUserId, findToday());
}

function friendList(id) {
    let person = userData.find(user => {
        return user.id === id;
     })
    return person.friends;
    }

function getFriendInfo(id, date) {
    let friends = friendList(id);
    let weekFriends = friends.map(friendId => {
        let friendActivities = activityRepo.findUser(friendId)
        let todayIndex = friendActivities.findIndex((day) => {
            return day.date === date
        })
        let friendTotalSteps = friendActivities.slice(todayIndex - 6, todayIndex + 1).reduce((acc, day) => {
            return acc + day.numSteps
        }, 0)
        return ({id: friendId, steps: friendTotalSteps});

        })
    }

