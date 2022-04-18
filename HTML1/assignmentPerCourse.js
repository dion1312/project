let assignments=[];
let coursePerAssignment = document.getElementById('coursePerAssignment');
let assignmentPerCourse = document.getElementById("assignmentPerCourse");

let btnSubmit = document.getElementById('submit');
btnSubmit.addEventListener('click', submit);

let btnReset = document.getElementById('reset');
btnReset.addEventListener('click', reset);

let btnUpdate = document.getElementById('update');
btnUpdate.addEventListener('click', update);

let divAssignments= document.getElementById('assignments');


function Assignment(coursePerAssignment, assignmentPerCourse) {
    this.coursePerAssignment = coursePerAssignment;
    this.assignmentPerCourse= assignmentPerCourse;
}

function assignmentToString(assignment) {
    return (`${assignment.coursePerAssignment} ${assignment.assignmentPerCourse}`);
}

function submit(event) {
    event.preventDefault();

let myAssignment = new Assignment(coursePerAssignment.value, assignmentPerCourse.value);
    assignments.push(myAssignment);
    let btnEdit = document.createElement('button');
    btnEdit.textContent = 'Edit';
    btnEdit.assignmentIndex = assignments.length - 1;
    btnEdit.addEventListener('click', edit);
    createParagraphElement(myAssignment, btnEdit);
    btnReset.click();
    console.log(assignments);
}


function reset(event) {
        console.log("Form is reset");
        btnSubmit.textContent = 'Add';
    }
function edit(event) {
    coursePerAssignment.value = assignments[this.assignmentIndex].coursePerAssignment;
    assignmentPerCourse.value = assignments[this.assignmentIndex].assignmentPerCourse;
    btnSubmit.hidden = true;
    btnUpdate.hidden = false;
    btnUpdate.assignmentIndex = this.assignmentIndex;
    console.log(assignmentToString(assignments[this.assignmentIndex]));
    }

function update(event) {
    event.preventDefault();
    console.log(this.assignmentIndex);
    console.log(assignmentToString(new Assignment(coursePerAssignment.value, assignmentPerCourse.value)));
    assignments[this.assignmentIndex] = new Assignment(coursePerAssignment.value, assignmentPerCourse.value);
    divAssignments.innerHTML = '';
    for(let i = 0; i < assignments.length; i++) {
        let btnEdit = document.createElement('button');
        btnEdit.textContent = 'Edit';
        btnEdit.assignmentIndex = i;
        btnEdit.addEventListener('click', edit);
        createParagraphElement(assignments[i], btnEdit);
    }
    btnUpdate.hidden = true;
    btnSubmit.hidden = false;
    btnReset.click();
}


function createParagraphElement(assignment, editButton) {
    let paragraph = document.createElement('p');
    paragraph.innerText = assignmentToString(assignment);
    let spanSpace = document.createElement('span');
    spanSpace.innerHTML = '&nbsp;';
    paragraph.append(spanSpace, editButton);
    divAssignments.append(paragraph);
}
