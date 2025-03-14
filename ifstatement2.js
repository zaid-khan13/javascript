// New Grading System
// A+: 90-100
// A: 80-89
// B:70-79
// C: 60-69
// D: 50-49
// E: 40-39
// F: Fail

let studentPercentage = 70;

if (studentPercentage > 90) {
    console.log("A+");
    
} else if (studentPercentage > 80) {
    console.log("A");
    
} else if (studentPercentage > 70) {
    console.log("B");
    
} else if (studentPercentage > 60) {
    console.log("C");
    
} else if (studentPercentage < 50) {
    console.log("D");
    
} else if (studentPercentage < 40) {
    console.log("E");
    
} else {
    console.log("F");
    
}
