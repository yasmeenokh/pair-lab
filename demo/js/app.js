'use strict';
let counter = 0;
function yourName()
{
  let userName = prompt('What is your name?');
  while (userName === null || userName === '') {
    userName = prompt('please enter your name');
  }
  alert('We are glad to have you  ' + userName + ' 😀 ');

  return userName;
}
yourName();

const question1 = function()
{
  let courseCompletion = prompt('Do you think i will finish this course?');
  // console.log(courseCompletion);

  courseCompletion = courseCompletion.toLowerCase();

  if (courseCompletion === 'yes' || courseCompletion === 'y') {
    alert('Thank you for your good expectation 😄');
    counter++;
  }

  if (courseCompletion === 'no' || courseCompletion === 'n') {
    alert('Ohh, why do you think that 😔!!');
  }
  while (courseCompletion !== 'yes' && courseCompletion !== 'y' && courseCompletion !=='no' && courseCompletion !=='n' ) {
    courseCompletion = prompt('Do you think i will finish this course?');
    return courseCompletion;
  }};
question1();

const question2 =function()
{
  let gamingLove = prompt('Do you think i enjoy gaming?');
  // console.log(gamingLove);

  if (gamingLove.toLowerCase() === 'yes' || gamingLove.toLowerCase() === 'y') {
    alert('You are so mistaken');
  }
  if (gamingLove.toLowerCase() === 'no' || gamingLove.toLowerCase() === 'n') {
    alert('i am glad you had that right');
    counter++;
  }
  while (gamingLove.toLowerCase() !== 'yes' && gamingLove.toLowerCase() !== 'y' && gamingLove.toLowerCase() !=='no' && gamingLove.toLowerCase() !=='n' ) {
    gamingLove = prompt('Do you think i enjoy gaming?');
    return gamingLove;
  }};
question2();

const question3 = function()
{
  let firstImp = prompt('Did i leave a good first impression?');
  // console.log(firstImp);

  if (firstImp.toLowerCase() === 'yes' || firstImp.toLowerCase() === 'y') {
    alert('Glad to hear that, it was mutual 🙈');
    counter++;
  }
  if (firstImp.toLowerCase() === 'no' || firstImp.toLowerCase() === 'n') {
    alert('sorry to hear that, where did i go wrong 💔?');
  }
  while (firstImp.toLowerCase() !== 'yes' && firstImp.toLowerCase() !== 'y' && firstImp.toLowerCase() !=='no' && firstImp.toLowerCase() !=='n' ) {
    firstImp = prompt('Did i leave a good first impression?');
    return firstImp;
  }};
question3();

const question4 = function()
{
  let myPhobia = prompt('To your knowledge do i have any phobias?');
  // console.log(myPhobia);

  if (myPhobia.toLowerCase() === 'yes' || myPhobia.toLowerCase() === 'y') {
    alert('Intersting 🙀, how did you know?');
    counter++;
  }
  if (myPhobia.toLowerCase() === 'no' || myPhobia.toLowerCase() === 'n') {
    alert('Unfortunately not true');
  }

  while (myPhobia.toLowerCase() !== 'yes' && myPhobia.toLowerCase() !== 'y' && myPhobia.toLowerCase() !=='no' && myPhobia.toLowerCase() !=='n' ) {
    myPhobia = prompt('To your knowledge do i have any phobias?');
    return myPhobia;
  }};
question4();

const question5 =function()
{
  let tryNew = prompt('Do i like to try new things?');
  // console.log(tryNew);

  if (tryNew.toLowerCase() === 'yes' || tryNew.toLowerCase() === 'y') {
    alert('you got that right');
    counter++;
  }
  if (tryNew.toLowerCase() === 'no' || tryNew.toLowerCase() === 'n') {
    alert('how else can we learn!');
  }

  while (tryNew.toLowerCase() !== 'yes' && tryNew.toLowerCase() !== 'y' && tryNew.toLowerCase() !=='no' && tryNew.toLowerCase() !=='n' ) {
    tryNew = prompt('Do i like to try new things?');
    return tryNew;
  }};
question5();

const question6 = function()
{
  let myAge = prompt('How old do you think i am');


  for (let i = 0; i < 3; i++) {
    if (myAge > 25) {
      alert ( 'too high 😯');
      myAge = prompt('How old do you think i am');
    }
    if (myAge < 25) {
      alert('too low , but thank you 🙈');
      myAge = prompt('How old do you think i am');
    }

  }

  if (myAge === 25) {
    alert ('good guess');
    counter++;

  }
  return myAge;
};
question6();
alert ('your score is ' + counter );
