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
  {
    name: 'Render Products (Promise, async-await)',
    dirPath: '008-render-products',
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
  {
    name: 'Sakib',
    dirPath: 'Sakib',
    email: 'nazmussakib06927@gmail.com',
  },
];

const projectsContainer = document.getElementById('projects-container');

renderProjectsAndContributors();
handleDropDown();
function renderProjectsAndContributors() {
  projects.forEach((project) => {
    const projectSection = getProjectSection(project);
    projectsContainer.appendChild(projectSection);
  });
}

function getProjectSection(project) {
  const projectSection = document.createElement('div');
  projectSection.classList.add('p-3', 'bg-gray-200');
  const projectHeader = document.createElement('div');
  projectHeader.classList.add('flex', 'justify-between');

  const projectTitle = getProjectTitle(project.name);
  projectHeader.appendChild(projectTitle);
  const toggleButton = document.createElement('i');
  toggleButton.classList.add(
    'toggle-btn',
    'my-auto',
    'cursor-pointer',
    'fa',
    'fa-angle-down',
    'text-gray-600'
  );

  projectHeader.appendChild(toggleButton);
  projectSection.appendChild(projectHeader);
  const contributors = getContributors(project.dirPath);
  projectSection.appendChild(contributors);

  return projectSection;
}

function getProjectTitle(projectName) {
  const projectTitle = document.createElement('h1');
  projectTitle.className = 'text-xl font-bold text-gray-800';
  projectTitle.innerText = projectName;
  return projectTitle;
}

function getContributors(projectPath) {
  const contributorsList = document.createElement('ul');
  contributorsList.className =
    'contributor-list list-disc mt-2 ml-2 list-inside hidden';

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

function handleDropDown() {
  const toggleButtons = document.querySelectorAll('.toggle-btn');
  toggleButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const i = e.target;
      if (i.classList.contains('fa-angle-down')) {
        i.classList.replace('fa-angle-down', 'fa-angle-up');
      } else {
        i.classList.replace('fa-angle-up', 'fa-angle-down');
      }
      const ul = i.parentNode.parentNode.children[1];
      ul.classList.toggle('hidden');
    });
  });
}
