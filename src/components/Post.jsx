import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Post() {
  const [postData, setPost] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] {
            title, 
            slug, 
            mainImage{
                asset -> {
                    _id,
                    url
                },
                alt
            }
        }`
      )
      .then((data) => {
        console.log(data);
        setLoading(false);
        setPost(data);
      })
      .catch(console.error);
  }, []);
  if (!isLoading) {
    return (
      <main className="bg-green-00 min-h-screen p-12">
        <section className="container mx-auto">
          <h1 className="text-5xl flex justify-center cursive">
            Blog Post Page
          </h1>
          <h2 className="text-lg text-gray-600 flex justify-center mb-12">
            Welcome to my page of Blog Posts.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postData &&
              postData.map((post, index) => (
                <article className=" transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-70">
                  <Link
                    to={"/post/" + post.slug.current}
                    key={post.slug.current}
                  >
                    <span
                      className="block h-64 relative rounded shadow leading-snug border-l-8 border-green-400"
                      key={index}
                    >
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className="w-full h-full rounded-r object-cover absolute"
                      />
                      <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                        <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                          {post.title}
                        </h3>
                      </span>
                    </span>
                  </Link>
                </article>
              ))}
          </div>
        </section>
      </main>
    );
  } else {
    return (
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h2 className="text-4xl">Loading ... </h2>;
      </section>
    );
  }
}
