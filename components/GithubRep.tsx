import { useState } from "react";
import GithubCard from "./card/GithubCard";
import { motion } from "framer-motion";

const GithubRep = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFonts font-semibold">
          My Github Rep&#39;s
        </h2>
        <p className="text-sm font-titleFonts text-textGreen">
          view my github rsep&#39;s
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <GithubCard
          title="rep title"
          des="loremfbui bufgsug usg sjkgbjks"
          listItem={["react", "react", "react"]}
          link="github.com/fhub-1"
        />
        <GithubCard
          title="rep title"
          des="loremfbui bufgsug usg sjkgbjks"
          listItem={["react", "react", "react"]}
          link="github.com/fhub-1"
        />
        <GithubCard
          title="rep title"
          des="loremfbui bufgsug usg sjkgbjks"
          listItem={["react", "react", "react"]}
          link="github.com/fhub-1"
        />
        <GithubCard
          title="rep title"
          des="loremfbui bufgsug usg sjkgbjks"
          listItem={["react", "react", "react"]}
          link="github.com/fhub-1"
        />
        <GithubCard
          title="rep title"
          des="loremfbui bufgsug usg sjkgbjks"
          listItem={["react", "react", "react"]}
          link="github.com/fhub-1"
        />
        <GithubCard
          title="rep title"
          des="loremfbui bufgsug usg sjkgbjks"
          listItem={["react", "react", "react"]}
          link="github.com/fhub-1"
        />
        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              <GithubCard
                title="rep title"
                des="loremfbui bufgsug usg sjkgbjks"
                listItem={["react", "react", "react"]}
                link="github.com/fhub-1"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <GithubCard
                title="rep title"
                des="loremfbui bufgsug usg sjkgbjks"
                listItem={["react", "react", "react"]}
                link="github.com/fhub-1"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <GithubCard
                title="rep title"
                des="loremfbui bufgsug usg sjkgbjks"
                listItem={["react", "react", "react"]}
                link="github.com/fhub-1"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <GithubCard
                title="rep title"
                des="loremfbui bufgsug usg sjkgbjks"
                listItem={["react", "react", "react"]}
                link="github.com/fhub-1"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {" "}
              <GithubCard
                title="rep title"
                des="loremfbui bufgsug usg sjkgbjks"
                listItem={["react", "react", "react"]}
                link="github.com/fhub-1"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {" "}
              <GithubCard
                title="rep title"
                des="loremfbui bufgsug usg sjkgbjks"
                listItem={["react", "react", "react"]}
                link="github.com/fhub-1"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            show less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            show more
          </button>
        )}
      </div>
    </div>
  );
};

export default GithubRep;
