import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import Header from "components/portfolio/Header";
import ExperienceCard from "components/portfolio/ExperienceCard";
import ArticleCard from "components/portfolio/ArticleCard";
import MouseTrail from "components/portfolio/MouseTrail";
import SocialProofModal from "components/portfolio/SocialProofModal";
import SectionToggle from "components/portfolio/SectionToggle";
import { allExperiences } from "data/experiences";
import { articles } from "data/articles";

export default function Portfolio() {
  const router = useRouter();
  const [showSocialModal, setShowSocialModal] = useState(false);
  const [currentSection, setCurrentSection] = useState("experience");

  useEffect(() => {
    if (router.query.section === "thoughts") {
      setCurrentSection("thoughts");
    } else {
      setCurrentSection("experience");
    }
  }, [router.query.section]);

  const handleToggleSection = () => {
    const newSection =
      currentSection === "experience" ? "thoughts" : "experience";
    setCurrentSection(newSection);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Update URL query parameter
    if (newSection === "thoughts") {
      router.push("/?section=thoughts", undefined, { shallow: true });
    } else {
      router.push("/", undefined, { shallow: true });
    }
  };

  const sectionVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const direction = currentSection === "thoughts" ? 1 : -1;

  return (
    <>
      <Head>
        <title>Mishael Williams - Senior Full-Stack Engineer</title>
        <meta
          name="description"
          content="Senior full-stack engineer with 7+ years of experience building and scaling cloud-native SaaS, fintech, and AI-powered products."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Mishael Williams - Senior Full-Stack Engineer"
        />
        <meta
          property="og:description"
          content="Senior full-stack engineer with 7+ years of experience building and scaling cloud-native SaaS, fintech, and AI-powered products."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mishael Williams - Senior Full-Stack Engineer"
        />
        <meta
          name="twitter:description"
          content="Senior full-stack engineer with 7+ years of experience building and scaling cloud-native SaaS, fintech, and AI-powered products."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MouseTrail enabled={true} />
      <SocialProofModal
        isOpen={showSocialModal}
        onClose={() => setShowSocialModal(false)}
      />
      <SectionToggle
        currentSection={currentSection}
        onToggle={handleToggleSection}
      />

      <div className="min-h-screen bg-white">
        <Header onSocialProofClick={() => setShowSocialModal(true)} />

        {/* Add padding to account for fixed header */}
        <div className="pt-14 md:pt-16">
          <main className="max-w-5xl mx-auto px-4 md:px-8 py-12 overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              {currentSection === "experience" ? (
                <motion.section
                  key="experience"
                  custom={direction}
                  variants={sectionVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <h2 className="text-3xl font-bold mb-8">experience</h2>
                  <div className="space-y-6">
                    {allExperiences.map((experience, index) => (
                      <ExperienceCard
                        key={experience.id}
                        experience={experience}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.section>
              ) : (
                <motion.section
                  key="thoughts"
                  custom={direction}
                  variants={sectionVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                >
                  <h2 className="text-3xl font-bold mb-8">thought corner</h2>
                  <div className="space-y-6">
                    {articles.map((article, index) => (
                      <ArticleCard
                        key={article.id}
                        article={article}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </>
  );
}
