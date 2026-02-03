import React, { memo } from "react";
import Text from "../../base/Text";
import Link from "../../base/Link";

const Links: React.FC = () => {
  const z = 100;
  const x = -10;
  const z_sub = 12;

  return (
    <group>
      <Text
        scale={4}
        rotation={[-Math.PI / 8, Math.PI * 2, 0]}
        position={[x - 1.5, 2.1, z - 45]}
      >
        Links
      </Text>
      <group position={[x, 1, z + 15]} rotation={[0, Math.PI * 2, 0]}>
        
        <Link
          position={[0, 0, -z_sub * 2]}
          to="https://leetcode.com/u/pYzNwJot8F/"
        >
          Leetcode
        </Link>
        <Link
          position={[0, 0, -z_sub * 3]}
          to="https://www.linkedin.com/in/vansh-saxena-19s/"
        >
          Linkedin
        </Link>
        <Link
          position={[0, 0, -z_sub * 4]}
          to="https://github.com/vansh-s19"
        >
          Github
        </Link>
      </group>
    </group>
  );
};

export default memo(Links);
