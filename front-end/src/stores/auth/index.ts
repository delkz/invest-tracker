import { create } from 'zustand';
import type { AuthState } from './types';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,

  login: async (email, password) => {
    set({ loading: true });
    // lógica com Firebase aqui
    set({ loading: false, user: { uid: 'abc', email } });
  },

  logout: () => {
    set({ user: null });
  },
}));
