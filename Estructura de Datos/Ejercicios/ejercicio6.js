
for (let i = 0; i < 1000; i++) {
    if (esperfecto(i) == true) {
        console.log(i)
    }
    
}
function esperfecto(num) {
    if (num == sumadivs(num)) {
        return true;
    } else {
        return false;
    }
}


sumadivs
