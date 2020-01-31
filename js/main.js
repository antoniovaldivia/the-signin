let $signin =   document.querySelector('#signin') ;
let $close  =   document.querySelector('#close') ;
let $submit =   document.querySelector('#submit') ;
let $modal  =   document.querySelector('#modal') ;
let $user   =   document.querySelector('#user') ;
let $pass   =   document.querySelector('#pass') ;

let displayBlock= () => {
    $modal.style.display = "block";
}

let displayNone= () => {
    $modal.style.display = "none";
    $user.className = "field";
    $pass.className = "field";
}

let displayError= () => {
    $user.className = "field error";
    $pass.className = "field error";
}

$signin.addEventListener('click', displayBlock);
$close.addEventListener('click', displayNone);
$submit.addEventListener('click', displayError);



