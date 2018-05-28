export const workshops = {
  patrick: {
    nameTutor: "Patrick Stapfer",
    twitter: "https://twitter.com/ryyppy",
    image: "https://d33wubrfki0l68.cloudfront.net/c8fe4b900526246d3131f62030a0e5c7d81436d3/5eddd/226d782886f6363ef5edff0982a22d70.jpg",
    title: "Getting Started with ReasonML & ReasonReact",
    description: "ReasonML is a new cool JavaScript-like language with a strong type-system and first level React bindings. As with every new language, there comes a new ecosystem and unfamiliar concepts with it.\n In this workshop, attendees will first of all learn how to setup and use ReasonML with React and find explanations on how to find relevant information for their coding problems (navigating the docs, leverage the community).\n Later own they will discover the capabilities of the underlying JS-compiler platform called BuckleScript and see how Reason translates to JavaScript. They slowly will get introduced to the interoperability layer to be able to interact with existing JavaScript code and learn how the React component model works in practise.",
    shortNotes: [
      "Why ReasonML?",
      "Introduction to the platform / tech stack (OCaml, BuckleScript, Tooling, ReasonML)",
      "Dev-Setup / Editor integration",
      "Basic language features (data types, pattern-matching, Collection APIs)",
      "BuckleScript related topics (JS-compilation)",
      "React related topics (stateless / reducer components, JSX, CSS etc.)",
      "Interoperability with existing JavaScript",
    ],
    price: "290,00",
    workshops: [
      { 
        date: "07.06.2018", 
        time: {
          start: "09:30",
          end: "17:30",
        }
      },
    ],
    maxParticipants: 10,
  },
  andrey: {
    nameTutor: "Andrey Okonetchnikov",
    twitter: "https://twitter.com/okonetchnikov",
    image: "https://d33wubrfki0l68.cloudfront.net/dbad9c1b60d7f66c3bf2b4a32c63cb2c7234be6f/8fbac/37710e788d37eaf9d3cf7d09d1074eeb.jpg",
    title: "Component-driven Design Systems with React",
    description: "Web applications becoming bigger and more complex, and as they grow, the complexity of the User Interface, arguably the most important part of your application, increases. And with it, your responsibility as a UI developer.\n A traditional development workflow — change code, refresh the app in the browser, click-click-click to reproduce the desired state, repeat — doesn't work anymore. Tools like React hot loader make it faster but don't really fix the underlying issue.",
    price: "290,00",
    shortNotes: [

    ],
    workshops: [
      { 
        date: "06.06.2018", 
        time: {
          start: "09:30",
          end: "17:30",
        }
      },
    ],
    maxParticipants: 10,
  },
  juho: {
    nameTutor: "Juho Vepsäläinen",
    twitter: "https://twitter.com/bebraw",
    image: "https://d33wubrfki0l68.cloudfront.net/ecc0f45f398b8725a20ef8872ce8b7504cee0b90/7c9a7/9ab9d94edb387f16133540582a9f8a2b.jpg",
    title: "Webpack - The Good Parts",
    description: "In this high-level overview you'll learn how to configure Webpack. Even if you know it already, there might be some surprises in store as you gain insight to the tool you otherwise might miss.",
    shortNotes: [
      "Fundamental ideas of webpack",
      "Development techniques",
      "Build techniques",
      "Asset management",
      "Bundle/code splitting",
      "Build analysis",
      "Optimizing the build",
    ],
    price: "145,00",
    workshops: [
      { date: "06.06.2018", time: {
        start: "09:30",
        end: "14:00",
      }},
      { date: "07.06.2018", time: {
        start: "09:30",
        end: "14:00",
      }}
    ],
    maxParticipants: 5,
  },
}

export const facts = {
  location: {
    name: "Weingut Pichler-Schober",
    address: "tba"
  },
  takeWithYou: [ "Notebook" ],
}