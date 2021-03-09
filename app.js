// 'use strict'

let table = document.getElementById('table');
let headName = ['Id', 'Name', 'Email', 'Mobile', 'Age', 'Tuition']
let allStudent = [];
//==============================================================
function Student(Email, Mobile, Tuition) {
    this.Email = Email;
    this.Mobile = Mobile;
    this.age = 0;
    this.Tuition = Tuition;

    this.id = 0;
    this.name = '';

    allStudent.push(this);
    console.log(this);
}
//===============================================================
Student.prototype.calAge = function () {
    this.age = Math.floor(Math.random() * (24 - 18 + 1)) + 18

}
//================================================================
Student.prototype.studentId = function () {
    for (let i = 0; i < allStudent.length; i++) {
        this.id += 1;
    }
}

//===================================================================

Student.prototype.gitThename = function () {

    this.name = this.Email.split("@")[0];

}
//==================================================================
function makeHead() {
    let tr = document.createElement('tr')
    table.appendChild(tr)

    for (let i = 0; i < headName.length; i++) {
        let th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = headName[i];
    }
} makeHead();
getitame();
//============================================================
function rander() {
    for (let i = 0; i < allStudent.length; i++) {
        let trStudent = document.createElement('tr')
        table.appendChild(trStudent)


        let td1 = document.createElement('td')
        trStudent.appendChild(td1);
        td1.textContent = allStudent[i].id


        let td2 = document.createElement('td')
        trStudent.appendChild(td2);
        td2.textContent = allStudent[i].name

        let td3 = document.createElement('td')
        trStudent.appendChild(td3);
        td3.textContent = allStudent[i].Email

        let td4 = document.createElement('td')
        trStudent.appendChild(td4);
        td4.textContent = allStudent[i].age


        let td5 = document.createElement('td')
        trStudent.appendChild(td5);
        td5.textContent = allStudent[i].Tuition


    }
}
//===============================================
// let haneen=new Student('haneen','8898','qwe')


// haneen.studentId();
// haneen.gitThename();
// haneen.calAge();
// haneen=rander();
//=========================================================
let form = document.getElementById('form')
form.addEventListener('submit', addNewstudent)

function addNewstudent(event) {
    event.preventDefault();

    let email = event.target.studentEmail.value;
    let num = event.target.studentMobilnum.value;
    let tuition = event.target.tuition.value;

    table.textContent = '';
    makeHead();
    let newStudent = new Student(email, num, tuition)
    newStudent.studentId();

    newStudent.gitThename();
    rander();
    newStudent.calAge();
    setitam();
}
//====================================================
function setitam() {
    localStorage.setItem('stuaent', JSON.stringify(allStudent))
}

function getitame() {

    if (localStorage.getItem('student')) {
        allStudent=JSON.parse(localStorage.getItem('student'))
        rander();
    }

}













