const projects = [
  {
    name: 'Counter App',
    dirPath: '001-counter-app',
  },
  {
    name: 'Number Comparator',
    dirPath: '002-number-comparator',
  },
  {
    name: 'Grade Calculator',
    dirPath: '003-grade-calculator',
  },
  {
    name: 'Number Table',
    dirPath: '004-number-table',
  },
  {
    name: 'Number Table of 1-10',
    dirPath: '005-number-table-1-10',
  },
  {
    name: 'Employee Management',
    dirPath: '006-employee-table',
  },
  {
    name: 'Simple E-commerce',
    dirPath: '007-e-commerce',
  },
];

const contributors = [
  {
    name: 'BongoDev',
    dirPath: 'bongodev',
    email: 'support@bongodev.com',
  },
  {
    name: 'Nazma',
    dirPath: 'nazma98',
    email: 'nazma.sarker1398@gmail.com',
  },
  {
    name: 'Talha',
    dirPath: 'Talha',
    email: 'ameertalha22@gmail.com',
  },
  {
    name: 'Md. Al Amin',
    dirPath: 'Alamin',
    email: 'aaalaamin7@gmail.com',
  },
  {
    name: 'Sumiya Yasmin',
    dirPath: 'sumiya-yasmin',
    email: 'sumiyayasmin665@gmail.com',
  },
  {
    name: 'Than Win',
    dirPath: 'thanwin',
    email: 'thanwinhline84@gmail.com',
  },
  {
    name: 'Tamjid',
    dirPath: 'Tamjid',
    email: 'tamjidtj6@gmail.com',
  },
  {
    name: 'Dipu',
    dirPath: 'Dipu',
    email: 'mojumderdipu66@gmail.com',
  },
];

const projectsContainer = document.getElementById('projects-container');

renderProjectsAndContributors();

function renderProjectsAndContributors() {
  projects.forEach((project) => {
    const projectSection = getProjectSection(project);
    projectsContainer.appendChild(projectSection);
  });
}

function getProjectSection(project) {
  const projectSection = document.createElement('div');

  const projectTitle = getProjectTitle(project.name);
  projectSection.appendChild(projectTitle);

  const contributors = getContributors(project.dirPath);
  projectSection.appendChild(contributors);

  return projectSection;
}

function getProjectTitle(projectName) {
  const projectTitle = document.createElement('h1');
  projectTitle.className = 'text-2xl font-bold text-gray-800 mb-4';
  projectTitle.innerText = projectName;
  return projectTitle;
}

function getContributors(projectPath) {
  const contributorsList = document.createElement('ul');
  contributorsList.className = 'list-disc list-inside';

  contributors.forEach((contributor) => {
    const listItem = document.createElement('li');

    const projectLink = document.createElement('a');
    projectLink.className = 'text-blue-600 visited:text-purple-600';
    projectLink.innerText = contributor.name;
    projectLink.href = `./${projectPath}/${contributor.dirPath}/index.html`;

    listItem.appendChild(projectLink);

    contributorsList.appendChild(listItem);
  });

  return contributorsList;
}
