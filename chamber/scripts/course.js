const courses = [
  { code: "WDD130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD231", name: "Frontend Development I", credits: 3, completed: false },
  { code: "CSE110", name: "Programming Basics", credits: 2, completed: true },
  { code: "CSE210", name: "Programming with Classes", credits: 3, completed: false }
];

const courseContainer = document.getElementById('courses');
const totalCredits = document.getElementById('totalCredits');

function displayCourses(list) {
  courseContainer.innerHTML = "";
  list.forEach(course => {
    const div = document.createElement('div');
    div.className = course.completed ? 'course completed' : 'course';
    div.innerHTML = `<h3>${course.code}</h3><p>${course.name}</p><p>Credits: ${course.credits}</p>`;
    courseContainer.appendChild(div);
  });

  const credits = list.reduce((sum, course) => sum + course.credits, 0);
  totalCredits.textContent = credits;
}

document.getElementById('allBtn').addEventListener('click', () => displayCourses(courses));
document.getElementById('wddBtn').addEventListener('click', () => displayCourses(courses.filter(c => c.code.startsWith("WDD"))));
document.getElementById('cseBtn').addEventListener('click', () => displayCourses(courses.filter(c => c.code.startsWith("CSE"))));

displayCourses(courses);
