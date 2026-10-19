import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Media = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://ltcafrica.com/wp/wp-json/wp/v2/posts?_embed&per_page=5")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

if (loading)
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">

        <img
          src="/images/ltc-logo.png"
          alt="LTC"
          className="w-24 animate-pulse"
        />

        <p className="text-sm tracking-wide text-gray-500">
          Loading media
        </p>

      </div>
    </div>
  );
  if (error)
    return (
      <div className="min-h-screen flex justify-center items-center">
        Error: {error}
      </div>
    );

  const featured = posts[0];
  const others = posts.slice(1);

  const featuredImage =
    featured?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 mt-20 h-screen">
      {/* PAGE TITLE */}
      <h1 className="header-txt text-3xl lg:text-4xl font-bold text-center mb-12">LTC Media</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* FEATURED POST */}
        <div>
          {featuredImage && (
            <img
              src={featuredImage}
              alt={featured.title.rendered}
              className="w-full h-[350px] object-cover mb-6"
            />
          )}

          <Link to={`/media/${featured.slug}`}>
            <h2
              className="text-3xl font-semibold mb-4 hover:text-customGreen"
              dangerouslySetInnerHTML={{ __html: featured.title.rendered }}
            />
          </Link>

          <p
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: featured.excerpt.rendered }}
          />
        </div>

        {/* SMALL POSTS */}
        <div className="grid grid-cols-2 gap-6">
          {others.map((post) => {
            const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

            return (
              <Link
                key={post.id}
                to={`/media/${post.slug}`}
                className="block group"
              >
                {image && (
                  <img
                    src={image}
                    alt={post.title.rendered}
                    className="w-full h-32 object-cover mb-3"
                  />
                )}

                <h3
                  className="text-sm font-medium leading-snug group-hover:text-customGreen"
                  dangerouslySetInnerHTML={{
                    __html: post.title.rendered,
                  }}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Media;
