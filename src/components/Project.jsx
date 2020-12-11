import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import image from "../spinner.gif";

export default function Project() {
  const [projectData, setProjectData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
           title, 
           date, 
           place, 
           description, 
           projectType, 
           link, 
           code,
           tags
       }`
      )
      .then((data) => {
        // console.log(data);
        setLoading(false);
        setProjectData(data);
      })
      .catch(console.error);
  }, []);
  //   const { isLoading } = this.state;
  if (!isLoading) {
    return (
      <main className="bg-green-100 min-h-screen p-12">
        <section className="container mx-auto">
          <h1 className="text-5xl flex justify-center cursive">
            {" "}
            My Projects{" "}
          </h1>
          <h2 className="text-lg text-gray-600 flex justify-center mb-12">
            Welcome to my project page!
          </h2>
          <section className="grid grid-cols-2 gap-8">
            {projectData &&
              projectData.map((project, index) => (
                //   <a
                //     href={project.link}
                //     alt={project.title}
                //     target="_blank"
                //     rel="noopener noreferrer"
                //   >
                <article className="relative rounded-lg shadow-xl bg-white p-16 transition duration-300 ease-in-out   transform hover:-translate-y-1 hover:scale-60 ">
                  <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                    <a
                      href={project.link}
                      alt={project.title}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="text-gray-500 text-xs space-x-4">
                    <span>
                      <strong className="font-bold">Finished on</strong>:{" "}
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                    <span>
                      <strong className="font-bold">Place</strong>:{" "}
                      {project.place}
                    </span>
                    <span className="font-bold">
                      <strong>Type</strong>: {project.projectType}
                    </span>{" "}
                    <p className="my-6 text-lg text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mb-4">
                      <a
                        href={project.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                      >
                        View the Project{" "}
                        <span role="img" aria-label="right pointer">
                          👉
                        </span>
                      </a>
                    </div>
                    <a
                      href={project.code}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                    >
                      View Source Code{" "}
                      <span role="img" aria-label="right pointer">
                        👉
                      </span>
                    </a>
                  </div>
                </article>
                //   </a>
              ))}
          </section>
        </section>
      </main>
    );
  } else {
    return (
      <div className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        {/* <h2 className="text-4xl">Loading.. </h2> */}
        <h2 className="text-4xl justify-center  ">
          {" "}
          <img src={image} className="justify-center"></img>{" "}
        </h2>
        ;
      </div>
    );
  }
}
