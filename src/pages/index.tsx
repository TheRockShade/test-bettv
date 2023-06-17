import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

const Index: React.FC = () => {
  const [hasWindow, setHasWindow] = useState<boolean>(false);
  const video = useRef(null);

  useEffect(() => {
    typeof window !== undefined ? setHasWindow(true) : null;
  }, []);

  const Wrapper = styled("div")`
    position: relative;
    padding-top: 56.25%;
  `;

  const Player = styled(ReactPlayer)`
    position: absolute;
    top: 0;
    left: 0;
  `;

  return (
    <Wrapper>
      {hasWindow ? (
        <Player
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ&t=31s"
          width="100%"
          height="100%"
          playing
          muted
          ref={video}
        />
      ) : null}
    </Wrapper>
  );
};

export default Index;
