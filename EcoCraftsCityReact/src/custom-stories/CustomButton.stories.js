import {ButtonCustomSC} from "../styled-components-css/styles.custom-button";
import '../index.css'

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'ButtonCustomSC',
    component: ButtonCustomSC,
    argTypes: {
        statusOpasity: false,
        width: '514px',
        padding: '18px 32px',
        primary: true
    }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ButtonCustomSC {...args} >Button</ButtonCustomSC>;

export const Button = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Button.args = {
    statusOpasity: false,
    width: '514px',
    padding: '18px 32px',
    primary: true
};


// export const ButtonCustomSCStory = {
//     args: {
//         statusOpasity: false,
//         width: '100px',
//         padding: '18px 32px'
//     }
// };