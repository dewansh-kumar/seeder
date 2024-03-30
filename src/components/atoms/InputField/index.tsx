import { TextField } from "@mui/material";
import React from 'react'
import theme from "../../../themes";


interface InputFieldProps {
    variant?: "filled" | "outlined" | "standard",
    label?: string,
    placeholder: string,
    fontColor? : string
    onChangeFun : (event : React.ChangeEvent<HTMLInputElement>)=>void,
    value : string,
    name : string,
    type : any
}



export const InputField = (props: InputFieldProps) => {
    const { variant = "filled", label = "", fontColor = "black"} = props;

    return (
        <TextField variant={variant}
            placeholder={props.placeholder}
            label={label}
            fullWidth 
            onChange={props.onChangeFun}
            value = {props.value}
            name = {props.name}
            type = {props.type}
            sx={{
               backgroundColor : theme.palette.border.borderHighEmp,
               input: { color:fontColor } ,
               "& fieldset": { border: 'none' },
                borderRadius : "12px"
            }}/>
    )
}
