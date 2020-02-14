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

let displayErrorUser= () => {
    $user.className = "field error";
}

let displayErrorPass= () => {
    $pass.className = "field error";
}

$signin.addEventListener('click', displayBlock);
$close.addEventListener('click', displayNone);
$submit.addEventListener('click', displayError);

$user.addEventListener('focus', displayErrorUser);
$pass.addEventListener('focus', displayErrorPass);


$modal.classList.toggle("show");

let eventLog= () => {
    console.log(event)
}
$signin.addEventListener('click', eventLog);
$submit.addEventListener('click', eventLog);



