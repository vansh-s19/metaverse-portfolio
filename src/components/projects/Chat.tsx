import React from "react";
import { useGLTF } from "@react-three/drei";
import Project from "../../base/Project";
import PlateScreen from "../../base/Screen";

const Chat = () => {
  const chatModel = useGLTF("/models/baymax.glb", true);

  return (
    <Project
      ScreenComponent={ChatScreen}
      position={[-120, 0, -70]}
      rotation={[0, -Math.PI / 2, 0]}
      title="Wake Up Jarvis"
      model={chatModel}
      scale={[5,3.3,5]}
    />
  );
};

export default Chat;

const ChatScreen: React.FC = () => (
  <PlateScreen
    title="Wake-Up Jarvis"
    description="Its a Wake-up Jarvis AI Assistant made with Ollama, Porcupine, and OCR"
    visitLink="https://github.com/vansh-s19/Wake-up-Jarvis"
    codeLink="https://github.com/vansh-s19/Wake-up-Jarvis"
  />
);
