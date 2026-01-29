let isLoggedIn = true;
let isProfileComplete = false;
let mess;

if (isLoggedIn === false) {
    mess = "Please Login";
}
else if (isLoggedIn === true && isProfileComplete === false) {
    mess = "Complete your profile";
}
else if (isLoggedIn === true && isProfileComplete === true) {
    mess = "Welcome back";
}

console.log(mess);
