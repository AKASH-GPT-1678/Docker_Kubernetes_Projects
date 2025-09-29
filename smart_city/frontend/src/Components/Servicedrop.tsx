import React from 'react'
import { Button } from './ui/button'
import {useForm} from 'react-hook-form';
import { Reportschema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input';
import { Select  ,MenuItem , FormLabel} from '@mui/material';
import { Reproting } from './schema';
import axios from 'axios';
export const Servicedrop = () => {
  return (
    <div className='cursor-pointer mt-3'>
      <Button className='cursor-pointer mt-5'>Report</Button>
    </div>
  )
}

export const Formofaci = () => {
    const [data , setdata] = React.useState<Reproting>();
    const { register , handleSubmit ,formState : {errors} } = useForm({
        resolver : zodResolver(Reportschema),
        defaultValues :{
            user: "",
            complaint : "",
            urgency: "Low" as "Low" | "Medium" | "High",
            type: "Others" as "Infrastructure" | "Sanitation" | "Safety" | "Traffic" | "Environment" | "Others",
            status: "Pending" as "Pending" | "In Progress" | "Resolved",
            dateOfRegister : new Date()



        
        }
    })

    const onSubmit = (data : Reproting) => {
        console.log(data);
        setdata(data);
    }

    const SendDataAndFile = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const fileinput = document.getElementById('files') as HTMLInputElement;
    
        if(!fileinput){
          alert("Bhai baksa khali Hia ")
        }
        console.log("xollectd")
        const file = fileinput?.files?.[0] as File;
    
        const formdata = new FormData();
        console.log("Data is Apapended")
        formdata.append('file' , file)
        try {
            const response = await axios.post('http://localhost:5000/api/users/upload' ,formdata )
            console.log((await response).data)
            const send = await axios.post('http://localhost:5000/api/report' , data)
            if(send.status == 201){
                console.log("Data Sent Successfully");
                alert("Data Sent Successfully");
            }
            
        } catch (error) {
          console.log(error)
          
        }
      }
    return(
        <div className='flex flex-col w-2/12 h-[300px] '>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 p-4 flex flex-col gap-4 w-"80%" h-"80%"'>
                <Input
                    placeholder="Enter Your Name"
                    {...register("user")}
                />
                {errors.user && errors.user?.message}
                <FormLabel>Urgency</FormLabel>
                <Select
                    {...register("urgency")}
                >
                    <MenuItem value="Low">Low</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                </Select>
                {errors.urgency && errors.urgency?.message}
                <FormLabel>Type</FormLabel>
                <Select
                    {...register("type")}
                >
                    <MenuItem value="Infrastructure">Infrastructure</MenuItem>
                    <MenuItem value="Sanitation">Sanitation</MenuItem>
                    <MenuItem value="Safety">Safety</MenuItem>
                    <MenuItem value="Traffic">Traffic</MenuItem>
                    <MenuItem value="Environment">Environment</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                </Select>
                {errors.type && errors.type?.message}
                <Input  type='file' placeholder='Choose the Prrof'  {...register("file")}/>
                {errors.file && errors.file?.message}
                <Button type='submit' className='mt-4 cursor-pointer' onDoubleClick={()=>SendDataAndFile }>Submit</Button>
            </form>

        </div>
    )
}

