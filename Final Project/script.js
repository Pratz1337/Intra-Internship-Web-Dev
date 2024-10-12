document.addEventListener('DOMContentLoaded', function() {
    const sidebarHeader = document.querySelector('.sidebar-header h3');
    sidebarHeader.textContent = 'RIT Admin Dashboard';

    const adminName = document.querySelector('.user-wrapper h4');
    adminName.textContent = 'Dr. N.V.R. Naidu';

    const adminRole = document.querySelector('.user-wrapper small');
    adminRole.textContent = 'Principal';
});

const dashboardData = {
    totalStudents: 5000,
    totalTeachers: 350,
    coursesOffered: 30,
    upcomingExams: 8
};

function updateDashboardCards() {
    const cards = document.querySelectorAll('.card p');
    cards[0].textContent = dashboardData.totalStudents;
    cards[1].textContent = dashboardData.totalTeachers;
    cards[2].textContent = dashboardData.coursesOffered;
    cards[3].textContent = dashboardData.upcomingExams;
}

const recentAdmissions = [
    { name: 'Priya Sharma', course: 'B.E. Computer Science', date: '2024-07-15', status: 'Admitted' },
    { name: 'Rahul Patel', course: 'B.E. Electronics', date: '2024-07-14', status: 'Pending' },
    { name: 'Ananya Reddy', course: 'B.E. Mechanical', date: '2024-07-13', status: 'Admitted' },
    { name: 'Karthik S', course: 'B.E. Information Science', date: '2024-07-12', status: 'Admitted' }
];

function populateRecentAdmissions() {
    const tableBody = document.querySelector('.recent-students table tbody');
    tableBody.innerHTML = '';

    recentAdmissions.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.course}</td>
            <td>${student.date}</td>
            <td>${student.status}</td>
        `;
        tableBody.appendChild(row);
    });
}

function setActiveNavItem() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function initDashboard() {
    updateDashboardCards();
    populateRecentAdmissions();
    setActiveNavItem();
}

document.addEventListener('DOMContentLoaded', initDashboard);
