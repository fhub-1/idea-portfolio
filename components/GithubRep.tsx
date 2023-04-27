import GithubCard from "./card/GithubCard";

const GithubRep = () => {
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
      </div>
    </div>
  );
};

export default GithubRep;
