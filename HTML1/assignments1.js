let assignments=[];
let assignmentName = document.getElementById('assignmentName');
let subdate = document.getElementById("subdate");
//let oralMark = document.getElementById("oralMark");
//let assignmentMark = document.getElementById("assignmentMark");
//let totalMark = (oralMark + assignmentMark);

let btnSubmit = document.getElementById('submit');
btnSubmit.addEventListener('click', submit);

let btnReset = document.getElementById('reset');
btnReset.addEventListener('click', reset);

let btnUpdate = document.getElementById('update');
btnUpdate.addEventListener('click', update);

let divAssignments= document.getElementById('assignments');


function Assignment(assignmentName, subdate) {
    this.assignmentName = assignmentName;
    this.subdate= subdate;
}

function assignmentToString(assignment) {
    return (`${assignment.assignmentName} ${assignment.subdate}`);
}

function submit(event) {
    event.preventDefault();

let myAssignment = new Assignment(assignmentName.value, subdate.value);
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
    assignmentName.value = assignments[this.assignmentIndex].assignmentName;
    subdate.value = assignments[this.assignmentIndex].subdate;
    btnSubmit.hidden = true;
    btnUpdate.hidden = false;
    btnUpdate.assignmentIndex = this.assignmentIndex;
    console.log(assignmentToString(assignments[this.assignmentIndex]));
    }

function update(event) {
    event.preventDefault();
    console.log(this.assignmentIndex);
    console.log(assignmentToString(new Assignment(assignmentName.value, subdate.value)));
    assignments[this.assignmentIndex] = new Assignment(assignmentName.value, subdate.value);
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
