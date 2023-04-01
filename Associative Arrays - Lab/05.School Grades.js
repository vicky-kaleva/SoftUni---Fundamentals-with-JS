function schoolGrades(inputData) {
    let students = {};
    //creating object of students
    for (let line of inputData) {
        let [name, grades] = [line.split(' ').shift(), line.split(' ').slice(1).map(Number)];
        if (!students.hasOwnProperty(name)) {
            students[name] = [];
            grades.forEach(grade => students[name].push(grade))
        } else {
            grades.forEach(grade => students[name].push(grade))
        }
    }
    //getting keys and sort them
    let studentsNames = Object.keys(students).sort((a, b) => a.localeCompare(b));

    //iterate by sorted keys , get average grade and print
    for (let name of studentsNames) {
        let average = students[name].reduce((el, x) => el + x) / students[name].length;
        console.log(`${name}: ${average.toFixed(2)}`);
    }
}
schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])