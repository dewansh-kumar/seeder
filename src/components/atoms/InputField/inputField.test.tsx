import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

import {InputField} from "./index"

describe("Application", () => {
    test("renders the inputFiled correctly", () => {
       const placeholder = "Enter your name";
        const value = "Dewansh Kumar";
        const onChangeFun  = (event :  React.ChangeEvent<HTMLInputElement>) => {}
        const name = "userName"
        const type = "text"

        render(<InputField placeholder={placeholder} value={value} onChangeFun={onChangeFun} name={name} type={type}/>);

        const input1 = screen.getByRole("textbox");
        expect(input1).toBeInTheDocument();

        const input2 = screen.getByDisplayValue("Dewansh Kumar");
        expect(input2).toBeInTheDocument();


        const input3 = screen.getByPlaceholderText("Enter your name");
        expect(input3).toBeInTheDocument();

    })
})
