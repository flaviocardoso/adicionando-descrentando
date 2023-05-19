import { acceptHMRUpdate, defineStore } from "pinia";

export const useCount = defineStore({
    id: 'count',
    state: () => ({
        count: 0
    }),
    actions: {
        decrement() {
            if (this.count <= 0) return
            this.count--
        },
        decrementByNumber(n: number) {
            this.count -= n
        },
        increment() {
            this.count++
        },
        incrementByNumber(n: number) {
            this.count += n
        },
        clear() {
            this.count = 0
        }
    },
    getters: {
        getCount: (state) => state.count,
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCount, import.meta.hot))
}