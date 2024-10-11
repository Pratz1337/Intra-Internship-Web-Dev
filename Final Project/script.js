// Update college name and admin details
document.addEventListener('DOMContentLoaded', function() {
    // Update college name
    const sidebarHeader = document.querySelector('.sidebar-header h3');
    sidebarHeader.textContent = 'RIT Admin Dashboard';

    // Update admin name
    const adminName = document.querySelector('.user-wrapper h4');
    adminName.textContent = 'Dr. N.V.R. Naidu';

    // Update admin role
    const adminRole = document.querySelector('.user-wrapper small');
    adminRole.textContent = 'Principal';
});

// Dynamic data for dashboard cards
const dashboardData = {
    totalStudents: 5000,
    totalTeachers: 350,
    coursesOffered: 30,
    upcomingExams: 8
};

// Update dashboard cards with dynamic data
function updateDashboardCards() {
    const cards = document.querySelectorAll('.card p');
    cards[0].textContent = dashboardData.totalStudents;
    cards[1].textContent = dashboardData.totalTeachers;
    cards[2].textContent = dashboardData.coursesOffered;
    cards[3].textContent = dashboardData.upcomingExams;
}

// Sample data for recent admissions
const recentAdmissions = [
    { name: 'Priya Sharma', course: 'B.E. Computer Science', date: '2024-07-15', status: 'Admitted' },
    { name: 'Rahul Patel', course: 'B.E. Electronics', date: '2024-07-14', status: 'Pending' },
    { name: 'Ananya Reddy', course: 'B.E. Mechanical', date: '2024-07-13', status: 'Admitted' },
    { name: 'Karthik S', course: 'B.E. Information Science', date: '2024-07-12', status: 'Admitted' }
];

// Populate recent admissions table
function populateRecentAdmissions() {
    const tableBody = document.querySelector('.recent-students table tbody');
    tableBody.innerHTML = ''; // Clear existing rows

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

// Add active class to current nav item
function setActiveNavItem() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove the preventDefault to allow navigation
            // e.preventDefault(); // This line should be removed
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Initialize dashboard
function initDashboard() {
    updateDashboardCards();
    populateRecentAdmissions();
    setActiveNavItem();
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initDashboard);
