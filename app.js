let studentList = [];
let data = JSON.parse(localStorage.getItem("studentList"));
if (data) {
  studentList = data;
}

button.addEventListener("click", (e) => {
  e.preventDefault();

  let name = formData.StudentName.value;
  let grade = formData.grade.value;
  let gender = formData.gender.value;
  let age = formData.age.value;

  let modal = document.getElementById('modal');
  let pmodal = document.getElementById('pModal');
  if (name==='' || grade==='' || gender==='' || age==='') {
    modal.style.display = 'block';
    pmodal.innerHTML = 'please fill the input.'
    
    return;
  };

  let studentData = {
    name,
    grade,
    gender,
    age,
  };
  studentList.push(studentData);
  displayData(studentList);
  localStorage.setItem("studentList", JSON.stringify(studentList));
  // console.log('hello');
  // table.hidden=false
  
 
});

function cancel() {
    let modal = document.getElementById('modal');
    modal.style.display="none";
    
}

function displayData(student) {
  show.innerHTML = "";
  student.forEach((student, i) => {
    show.innerHTML += `
          <tr>
              <td>${student.name}</td>
              <td>${student.grade}</td>
              <td>${student.gender}</td>
              <td>${student.age}</td>
              <td onclick="handleDelete(${i})"><button>Delete</button></td>
          </tr>
          `;
  });
}
displayData(studentList);

function handleDelete(index) {
  studentList.splice(index, 1);
  localStorage.setItem("studentList", JSON.stringify(studentList));
  displayData(studentList);
}

function toSearch() {
  let search = searchInput.value;
  let results = studentList.filter((student) => {
    return (
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.age.includes(search) ||
      student.grade.includes(search) ||
      student.gender.includes(search)
    );
  });
  displayData(results);
}