let canvas = document.querySelector('.canvas');

/*
  0 = пусто
  
  1 = пешка (pawn)
  2 = ладья
  3 = конь
  4 = слон
  5 = ферзь
  6 = король
*/
let place = [
  [12,13,14,15,16,14,13,12],
  [11,11,11,11,11,11,11,11],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1,1],
  [2,3,4,5,6,4,3,2],
  ];

let bg = false;
let triger = false;
let copyCordy = [];
let copyImg = 0;
var motion = document.querySelector('#a');
let bw = true;
let castling = true;

//пешка
function pawn(y, x, clr){
  if(clr > 10){
    if(!bw){
    if ((place[y+1][x-1]<10)&&(place[y+1][x-1]!=0)) {
      place[y + 1][x - 1] = [place[y + 1][x - 1], true];
      motion = document.querySelector(`#a${[y+1]+[x-1]}`);
      motion.style.backgroundColor = '#009966';
    }
    if ((place[y+1][x+1]<10)&&!(place[y+1][x+1]==0)) {
      place[y + 1][x + 1] = [place[y + 1][x + 1], true];
      motion = document.querySelector(`#a${[y+1]+[x+1]}`);
      motion.style.backgroundColor = '#009966';
    }
    if(place[y+1][x] == 0){
    place[y+1][x] = [0, true];
    motion = document.querySelector(`#a${[y+1]+[x]}`);
    motion.style.backgroundColor = '#009966'
    }
    if ((y == 1) && (place[y + 2][x] == 0)) {
      motion = document.querySelector(`#a${[y+2]+[x]}`);
      place[y + 2][x] = [0, true];
      motion.style.backgroundColor = '#009966';
    }
    copyImg = 11;
    }
  }
  else{
    if(bw){
    if(place[y-1][x-1] > 10){
      place[y-1][x-1] = [place[y-1][x-1], true];
      motion = document.querySelector(`#a${[y-1]+[x-1]}`);
      motion.style.backgroundColor = '#009966';
    }
    if(place[y-1][x+1] > 10){
      place[y-1][x+1] = [place[y-1][x+1], true];
      motion = document.querySelector(`#a${[y-1]+[x+1]}`);
      motion.style.backgroundColor = '#009966';
    }
    if(place[y-1][x] == 0){
    motion = document.querySelector(`#a${[y-1]+[x]}`);
    place[y-1][x] = [0, true];
    }
    motion.style.backgroundColor = '#009966';
    console.log(place[y])
    if ((y == 6) && (place[y - 2][x] == 0)) {
      motion = document.querySelector(`#a${[y-2]+[x]}`);
      place[y - 2][x] = [0, true];
    }
    motion.style.backgroundColor = '#009966';
    copyImg = 1;
      }
    }
  }

