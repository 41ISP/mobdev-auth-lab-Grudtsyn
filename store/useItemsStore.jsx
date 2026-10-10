import { create } from "zustand";
import { api } from "../src/api/api";

export const useItemsStore = create((set) => ({
    items: [],
    getItems: async () => {
        try {
            const res = await api.getItems()
            set({items: res.data})
        } catch(error) {
            console.error(error)
        }
    }
}))