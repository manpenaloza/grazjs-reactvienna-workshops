export const workshops = {
  patrick: {
    nameTutor: "Patrick Stapfer",
    title: "Getting Started with ReasonML & ReasonReact",
    description: "ReasonML is a new cool JavaScript-like language with a strong type-system and first level React bindings. As with every new language, there comes a new ecosystem and unfamiliar concepts with it.\n In this workshop, attendees will first of all learn how to setup and use ReasonML with React and find explanations on how to find relevant information for their coding problems (navigating the docs, leverage the community).\n Later own they will discover the capabilities of the underlying JS-compiler platform called BuckleScript and see how Reason translates to JavaScript. They slowly will get introduced to the interoperability layer to be able to interact with existing JavaScript code and learn how the React component model works in practise.",
    price: "Euro 290,00",
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
    title: "Component-driven Development",
    description: "Web applications becoming bigger and more complex, and as they grow, the complexity of the User Interface, arguably the most important part of your application, increases. And with it, your responsibility as a UI developer.\n A traditional development workflow — change code, refresh the app in the browser, click-click-click to reproduce the desired state, repeat — doesn't work anymore. Tools like React hot loader make it faster but don't really fix the underlying issue.",
    price: "Euro 290,00",
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
  Juho: {
    nameTutor: "Juho Vespäläinen",
    title: "Webpack - The Good Parts",
    description: "In this high-level overview you'll learn how to configure Webpack. Even if you know it already, there might be some surprises in store as you gain insight to the tool you otherwise might miss.",
    price: "Euro 145,00",
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