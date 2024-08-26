import React, { useEffect } from 'react'
import { Button} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
function Addbug(){
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('');
    const [assigned, setAssigned] = useState('');
    const [reporter, setReporter] = useState('');
    const [allDev, setAllDev] = useState([]);
    const [allQA, setAllQA] = useState([]);

    const navigate = useNavigate();
    const handleChange = (event) => {
        setAssigned(event.target.value);
    };
    const handleChange1 = (event) => {
        setStatus(event.target.value);
    };
    const handleChange2 = (event) => {
        setReporter(event.target.value);
    };
    useEffect(()=>{
        const staff = async()=>{
            const response = await fetch('http://localhost:4000/staff',{
                method: 'GET',
        })
        const result = await response.json()
        setAllDev(result.filter((staff)=>staff.role.name === 'Developer'))
        setAllQA(result.filter((staff)=>staff.role.name === 'QA'))
        if (localStorage.getItem('access_token') === null) {
            navigate('/');
            alert('Please login to continue');
        }
        if (localStorage.getItem('role') === 'QA') {
            setReporter(localStorage.getItem('id'));
        }
        else if(localStorage.getItem('role') === 'Developer'){
            setAssigned(localStorage.getItem('id'));

        }
    }
        staff()
            },[])

    
    return(
         <div className="box">
            <h2>Add Bug</h2>
            <form action="">
                <div className="inputBox">
                    <input type="text" name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} required />
                    <label htmlFor="Title">Title</label>
                </div>
                <div className="inputBox">
                    <input type="text" name="description" value={description} onChange={(e)=>{setDescription(e.target.value)}} required />
                    <label htmlFor="Description">Description</label>
                </div>
        <FormControl required sx={{ m: 1, minWidth: 120 }} >
        <InputLabel id="demo-simple-select-required-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={status}
          label="Status"
            onChange={handleChange1}
        >
          <MenuItem value={true} >Open</MenuItem>
          <MenuItem value={false}>Closed</MenuItem>
        </Select>
      </FormControl>
      <div className='mt-5'>
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">Assignee</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
            value={assigned}
          label="Assignee"
          onChange={handleChange}
          >
            {
                
                localStorage.getItem("role") === "Developer" ? <MenuItem key={localStorage.getItem("id")} value={localStorage.getItem("id")} on>{localStorage.getItem("username")}</MenuItem> : allDev.map((staff)=>(
                    <MenuItem key={staff.id} value={staff.id} on>{staff.username}</MenuItem>
                    ))
                }
        </Select>
      </FormControl>
      <br />
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">Reporter</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
            value={reporter}
          label="Reporter"
          onChange={handleChange2}
          >
            {
                
                localStorage.getItem("role") === "QA" ? <MenuItem key={localStorage.getItem("id")} value={localStorage.getItem("id")} on>{localStorage.getItem("username")}</MenuItem> : allQA.map((staff)=>(
                    <MenuItem key={staff.id} value={staff.id} on>{staff.username}</MenuItem>
                    ))
                }
        </Select>
      </FormControl>
      
    </div>
      <br/>
                <div className="flex justify-center">
                <Button variant="contained" color="primary" onClick={async()=>{
                    const data = {
            title: title,
            description: description,
            status: status,
            assignee: assigned,
            reporter: reporter,
            createdAt: "2024-08-23 14:30:00",
            updatedAt: "2024-08-23 14:30:00"
        }
        console.log("THe DAta");
        console.log(data)
        const myHeaders = new Headers();
        const token = localStorage.getItem('access_token');
        myHeaders.append('Authorization', `Bearer ${token}`);
        myHeaders.append('Content-Type', 'application/json');
        const response = await fetch('http://localhost:4000/bugreport/',{
            method: 'POST',
            headers:myHeaders,
            body: JSON.stringify(data)
        })
            if(response.status === 201){
                alert('Bug Created Successfully')
                navigate('/dashboard')
            }
            else{
                const result = await response.json()
                alert(result.error)
            }
        }
                    
                }>
                    Submit
                </Button>
                </div>
            </form>
            <div className='flex justify-center mt-7 -mb-6 text-white hover:text-blue-500 font-thin text-xs'>
                <Link to="/dashboard"> Cancel</Link>
            </div>
         </div>
    )
}

export default Addbug;