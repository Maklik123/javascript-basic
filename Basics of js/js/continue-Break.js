
var john = [ 'john', 'smith', 1998, 'designer', false, 'blue'];
for(var i=0; i<john.length;i++){
    if(typeof john[i] !== 'string'){
        continue;
    }
    console.log(john[i]);
}


for(var i=0; i<john.length;i++){
    if(typeof john[i] !== 'string'){
        break;
    }
    console.log(john[i]);
}