// Project Javascript Jobs Project
const myJobs = [
  {
    id: 1,
    job: "UX designer",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    about: "Consider the why, what and how of product use"
  },
  {
    id: 2,
    job: "Fullstack developer",
    tags: [
      "Html",
      "Css",
      "Bootstraps",
      "Html",
      "Css",
      "Bootstraps",
      "Javascript",
      "Node.js",
      "Redux"
    ],
    about: "Work with both the front and back end of a website or application"
  },
  {
    id: 3,
    job: "Tester",
    tags: ["Web browser", "Android", "IOS"],
    about:
      "Optimize the design, functionality and usability of different applications."
  }
];

console.log();
// Show Jobs
const showJobs = data => {
  for (let index = 0; index < data.length; index++) {
    const item = data[index];

    let itemString = "";

    itemString += item.favorite ? `⭐` : ``;
    itemString += ` ${item.job} `;

    console.log(itemString);
  }
};

showJobs(myJobs);

console.log();
// Search Jobs
const searchByTag = tag => {
  const result = myJobs
    .map(job => {
      return job;
    })
    .filter(job => {
      return job.tags.includes(tag);
    });

  return result;
};

const search = searchByTag("Android");

console.log(search);

console.log();
// Add Todos
const addJobs = myJobs.push({
  id: 4,
  job: "Marketing",
  tags: ["Google Ads", "FB Ads", "SEO", "Data Science", "Merchandising"],
  about: "Consider the why, what and how of product use"
});

console.log(myJobs);

console.log();
// removeTodos
myJobs.splice(0, 3);

console.log(myJobs);
