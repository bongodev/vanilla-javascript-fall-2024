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
];

const contributors = [
  {
    name: 'BongoDev',
    dirPath: 'bongodev',
    email: 'support@bongodev.com',
  },
];

const projectsContainer = document.getElementById('projects-container');

renderProjectsAndContributors();

function renderProjectsAndContributors() {
  for (let projectNo = 0; projectNo < projects.length; projectNo++) {
    const project = projects[projectNo];
    const projectSection = getProjectSection(project);
    projectsContainer.appendChild(projectSection);
  }
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

  for (
    let contributorNo = 0;
    contributorNo < contributors.length;
    contributorNo++
  ) {
    const contributor = contributors[contributorNo];
    const listItem = document.createElement('li');

    const projectLink = document.createElement('a');
    projectLink.className = 'text-blue-600 visited:text-purple-600';
    projectLink.innerText = contributor.name;
    projectLink.href = `./${projectPath}/${contributor.dirPath}/index.html`;

    listItem.appendChild(projectLink);

    contributorsList.appendChild(listItem);
  }

  return contributorsList;
}
