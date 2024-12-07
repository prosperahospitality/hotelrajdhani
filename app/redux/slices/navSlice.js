const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    scrollLocation: false,
    scrollTourist: false,
};

const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {

        handleLocateUsFxn: (state, action) => {
            state.scrollLocation = action.payload
        },

        handleTouristSpotsFxn: (state, action) => {
            state.scrollTourist = action.payload
        },


    },
});

export const { handleLocateUsFxn, handleTouristSpotsFxn } = navSlice.actions;
export default navSlice.reducer