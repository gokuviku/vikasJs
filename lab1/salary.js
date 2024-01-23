// Taking base salary as input
let basesalary = parseFloat(prompt('Enter base salary in RS: '));

let hra = (10 / 100) * basesalary;
let da = (5 / 100) * basesalary;
let ta = (8 / 100) * basesalary;

let grossSalary = basesalary + hra + da + ta;

document.write('Base Salary: ' + basesalary + ' RS<br>');
document.write('10% HRA: ' + hra + ' rs<br>');
document.write('5% DA: ' + da + ' rs<br>');
document.write('8% TA: ' + ta + ' rs<br>');
document.write('Gross Salary: ' + grossSalary + ' rs');
