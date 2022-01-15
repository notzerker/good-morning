import Image from "next/image";
import { useMoralis } from "react-moralis";

const Avatar = ({ username }) => {
  const { user } = useMoralis();
  return (
    <Image
      className="rounded-full"
      src={`https://avatars.dicebear.com/api/pixel-art/${
        username || user.get("username")
      }.svg`}
      layout="fill"
    />
  );
};

export default Avatar;