//ладья
function rook(y, x, clr){
  if ((clr > 10) && !bw) {
    copyImg = 12;
  }
  else {
    console.log(clr);
    if ((clr < 10) && bw) {
      copyImg = 2;
    }
    else {
      if ((copyImg==0)&&bw&&(clr<10)){
        copyImg = 2;
      }
      else{
        return;
      }
    }
  }
  //проверка вверх
  for(let i = 1; i <= 7; i++){
    if ((y - i) == (-1)) {
      break;
    }
    if(place[y-i][x] == 0){
      place[y-i][x] = [0, true];
      motion = document.querySelector(`#a${[y-i]+[x]}`);
      motion.style.backgroundColor='#009966';
    }
    else{
      motion = document.querySelector(`#a${[y-i]+[x]}`);
      if((place[y-i][x]>10)&&(copyImg==2)){
      place[y-i][x]=[place[y-i][x],true];
      motion.style.backgroundColor='#009966';
      }
      if((place[y-i][x]<10)&&(copyImg==12)){
      place[y-i][x]=[place[y-i][x],true];
      motion.style.backgroundColor='#009966';
      }
      break;
    }
  }
  //проверка вниз
  for(let i = 1; i <= 7; i++){
    if((y + i) == (8)){
      break;
    }
    if(place[y+i][x] == 0){
      place[y+i][x] = [0, true];
      motion = document.querySelector(`#a${[y+i]+[x]}`);
      motion.style.backgroundColor = '#009966';
    }
    else{
      motion = document.querySelector(`#a${[y+i]+[x]}`);
      if((place[y+i][x]>10)&&(copyImg==2)){
      place[y+i][x]=[place[y+i][x],true];
      motion.style.backgroundColor='#009966';
      }
      if((place[y+i][x]<10)&&(copyImg==12)){
      place[y+i][x]=[place[y+i][x],true];
      motion.style.backgroundColor='#009966';
      }
      break;
    }
  }
  //проверка влево
  for (let i = 1; i <= 7; i++) {
    if ((x - i) == (-1)) {
      break;
    }
    if (place[y][x-i] == 0) {
      place[y][x-i] = [0, true];
      motion = document.querySelector(`#a${[y]+[x-i]}`);
      motion.style.backgroundColor = '#009966';
    }
    else {
      motion=document.querySelector(`#a${[y]+[x-i]}`);
      if((place[y][x-i]>10)&&(copyImg==2)){
        place[y][x-i]=[place[y][x-i],true];
      motion.style.backgroundColor='#009966';
      }
      if((place[y][x-i]<10)&&(copyImg==12)){
        place[y][x-i]=[place[y][x-i],true];
      motion.style.backgroundColor='#009966';
      }
      break;
    }
  }
  //проверка вправо
  for (let i = 1; i <= 7; i++) {
    if ((x + i) == (8)) {
      break;
    }
    if (place[y][x+i] == 0) {
      place[y][x+i] = [0, true];
      motion = document.querySelector(`#a${[y]+[x+i]}`);
      motion.style.backgroundColor = '#009966';
    }
    else {
      motion=document.querySelector(`#a${[y]+[x+i]}`);
      if((place[y][x+i]>10)&&(copyImg==2)){
        place[y][x+i]=[place[y][x+i],true];
      motion.style.backgroundColor='#009966';
      }
      if((place[y][x+i]<10)&&(copyImg==12)){
        place[y][x+i]=[place[y][x+i],true];
      motion.style.backgroundColor='#009966';
      }
      break;
    }
  }
}

//конь
function knight(y, x, clr){
  if ((clr > 10) && !bw) {
    copyImg = 13;
  }
  else {
    console.log(clr);
    if ((clr < 10) && bw) {
      copyImg = 3;
    }
    else {
      if ((copyImg==0)&&bw&&(clr<10)){
        copyImg = 3;
      }
      else{
        return;
      }
    }
  }
  for(let i=1,a=2; i < 3 ; i++, a--){
    if((y-a) < 0 || (x+i) > 7){
      continue;
    }
    motion = document.querySelector(`#a${[y-a]+[x+i]}`);
    if((place[y-a][x+i]>10)&&(copyImg==3)){
      place[y-a][x+i]=[place[y-a][x+i],true];
      motion.style.backgroundColor='#009966';
    }
    if((place[y-a][x+i]<10)&&(copyImg==13)){
      place[y-a][x+i]=[place[y-a][x+i],true];
      motion.style.backgroundColor='#009966';
    }
    if(place[y-a][x+i] == 0){
      place[y-a][x+i] = [0, true];
      motion.style.backgroundColor='#009966';
    }
  }
  for(let i=1,a=2; i < 3 ; i++, a--){
    if((y+a) > 7|| (x-i) < 0){
      continue;
    }
    motion = document.querySelector(`#a${[y+a]+[x-i]}`);
    if((place[y+a][x-i]>10)&&(copyImg==3)){
      place[y+a][x-i]=[place[y+a][x-i],true];
      motion.style.backgroundColor='#009966';
    }
    if((place[y+a][x-i]<10)&&(copyImg==13)){
      place[y+a][x-i]=[place[y+a][x-i],true];
      motion.style.backgroundColor='#009966';
    }
    if(place[y+a][x-i] == 0){
      place[y+a][x-i] = [0, true];
      motion.style.backgroundColor='#009966';
    }
  }
  for(let i=1,a=2; i < 3 ; i++, a--){
    if((y-a) < 0 || (x-i) < 0){
      continue;
    }
    motion = document.querySelector(`#a${[y-a]+[x-i]}`);
    if((place[y-a][x-i]>10)&&(copyImg==3)){
      place[y-a][x-i]=[place[y-a][x-i],true];
      motion.style.backgroundColor='#009966';
    }
    if((place[y-a][x-i]<10)&&(copyImg==13)){
      place[y-a][x-i]=[place[y-a][x-i],true];
      motion.style.backgroundColor='#009966';
    }
    if(place[y-a][x-i] == 0){
      place[y-a][x-i] = [0, true];
      motion.style.backgroundColor='#009966';
    }
  }
  for(let i=1,a=2; i < 3 ; i++, a--){
    if((y+a) > 7 || (x+i) > 7){
      continue;
    }
    motion = document.querySelector(`#a${[y+a]+[x+i]}`);
    if((place[y+a][x+i]>10)&&(copyImg==3)){
      place[y+a][x+i]=[place[y+a][x+i],true];
      motion.style.backgroundColor='#009966';
    }
    if((place[y+a][x+i]<10)&&(copyImg==13)){
      place[y+a][x+i]=[place[y+a][x+i],true];
      motion.style.backgroundColor='#009966';
    }
    if(place[y+a][x+i] == 0){
      place[y+a][x+i] = [0, true];
      motion.style.backgroundColor='#009966';
    }
  }
}

