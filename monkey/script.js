let closeface=document.getElementById('closeface');
let openface=document.getElementById('openface');


console.log("connected");

// let openmonkey=()=>{
//     openface.classList.add('active');
//     closeface.classList.remove('active');

// }


// let needclosemonkey=()=>{
//     openface.classList.remove('active');
//     closeface.classList.add('active');
// }

closeface.addEventListener('click',()=>{
    openface.classList.add('active');
    closeface.classList.remove('active');
})


openface.addEventListener('click',()=>{
    openface.classList.remove('active');
    closeface.classList.add('active');
})

