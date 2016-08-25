function random(max){
  if(max == undefined) max = 100;
  console.info("random max region : 0 ~ " + max);
  return Math.floor(Math.randowm() * max);
}
