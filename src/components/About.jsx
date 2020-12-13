import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import background from "../about_background.jpg";
import image from "../spinner.gif";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'author']{
            name, 
            bio, 
            "authorImage" : image.asset->url

        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);
  if (!author) {
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
  return (
    <main className="relative ">
      <img
        src={background}
        alt="Background image"
        className="absolute w-full"
      />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            alt={author.name}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
          />

          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-green-300 mb-4 ">
              Hey There. I'm{" "}
              <span className="text-green-50 ">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent
                blocks={author.bio}
                projectId="ioe8ozk3"
                dataset="production"
              />
              <h4 style={{ color: "#fff" }}>
                Check on my{" "}
                <strong>
                  <a
                    href="https://drive.google.com/file/d/1o8MfsRuZqGMTjKMio40sa2xwdpjDyptp/view?usp=sharing"
                    target="_blank"
                  >
                    <button class="py-1 px-3 bg-white-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition duration-300 ease-in-out   transform hover:-translate-y-1 hover:scale-60 ">
                      Resume
                    </button>
                  </a>{" "}
                </strong>{" "}
                for more info!
              </h4>
              {/* <Skills /> */}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
