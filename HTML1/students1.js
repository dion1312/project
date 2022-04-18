
/*function addRow(){
    //get input values
    var studentFName = document.getElementById("studentFName").value;
    var studentLName = document.getElementById("studentLName").value;
    var studentDate = document.getElementById("studentDate").value;
    var studentFees = document.getElementById("studentFees").value;
    //get the html table
    //0 = the first table
    var table = document.getElementsByTagName("table")[0];
    //add new empty row to the table
    var newRow = table.insertRow(1);
    //add cells to the row
    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);
    //add values to the cells
    cel1.innerHTML = studentFName;
    cel2.innerHTML = studentLName;
    cel3.innerHTML = studentDate;
    cel4.innerHTML = studentFees;
    !!!!!προσπαθησα να βρω τροπο να βαζω τα add μεσα στον πινακα αντι για απο κατω,
    δεν ειχα πολυ χρονο να ψαχτω και δεν τα καταφερα!!!

}*/




let students=[];
let studentFName = document.getElementById('studentFName');
let studentLName = document.getElementById('studentLName');
let studentDate= document.getElementById('studentDate');
let studentFees= document.getElementById('studentFees');

let btnSubmit = document.getElementById('submit');
btnSubmit.addEventListener('click', submit);

let btnReset = document.getElementById('reset');
btnReset.addEventListener('click', reset);

let btnUpdate = document.getElementById('update');
btnUpdate.addEventListener('click', update);

let divStudents= document.getElementById('students');

function Student(fName, lName, dateOfBirth, fees) {
    this.fName = fName;
    this.lName = lName;
    this.dateOfBirth = dateOfBirth;
    this.fees = fees;
}

function studentToString(student) {
    return (`${student.fName} ${student.lName} ${student.dateOfBirth} ${student.fees}`);
}

function submit(event) {
    event.preventDefault();

let myStudent = new Student(studentFName.value, studentLName.value, studentDate.value, studentFees.value);
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
    studentFName.value = students[this.studentIndex].fName;
    studentLName.value = students[this.studentIndex].lName;
    studentDate.value = students[this.studentIndex].dateOfBirth;
    studentFees.value = students[this.studentIndex].fees;
    btnSubmit.hidden = true;
    btnUpdate.hidden = false;
    btnUpdate.studentIndex = this.studentIndex;
    console.log(studentToString(students[this.studentIndex]));
    }

function update(event) {
    event.preventDefault();
    console.log(this.studentIndex);
    console.log(studentToString(new Student(studentFName.value, studentLName.value, studentDate.value, studentFees.value)));
    students[this.studentIndex] = new Student(studentFName.value, studentLName.value, studentDate.value, studentFees.value);
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
