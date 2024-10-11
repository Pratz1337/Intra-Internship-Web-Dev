// Sample data for courses
const coursesData = [
    { code: 'CS101', name: 'Introduction to Computer Science', department: 'Computer Science', credits: 4, semester: 1 },
    { code: 'EE201', name: 'Digital Electronics', department: 'Electronics', credits: 3, semester: 3 },
    { code: 'ME301', name: 'Thermodynamics', department: 'Mechanical', credits: 4, semester: 5 },
    { code: 'IS401', name: 'Database Management Systems', department: 'Information Science', credits: 3, semester: 4 },
    { code: 'CV201', name: 'Structural Engineering', department: 'Civil', credits: 4, semester: 3 }
];

// Function to populate the courses table
function populateCoursesTable() {
    const tableBody = document.querySelector('.courses-table tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    coursesData.forEach(course => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${course.code}</td>
            <td>${course.name}</td>
            <td>${course.department}</td>
            <td>${course.credits}</td>
            <td>${course.semester}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to initialize the page
function initCoursesPage() {
    populateCoursesTable();
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initCoursesPage);