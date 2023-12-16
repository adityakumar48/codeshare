export const languages = [
  {
    name: "JavaScript",
    icon: "icons/javascript.svg",
    extension: "js",
  },
  {
    name: "Python",
    icon: "icons/python.svg",
    extension: "py",
  },
  {
    name: "Java",
    icon: "icons/java.svg",
    extension: "java",
  },
  {
    name: "C++",
    icon: "icons/c.svg",
    extension: "cpp",
  },
  {
    name: "CSS",
    icon: "icons/css.svg",
    extension: "css",
  },
  {
    name: "HTML",
    icon: "icons/html.svg",
    extension: "html",
  },

  {
    name: "TypeScript",
    icon: "icons/typescript.svg",
    extension: "ts",
  },
  {
    name: "Json",
    icon: "icons/json.svg",
    extension: "json",
  },
  {
    name: "Php",
    icon: "icons/php.svg",
    extension: "php",
  },
];

export const themes = [
  "monokai",
  "xcode",
  "dracula",
  "ambiance",
  "chaos",
  "clouds",
  "cobalt",
  "crimson_editor",
];

export const backgrounds = [
  "linear-gradient(354deg,#ff75b5,#ffb86c)",
  "linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47))",
  "linear-gradient(90deg,#93f9b9,#1d976c)",
  "linear-gradient(140deg, rgb(142, 199, 251), rgb(28, 85, 170))",
  "linear-gradient(337deg,#654ea3,#da98b4)",
  "#000",
  "#fff",
  "linear-gradient(270deg,#fc6767,#ec008c)",
  "linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))",
  "linear-gradient(270deg,#514a9d,#24c6dc)",
];

export const initialCode = `// program to check if the number is even or odd
// take input from the user
const number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}`;
