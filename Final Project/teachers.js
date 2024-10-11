// Sample data for teachers
const teachersData = [
    { id: 1, name: 'Dr. Ananya Sharma', department: 'Computer Science', designation: 'Professor', experience: 15 },
    { id: 2, name: 'Prof. Rajesh Kumar', department: 'Electronics', designation: 'Associate Professor', experience: 12 },
    { id: 3, name: 'Dr. Priya Patel', department: 'Mechanical', designation: 'Assistant Professor', experience: 8 },
    { id: 4, name: 'Prof. Suresh Reddy', department: 'Information Science', designation: 'Professor', experience: 20 },
    { id: 5, name: 'Dr. Meera Gupta', department: 'Civil', designation: 'Associate Professor', experience: 10 }
];

// Function to populate the teachers table
function populateTeachersTable() {
    const tableBody = document.querySelector('.teachers-table tbody');
    tableBody.innerHTML = '';
    teachersData.forEach(teacher => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${teacher.id}</td>
            <td>${teacher.name}</td>
            <td>${teacher.department}</td>
            <td>${teacher.designation}</td>
            <td>${teacher.experience}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to initialize the page
function initTeachersPage() {
    populateTeachersTable();
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initTeachersPage);