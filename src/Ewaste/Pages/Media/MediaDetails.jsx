import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Share2,
  MessageCircle,
} from "lucide-react";

const MediaDetails = () => {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://ltcafrica.com/wp/wp-json/wp/v2/posts?slug=${slug}&_embed`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setPost(data[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-6">
          <img
            src="/images/ltc-logo.png"
            alt="LTC"
            className="w-24 animate-pulse"
          />

          <p className="text-sm tracking-wide text-gray-500">Loading media details</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex justify-center items-center">
        Error: {error}
      </div>
    );

  if (!post)
    return (
      <div className="min-h-screen flex justify-center items-center">
        Post not found
      </div>
    );

  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  const shareUrl = window.location.href;
  const shareTitle = post.title.rendered.replace(/<[^>]*>/g, "");

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(
      `${shareTitle} ${shareUrl}`,
    )}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareTitle,
    )}&url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl,
    )}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      shareUrl,
    )}`,
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: shareTitle,
        url: shareUrl,
      });
    }
  };

  return (
    <article className="mt-20">
      {/* HERO IMAGE */}
      {image && (
        <div className="w-full mb-16">
          <img
            src={image}
            alt={post.title.rendered}
            className="w-full h-[480px] object-cover"
          />
        </div>
      )}

      {/* ARTICLE CONTAINER */}
      <div className="max-w-3xl mx-auto px-6">
        {/* TITLE */}
        <h1
          className="text-3xl lg:text-4xl font-semibold leading-tight mb-6"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        {/* DATE */}
        <p className="text-sm text-gray-500 mb-10">
          {new Date(post.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        {/* SHARE ROW */}
        <div className="flex items-center gap-6 border-y py-4 mb-12 text-gray-600">
          <span className="text-sm">Share</span>

          <a
            href={shareLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition"
          >
            <MessageCircle size={18} />
          </a>

          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition"
          >
            <Twitter size={18} />
          </a>

          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition"
          >
            <Facebook size={18} />
          </a>

          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition"
          >
            <Linkedin size={18} />
          </a>

          {navigator.share && (
            <button
              onClick={handleNativeShare}
              className="hover:text-black transition"
            >
              <Share2 size={18} />
            </button>
          )}
        </div>

        {/* ARTICLE CONTENT */}
        <div
          className="text-lg leading-relaxed text-gray-800 space-y-6"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
    </article>
  );
};

export default MediaDetails;
