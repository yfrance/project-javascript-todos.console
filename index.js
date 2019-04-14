// Project Javascript Todos Project
const myTodos = [
  {
    id: 1,
    job: "UX designer",
    tags: ["Html", "Css", "Bootstraps", "Javascript"],
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
    job: "User",
    tags: ["Web browser", "Android", "Ios"],
    about: "Utilizes a computer or network service."
  }
];

console.log();
// Show Todos
const showTodos = data => {
  for (let index = 0; index < data.length; index++) {
    const item = data[index];

    let itemString = "";

    itemString += item.completed ? `☑` : `☐`;
    itemString += item.favorite ? `⭐` : ``;
    itemString += ` ${item.job} `;

    console.log(itemString);
  }
};

showTodos(myTodos);

console.log();
// Search Todos
const searchByTag = tag => {
  const result = myTodos
    .map(todo => {
      return todo;
    })
    .filter(todo => {
      return todo.tags.includes(tag);
    });

  return result;
};

const search = searchByTag("Android");

console.log(search);

console.log();
// Add Todos
const addTodos = myTodos.push({
  id: 4,
  job: "Marketing",
  tags: ["Google Ads", "FB Ads", "SEO", "Data Science", "Merchandising"],
  about: "Consider the why, what and how of product use"
});

console.log(myTodos);

console.log();
// removeTodos
const removeTodos = myTodos.splice(0, 3);

console.log(myTodos);
