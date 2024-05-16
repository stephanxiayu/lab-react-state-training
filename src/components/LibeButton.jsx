// src/components/LikeButton.js
import React, { useState } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  return <button onClick={() => setLikes(likes + 1)}>{likes} Likes</button>;
};

export default LikeButton;
