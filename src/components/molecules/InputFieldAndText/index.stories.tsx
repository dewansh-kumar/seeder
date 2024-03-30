import { Meta, StoryObj } from "@storybook/react";
import theme from "../../../themes";
import InputFieldAndText from ".";

const meta: Meta<typeof InputFieldAndText> = {
    component: InputFieldAndText,
    title: 'molecules/InputField',
    tags: ['autodocs'],
}

export default meta;

type story = StoryObj<typeof InputFieldAndText>;

const inputOnChangeFun = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
}

export const Default: story = {
    args: {

        textBody: "Cash kick name",
        placeholder: "Ex: marketing expenses",
        fontColor: theme.palette.primary.primaryTextMidEmp,
        onChangeFun: inputOnChangeFun,
        value: "",
        name: "useName",
        type: "text",

    }
}
