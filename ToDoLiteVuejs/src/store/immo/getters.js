// getters
export function myGetter(state) {
    return state.properties.length;
}
export const getBien = (state) => (id) => {
    return state.properties.find((immo) => immo.id === id);
}
