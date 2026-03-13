import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from "lucide-react";
import type { Components } from "react-markdown";
import { blogIndex } from "../data/blogIndex";

const mdComponents: Components = {
  h1: ({ children }) => (
    <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent mt-12 mb-6 leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-4 leading-snug border-l-4 border-purple-500 pl-4">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-purple-200 mt-8 mb-3">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-5">
      {children}
    </p>
  ),
  ul: ({ children }) => <ul className="space-y-2 mb-6 pl-2">{children}</ul>,
  li: ({ children }) => (
    <li className="flex items-start gap-3 text-gray-300 text-base md:text-lg leading-relaxed">
      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
      <span>{children}</span>
    </li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-purple-500 bg-purple-500/10 rounded-r-xl pl-6 pr-4 py-4 my-6 text-purple-200 italic text-lg">
      {children}
    </blockquote>
  ),
  hr: () => (
    <hr className="my-10 border-none h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
  ),
  code: ({ children }) => (
    <code className="bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm rounded-md px-2 py-0.5 font-mono">
      {children}
    </code>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-400 underline underline-offset-4 hover:text-purple-300 transition-colors"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="text-white font-semibold">{children}</strong>
  ),
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const postMeta = blogIndex.find((b) => b.slug === slug);

  useEffect(() => {
    if (!slug) return;
    fetch(`/blog/${slug}.md`)
      .then((res) => res.text())
      .then((text) => {
        const firstLine = text.split("\n")[0].replace(/^#+\s*/, "").trim();
        setTitle(firstLine);
        const body = text.replace(/^#[^\n]*\n/, "").trim();
        setContent(body);
      });
  }, [slug]);

  return (
    <div className="min-h-screen bg-[#0b0618] text-white">
      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[360px] bg-purple-600/15 blur-[100px] rounded-full" />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-purple-300 transition-colors mb-10 group"
            >
              <ArrowLeft
                size={15}
                className="group-hover:-translate-x-1 transition-transform duration-200"
              />
              Back to Blog
            </Link>
          </motion.div>

          {postMeta && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 border border-purple-500/25 text-purple-300">
                <Tag size={11} />
                {postMeta.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-gray-500">
                <Calendar size={13} className="text-purple-400" />
                {postMeta.date}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-gray-500">
                <Clock size={13} className="text-purple-400" />
                {postMeta.readTime}
              </span>
            </motion.div>
          )}

          {title && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6 bg-gradient-to-r from-white via-purple-100 to-fuchsia-200 bg-clip-text text-transparent"
            >
              {title}
            </motion.h1>
          )}

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="origin-left h-px bg-gradient-to-r from-purple-500/60 via-fuchsia-500/30 to-transparent"
          />
        </div>
      </section>

      {/* Article body */}
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.25 }}
        className="max-w-3xl mx-auto px-6 pb-32"
      >
        <ReactMarkdown components={mdComponents}>{content}</ReactMarkdown>

        {/* End CTA */}
        <div className="mt-16 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 via-[#110b22] to-[#0b0618] p-8 text-center">
          <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-3">
            Ready to build?
          </p>
          <h3 className="text-2xl font-bold text-white mb-3">
            Let's bring your vision to life
          </h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto text-sm leading-relaxed">
            Our team specializes in modern web development, AI integration, and
            scalable digital solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-200"
          >
            Get in touch <ArrowRight size={14} />
          </Link>
        </div>
      </motion.article>
    </div>
  );
}