//слон
function bishop(y, x, clr){
  if ((clr > 10) && !bw) {
    copyImg = 14;
  }
  else {
    console.log(clr);
    if ((clr < 10) && bw) {
      copyImg = 4;
    }
    else {
      if ((copyImg==0)&&bw&&(clr<10)){
        copyImg = 4;
      }
      else{
        return;
      }
    }
  }
  for (let i = 1; i <= 7; i++) {
    if ((x - i) == (-1) || (y - i) == (-1)) {
      break;
    }
    motion = document.querySelector(`#a${[y-i]+[x-i]}`);
    if (place[y-i][x-i] == 0) {
      place[y-i][x-i] = [0, true];
      motion.style.backgroundColor='#009966';
    }
    else {
      motion = document.querySelector(`#a${[y-i]+[x-i]}`);
      if ((place[y-i][x-i]>10)&&(copyImg==4)){
      place[y-i][x-i]=[place[y-i][x-i],true];
      motion.style.backgroundColor='#009966';
      }
      if((place[y-i][x-i]<10)&&(copyImg==14)){
      place[y-i][x-i]=[place[y-i][x-i],true];
      motion.style.backgroundColor='#009966';
      }
      break;
    }
  }
  
  for (let i=1; i <= 7; i++) {
    if ((x + i) == 8 || (y - i) == (-1)) {
      break;
    }
    motion = document.querySelector(`#a${[y-i]+[x+i]}`);
    if (place[y-i][x+i] == 0) {
      place[y-i][x+i] = [0, true];
      motion.style.backgroundColor = '#009966';
    }
    else {
    motion = document.querySelector(`#a${[y-i]+[x+i]}`);
    if((place[y-i][x+i]>10)&&(copyImg==4)){
      place[y-i][x+i]=[place[y-i][x+i],true];
      motion.style.backgroundColor='#009966';
    }
    if((place[y-i][x+i]<10)&&(copyImg==14)){
      place[y-i][x+i]=[place[y-i][x+i],true];
      motion.style.backgroundColor='#009966';
    }
      break;
    }
  }
  
  for (let i = 1; i <= 7; i++) {
    if ((x + i) == 8 || (y+i) == 8) {
      break;
    }
    motion = document.querySelector(`#a${[y+i]+[x+i]}`);
    if (place[y+i][x+i] == 0) {
      place[y+i][x+i] = [0, true];
      motion.style.backgroundColor = '#009966';
    }
    else {
    motion = document.querySelector(`#a${[y+i]+[x+i]}`);
    if((place[y+i][x+i]>10)&&(copyImg==4)){
      place[y+i][x+i]=[place[y+i][x+i],true];
      motion.style.backgroundColor='#009966';
    }
    if((place[y+i][x+i]<10)&&(copyImg==14)){
      place[y+i][x+i]=[place[y+i][x+i],true];
      motion.style.backgroundColor='#009966';
    }
      break;
    }
  }
  for (let i=1; i <= 7; i++) {
    if ((x + i) == 8 || (y + i) == 8 ){
      break;
    }
    motion = document.querySelector(`#a${[y+i]+[x-i]}`);
    if (place[y+i][x-i] == 0) {
      place[y+i][x-i] = [0, true];
      motion.style.backgroundColor = '#009966';
    }
    else {
    motion = document.querySelector(`#a${[y+i]+[x-i]}`);
    if((place[y+i][x-i]>10)&&(copyImg==4)){
      place[y+i][x-i]=[place[y+i][x-i],true];
      motion.style.backgroundColor='#009966';
    }
    if((place[y+i][x-i]<10)&&(copyImg==14)){
      place[y+i][x-i]=[place[y+i][x-i],true];
      motion.style.backgroundColor='#009966';
    }
      break;
    }
  }
}

