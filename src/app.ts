import express from "express";
import expressGraphql from "express-graphql";
import * as graphql from "graphql";

async function main(): Promise<void> {
  const app = express();

  const schema = graphql.buildSchema(`
  type Query {
    course(id: Int!): Course
    courses(topic: String): [Course]
  },
  type Course {
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
  }
  `);
  const coursesData = [
    {
      id: 1,
      title: "The Complete Node.js Developer Course",
      author: "Andrew Mead, Rob Percival",
      description:
        "Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!",
      topic: "Node.js",
      url: "https://codingthesmartway.com/courses/nodejs/"
    },
    {
      id: 2,
      title: "Node.js, Express & MongoDB Dev to Deployment",
      author: "Brad Traversy",
      description:
        "Learn by example building & deploying real-world Node.js applications from absolute scratch",
      topic: "Node.js",
      url: "https://codingthesmartway.com/courses/nodejs-express-mongodb/"
    },
    {
      id: 3,
      title: "JavaScript: Understanding The Weird Parts",
      author: "Anthony Alicea",
      description:
        "An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.",
      topic: "JavaScript",
      url: "https://codingthesmartway.com/courses/understand-javascript/"
    }
  ];

  const getCourse = function({ id }: { id: number }) {
    return coursesData.filter(course => {
      return course.id == id;
    })[0];
  };
  const getCourses = function({ topic }: { topic?: string }) {
    if (topic) {
      return coursesData.filter(course => course.topic === topic);
    } else {
      return coursesData;
    }
  };
  const root = {
    course: getCourse,
    courses: getCourses
  };

  app.use(
    "/graphql",
    expressGraphql({
      schema,
      rootValue: root,
      graphiql: true
    })
  );

  app.listen(3000, () =>
    console.log("Express GraphQL Server Now Running On localhost:3000/graphql")
  );
}

main().catch(e => console.error(e));
