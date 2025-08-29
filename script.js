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
  {
    name: 'Kamrul',
    dirPath: 'Kamrul',
    email: 'nijumkamrul447@gmail.com',
  },
  {
    name: 'Promi',
    dirPath: 'promi',
    email: 'farihapromi2611@gmail.com',
  },


const projectsContainer = document.getElementById('projects-container');

async function checkDirectoryExists(projectPath, dirPath) {
  const filePath = `./${projectPath}/${dirPath}/index.html`;

  try {
    const response = await fetch(filePath, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error(`Error checking file: ${filePath}`, error);
    return false;
  }
}

async function getContributors(projectPath) {
  const contributorsList = document.createElement('ul');
  contributorsList.className = 'list-disc list-inside hidden ml-2';

  contributors.forEach(async (contributor) => {
    const directoryExists = await checkDirectoryExists(
      projectPath,
      contributor.dirPath
    );
    if (directoryExists) {
      const listItem = document.createElement('li');

      const projectLink = document.createElement('a');
      projectLink.className =
        'text-blue-600 visited:text-purple-600 hover:underline';
      projectLink.innerText = contributor.name;
      projectLink.target = '_blank';
      projectLink.href = `./${projectPath}/${contributor.dirPath}/index.html`;

      listItem.appendChild(projectLink);
      contributorsList.appendChild(listItem);
    }
  });

  return contributorsList;
}

function getProjectTitle(projectName) {
  const projectTitle = document.createElement('h1');
  projectTitle.className = 'text-xl font-bold text-gray-800 mb-4';
  projectTitle.innerText = projectName;
  return projectTitle;
}

async function renderProjectsAndContributors() {
  const projectsContainer = document.getElementById('projects-container');

  projects.forEach(async (project) => {
    const projectSection = document.createElement('div');
    projectSection.classList.add(
      'mx-auto',
      'px-4',
      'py-2',
      'bg-gray-200',
      'mb-2',
      'project-sections',
      'cursor-pointer',
      'rounded-md'
    );
    const projectHeader = document.createElement('div');
    projectHeader.classList.add('flex', 'justify-between');
    const projectTitle = getProjectTitle(project.name);
    projectHeader.appendChild(projectTitle);
    const icon = document.createElement('i');
    icon.classList.add('fa', 'fa-angle-down', 'my-auto', 'text-gray-600');
    projectHeader.append(icon);

    const contributors = await getContributors(project.dirPath);

    projectSection.appendChild(projectHeader);
    projectSection.appendChild(contributors);
    projectsContainer.append(projectSection);
  });
}
function handleDropdown() {
  const projectSections = document.querySelectorAll('.project-sections');
  projectSections.forEach((container) => {
    container.addEventListener('click', (e) => {
      container.children[1].classList.toggle('hidden');
      const icon = container.children[0].lastChild;
      if (icon.classList.contains('fa-angle-down')) {
        icon.classList.replace('fa-angle-down', 'fa-angle-up');
      } else {
        icon.classList.replace('fa-angle-up', 'fa-angle-down');
      }
    });
  });
}
renderProjectsAndContributors().then((res) => {
  handleDropdown();
});
