function basicTeenager(age){
  if ((age >= 13) && (age <= 19)){
    return "You are a teenager!";
  }
  else{
    return undefined;
  }
}

function teenager(age){
  if ((age >= 13) && (age <= 19)){
    return "You are a teenager!";
  }
  else{
    return "You are not a teenager";
  }
}


function ageChecker(age){
  if (age <= 12){
    return "You are a kid"
  }

  if ((age >= 13) && (age <= 19)){
    return "You are a teenager!";
  }

  if (age >= 20){
    return "You are a grownup"
  }

}


function ternaryTeenager(age){
  if ((age >= 13) && (age <= 19)){
    return "You are a teenager";
  }
  else{
    return "You are not a teenager"
  }

}

function switchAge(age){
  switch (age){
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19: return "You are a teenager";
             break;

    default:
      return "You have an age"
  }
}
