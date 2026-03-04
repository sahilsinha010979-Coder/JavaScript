// We are given an array of marks of students. find out the students tha scored above 90.
const marks = [85, 92, 78, 95, 88];
let above90marks = marks.filter((value) => {
    return value > 90;
});
console.log(above90marks);