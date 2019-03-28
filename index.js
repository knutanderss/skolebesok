function validate() {
    var data = document.getElementById('applications').value;

    var rows = data.split('\n');
    for (var row of rows) {
        var fields = row.split(' ');
        var person = {
            name : fields[0],
            birth : new Date(fields[1]),
            studyStart : new Date(fields[2]),
            studyEnd : new Date(fields[3]), 
            jobStart : new Date(fields[4]), 
            jobEnd : new Date(fields[5]),
            valid : false
        }
        
        var studyLengthInYears = millisToYear(person.studyEnd - person.studyStart);
        var jobLengthInYears = millisToYear(person.jobEnd - person.jobStart);
        
        if (studyLengthInYears > 5) {
            person.valid = true; 
        }
        else if (person.studyStart < new Date('2010-01-01') && studyLengthInYears > 3 && jobLengthInYears > 3) {
            person.valid = true;
        }
        
        //console.log(person.name + ": " + (person.valid ? "Godkjent" : "Ikke godkjent"));
        
        var tr = document.createElement("tr");
        tr.innerHTML += "<td>" + person.name + "</td>";
        tr.innerHTML += "<td>" + person.birth.toLocaleDateString() + "</td>";
        tr.innerHTML += "<td>" + person.studyStart.toLocaleDateString() + "</td>";
        tr.innerHTML += "<td>" + person.studyEnd.toLocaleDateString() + "</td>";
        tr.innerHTML += "<td>" + person.jobStart.toLocaleDateString() + "</td>";
        tr.innerHTML += "<td>" + person.jobEnd.toLocaleDateString() + "</td>";
        tr.classList.add(person.valid ? "table-success" : "table-danger");
        document.getElementById('table-rows').appendChild(tr);
    }
}

function millisToYear(millis) {
    return millis / (1000 * 60 * 60 * 24 * 30 * 12);
}

// validate();