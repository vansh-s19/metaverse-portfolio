import React from "react";
import { useGLTF } from "@react-three/drei";
import Project from "../../base/Project";
import PlateScreen from "../../base/Screen";

const InnovationCounsel = () => {
  const [iicModel, eventsModel, loginModel] = useGLTF(
    ["/models/treadmill_machine.glb", "/models/treadmill_machine.glb", "/models/treadmill_machine.glb"],
    true
  );

  return (
    <Project
      ScreenComponent={ICScreen}
      position={[-60, 0, -40]}
      title="Calories Burnt Prediction"
      rotation={[0, -Math.PI / 2, 0]}
      model={iicModel}
      modelRight={eventsModel}
      modelLeft={loginModel}
      scale={3}
    />
  );
};

export default InnovationCounsel;

const ICScreen: React.FC = () => (
  <PlateScreen
    title="Calories Burnt Prediction"
    description="This project predicts the number of calories burnt during physical exercise based on user-specific parameters such as age, gender, height, weight, exercise duration, heart rate, and body temperature.

The model is trained using XGBoost Regressor, a powerful gradient boosting algorithm, and allows real-time calorie prediction by taking user input from the terminal.

This project demonstrates an end-to-end Machine Learning workflow, including data preprocessing, model training, and real-world prediction."
    visitLink="https://github.com/vansh-s19/calorie-burn-prediction-xgboost"
    codeLink="https://github.com/vansh-s19/calorie-burn-prediction-xgboost"
  />
);