let option=prompt("What to you want to do");
let list=[],i=0;

if(option=="new"){
    let add=prompt("Add a Todo");
    let listArr=[],length=0;
    while(add!="quit"){
        option=prompt("What to you want to do");
        // add=prompt("Add another Todo")  
        listArr[i]=add;
        i++;
    }
    if(add=="quit"){
        console.log("Quit App");
    }  
}
else if(option=="list"){
   console.log(list);
}
// else if(option=="delete"){

// }




// Adding elements to array


// let add=prompt("enter data");
// let i=0;
// while(add!="q"){
//     add=prompt("enter another data");
//     arr[i]=add;
//     i++;
// }

// console.log(arr);