import React from "react";
import { useGLTF } from "@react-three/drei";
import Project from "../../base/Project";
import PlateScreen from "../../base/Screen";

const MuseumCounsel = () => {
  const [mcModel, mcLeft, mcRight] = useGLTF(
    ["/models/fine_gold_bar.glb", "/models/fine_gold_bar.glb", "/models/fine_gold_bar.glb"],
    true
  );

  return (
    <Project
      ScreenComponent={MCScreen}
      position={[-60, 0, -140]}
      title="Gold Price Prediction"
      rotation={[0, -Math.PI / 2, 0]}
      model={mcModel}
      modelLeft={mcLeft}
      modelRight={mcRight}
      scale={3}
    />
  );
};

export default MuseumCounsel;

const MCScreen: React.FC = () => (
  <PlateScreen
    title="gold-price-prediction"
    description="This project implements a Gold Price Prediction system using a Random Forest Regressor. The model is trained on historical financial data and predicts the GLD (Gold ETF price) based on multiple economic indicators. The project also supports real-time user input from the terminal for custom predictions."
    visitLink="https://github.com/vansh-s19/gold-price-prediction-random-forest"
    codeLink="https://github.com/vansh-s19/gold-price-prediction-random-forest"
  />
);
