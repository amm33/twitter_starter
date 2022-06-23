import * as React from "react";
import TweetInput from "./TweetInput";
import "./TweetBox.css";

export default function TweetBox(props) {
  function handleOnTweetTextChange(change) {
    props.setTweetText(change.target.value);
  }
  function handleOnSubmit() {
    //created a new object
    var newTweet = {
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
      id: props.tweets.length,
    };
    props.setTweets(props.tweets.concat(newTweet)); //set the new tweet and added to an array of tweets
    props.setTweetText("");
  }
  return (
    <div className="tweet-box">
      <TweetInput
        value={props.tweetText}
        handleOnChange={handleOnTweetTextChange}
      />

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount />
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} />
      </div>
    </div>
  );
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  );
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  var userLength = 140 - props.tweet.length;
  var className;
  if (userLength === 140) {
    return <span className="tweet-length"></span>;
  }
  if (userLength < 0) {
    className = "tweet-length red";
  } else {
    className = "tweet-length ";
  }
  return <span className={className}>{length}</span>;
}

export function TweetSubmitButton({ handleOnSubmit }) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button
        className="tweet-submit-button"
        onClick={handleOnSubmit}
        // disabled={props.tweetlength === 0 || props.tweetlength > 140}
      >
        Tweet
      </button>
    </div>
  );
}
