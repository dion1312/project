let courses=[];
let courseName = document.getElementById('courseName');
let typosMathimatos=document.getElementById("typosMathimatos");
let fromDate=document.getElementById("fromDate");
let toDate=document.getElementById("toDate");

let btnSubmit = document.getElementById('submit');
btnSubmit.addEventListener('click', submit);

let btnReset = document.getElementById('reset');
btnReset.addEventListener('click', reset);

let btnUpdate = document.getElementById('update');
btnUpdate.addEventListener('click', update);

let divCourses= document.getElementById('courses');

function Course(courseName, typosMathimatos, fromDate,toDate) {
    this.courseName = courseName;
    this.typosMathimatos= typosMathimatos;
    this.fromDate = fromDate;
    this.toDate = toDate;
}

function courseToString(course) {
    return (`${course.courseName} ${course.typosMathimatos} ${course.fromDate} ${course.toDate}`);
}

function submit(event) {
    event.preventDefault();

let myCourse = new Course(courseName.value, typosMathimatos.value, fromDate.value, toDate.value);
    courses.push(myCourse);
    let btnEdit = document.createElement('button');
    btnEdit.textContent = 'Edit';
    btnEdit.courseIndex = courses.length - 1;
    btnEdit.addEventListener('click', edit);
    createParagraphElement(myCourse, btnEdit);
    btnReset.click();
    console.log(courses);
}


function reset(event) {
        console.log("Form is reset");
        btnSubmit.textContent = 'Add';
    }
function edit(event) {
    courseName.value = courses[this.courseIndex].courseName;
    typosMathimatos.value = course[this.courseIndex].typosMathimatos;
    fromDate.value = courses[this.courseIndex].fromDate;
    toDate.value = courses[this.courseIndex].toDate;
    btnSubmit.hidden = true;
    btnUpdate.hidden = false;
    btnUpdate.courseIndex = this.courseIndex;
    console.log(courseToString(courses[this.courseIndex]));
    }

function update(event) {
    event.preventDefault();
    console.log(this.courseIndex);
    console.log(courseToString(new Course(courseName.value, typosMathimatos.value, fromDate.value, toDate.value)));
    courses[this.courseIndex] = new Course(courseName.value, typosMathimatos.value, fromDate.value, toDate.value);
    divCourses.innerHTML = '';
    for(let i = 0; i < courses.length; i++) {
        let btnEdit = document.createElement('button');
        btnEdit.textContent = 'Edit';
        btnEdit.courseIndex = i;
        btnEdit.addEventListener('click', edit);
        createParagraphElement(courses[i], btnEdit);
    }
    btnUpdate.hidden = true;
    btnSubmit.hidden = false;
    btnReset.click();
}


function createParagraphElement(course, editButton) {
    let paragraph = document.createElement('p');
    paragraph.innerText = courseToString(course);
    let spanSpace = document.createElement('span');
    spanSpace.innerHTML = '&nbsp;';
    paragraph.append(spanSpace, editButton);
    divCourses.append(paragraph);
}