import { create } from 'zustand';

export const useThemeStore = create((set) => ({
    isDark: true,
    toggleTheme: () => set((state) => {
        const nextMode = !state.isDark;
        if (nextMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
        return { isDark: nextMode };
    }),
    initTheme: () => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            set({ isDark: true });
        } else {
            document.documentElement.classList.remove('dark');
            set({ isDark: false });
        }
    }
}));
