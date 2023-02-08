<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { userEvent, within } from '@storybook/testing-library';
	import { expect } from '@storybook/jest';
	import Button from './Button.svelte';
	import { action } from '@storybook/addon-actions';
	let count = 0;
	function handleClick() {
		count += 1;
		return action('clickity clackity')();
	}

	const tests =  {
		default:async (args) => {
			const canvas = within(args.canvasElement);
			const button = canvas.getByRole('button')
			expect(button).toBeInTheDocument();
		}
	};

</script>

<Meta title="Svelte CSF/Button" component={Button}/>

<Template let:args>
	<Button {...args} on:click={handleClick}>
		You clicked: {count}
	</Button>
</Template>

<Story name="Button" play={tests.default}/>