import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Calendar, ArrowRight, Tag, Search } from "lucide-react";
import { client } from "../lib/sanityClient";
import PageSEO from "../components/PageSEO";

interface SanityImage {
  asset: { _ref: string };
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  description?: string;
  category?: string;
  readTime?: string;
  featured?: boolean;
  mainImage?: SanityImage;
}

const POSTS_PER_PAGE = 6;

function imageUrl(ref: string) {
  const parts = ref.split("-");
  const format = parts.pop();
  const dimensions = parts.pop();
  const id = parts.slice(1).join("-");
  return `https://cdn.sanity.io/images/o2ueytky/production/${id}-${dimensions}.${format}`;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
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
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    client
      .fetch<Post[]>(
        `*[_type == "post"] | order(publishedAt desc) {
          _id, title, slug, publishedAt, description, category, readTime, featured,
          mainImage { asset { _ref } }
        }`
      )
      .then(setPosts);
  }, []);

  const featured = posts.find((p) => p.featured);
  const allOthers = posts.filter((p) => !p.featured);

  const categories = useMemo(() => {
    const cats = Array.from(
      new Set(allOthers.map((p) => p.category).filter(Boolean))
    );
    return ["All", ...cats] as string[];
  }, [allOthers]);

  const filtered = useMemo(() => {
    return allOthers.filter((p) => {
      const matchesSearch =
        search === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        (p.description?.toLowerCase().includes(search.toLowerCase()) ?? false);
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [allOthers, search, activeCategory]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  useEffect(() => {
    setPage(1);
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-[#0b0618] text-white">
      <PageSEO
        title="Blog — AI, Technology & Business Insights | Zora Global AI"
        description="Read Zora Global AI's latest articles on AI automation, software development trends, digital transformation, and technology strategy for modern businesses."
        canonical="/blog"
      />
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
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">The</span>{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Zora Blog
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Expert perspectives on AI, software development, and digital
            transformation -written by the Zora team.
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
              className="group block relative rounded-2xl overflow-hidden border border-purple-500/20 bg-gradient-to-br from-purple-900/20 via-[#110b22] to-[#0b0618] hover:border-purple-500/50 transition-all duration-300"
            >
              {featured.mainImage?.asset._ref && (
                <div className="w-full h-56 md:h-72 overflow-hidden">
                  <img
                    src={imageUrl(featured.mainImage.asset._ref)}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-8 md:p-10 relative">
                <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/10 blur-[80px] rounded-full pointer-events-none" />
                {featured.category && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 border border-purple-500/25 text-purple-300 mb-5">
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
              </div>
            </Link>
          </motion.div>
        )}

        {/* Search + Category Filter */}
        {posts.length > 0 && (
          <div className="mb-8 flex flex-col gap-4">
            <div className="relative">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
              />
            </div>

            {categories.length > 1 && (
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                      activeCategory === cat
                        ? "bg-purple-600 border-purple-500 text-white"
                        : "bg-white/[0.03] border-white/[0.08] text-gray-400 hover:border-purple-500/40 hover:text-purple-300"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Posts grid */}
        {paginated.length > 0 ? (
          <>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-6">
              {activeCategory === "All" && search === ""
                ? "More Articles"
                : "Results"}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {paginated.map((post, i) => (
                <motion.div
                  key={post._id}
                  custom={i}
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                >
                  <Link
                    to={`/blog/${post.slug.current}`}
                    className="group flex flex-col h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300 overflow-hidden"
                  >
                    {post.mainImage?.asset._ref && (
                      <div className="w-full h-44 overflow-hidden">
                        <img
                          src={imageUrl(post.mainImage.asset._ref)}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="flex flex-col flex-grow p-6">
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
                        <span className="flex items-center gap-1 text-purple-400 font-medium opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                          Read <ArrowRight size={13} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 rounded-lg text-sm border border-white/[0.08] text-gray-400 hover:border-purple-500/40 hover:text-purple-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  ← Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (n) => (
                    <button
                      key={n}
                      onClick={() => setPage(n)}
                      className={`w-9 h-9 rounded-lg text-sm font-semibold border transition-all ${
                        page === n
                          ? "bg-purple-600 border-purple-500 text-white"
                          : "border-white/[0.08] text-gray-400 hover:border-purple-500/40 hover:text-purple-300"
                      }`}
                    >
                      {n}
                    </button>
                  )
                )}
                <button
                  onClick={() =>
                    setPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={page === totalPages}
                  className="px-4 py-2 rounded-lg text-sm border border-white/[0.08] text-gray-400 hover:border-purple-500/40 hover:text-purple-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  Next →
                </button>
              </div>
            )}
          </>
        ) : (
          posts.length > 0 && (
            <p className="text-center text-gray-500 mt-12">
              No articles match your search.
            </p>
          )
        )}

        {posts.length === 0 && (
          <p className="text-center text-gray-500 mt-20">Loading posts...</p>
        )}

        {/* Newsletter */}
        <div className="mt-24 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 via-[#110b22] to-[#0b0618] p-10 text-center">
          <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-3">
            Stay Updated
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Get the latest insights in your inbox
          </h3>
          <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            No spam. Just expert articles on AI, software, and digital
            transformation — delivered when we publish.
          </p>
          {subscribed ? (
            <p className="text-purple-400 font-semibold">
              You're subscribed! Thanks for joining.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
                setEmail("");
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
