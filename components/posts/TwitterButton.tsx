import { TwitterFollowButton } from "react-twitter-embed";

const TwitterButton = () => {
  return (
    <div className="my-8">
      <TwitterFollowButton
        screenName="OsinDeveloper"
        options={{ size: "large" }}
      />
    </div>
  );
};

export default TwitterButton;
