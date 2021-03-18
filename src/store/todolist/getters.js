export function todos(state) {
    return state.properties;
}

export const getTodo = (state) => (id) => {
    return state.properties.find((todolist) => todolist.id === id);
}