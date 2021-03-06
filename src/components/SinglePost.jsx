import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import image from "../spinner.gif";

const builder = imageUrlBuilder(sanityClient);
// urlFor = (source) => builder.image(source);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams(); // get slug part of url
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          title, 
          _id, 
          slug, 
          mainImage{
              asset->{
                  _id, 
                  url 
              }
          },
          body,
          "name" : author->name,
          "authorImage" : author->image
      }`
      )
      .then((data) => {
        console.log(data);
        setSinglePost(data[0]);
      })
      .catch(console.error);
  }, [slug]);
  if (!singlePost) {
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
    <main className="bg-gray-200 min-h-screen p-12">
      <article className="container shadow-lg mx-auto bg-green-50 rounded-lg">
        <header className="relative ">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-gray-100 bg-opacity-90 rounded p-12">
              <h2 className="cursive text-3xl lg:text-6xl mb-4">
                {singlePost.title}
              </h2>
              <div className="flex justify-center text-gray-800">
                <img
                  src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.name}
                  className="w-10 h-10 rounded-full"
                />
                <h4 className="cursive flex items-center pl-2 text-2xl">
                  {singlePost.name}
                </h4>
              </div>
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="w-full object-cover rounded-t"
            style={{ height: "400px" }}
          />
        </header>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={singlePost.body}
            projectId="ioe8ozk3"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
}
