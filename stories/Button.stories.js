import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import Button from './Button.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
	title: 'CSF3/Button',
	component: Button,
	argTypes: {
		onClick: { action: 'onClick' },
		backgroundColor: { control: 'color' },
		label: { control: 'text' },
		primary: { control: 'boolean' },
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
		},
	},
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
	Component: Button,
	props: args,
	on: {
		click: args.onClick,
	},
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
	primary: true,
	label: 'Button',
};
Primary.play = async (args) => {
	const canvas = within(args.canvasElement);
	const button = canvas.getByRole('button')
	expect(button).toBeInTheDocument();
};
