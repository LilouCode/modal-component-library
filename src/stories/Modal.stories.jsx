import { Modal } from "../Modal";

export default {
    title: 'Modal - Plugin',
    component: Modal,

};

const Template = args => <Modal {...args}/>;

export const Default = Template.bind({});
Default.args = {
    text: 'Hello there!'
}