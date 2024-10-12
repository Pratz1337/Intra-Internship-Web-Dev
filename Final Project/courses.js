// Sample data for courses
const coursesData = [
    { code: 'CS201', name: 'Data Structures', department: 'Computer Science', credits: 4, semester: 3 },
    { code: 'CS202', name: 'Algorithms', department: 'Computer Science', credits: 4, semester: 4 },
    { code: 'CS203', name: 'Computer Networks', department: 'Computer Science', credits: 3, semester: 4 },
    { code: 'CS204', name: 'Database Systems', department: 'Computer Science', credits: 4, semester: 5 },
    { code: 'CS205', name: 'Operating Systems', department: 'Computer Science', credits: 4, semester: 5 },
    { code: 'CS206', name: 'Software Engineering', department: 'Computer Science', credits: 3, semester: 6 },
    { code: 'CS207', name: 'Artificial Intelligence', department: 'Computer Science', credits: 4, semester: 7 },
    { code: 'CS208', name: 'Web Development', department: 'Computer Science', credits: 3, semester: 7 },
    { code: 'EE201', name: 'Digital Electronics', department: 'Electronics', credits: 3, semester: 3 },
    { code: 'EE202', name: 'Electronics and Communication', department: 'Electronics', credits: 4, semester: 4 },
    { code: 'EE203', name: 'Electromagnetic Theory', department: 'Electronics', credits: 3, semester: 4 },
    { code: 'EE204', name: 'Microprocessor and Interfacing', department: 'Electronics', credits: 4, semester: 5 },
    { code: 'EE205', name: 'Control Systems', department: 'Electronics', credits: 4, semester: 5 },
    { code: 'EE206', name: 'Communication Systems', department: 'Electronics', credits: 4, semester: 6 },
    { code: 'EE207', name: 'Power Electronics', department: 'Electronics', credits: 3, semester: 6 },
    { code: 'EE208', name: 'Digital Signal Processing', department: 'Electronics', credits: 4, semester: 7 },
    { code: 'EE209', name: 'VLSI Design', department: 'Electronics', credits: 3, semester: 7 },
    { code: 'EE210', name: 'Embedded Systems', department: 'Electronics', credits: 4, semester: 8 },
    { code: 'EE211', name: 'Robotics and Automation', department: 'Electronics', credits: 3, semester: 8 },
    { code: 'ME302', name: 'Mechanics of Solids', department: 'Mechanical', credits: 4, semester: 4 },
    { code: 'ME303', name: 'Thermal Engineering', department: 'Mechanical', credits: 3, semester: 4 },
    { code: 'ME304', name: 'Machine Design', department: 'Mechanical', credits: 4, semester: 5 },
    { code: 'ME305', name: 'Manufacturing Technology', department: 'Mechanical', credits: 4, semester: 5 },
    { code: 'ME306', name: 'Heat Transfer', department: 'Mechanical', credits: 3, semester: 6 },
    { code: 'ME307', name: 'Refrigeration and Air Conditioning', department: 'Mechanical', credits: 4, semester: 6 },
    { code: 'ME308', name: 'Automotive Engineering', department: 'Mechanical', credits: 3, semester: 7 },
    { code: 'ME309', name: 'Aerospace Engineering', department: 'Mechanical', credits: 4, semester: 7 },
    { code: 'ME310', name: 'Mechatronics', department: 'Mechanical', credits: 3, semester: 8 },
    { code: 'ME311', name: 'CAD/CAM', department: 'Mechanical', credits: 4, semester: 8 },
    { code: 'IS302', name: 'Database Systems', department: 'Information Science', credits: 4, semester: 4 },
    { code: 'IS303', name: 'Software Engineering', department: 'Information Science', credits: 3, semester: 4 },
    { code: 'IS304', name: 'Computer Networks', department: 'Information Science', credits: 4, semester: 5 },
    { code: 'IS305', name: 'Operating Systems', department: 'Information Science', credits: 4, semester: 5 },
    { code: 'IS306', name: 'Data Mining', department: 'Information Science', credits: 3, semester: 6 },
    { code: 'IS307', name: 'Artificial Intelligence', department: 'Information Science', credits: 4, semester: 6 },
    { code: 'IS308', name: 'Web Technologies', department: 'Information Science', credits: 3, semester: 7 },
    { code: 'IS309', name: 'Cyber Security', department: 'Information Science', credits: 4, semester: 7 },
    { code: 'IS310', name: 'Data Science', department: 'Information Science', credits: 3, semester: 8 },
    { code: 'IS311', name: 'Cloud Computing', department: 'Information Science', credits: 4, semester: 8 },
   
    { code: 'EE301', name: 'Signals and Systems', department: 'Electronics', credits: 4, semester: 5 },
    { code: 'EE401', name: 'Microcontrollers', department: 'Electronics', credits: 3, semester: 7 },
    { code: 'ME301', name: 'Thermodynamics', department: 'Mechanical', credits: 4, semester: 5 },
    { code: 'ME401', name: 'Fluid Mechanics', department: 'Mechanical', credits: 3, semester: 7 },
    { code: 'ME501', name: 'Heat Transfer', department: 'Mechanical', credits: 4, semester: 8 },
    { code: 'IS301', name: 'Web Technologies', department: 'Information Science', credits: 4, semester: 3 },
    { code: 'IS401', name: 'Database Management Systems', department: 'Information Science', credits: 3, semester: 4 },
    { code: 'IS501', name: 'Artificial Intelligence', department: 'Information Science', credits: 4, semester: 8 },
  
];

function organizeCoursesData(courses) {
    const organizedData = {};
    courses.forEach(course => {
        if (!organizedData[course.department]) {
            organizedData[course.department] = {};
        }
        if (!organizedData[course.department][course.semester]) {
            organizedData[course.department][course.semester] = [];
        }
        organizedData[course.department][course.semester].push(course);
    });
    return organizedData;
}

function createDepartmentCards(organizedData) {
    const departmentsGrid = document.getElementById('departments-grid');
    departmentsGrid.innerHTML = ''; // Clear existing content

    for (const [department, semesters] of Object.entries(organizedData)) {
        const departmentCard = document.createElement('div');
        departmentCard.className = 'department-card';
        departmentCard.innerHTML = `<h4>${department}</h4>`;

        for (const [semester, courses] of Object.entries(semesters)) {
            const semesterCard = document.createElement('div');
            semesterCard.className = 'semester-card';
            semesterCard.innerHTML = `<h5>Semester ${semester}</h5>`;

            courses.forEach(course => {
                const courseItem = document.createElement('div');
                courseItem.className = 'course-item';
                courseItem.textContent = `${course.code}: ${course.name}`;
                semesterCard.appendChild(courseItem);
            });

            departmentCard.appendChild(semesterCard);
        }

        departmentsGrid.appendChild(departmentCard);
    }
}

function initCoursesPage() {
    const organizedData = organizeCoursesData(coursesData);
    createDepartmentCards(organizedData);
}

document.addEventListener('DOMContentLoaded', initCoursesPage);