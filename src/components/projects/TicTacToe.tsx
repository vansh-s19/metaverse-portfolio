import React from "react";
import { useGLTF } from "@react-three/drei";
import Project from "../../base/Project";
import PlateScreen from "../../base/Screen";

const TicTacToe = () => {
  const [tttModel, tttLeft] = useGLTF(
    ["/models/health_pack.glb", "/models/health_box.glb"],
    true
  );

  return (
    <Project
      ScreenComponent={TTTScreen}
      position={[-120, 0, -140]}
      rotation={[0, -Math.PI / 2, 0]}
      title="
Diabetes Prediction"
      model={tttModel}
      modelLeft={tttLeft}
      scale={[1.2, 1.2, 1]}
      subScale={5}

    />
  );
};

export default TicTacToe;

const TTTScreen: React.FC = () => (
  <PlateScreen
    title="
diabetes-prediction-ml"
    description="This project implements a Diabetes Prediction System using a Support Vector Machine (SVM) classifier. The model predicts whether a person is diabetic based on key medical parameters such as glucose level, BMI, age, insulin level, etc.

The system is trained on the Pima Indians Diabetes Dataset and allows users to input data via the terminal to get real-time predictions.

"
    visitLink="https://github.com/vansh-s19/diabetes-prediction-ml"
    codeLink="https://github.com/vansh-s19/diabetes-prediction-ml"
  />
);
