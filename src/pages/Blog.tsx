import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Calendar, ArrowRight, Tag } from "lucide-react";
import { client } from "../lib/sanityClient";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  description?: string;
  category?: string;
  readTime?: string;
  featured?: boolean;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    client
      .fetch<Post[]>(
        `*[_type == "post"] | order(publishedAt desc) {
          _id, title, slug, publishedAt, description, category, readTime, featured
        }`
      )
      .then(setPosts);
  }, []);

  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-[#0b0618] text-white">
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-purple-500/10 border border-purple-500/30 text-purple-300 mb-6 tracking-wide uppercase">
            Insights & Ideas
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-5">
            The{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Zora Blog
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Expert perspectives on AI, software development, and digital
            transformation — written by the Zora team.
          </p>
        </motion.div>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-32">
        {/* Featured post */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mb-16"
          >
            <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-4">
              Featured Article
            </p>
            <Link
              to={`/blog/${featured.slug.current}`}
              className="group block relative rounded-2xl overflow-hidden border border-purple-500/20 bg-gradient-to-br from-purple-900/20 via-[#110b22] to-[#0b0618] p-8 md:p-12 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/10 blur-[80px] rounded-full pointer-events-none" />
              {featured.category && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 border border-purple-500/25 text-purple-300 mb-6">
                  <Tag size={11} />
                  {featured.category}
                </span>
              )}
              <h2 className="text-3xl md:text-4xl font-bold leading-snug text-white group-hover:text-purple-200 transition-colors duration-300 mb-4 max-w-3xl">
                {featured.title}
              </h2>
              {featured.description && (
                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                  {featured.description}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-purple-400" />
                  {formatDate(featured.publishedAt)}
                </span>
                {featured.readTime && (
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-purple-400" />
                    {featured.readTime}
                  </span>
                )}
                <span className="ml-auto flex items-center gap-1.5 text-purple-400 font-semibold group-hover:gap-3 transition-all duration-300">
                  Read article <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Rest of posts */}
        {rest.length > 0 && (
          <>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-6">
              More Articles
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {rest.map((post, i) => (
                <motion.div
                  key={post._id}
                  custom={i}
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                >
                  <Link
                    to={`/blog/${post.slug.current}`}
                    className="group flex flex-col h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300 p-6"
                  >
                    {post.category && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/20 text-purple-300 w-fit mb-4">
                        <Tag size={11} />
                        {post.category}
                      </span>
                    )}
                    <h2 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300 mb-2 leading-snug">
                      {post.title}
                    </h2>
                    {post.description && (
                      <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-5">
                        {post.description}
                      </p>
                    )}
                    <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} className="text-purple-400" />
                          {formatDate(post.publishedAt)}
                        </span>
                        {post.readTime && (
                          <span className="flex items-center gap-1">
                            <Clock size={12} className="text-purple-400" />
                            {post.readTime}
                          </span>
                        )}
                      </div>
                      <ArrowRight
                        size={14}
                        className="text-purple-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </>
        )}

        {posts.length === 0 && (
          <p className="text-center text-gray-500 mt-20">Loading posts...</p>
        )}
      </div>
    </div>
  );
}
