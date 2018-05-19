<template>
	<div class="view-median component">
		<div class="median-value"><math ref="median">\tilde{x} = {{ median }}</math></div>

		<div class="values">
			<div class="value" v-for="value in values_sorted">{{ value }}</div>
		</div>

		<div class="controls">
			<div class="control">
				<math ref="n">n = {{ size }}</math>

				<input v-if="showControls"
				       type="range" min="1" max="10" v-model="size_custom" v-on:input="generateDataset(size_custom)" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			values: {
				type: Array,
				required: false,
				default() {
					return [
						1, 2, 4, 6, 6, 2, 7, 9, 9, 4, 1
					]
				}
			},

			showControls: {
				type: Boolean,
				required: false,
				default: false
			}
		},

		data() {
			return {
				size_custom: 1,
				values_mutable: []
			}
		},

		mounted() {
			this.size_custom = this.values.length
			this.values_mutable = this.values
		},

		computed: {
			values_sorted() {
				return this.values_mutable.sort((a, b) => {
					const ai = parseInt(a),
					      bi = parseInt(b)

					if (ai < bi) {
						return -1
					} else if (ai > bi) {
						return 1
					}

					return 0
				})
			},

			size() {
				return this.values_mutable.length
			},

			median() {
				let center = Math.floor(this.size / 2)

				if (this.size % 2 == 0) {
					// Even
					return (this.values_sorted[center - 1] + this.values_sorted[center]) / 2
				}

				// Odd
				return this.values_sorted[center]
			}
		},

		methods: {
			generateDataset(size) {
				this.values_mutable = []

				for (let i = 0; i < size; i++) {
					this.values_mutable.push(i + 1)
				}

				this.$refs.n.update()
				this.$refs.median.update()

				return this.values_mutable

				// this.values_mutable = [...new Array(+size)].map(x => Math.floor(Math.random() * size) + 1)
			}
		}
	}
</script>

<style lang="scss">
	@import '../styles/colors';

	.view-median {
		padding-top: 32px;
		position: relative;

		&::before, &::after {
			content: '';
			display: block;
			position: absolute;
		}

		&::before {
			width: 0px;
			height: 0px;

			border: 6px solid transparent;
			border-top-color: color(dark);

			top: 30px;
			left: calc(50% - 6px);
		}

		&::after {
			background: color(dark);
			width: 3px;
			height: 12px;

			top: 18px;
			left: calc(50% - 1.5px);
		}

		.median-value {
			display: block;
			position: absolute;
			top: -4px;
			left: calc(50% - 64px);

			text-align: center;
			width: 128px;

			color: color(text);
			font-weight: 600;

			z-index: 3;
		}

		.values {
			display: flex;

			border: 1px solid color(blue-border);
			background: linear-gradient(to bottom, color(blue-background) 0%, darken(color(blue-background), 4%) 100%);
			color: color(accent);

			.value {
				width: 100%;
				flex-grow: 1;
				text-align: center;

				font-weight: 400;

				padding: {
					top: 8px;
					bottom: 8px;
					left: 12px;
					right: 12px;
				}

				& + .value {
					border-left: 1px solid color(blue-border);
				}
			}
		}

		.controls {
			display: flex;

			border: 1px solid color(blue-border);
			border-top: 0;

			background: color(white);

			padding: {
				left: 12px;
				right: 16px;
				top: 8px;
				bottom: 8px;
			}

			.control {
				flex-grow: 1;

				.math {
					margin-right: 16px;
					vertical-align: middle;
				}

				input {
					vertical-align: middle;
					margin-top: -1px;
				}
			}
		}
	}
</style>