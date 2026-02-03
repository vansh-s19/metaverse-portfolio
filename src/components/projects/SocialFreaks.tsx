import React from "react";
import { useGLTF } from "@react-three/drei";
import Project from "../../base/Project";
import PlateScreen from "../../base/Screen";

const SocialFreaks = () => {
  const [sfModel, fsModel] = useGLTF(
    ["/models/isometric_cinema.glb", "/models/cinema_projector.glb"],
    true
  );

  return (
    <Project
      ScreenComponent={SFScreen}
      position={[-120, 0, -10]}
      rotation={[0, -Math.PI / 2, 0]}
      title="Movie Recommendation Model"
      model={sfModel}
      // modelLeft={mfModel}
      modelRight={fsModel}
      scale={3}
    />
  );
};

export default SocialFreaks;

const SFScreen: React.FC = () => (
  <PlateScreen
    title="Movie Recommendation Model"
    description=" This project is a Content-Based Movie Recommendation System built using Machine Learning techniques. It recommends movies similar to a user’s favorite movie by analyzing movie metadata such as genres, cast, director, keywords, and tagline.

The system uses TF-IDF Vectorization and Cosine Similarity to measure similarity between movies and suggest the most relevant ones.

"
    visitLink="https://github.com/vansh-s19/movie-recommendation-system-ml"
    codeLink="https://github.com/vansh-s19/movie-recommendation-system-ml"
  />
);
