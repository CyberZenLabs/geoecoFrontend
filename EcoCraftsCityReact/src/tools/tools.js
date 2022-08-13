const Tools = {
    compare: (state, compareState) => {
        return JSON.stringify(state) === JSON.stringify(compareState);
    }
};

export default Tools;