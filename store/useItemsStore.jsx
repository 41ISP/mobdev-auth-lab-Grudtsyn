import { create } from "zustand";
import { api } from "../src/api/api";

export const useItemsStore = create((set) => ({
    item: null,
    items: [],
    bids: [],
    getItems: async () => {
        try {
            const res = await api.getItems()
            set({items: res.data})
        } catch(error) {
            console.error(error)
        }
    },
    getItem: async (id) => {
        try {
            const res = await api.getItem(id);
            set({ item: res.data });
        } catch (error) {
            console.error("Ошибка при загрузке товара:", error); } },
}))