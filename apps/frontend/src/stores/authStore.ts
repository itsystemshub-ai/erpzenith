import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { api } from '@/lib/api';

interface User {
  id: string;
  email: string;
  username: string;
  name: string;
  role: {
    id: string;
    name: string;
    color: string;
    icon: string;
  };
  modules: Array<{
    group: string;
    name: string;
    canView: boolean;
    canEdit: boolean;
    canDelete: boolean;
    canExport: boolean;
    canReport: boolean;
  }>;
}

interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  login: (email: string, password: string, mfaToken?: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      refreshToken: null,
      isLoading: false,
      error: null,

      login: async (email: string, password: string, mfaToken?: string) => {
        set({ isLoading: true, error: null });
        try {
          const res = await api.post('/auth/login', { email, password, mfaToken });
          const { accessToken, refreshToken, user } = res.data;
          
          set({
            user,
            token: accessToken,
            refreshToken,
            isLoading: false,
          });
        } catch (error: any) {
          set({
            isLoading: false,
            error: error.message,
          });
          throw error;
        }
      },

      logout: () => {
        api.post('/auth/logout');
        set({ user: null, token: null, refreshToken: null });
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ user: state.user, token: state.token, refreshToken: state.refreshToken }),
    }
  )
);