//ферзь
function queen(y, x, clr){
  if ((clr > 10) && !bw) {
    copyImg = 15;
  }
  else {
    console.log(clr);
    if ((clr < 10) && bw) {
      copyImg = 5;
    }
    else {
      if ((copyImg == 0) && bw && (clr < 10)) {
        copyImg = 5;
      }
      else {
        return;
      }
    }
  }
//проверка вверх
  for(let i = 1; i <= 7; i++){
    if ((y - i) == (-1)) {
      break;
    }
    if(place[y-i][x] == 0){
      place[y-i][x] = [0, true];
      motion = document.querySelector(`#a${[y-i]+[x]}`);
      motion.style.backgroundColor='#009966';
    }
    else{
      motion = document.querySelector(`#a${[y-i]+[x]}`);
      if((place[y-i][x]>10)&&(copyImg==5)){
      place[y-i][x]=[place[y-i][x],true];
      motion.style.backgroundColor='#009966';
      }
      if((place[y-i][x]<10)&&(copyImg==15)){
      place[y-i][x]=[place[y-i][x],true];
      motion.style.backgroundColor='#009966';
      }
      break;
    }
  }
  //проверка вниз
  for(let i = 1; i <= 7; i++){
    if((y + i) == (8)){
      break;
    }
    if(place[y+i][x] == 0){
      place[y+i][x] = [0, true];
      motion = document.querySelector(`#a${[y+i]+[x]}`);
      motion.style.backgroundColor = '#009966';
    }
    else{
      motion = document.querySelector(`#a${[y+i]+[x]}`);
      if((place[y+i][x]>10)&&(copyImg==5)){
      place[y+i][x]=[place[y+i][x],true];
      motion.style.backgroundColor='#009966';
      }
      if((place[y+i][x]<10)&&(copyImg==15)){
      place[y+i][x]=[place[y+i][x],true];
      motion.style.backgroundColor='#009966';
      }
      break;
    }
  }
  //проверка влево
  for (let i = 1; i <= 7; i++) {
    if ((x - i) == (-1)) {
      break;
    }
    if (place[y][x-i] == 0) {
      place[y][x-i] = [0, true];
      motion = document.querySelector(`#a${[y]+[x-i]}`);
      motion.style.backgroundColor = '#009966';
    }
    else {
      motion=document.querySelector(`#a${[y]+[x-i]}`);
      if((place[y][x-i]>10)&&(copyImg==5)){
        place[y][x-i]=[place[y][x-i],true];
      motion.style.backgroundColor='#009966';
      }
      if((place[y][x-x]<10)&&(copyImg==15)){
        place[y][x-i]=[place[y][x-i],true];
      motion.style.backgroundColor='#009966';
      }
      break;
    }
  }
  //проверка вправо
  for (let i = 1; i <= 7; i++) {
    if ((x + i) == (8)) {
      break;
    }
    if (place[y][x+i] == 0) {
      place[y][x+i] = [0, true];
      motion = document.querySelector(`#a${[y]+[x+i]}`);
      motion.style.backgroundColor = '#009966';
    }
    else {
      motion=document.querySelector(`#a${[y]+[x+i]}`);
      if((place[y][x+i]>10)&&(copyImg==5)){
        place[y][x+i]=[place[y][x+i],true];
      motion.style.backgroundColor='#009966';
      }
      if((place[y][x+i]<10)&&(copyImg==15)){
        place[y][x+i]=[place[y][x+i],true];
      motion.style.backgroundColor='#009966';
      }
      break;
    }
  }
  for (let i = 1; i <= 7; i++) {
    if ((x - i) == (-1) || (y - i) == (-1)) {
      break;
    }
    motion = document.querySelector(`#a${[y-i]+[x-i]}`);
    if (place[y-i][x-i] == 0) {
      place[y-i][x-i] = [0, true];
      motion.style.backgroundColor='#009966';
    }
    else {
      motion = document.querySelector(`#a${[y-i]+[x-i]}`);
      if ((place[y-i][x-i]>10)&&(copyImg==5)){
      place[y-i][x-i]=[place[y-i][x-i],true];
      motion.style.backgroundColor='#009966';
      }
      if((place[y-i][x-i]<10)&&(copyImg==15)){
      place[y-i][x-i]=[place[y-i][x-i],true];
      motion.style.backgroundColor='#009966';
      }
      break;
    }
  }
  
  for (let i=1; i <= 7; i++) {
    if ((x + i) == 8 || (y - i) == (-1)) {
      break;
    }
    motion = document.querySelector(`#a${[y-i]+[x+i]}`);
    if (place[y-i][x+i] == 0) {
      place[y-i][x+i] = [0, true];
      motion.style.backgroundColor = '#009966';
    }
    else {
    motion = document.querySelector(`#a${[y-i]+[x+i]}`);
    if((place[y-i][x+i]>10)&&(copyImg==5)){
      place[y-i][x+i]=[place[y-i][x+i],true];
      motion.style.backgroundColor='#009966';
    }
    if((place[y-i][x+i]<10)&&(copyImg==15)){
      place[y-i][x+i]=[place[y-i][x+i],true];
      motion.style.backgroundColor='#009966';
    }
      break;
    }
  }
  
  for (let i = 1; i <= 7; i++) {
    if ((x + i) == 8 || (y+i) == 8) {
      break;
    }
    motion = document.querySelector(`#a${[y+i]+[x+i]}`);
    if (place[y+i][x+i] == 0) {
      place[y+i][x+i] = [0, true];
      motion.style.backgroundColor = '#009966';
    }
    else {
    motion = document.querySelector(`#a${[y+i]+[x+i]}`);
    if((place[y+i][x+i]>10)&&(copyImg==5)){
      place[y+i][x+i]=[place[y+i][x+i],true];
      motion.style.backgroundColor='#009966';
    }
    if((place[y+i][x+i]<10)&&(copyImg==15)){
      place[y+i][x+i]=[place[y+i][x+i],true];
      motion.style.backgroundColor='#009966';
    }
      break;
    }
  }
  for (let i=1; i <= 7; i++) {
    if ((x + i) == 8 || (y + i) == 8 ){
      break;
    }
    motion = document.querySelector(`#a${[y+i]+[x-i]}`);
    if (place[y+i][x-i] == 0) {
      place[y+i][x-i] = [0, true];
      motion.style.backgroundColor = '#009966';
    }
    else {
    motion = document.querySelector(`#a${[y+i]+[x-i]}`);
    if((place[y+i][x-i]>10)&&(copyImg==5)){
      place[y+i][x-i]=[place[y+i][x-i],true];
      motion.style.backgroundColor='#009966';
    }
    if((place[y+i][x-i]<10)&&(copyImg==15)){
      place[y+i][x-i]=[place[y+i][x-i],true];
      motion.style.backgroundColor='#009966';
    }
      break;
    }
  }
}

