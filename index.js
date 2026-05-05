let selectedColors = ['Red','Green'];
//To add an object at specific index
selectedColors[2]='Blue';
//To add an object at end
selectedColors.push("Black");
//To an object at beginning 
selectedColors.unshift('Yellow');
console.log(selectedColors);
//To get the length
console.log(selectedColors.length);
//To remove an element according to index
selectedColors.pop();
console.log('After Pop',selectedColors);
console.log(selectedColors.length);