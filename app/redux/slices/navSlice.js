const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    scrollLocation: false,
    scrollTourist: false,
    partnersClick: false,
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

        handlePartnersClickFxn: (state, action) => {
            state.partnersClick = action.payload
        },


    },
});

export const { handleLocateUsFxn, handleTouristSpotsFxn, handlePartnersClickFxn } = navSlice.actions;
export default navSlice.reducer