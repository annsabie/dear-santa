import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default (initialBio) => {
  const [bio, setBio] = useState("");
  return {
    bio,
    addBio: (newBioText) => {
      setBio([
        {
          id: uuidv4(),
          content: newBioText,
          done: false,
          link: "",
        },
      ]);
    },
    deleteBio: (bio) => {
      setBio((bio) => bio !== bio);
    },
    editBio: (bioId, newBioText) => {
      setBio(
        bio.map((bio) =>
          bio.id === bioId ? { ...bio, content: newBioText } : bio
        )
      );
    },
  };
};
