let students=[];
let coursePerStudent = document.getElementById('coursePerStudent');
let studentPerCourse = document.getElementById('studentPerCourse');

let btnSubmit = document.getElementById('submit');
btnSubmit.addEventListener('click', submit);

let btnReset = document.getElementById('reset');
btnReset.addEventListener('click', reset);

let btnUpdate = document.getElementById('update');
btnUpdate.addEventListener('click', update);

let divStudents= document.getElementById('students');

function Student(coursePerStudent, studentPerCourse) {
    this.coursePerStudent = coursePerStudent;
    this.studentPerCourse = studentPerCourse;
}

function studentToString(student) {
    return (`${student.coursePerStudent} ${student.studentPerCourse}`);
}

function submit(event) {
    event.preventDefault();

let myStudent = new Student(coursePerStudent.value, studentPerCourse.value);
    students.push(myStudent);
    let btnEdit = document.createElement('button');
    btnEdit.textContent = 'Edit';
    btnEdit.studentIndex = students.length - 1;
    btnEdit.addEventListener('click', edit);
    createParagraphElement(myStudent, btnEdit);
    btnReset.click();
    console.log(students);
}


function reset(event) {
        console.log("Form is reset");
        btnSubmit.textContent = 'Add';
    }
function edit(event) {
    coursePerStudent.value = students[this.studentIndex].coursePerStudent;
    studentPerCourse.value = students[this.studentIndex].studentPerCourse;
    btnSubmit.hidden = true;
    btnUpdate.hidden = false;
    btnUpdate.studentIndex = this.studentIndex;
    console.log(studentToString(students[this.studentIndex]));
    }

function update(event) {
    event.preventDefault();
    console.log(this.studentIndex);
    console.log(studentToString(new Student(coursePerStudent.value, studentPerCourse.value)));
    students[this.studentIndex] = new Student(coursePerStudent.value, studentPerCourse.value);
    divStudents.innerHTML = '';
    for(let i = 0; i < students.length; i++) {
        let btnEdit = document.createElement('button');
        btnEdit.textContent = 'Edit';
        btnEdit.studentIndex = i;
        btnEdit.addEventListener('click', edit);
        createParagraphElement(students[i], btnEdit);
    }
    btnUpdate.hidden = true;
    btnSubmit.hidden = false;
    btnReset.click();
}


function createParagraphElement(student, editButton) {
    let paragraph = document.createElement('p');
    paragraph.innerText = studentToString(student);
    let spanSpace = document.createElement('span');
    spanSpace.innerHTML = '&nbsp;';
    paragraph.append(spanSpace, editButton);
    divStudents.append(paragraph);
}
