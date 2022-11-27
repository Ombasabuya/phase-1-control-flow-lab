function scuberGreetingForFeet(distance){
  // Write your code here!

  let result;
  if(distance < 400 || distance === 400){
    result = 'This one is on me!';
  }
  else if(distance > 2000 && distance < 2500){
    result = 'I will gladly take your thirty bucks.'
  }
  else if(distance > 2500){
    result = 'No can do.'
  }
  return result;
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501)

function ternaryCheckCity(city){
  // Write your code here!
  let result;

  city === 'NYC'? result ="Ok, sounds good." : result = "No go."

  return result;
}

ternaryCheckCity('NYC');
ternaryCheckCity('Pittsburgh');

function switchOnCharmFromTip(tip){
  // Write your code here!
  let result;
  switch(tip){
    case 'generous':
      result = 'Thank you so much.';
      break;

    case 'not as generous':
      result = 'Thank you.';
      break;

    default:
      result = 'Bye.';
  }
  return result;
}

switchOnCharmFromTip('generous');
switchOnCharmFromTip('not as generous');
switchOnCharmFromTip('thanks for everthing');