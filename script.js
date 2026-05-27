function markPresent() {
    addAttendance("Present");
}

function markAbsent() {
    addAttendance("Absent");
}

function addAttendance(status) {
    let studentName = document.getElementById("studentName").value;

    if(studentName === "") {
        alert("Please enter student name");
        return;
    }

    let li = document.createElement("li");
    li.textContent = studentName + " - " + status;

    document.getElementById("attendanceList").appendChild(li);

    document.getElementById("studentName").value = "";
}