const { createSlice } = require('@reduxjs/toolkit');

const initialState = { name:null,label:null, ProjectPlotArea: null, GreenArea: null,PropertyStatus:null,PriceRange:null,TotalTowers: null,TotalFlats: null,OCStatus: null,
    Density: null,PodiumNonPodium: null,ApprovedBank: null,ApprovedBank1: null,ApprovedBank2: null,ApprovedBank3: null,ApprovedBank4: null,ClubHouseSize: null,
    ConstructionType: null,TowerHeights: null,LiftperTower: null,FloorvsFlats: null,Floorvsflats2:null,PossessionDate:null,Lobby: null,Distance: null ,distance2:null,distance3:null,distance4:null}

const property3Slice = createSlice({
    name: 'property3',
    initialState,
    reducers: {
        add3(state, action) {
            state.name = action.payload.name;
            state.label = action.payload.label;
            state.ProjectPlotArea = action.payload.ProjectPlotArea;
            state.GreenArea = action.payload.GreenArea;
            state.PropertyStatus = action.payload.PropertyStatus;
            state.PriceRange = action.payload.PriceRange;
            state.TotalTowers = action.payload.TotalTowers;
            state.TotalFlats = action.payload.TotalFlats;
            state.OCStatus = action.payload.OCStatus;
            state.Density = action.payload.Density;
            state.PodiumNonPodium= action.payload.PodiumNonPodium;
            state.ApprovedBank = action.payload.ApprovedBank;
            state.ApprovedBank1 = action.payload.ApprovedBank1;
            state.ApprovedBank2 = action.payload.ApprovedBank2;
            state.ApprovedBank3 = action.payload.ApprovedBank3;
            state.ApprovedBank4 = action.payload.ApprovedBank4;
            state.ClubHouseSize = action.payload.ClubHouseSize;
            state.ConstructionType = action.payload.ConstructionType;
            state.TowerHeights = action.payload.TowerHeights;
            state.LiftperTower = action.payload.LiftperTower;
            state.FloorvsFlats = action.payload.FloorvsFlats;
            state.Floorvsflats2 = action.payload.Floorvsflats2;
            state.PossessionDate = action.payload.PossessionDate;
            state.Lobby = action.payload.Lobby;
            state.Distance = action.payload.Distance;
            state.distance2 = action.payload.distance2;
            state.distance3 = action.payload.distance3;
            state.distance3 = action.payload.distance3;
            state.distance4 = action.payload.distance4;
        },
     
    },
});

export const { add3 } = property3Slice.actions;
export default property3Slice.reducer;