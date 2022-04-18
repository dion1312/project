let trainers=[];
let trainerFName = document.getElementById('trainerFName');
let trainerLName = document.getElementById('trainerLName');
let trainerEidikothta= document.getElementById('trainerEidikothta');

let btnSubmit = document.getElementById('submit');
btnSubmit.addEventListener('click', submit);

let btnReset= document.getElementById('reset');
btnReset.addEventListener('click', reset);

let btnUpdate = document.getElementById('update');
btnUpdate.addEventListener('click', update);

let divTrainers= document.getElementById('trainers');

function Trainer(trainerFName, trainerLName, trainerEidikothta) {
    this.trainerFName = trainerFName;
    this.trainerLName = trainerLName;
    this.trainerEidikothta = trainerEidikothta;
}

function trainerToString(trainer) {
    return (`${trainer.trainerFName} ${trainer.trainerLName} ${trainer.trainerEidikothta}`);
}

function submit(event) {
    event.preventDefault();
    
let myTrainer = new Trainer(trainerFName.value, trainerLName.value, trainerEidikothta.value);
trainers.push(myTrainer);
let btnEdit = document.createElement('button');
btnEdit.textContent = 'Edit';
btnEdit.trainerIndex = trainers.length - 1;
btnEdit.addEventListener('click', edit);
createParagraphElement(myTrainer, btnEdit);
btnReset.click();
console.log(trainers);
}

function reset(event) {
    console.log("Form is reset");
    btnSubmit.textContent = 'Add';
}

function edit(event) {
    trainerFName.value = trainers[this.trainerIndex].trainerFName;
    trainerLName.value = trainers[this.trainerIndex].trainerLName;
    trainerEidikothta.value = trainers[this.trainerIndex].trainerEidikothta;
    btnSubmit.hidden = true;
    btnUpdate.hidden = false;
    btnUpdate.trainerIndex = this.trainerIndex;
    console.log(trainerToString(trainers[this.trainerIndex]));
    }

function update(event) {
    event.preventDefault();
    //console.log(this.trainerToString(new Trainer(trainerFName.value, trainerLName.value, trainerEidikothta.value)));
    trainers[this.trainerIndex] = new Trainer(trainerFName.value, trainerLName.value, trainerEidikothta.value);
    divTrainers.innerHTML = '';
     for(let i = 0; i < trainers.length; i++) {
        let btnEdit = document.createElement('button');
         btnEdit.textContent = 'Edit';
         btnEdit.trainerIndex = i;
         btnEdit.addEventListener('click', edit);
         createParagraphElement(trainers[i], btnEdit);
        }
    btnUpdate.hidden = true;
    btnSubmit.hidden = false;
    btnReset.click();
}

function createParagraphElement(trainer, editButton) {
    let paragraph = document.createElement('p');
    paragraph.innerText = trainerToString(trainer);
    let spanSpace = document.createElement('span');
    spanSpace.innerHTML = '&nbsp;';
    paragraph.append(spanSpace, editButton);
    divTrainers.append(paragraph);
}
    


