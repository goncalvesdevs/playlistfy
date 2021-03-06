import { createContext, useContext } from 'react';
import { IPlaylist, ITrack } from '../../interfaces';

export type ContextType = {
  active: number;
  lists: IPlaylist[];
  tracks: ITrack[];
  swipeIndex: number;

  setLists: (lists: IPlaylist[]) => void;
  setTracks: (lists: ITrack[]) => void;
  setActive: (active: number) => void;
  setSwipeIndex: (swipeIndex: number) => void;

  updateTrackPlayer: (currentPlaylistId: number) => Promise<void>;
};

export const Context = createContext<ContextType>({} as ContextType);

export const usePlaylist = () => {
  const context = useContext(Context);

  return context;
};
