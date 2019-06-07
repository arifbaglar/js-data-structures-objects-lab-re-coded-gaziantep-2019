// Write your solution in this file!
const driver={name: 'Sam'};
function updateDriverWithKeyAndValue(driver, key, value){
  const newdriver={}
  newdriver[key] = value;
 
  return newdriver;
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}
function deleteFromDriverByKey(driver, key){
  let newdriver={}
  newdriver= delete driver.key;
  return newdriver;
}
function destructivelyDeleteFromDriverByKey(driver, key){
  let newdriver={}
  newdriver= delete driver.key;
  return driver;
}