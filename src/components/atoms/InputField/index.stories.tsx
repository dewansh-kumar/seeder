import { InputField } from "./index"
import { Meta, StoryObj } from "@storybook/react";
import theme from "../../../themes";

   const  meta : Meta<typeof  InputField> = {
    component: InputField,
    title: 'atoms/InputField',
    tags: ['autodocs'],
}

export default meta;

type story = StoryObj<typeof InputField>;

var inputOnChangeFun = (event : React.ChangeEvent<HTMLInputElement>)=>{
    console.log(event);
}

export const Default : story = {
    args : {
        placeholder : "Enter your name",
        variant : "outlined",
        fontColor : theme.palette.primary.primaryTextLowEmp,
        onChangeFun : inputOnChangeFun,
        value : "",
        name : "useName",
        type : "text"
    }
}


