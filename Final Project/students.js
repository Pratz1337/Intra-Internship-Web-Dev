const semestersData = [
    {
        id: 1,
        name: "Semester 1",
        departments: [
            {
                name: "Computer Science",
                students: ["Aarav Patel", "Diya Sharma", "Rohan Gupta"]
            },
            {
                name: "Electronics",
                students: ["Neha Singh", "Vikram Reddy", "Priya Desai"]
            }
        ]
    },
    {
        id: 2,
        name: "Semester 2",
        departments: [
            {
                name: "Mechanical",
                students: ["Arjun Kumar", "Ananya Reddy", "Rahul Mehta"]
            },
            {
                name: "Civil",
                students: ["Kavya Sharma", "Aditya Patel", "Meera Gupta"]
            }
        ]
    },
    {
        id: 3,
        name: "Semester 3",
        departments: [
            {
                name: "Computer Science",
                students: ["Aarav Patel", "Diya Sharma", "Rohan Gupta"]
            },
            {
                name: "Electronics",
                students: ["Neha Singh", "Vikram Reddy", "Priya Desai"]
            }
        ]
    },
    {
        id: 4,
        name: "Semester 4",
        departments: [
            {
                name: "Computer Science",
                students: ["Aarav Patel", "Diya Sharma", "Rohan Gupta"]
            },
            {
                name: "Electronics",
                students: ["Neha Singh", "Vikram Reddy", "Priya Desai"]
            }
        ]
    },
];

function createSemesterCard(semester) {
    const card = document.createElement('div');
    card.className = 'semester-card';
    card.innerHTML = `
        <h3>${semester.name}</h3>
        <i class="fas fa-edit edit-icon" title="Edit Semester"></i>
    `;

    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('edit-icon')) {
            showPopup(semester);
        }
    });

    const editIcon = card.querySelector('.edit-icon');
    editIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        editSemester(semester); // Ensure this function is called correctly
    });

    return card;
}

function showPopup(semester) {
    const popup = document.querySelector('.popup-overlay');
    const popupTitle = popup.querySelector('.popup-title');
    const departmentsContainer = popup.querySelector('.departments-container');

    popupTitle.textContent = semester.name;
    departmentsContainer.innerHTML = '';

    const editSemesterBtn = document.createElement('button');
    editSemesterBtn.className = 'edit-semester';
    editSemesterBtn.innerHTML = '<i class="fas fa-edit" title="Edit Semester"></i>';
    editSemesterBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the popup from closing
        editSemester(semester); // Ensure this function is called correctly
    });
    popup.querySelector('.popup-content').insertBefore(editSemesterBtn, popupTitle);

    semester.departments.forEach(dept => {
        const deptCard = document.createElement('div');
        deptCard.className = 'department-card';
        deptCard.innerHTML = `
            <h4>${dept.name}</h4>
            <i class="fas fa-edit edit-icon" title="Edit Department"></i>
            <ul class="student-list">
                ${dept.students.map(student => `<li>${student}</li>`).join('')}
            </ul>
        `;
        const editIcon = deptCard.querySelector('.edit-icon');
        editIcon.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the popup from closing
            editDepartment(dept); // Ensure this function is called correctly
        });
        departmentsContainer.appendChild(deptCard);
    });

    popup.classList.remove('hidden');
}

function editSemester(semester) {
    alert(`Editing ${semester.name}`);
}

function editDepartment(department) {
    alert(`Editing ${department.name} department`);
}

function populateSemesterCards() {
    const container = document.querySelector('.semester-container');
    semestersData.forEach(semester => {
        const card = createSemesterCard(semester);
        container.appendChild(card);
    });
}

function initStudentsPage() {
    populateSemesterCards();

    const closePopupButton = document.querySelector('.close-popup');
    closePopupButton.addEventListener('click', () => {
        document.querySelector('.popup-overlay').classList.add('hidden');
    });
}

document.addEventListener('DOMContentLoaded', initStudentsPage);
