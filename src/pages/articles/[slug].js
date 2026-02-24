import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { marked } from "marked";
import hljs from "highlight.js";
import Header from "components/portfolio/Header";
import MouseTrail from "components/portfolio/MouseTrail";
import SocialProofModal from "components/portfolio/SocialProofModal";
import CommentForm from "components/portfolio/CommentForm";
import { articles } from "data/articles";
import "highlight.js/styles/github.css";

// Configure marked
marked.setOptions({
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value;
      } catch (err) {}
    }
    return hljs.highlightAuto(code).value;
  },
  breaks: true,
  gfm: true,
});

export default function ArticleDetail({ article }) {
  const [showSocialModal, setShowSocialModal] = useState(false);

  useEffect(() => {
    // Highlight code blocks after component mounts
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block);
    });
  }, [article]);

  if (!article) {
    return <div>Article not found</div>;
  }

  const htmlContent = marked(article.content);

  return (
    <>
      <Head>
        <title>{article.title} - Mishael Williams</title>
        <meta name="description" content={article.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MouseTrail enabled={true} />
      <SocialProofModal
        isOpen={showSocialModal}
        onClose={() => setShowSocialModal(false)}
      />

      <div className="min-h-screen bg-white dark:bg-[#0b0f17] text-black dark:text-[#f3f4f6] transition-colors duration-200">
        <Header onSocialProofClick={() => setShowSocialModal(true)} />

        {/* Add padding to account for fixed header */}
        <div className="pt-24 md:pt-28">
          <main className="max-w-4xl mx-auto px-8 py-12">
            <Link
              href="/"
              className="text-grey-text dark:text-[#b8c2d1] hover:text-black dark:hover:text-[#f3f4f6] mb-8 inline-block"
            >
              ← Back to thought corner
            </Link>

            <article className="mt-8">
              <header className="mb-8">
                <h1 className="text-4xl font-bold mb-4 text-black dark:text-[#f3f4f6]">
                  {article.title}
                </h1>
                <p className="text-grey-text dark:text-[#b8c2d1] mb-4">
                  {article.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-grey-whitesmoke dark:bg-[#1b2231] border border-grey-border dark:border-[#2a2f3a] rounded-full text-sm text-black dark:text-[#d4d8df]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <time className="text-grey-text2 dark:text-[#8a94a4] text-sm">
                  {new Date(article.publishedDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </header>

              <div className="prose prose-lg max-w-none">
                <div
                  className="article-content leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
              </div>
            </article>

            <CommentForm articleTitle={article.title} />
          </main>
        </div>
      </div>

      <style jsx global>{`
        .article-content {
          line-height: 1.8;
          color: inherit;
        }
        .article-content h1 {
          font-size: 2rem;
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .article-content h2 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .article-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .article-content h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }
        .article-content p {
          margin-bottom: 1rem;
        }
        .article-content ul,
        .article-content ol {
          margin-left: 2rem;
          margin-bottom: 1rem;
        }
        .article-content code {
          font-family: "Courier New", Courier, monospace;
          font-size: 0.9em;
          background-color: #f4f4f4;
          padding: 0.2em 0.4em;
          border-radius: 3px;
          color: #e83e8c;
        }
        .article-content pre {
          background-color: #f6f8fa;
          border: 1px solid #e1e4e8;
          border-radius: 6px;
          padding: 16px;
          overflow-x: auto;
          margin: 1.5rem 0;
        }
        .article-content pre code {
          font-family: "Courier New", Courier, monospace;
          font-size: 0.875rem;
          line-height: 1.5;
          background-color: transparent;
          padding: 0;
          color: inherit;
          border-radius: 0;
        }
        .article-content blockquote {
          border-left: 4px solid #ddd;
          padding-left: 1rem;
          margin: 1rem 0;
          color: #666;
          font-style: italic;
        }
        .article-content hr {
          border: none;
          border-top: 1px solid #e1e4e8;
          margin: 2rem 0;
        }
        .article-content a {
          color: #0366d6;
          text-decoration: none;
        }
        .article-content a:hover {
          text-decoration: underline;
        }
        .article-content strong {
          font-weight: 600;
        }
        .article-content em {
          font-style: italic;
        }

        html.dark .article-content code {
          background-color: #1b2231;
          color: #f0abfc;
        }

        html.dark .article-content pre {
          background-color: #101522;
          border-color: #2a2f3a;
        }

        html.dark .article-content blockquote {
          border-left-color: #4b5565;
          color: #9aa3b2;
        }

        html.dark .article-content hr {
          border-top-color: #2a2f3a;
        }

        html.dark .article-content a {
          color: #8ab4f8;
        }
      `}</style>
    </>
  );
}

export async function getStaticPaths() {
  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const article = articles.find((a) => a.slug === params.slug);

  return {
    props: {
      article: article || null,
    },
  };
}
