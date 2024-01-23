let a = prompt('');
let p = parseInt(a);

let b = prompt('');
let q = parseInt(b);
document.writeln('before swapping : ', p, ' ', q);


// Swapping the values using a temporary variable
let temp = p;
p = q;
q = temp;

document.writeln('<br>after swapping : ', p, ' ', q);
