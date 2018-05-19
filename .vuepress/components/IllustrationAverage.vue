<template>
	<div class="illustration-average">
		<div class="canvas-wrapper">
			<canvas ref="canvas" width="400" height="168"></canvas>
		</div>

		<div class="control left">
			<vue-slider :process-style="{ backgroundColor: '#056dd2' }" :tooltip-style="style_tooltip" :tooltip-dir="left_extreme > 5 ? 'top' : 'bottom'" direction="vertical" height="100%"
			            :min="1" :max="10" v-model="left_extreme" v-on:input="init">
			</vue-slider>
		</div>

		<div class="control right">
			<vue-slider :process-style="{ backgroundColor: '#056dd2' }" :tooltip-style="style_tooltip" :tooltip-dir="right_extreme > 5 ? 'top' : 'bottom'" direction="vertical" height="100%"
			            :min="1" :max="10" v-model="right_extreme" v-on:input="init">
			</vue-slider>
		</div>

		<div class="legend">
			<div class="item left-extreme">
				<label>Ausreiser Links:</label> {{ left_extreme }}
			</div>

			<div class="item total">
				<math ref="n">n = {{ total }}</math>
			</div>

			<div class="item average">
				<math ref="average">\bar{x} = {{ average }}</math>
			</div>

			<div class="item right-extreme">
				<label>Ausreiser Rechts:</label> {{ right_extreme }}
			</div>
		</div>
	</div>
</template>

