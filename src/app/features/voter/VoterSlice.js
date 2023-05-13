/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import img2 from '../../../images/ivana-square.jpg'
import axios from 'axios'
const voterSlice=createSlice({
    name: "voter",
    initialState: {
        status: "idle",
        error: null,
        voters:[
          {
         id: 1,
         fullName: 'Natnael Getachew',
         firstName:'yohanes ',
         lastName:'getachew',
         photoUrl: `${img2}`,
         bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         admissionYear: 2020,
         graduationYear: 2024,
         department: 'Computer Science',
         status: 'Pending',
         email: 'johndoe@example.com',
       },
       {
         id: 2,
         fullName: 'Natnael Getachew',
         firstName:'zebider',
         lastName:'mikiket',
         photoUrl: `${img2}`,
         bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         admissionYear: 2019,
         graduationYear: 2023,
         department: 'Electrical Engineering',
         status: 'Approved',
         email: 'janedoe@example.com',
       },
       {
         id: 3,
         fullName: 'Natnael Getachew',
         firstName:'natty',
         lastName:'getachew',
         photoUrl: `${img2}`,
         bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         admissionYear: 2019,
         graduationYear: 2023,
         department: 'Electrical Engineering',
         status: 'Approved',
         email: 'janedoe@example.com',
       }
   ,
       {
         id:4,
         fullName: 'Natnael Getachew',
         firstName:'natty',
         lastName:'getachew',
         photoUrl: `${img2}`,
         bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         admissionYear: 2019,
         graduationYear: 2023,
         department: 'Electrical Engineering',
         status: 'Approved',
         email: 'janedoe@example.com',
       }
       ,
       {
         id: 5,
         fullName: 'Natnael Getachew',
         firstName:'natty',
         lastName:'getachew',
         photoUrl: `${img2}`,
         bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         admissionYear: 2019,
         graduationYear: 2023,
         department: 'Electrical Engineering',
         status: 'Approved',
         email: 'janedoe@example.com',
       }
       ,
       {
         id: 6,
         fullName: 'Natnael Getachew',
         firstName:'ggg',
         lastName:'getachew',
         photoUrl: `${img2}`,
         bio: 'Lorem ipsum dolor sit amet orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem orem ipsum dolor sit amet, consectetur adipiscing elit.Lorem, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         admissionYear: 2019,
         graduationYear: 2023,
         department: 'Electrical Engineering',
         status: 'Approved',
         email: 'janedoe@example.com',
       }
       ,
       {
         id: 7,
         fullName: 'Natnael Getachew',
         firstName:'natty',
         lastName:'getachew',
         photoUrl: 'https://via.placeholder.com/150',
         bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         admissionYear: 2019,
         graduationYear: 2023,
         department: 'Electrical Engineering',
         status: 'Approved',
         email: 'janedoe@example.com',
       }
       ,
       {
         id: 8,
         fullName: '',
         firstName:'',
         lastName:'',
         photoUrl: `${img2}`,
         bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
         admissionYear: 2019,
         graduationYear: 2023,
         department: 'Electrical Engineering',
         status: 'Approved',
         email: 'janedoe@example.com',
       }]

    },
   reducers: {
    addVoter: (state, action) => {
      state.voters = [...state.voters, action.payload];
     console.log("hello",action.payload)
    },
    setVoter: (state, action) => {
      state.voters = action.payload;
      console.log("Voter data set", action.payload);
    },
    },
   
});
export const fetchCandidate = createAsyncThunk("voters/get", async () => {
  const response = await axios.get("http://localhost:8000/all/voters");
  return response.data;
});
export default voterSlice.reducer;
export const selectVoter = (state) => state.voter.voters;
export const { setVoter } = voterSlice.actions;