//король
function king(y, x, clr){
  if ((clr > 10) && !bw) {
    copyImg = 16;
  }
  else {
    console.log(clr);
    if ((clr < 10) && bw) {
      copyImg = 6;
    }
    else {
      if ((copyImg == 0) && bw && (clr < 10)) {
        copyImg = 6;
      }
      else {
        return;
      }
    }
  }
  for(let i=0,a=0; a <= 1; i++){
    if((y+i) > 7 || (x+a) > 7){
      if(i == 1){
      a++;
      i = (-1);
    }
      continue;
    }
    motion = document.querySelector(`#a${[y+i]+[x+a]}`);
    if((place[y+i][x+a]>10)&&(copyImg==6)){
      place[y+i][x+a]=[place[y+i][x+a],true];
      motion.style.backgroundColor='#009966';
    }
    if((place[y+i][x+a]<10)&&(copyImg==16)){
      place[y+i][x+a]=[place[y+i][x+a],true];
      motion.style.backgroundColor='#009966';
    }
    if(place[y+i][x+a] == 0){
      place[y+i][x+a] = [0, true];
      motion.style.backgroundColor = '#009966';
    }
    if(i == 1){
      a++;
      i = (-1);
    }
  }
  
  for(let i=0,a=0; a <= 1; i++){
    if((y-i) < 0 || (x-a) < 0){
      if(i == 1){
        a++;
        i = (-1);
      }
      continue;
    }
    motion = document.querySelector(`#a${[y-i]+[x-a]}`);
    if((place[y-i][x-a]>10)&&(copyImg==6)){
      place[y-i][x-a]=[place[y-i][x-a],true];
      motion.style.backgroundColor='#009966';
    }
    if((place[y-i][x-a]<10)&&(copyImg==16)){
      place[y-i][x-a]=[place[y-i][x-a],true];
      motion.style.backgroundColor='#009966';
    }
    if(place[y-i][x-a] == 0){
      place[y-i][x-a] = [0, true];
      motion.style.backgroundColor='#009966';
    }
    if(i == 1){
      a++;
      i = (-1);
    }
  }
  if(copyImg==6){
    if((place[y-1][x+1]>10)){
      place[y-1][x+1]=[place[y-1][x+1],true];
      motion=document.querySelector(`#a${[y-1]+[x+1]}`);
        motion.style.backgroundColor='#009966';
    }
    else{
      if(!((y-1) < 0 || (x+1) > 7)&&(place[y-1][x+1]==0)){
        place[y-1][x+1]=[0,true];
        motion=document.querySelector(`#a${[y-1]+[x+1]}`);
        motion.style.backgroundColor='#009966';
        }
      }
      if((place[y+1][x-1]>10)){
        place[y+1][x-1]=[place[y+1][x-1],true];
      motion=document.querySelector(`#a${[y+1]+[x-1]}`);
        motion.style.backgroundColor='#009966';
      }
      else{
        if(!((y+1) > 7 || (x-1) < 0)&&(place[y+1][x-1]==0)){
          place[y+1][x-1] = [0, true];
          motion = document.querySelector(`#a${[y+1]+[x-1]}`);
          motion.style.backgroundColor = '#009966';
        }
      }
    }
    if(copyImg==16){
    if((place[y-1][x+1]<10)){
      place[y-1][x+1]=[place[y-1][x+1],true];
      motion=document.querySelector(`#a${[y-1]+[x+1]}`);
        motion.style.backgroundColor='#009966';
    }
    else{
      if(!((y-1) < 0 || (x+1) > 7)&&(place[y-1][x+1]==0)){
        place[y-1][x+1]=[0,true];
        motion=document.querySelector(`#a${[y-1]+[x+1]}`);
        motion.style.backgroundColor='#009966';
        }
      }
      if((place[y+1][x-1]<10)){
        place[y+1][x-1]=[place[y+1][x-1],true];
      motion=document.querySelector(`#a${[y+1]+[x-1]}`);
        motion.style.backgroundColor='#009966';
      }
      else{
        if(!((y+1) > 7 || (x-1) < 0)&&(place[y+1][x-1]==0)){
          place[y+1][x-1] = [0, true];
          motion = document.querySelector(`#a${[y+1]+[x-1]}`);
          motion.style.backgroundColor = '#009966';
        }
      }
    }
  }