<script>
	import VueSlider from 'vue-slider-component'

	export default {

		components: {
			VueSlider
		},

		data() {
			return {
				left_extreme: 1,
				right_extreme: 1
			}
		},

		computed: {
			canvas() {
				return this.$refs.canvas
			},

			height() {
				return 168
			},

			style_tooltip() {
				return {
					backgroundColor: 'rgba(62, 109, 197, 1)',
					borderColor: 'rgba(62, 109, 197, 1)',
					color: '#fff'
				}
			},

			total() {
				return 48 + this.left_extreme + this.right_extreme
			},

			average() {
				return Math.round((this.left_extreme * 1 +
					                2 * 2 +
					                4 * 3 +
					                6 * 4 +
					                8 * 5 +
					                10 * 6 +
					                8 * 7 +
					                6 * 8 +
					                4 * 9 +
					                2 * 10 +
					                this.right_extreme * 11) / this.total * 100) / 100
			},

			onResize_bound() {
				return this.onResize.bind(this)
			}
		},

		mounted() {
			this.init()
			this.onResize(null)

			window.addEventListener('resize', this.onResize_bound())
		},

		beforeDestroy() {
			window.removeEventListener('resize', this.onResize_bound())
		},

		methods: {
			init() {
				let ctx = this.canvas.getContext('2d')
				let columnWidth = 24
				let spaceBetween = 8
				let padding = 36
				let ratio = this.getRatio()

				ctx.beginPath()
				ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

				this.fillRect(ctx, padding,                                    this.height - this.scaleUserHeight(this.height, this.left_extreme),		columnWidth, this.scaleUserHeight(this.height, this.left_extreme),	'rgb(62, 109, 197)')
				this.fillRect(ctx, padding + (columnWidth + spaceBetween) * 1, this.height - this.scaleUserHeight(this.height, 2),						columnWidth, this.scaleUserHeight(this.height, 2),					'#525B66')
				this.fillRect(ctx, padding + (columnWidth + spaceBetween) * 2, this.height - this.scaleUserHeight(this.height, 4),						columnWidth, this.scaleUserHeight(this.height, 4),					'#525B66')
				this.fillRect(ctx, padding + (columnWidth + spaceBetween) * 3, this.height - this.scaleUserHeight(this.height, 6),						columnWidth, this.scaleUserHeight(this.height, 6),					'#525B66')
				this.fillRect(ctx, padding + (columnWidth + spaceBetween) * 4, this.height - this.scaleUserHeight(this.height, 8),						columnWidth, this.scaleUserHeight(this.height, 8),					'#525B66')
				this.fillRect(ctx, padding + (columnWidth + spaceBetween) * 5, this.height - this.scaleUserHeight(this.height, 10),						columnWidth, this.scaleUserHeight(this.height, 10),					'#525B66')
				this.fillRect(ctx, padding + (columnWidth + spaceBetween) * 6, this.height - this.scaleUserHeight(this.height, 8),						columnWidth, this.scaleUserHeight(this.height, 8),					'#525B66')
				this.fillRect(ctx, padding + (columnWidth + spaceBetween) * 7, this.height - this.scaleUserHeight(this.height, 6),						columnWidth, this.scaleUserHeight(this.height, 6),					'#525B66')
				this.fillRect(ctx, padding + (columnWidth + spaceBetween) * 8, this.height - this.scaleUserHeight(this.height, 4),						columnWidth, this.scaleUserHeight(this.height, 4),					'#525B66')
				this.fillRect(ctx, padding + (columnWidth + spaceBetween) * 9, this.height - this.scaleUserHeight(this.height, 2),						columnWidth, this.scaleUserHeight(this.height, 2),					'#525B66')
				this.fillRect(ctx, padding + (columnWidth + spaceBetween) * 10, this.height - this.scaleUserHeight(this.height, this.right_extreme),	columnWidth, this.scaleUserHeight(this.height, this.right_extreme),	'rgb(62, 109, 197)')
			
				this.$refs.n.update()
				this.$refs.average.update()
			},

			fillRect(ctx, x, y, width, height, color) {
				ctx.fillStyle = color
				ctx.fillRect(x, y, width, height)
			},

			strokeRect(ctx, x, y, width, height, color) {
				ctx.strokeStyle = color
				ctx.strokeRect(x, y, width, height)
			},

			toScale(a, base) {
				return a / base * 100
			},

			toBase(a, base) {
				return base * (a / 100)
			},

			scaleUserHeight(a, b, base) {
				return this.toBase(this.toScale(b, 10), a)
			},

			getRatio() {
				let ctx = this.canvas.getContext('2d')
				let backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.backingStorePixelRatio || 1

				if ('devicePixelRatio' in window) {
					if (window.devicePixelRatio > 1) {
						return window.devicePixelRatio / backingStoreRatio
					}
				}

				return 1
			},

			onResize(e) {
				let ratio = this.getRatio()

				this.canvas.width = 380 + 36

				let oldWidth = this.canvas.width
				let oldHeight = this.canvas.height

				this.canvas.width = oldWidth * ratio
				this.canvas.height = oldHeight * ratio

				this.canvas.style.width = oldWidth + 'px'
				this.canvas.style.height = oldHeight + 'px'

				this.canvas.getContext('2d').scale(ratio, ratio)

				this.init()
			}
		}
	}
</script>

<style lang="scss">
	@import '../styles/colors';
	@import '../styles/mixins';

	$height: 168px;

	.illustration-average {
		position: relative;

		margin: {
			top: 24px;
			bottom: 24px;
		}

		.canvas-wrapper {
			@include border-box;
			position: relative;

			width: 100%;
			height: $height;
			border: 1px solid color(blue-border);

			text-align: center;

			canvas {
				display: inline-block;
				margin-top: -1px;
				position: relative;
			}
		}

		.control {
			position: absolute;
			top: 0;
			height: $height;

			width: 30px;

			text-align: center;

			&.left {
				left: 0;
			}

			&.right {
				right: 0;
			}
		}

		.legend {
			@include border-box;

			border: 1px solid color(blue-border);
			border-top: 0;
			width: 100%;

			display: flex;
			align-items: center;

			padding: {
				left: 16px;
				right: 16px;
				top: 8px;
				bottom: 8px;
			}

			.item {
				flex-grow: 1;
				text-align: center;

				label {
					color: color(light-grey);
				}
			}
		}
	}
</style>