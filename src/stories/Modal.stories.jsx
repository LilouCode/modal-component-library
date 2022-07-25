import { Modal } from "../Modal";

export default {
    title: 'Modal - Plugin',
    component: Modal,
    argTypes: {
        textColor : {control:'color'},
        btnColor: {control: 'color'},
        btnBackgroundColor: {control:'color'},
        wrapperBackgroundColor: {control:'color'},
        borderRadius: {control: 'radio', options: ['oval', 'round', 'square'] },
        textFontSize: {sontrol: 'select', options: ["tiny","small","normal","large","super","extra"]},
        btnFontSize: {sontrol: 'select', options: ["tiny","small","normal","large","super","extra"]}

    }

};

const Template = args => <Modal {...args}/>;

export const Default = Template.bind({});
Default.args = {
    textFontFamily: "Georgia, 'Times New Roman', Times, serif",
    btnFontFamily: "Georgia, 'Times New Roman', Times, serif",
    textColor: "#000000",
    btnColor: "#acdef3",
    btnBackgroundColor:"#0b0b13",
    wrapperBackgroundColor: "#ffffff",
    textContent: 'A modal in a box in a wrapper in a component',
    textBtn: "Close the modal",
}