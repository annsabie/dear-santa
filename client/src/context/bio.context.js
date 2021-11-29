import React, { createContext } from "react";
import useBioState from "../hooks/useBioState";
import { v4 as uuidv4 } from 'uuid';

const defaultBio = [
  {
    id: uuidv4(),
    content: "Enter your bio here!",
    done: false,
  },
];

export const BioContext = createContext();

export function BioProvider(props) {
  const { bio, addBio, deleteBio, editBio } = useBioState(
    defaultBio
  );
  return (
    <BioContext.Provider
      value={(bio, addBio, deleteBio, editBio)}
    >
    </BioContext.Provider>
  );
}