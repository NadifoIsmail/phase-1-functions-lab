const hq = 42;
const feetLong = 264;
function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - hq);
}
console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(pickupLocation) {
  const numberOfBlocks = distanceFromHqInBlocks(pickupLocation);

  return numberOfBlocks * feetLong;
}

console.log(distanceFromHqInFeet());

function distanceTravelledInFeet(start, destination) {
  const travel = Math.abs(destination - start);
  return travel * feetLong;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