//очищает поле от true клеток
function clearPlace(){
  bg = true;
  for(let y = 0; y <= 7; y++){
    for(let x = 0; x <= 7; x++){
      if(place[y][x][1]){
        place[y][x] = place[y][x][0];
      }
      motion = document.querySelector(`#a${[y]+[x]}`);
      if(getComputedStyle(motion).backgroundColor == "rgb(0, 153, 102)"){
        if(!bg){
          motion.style.backgroundColor = "#200000";
        }
        else{
          motion.style.backgroundColor = "#EBEBEB";
        }
      }
      bg = !bg;
    }
    bg = !bg;
  }
}

function check(y, x){
  if(place[y][x][1]){
    bw = !bw;
    clearPlace();
    let firstBlock = document.querySelector(`#a${[copyCordy[0]] + [copyCordy[1]]}`);
    let SecondBlock = document.querySelector(`#a${[y]+[x]}`);
    place[copyCordy[0]][copyCordy[1]] = 0;
    firstBlock.style.backgroundImage = 'url("")';
    switch(copyImg){
      case 1:SecondBlock.style.backgroundImage = 'url("img/wP.png")';
        place[y][x] = 1;
        break;
      case 2:SecondBlock.style.backgroundImage = 'url("img/wR.png")';
        place[y][x] = 2;
        break;
      case 3:SecondBlock.style.backgroundImage = 'url("img/wN.png")';
        place[y][x] = 3;
        break;
      case 4: SecondBlock.style.backgroundImage = 'url("img/wB.png")';
        place[y][x] = 4;
      break;
      case 5: SecondBlock.style.backgroundImage = 'url("img/wQ.png")';
        place[y][x] = 5;
      break;
      case 6: SecondBlock.style.backgroundImage = 'url("img/wK.png")';
        place[y][x] = 6;
      break;
      case 11:SecondBlock.style.backgroundImage = 'url("img/bP.png")';
        place[y][x] = 11;
        break;
      case 12:SecondBlock.style.backgroundImage = 'url("img/bR.png")';
        place[y][x] = 12;
        break;
      case 13:SecondBlock.style.backgroundImage = 'url("img/bN.png")';
        place[y][x] = 13;
        break;
      case 14: SecondBlock.style.backgroundImage = 'url("img/bB.png")';
        place[y][x] = 14;
      break;
      case 15: SecondBlock.style.backgroundImage = 'url("img/bQ.png")';
        place[y][x] = 15;
      break;
      case 16: SecondBlock.style.backgroundImage = 'url("img/bK.png")';
        place[y][x] = 16;
      break;
    }
    copyImg = 0;
    console.log(place)
  }
  else{
    copyCordy = [y, x];
    switch(place[y][x]){
      
      // пешка (pawn)
    case 1: pawn(y, x, place[y][x]);
      break;
      
      //ладья
    case 2: rook(y, x, place[y][x]);
      break;
      
      //конь
    case 3: knight(y, x, place[y][x]);
      break;
      
      //слон
    case 4: bishop(y, x, place[y][x]);
      break;
      
      //ферзь
    case 5: queen(y, x, place[y][x]);
      break;
      
      //король
    case 6: king(y, x, place[y][x]);
      break;
      
      // пешка (pawn)
    case 11: pawn(y, x, place[y][x]);
      break;
      
      //ладья
    case 12: rook(y, x, place[y][x]);
      break;
      
      //конь
    case 13: knight(y, x, place[y][x]);
      break;
      
      //слон
    case 14: bishop(y, x, place[y][x]);
      break;
      
      //ферзь
    case 15: queen(y, x, place[y][x]);
      break;
      
      //король
    case 16: king(y, x, place[y][x]);
      break;
    }
  }
}
for(let y = 0; y <= 8; y++){
  for(let x = 0; x <= 8; x++){
    let block = document.createElement('div');
    if(x == 8 || y == 8){
      block.classList.add('edge');
      bg = !bg;
    }
    else{
      if(bg){
      block.classList.add('black');
      block.addEventListener('click', function(){
        check(y, x);
      })
      bg = !bg;
      }
      else{
      block.classList.add('white');
      block.addEventListener('click', function(){
        check(y, x);
      })
      bg = !bg;
      }
      block.setAttribute('id', `a${[y]+[x]}`);
      switch(place[y][x]){
      case 0:;
        break;
      case 1:block.style.backgroundImage = 'url("img/wP.png")';
        break;
      case 2:block.style.backgroundImage = 'url("img/wR.png")';
        break;
      case 3:block.style.backgroundImage = 'url("img/wN.png")';
        break;
      case 4: block.style.backgroundImage = 'url("img/wB.png")';
        break;
      case 5: block.style.backgroundImage = 'url("img/wQ.png")';
        break;
      case 6: block.style.backgroundImage = 'url("img/wK.png")';
        break;
      case 11:block.style.backgroundImage = 'url("img/bP.png")';
        break;
      case 12:block.style.backgroundImage = 'url("img/bR.png")';
        break;
      case 13:block.style.backgroundImage = 'url("img/bN.png")';
        break;
      case 14: block.style.backgroundImage = 'url("img/bB.png")';
        break;
      case 15: block.style.backgroundImage = 'url("img/bQ.png")';
        break;
      case 16: block.style.backgroundImage = 'url("img/bK.png")';
        break;
      }
    }
    block.style.left = `${100*x}px`;
    block.style.top = `${100*y}px`;
    canvas.append(block);
  }
}