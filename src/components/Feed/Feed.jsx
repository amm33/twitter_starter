import * as React from "react";
import Tweet from "../Tweet/Tweet";
import TweetBox from "../TweetBox/TweetBox";
import "./Feed.css";

export default function Feed(props) {
  return (
    <div className="col feed">
      {/* UPDATE TWEET BOX PROPS HERE */}
      {/* takes everything in props (object with many keys) and hand them as props */}
      {/* same as tweets={prop.tweets} userProfile={prop.userProfile} setTweets={prop.setTweets}*/}
      <TweetBox {...props} />

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">
        {props.tweets.map((tweet, id) => {
          return <Tweet data-tweet-id={id} tweet={tweet}></Tweet>;
        })}
      </div>
    </div>
  );
}
