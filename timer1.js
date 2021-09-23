// setTimeout(function(){ alert("Hello"); }, 3000);
const input = process.argv.slice(2)
console.log(input)

const beep = function () {
    process.stdout.write('\x07');
    console.log("beep")
}

function scheduleBeep () {
for(const num of input) {
    if(!isNaN(num) && num > 0) {
setTimeout(beep, num*1000);
        }
    }
}

scheduleBeep(input)


// function alarm(time) {
//     console.log(!isNaN(time))
//     console.log(time < 0)
//     if(!isNaN(time) && time < 0 && time === "" ) {
//         console.log(time)
//     }

// }



// alarm("a")
// alarm(true)
// alarm(-5)
// alarm()

// else if
//mulitple if go through all of them