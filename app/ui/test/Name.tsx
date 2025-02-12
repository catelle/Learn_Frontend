"use client"
import clsx from "clsx";
import { useState } from "react";


interface NameProps{
    firstName: string,
    middleName:string,
    lastName:string
}

export const Name =({firstName, middleName, lastName}:NameProps)=>{

    const [name, setName]= useState(firstName);
    const[i,setI]= useState(0);
    const names=[
        firstName,
        middleName,
        lastName
    ]
    

    const handleClick= ()=>{
        if(i<names.length-1){
            console.log("this is lenght", names.length);
            console.log("this is ", i);
            setName(names[i])
            let j= i+1;
            setI(j);
        }else{
            
            setI(0);
            setName(names[i])
        }

    }


    return(

        <div>
            <p  className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm',
        {
          'bg-red-100 text-gray-500': name === firstName,
          'bg-green-500 text-white': name === lastName,
        },
      )}>{name}</p>
            <button className="bg-black text-white rounded-lg px-2 py-2" onClick={handleClick}>other name</button>
        </div>
    )
 



}