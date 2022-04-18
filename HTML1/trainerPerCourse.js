let trainersPerCourse=[];
let coursePerTrainer = document.getElementById('coursePerTrainer');
let trainerPerCourse = document.getElementById('trainerPerCourse');

let btnSubmit = document.getElementById('submit');
btnSubmit.addEventListener('click', submit);

let btnReset= document.getElementById('reset');
btnReset.addEventListener('click', reset);

let btnUpdate = document.getElementById('update');
btnUpdate.addEventListener('click', update);

let divTrainers= document.getElementById('trainersPerCourse');

function TrainerPerCourse(coursePerTrainer, trainerPerCourse) {
    this.coursePerTrainer = coursePerTrainer;
    this.trainerPerCourse = trainerPerCourse;
}

function trainerToString(trainerPerCourse) {
    return (`${trainerPerCourse.coursePerTrainer} ${trainerPerCourse.trainerPerCourse}`);
}

function submit(event) {
    event.preventDefault();
    
let myTrainer = new trainerPerCourse(coursePerTrainer.value, trainerPerCourse.value);
trainersPerCourse.push(myTrainer);
let btnEdit = document.createElement('button');
btnEdit.textContent = 'Edit';
btnEdit.trainerIndex = trainersPerCourse.length - 1;
btnEdit.addEventListener('click', edit);
createParagraphElement(myTrainer, btnEdit);
btnReset.click();
console.log(trainersPerCourse);
}

function reset(event) {
    console.log("Form is reset");
    btnSubmit.textContent = 'Add';
}

function edit(event) {
    coursePerTrainer.value = trainersPerCourse[this.trainerIndex].coursePerTrainer;
    trainerPerCourse.value = trainersPerCourse[this.trainerIndex].trainersPerCourse;
    btnSubmit.hidden = true;
    btnUpdate.hidden = false;
    btnUpdate.trainerPerCourseIndex = this.trainerPerCourseIndex;
    console.log(trainerToString(trainersPerCourse[this.trainerPerCourseIndex]));
    }

function update(event) {
    event.preventDefault();
    //console.log(this.trainerToString(new Trainer(trainerFName.value, trainerLName.value, trainerEidikothta.value)));
    trainersPerCourse[this.trainerIndex] = new trainerPerCourse(coursePerTrainer.value, trainerPerCourse.value);
    divTrainers.innerHTML = '';
     for(let i = 0; i < trainersPerCourse.length; i++) {
        let btnEdit = document.createElement('button');
         btnEdit.textContent = 'Edit';
         btnEdit.trainerPerCourseIndex = i;
         btnEdit.addEventListener('click', edit);
         createParagraphElement(trainersPerCourse[i], btnEdit);
        }
    btnUpdate.hidden = true;
    btnSubmit.hidden = false;
    btnReset.click();
}

function createParagraphElement(trainerPerCourse, editButton) {
    let paragraph = document.createElement('p');
    paragraph.innerText = trainerToString(trainerPerCourse);
    let spanSpace = document.createElement('span');
    spanSpace.innerHTML = '&nbsp;';
    paragraph.append(spanSpace, editButton);
    divTrainers.append(paragraph);
}
    