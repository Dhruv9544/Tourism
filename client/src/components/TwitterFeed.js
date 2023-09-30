import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterFeed = () => {
  return (
    <div>
      <TwitterTimelineEmbed
        dataSource={{
          sourceType: "profile",
          screenName: "starplus ",
        }}
      ></TwitterTimelineEmbed>
    </div>
  );
};

export default TwitterFeed;
