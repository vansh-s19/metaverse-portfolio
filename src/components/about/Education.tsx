import React, { memo } from "react";
import Text from "../../base/Text";

const Education: React.FC = () => {
  return (
    <group position={[20, 0.1, 70]}>
      <Text
        scale={4}
        position={[-7, 2.1, -14.5]}
        rotation={[-Math.PI / 8, Math.PI * 2, 0]}
      >
        Education
      </Text>
      <group rotation={[0, Math.PI, 0]} position={[-1, 1.1, -2]}>
        <Text rotation={[Math.PI / 4, Math.PI, 0]}>GLA University Mathura</Text>
        <Text rotation={[Math.PI / 4, Math.PI, 0]} position={[1, 0, -5]}>
          B.Tech AIML
        </Text>
        <Text rotation={[Math.PI / 4, Math.PI, 0]} position={[1, 0, -10]}>
          2024-2028
        </Text>
      </group>
      <group rotation={[0, Math.PI, 0]} position={[-2, 1.1, 18]}>
        <Text rotation={[Math.PI / 4, Math.PI, 0]} position={[4, 0, 0]}>
          DPSG International School
        </Text>
        <Text rotation={[Math.PI / 4, Math.PI, 0]} position={[1, 0, -5]}>
         Ghaziabad, Uttar Pradesh
        </Text>
        
      </group>
    </group>
  );
};

export default memo(Education);
