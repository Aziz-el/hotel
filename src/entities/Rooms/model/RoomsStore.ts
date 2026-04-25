import { create } from "zustand";
import { Room } from "./types";
import { ROOMS } from "./mockRooms";

interface RoomState {
  rooms: Room[];
  selectedRoom: Room | null;
  selectRoom: (roomId: number) => void;
  clearSelected: () => void;
}

export const useRoomStore = create<RoomState>((set, get) => ({
  rooms: ROOMS,
  selectedRoom: null,


  selectRoom: (roomId: number) => {
    const room = get().rooms.find((r) => r.pk == roomId) || null;
    set({ selectedRoom: room });
  },

  clearSelected: () => set({ selectedRoom: null }),
}));
