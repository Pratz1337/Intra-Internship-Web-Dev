// Sample data for students
const studentsData = [
    { id: 1, name: 'Aarav Patel', course: 'B.E. Computer Science', year: '2nd', gpa: 3.8 },
    { id: 2, name: 'Diya Sharma', course: 'B.E. Electronics', year: '3rd', gpa: 3.9 },
    { id: 3, name: 'Rohan Gupta', course: 'B.E. Mechanical', year: '1st', gpa: 3.7 },
    { id: 4, name: 'Neha Singh', course: 'B.E. Information Science', year: '4th', gpa: 4.0 },
    { id: 5, name: 'Vikram Reddy', course: 'B.E. Civil', year: '2nd', gpa: 3.6 }
];

// Function to populate the students table
function populateStudentsTable() {
    const tableBody = document.querySelector('.students-table tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    studentsData.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.course}</td>
            <td>${student.year}</td>
            <td>${student.gpa}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to initialize the page
function initStudentsPage() {
    populateStudentsTable();
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initStudentsPage);