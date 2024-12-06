const projects = [
  'Counter App',
  'Number Comparator',
  'Grade Calculator',
  'Number Table',
];

const projectDirectories = [
  '001-counter-app',
  '002-number-comparator',
  '003-grade-calculator',
  '004-number-table',
];

const contributors = [
  'bongodev',
  'Alamin',
  'nazma98',
  'Sakib 2.2',
  'sumiya-yasmin',
  'Talha',
  'Tamjid',
  'promi',
  'thanwin',
];

const projectsContainer = document.getElementById('projects');

function getProjectUrl(projectIndex, contributorName) {
  return `./${projectDirectories[projectIndex]}/${contributorName}/index.html`;
}

function generateProjectTitle(projectName) {
  const projectTitle = document.createElement('h1');
  projectTitle.className = 'text-2xl font-bold text-gray-800 mb-4';
  projectTitle.innerText = projectName;

  return projectTitle;
}

function generateContributorsList(projectIndex) {
  const contributorsList = document.createElement('ul');
  contributorsList.className = 'list-disc list-inside';

  for (
    let contributorIndex = 0;
    contributorIndex < contributors.length;
    contributorIndex++
  ) {
    const contributorName = contributors[contributorIndex];

    const projectUrlComponent = document.createElement('a');
    projectUrlComponent.className = 'text-blue-600 visited:text-purple-600';
    projectUrlComponent.href = getProjectUrl(projectIndex, contributorName);
    projectUrlComponent.innerHTML = contributorName;

    const listItem = document.createElement('li');
    listItem.appendChild(projectUrlComponent);

    contributorsList.appendChild(listItem);
  }

  return contributorsList;
}

function generateProjectComponent(projectName, projectIndex) {
  const projectComponent = document.createElement('div');

  const projectTitle = generateProjectTitle(projectName);
  const contributorsList = generateContributorsList(projectIndex);

  projectComponent.appendChild(projectTitle);
  projectComponent.appendChild(contributorsList);

  return projectComponent;
}

function renderProjects() {
  for (let projectIndex = 0; projectIndex < projects.length; projectIndex++) {
    const projectComponent = generateProjectComponent(
      projects[projectIndex],
      projectIndex
    );

    projectsContainer.appendChild(projectComponent);
  }
}

renderProjects();
