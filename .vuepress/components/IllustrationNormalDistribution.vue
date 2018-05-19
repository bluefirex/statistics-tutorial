<template>
	<div class="illustration-normal-distribution">
		<div class="chart">
			<vue-frappe id="gauss-1" ref="chart"
				:labels="this.values[0]"
			    type="axis-mixed"
			    :height="300"
			    :colors="['#056dd2']"
			    :yRegions="[{ label: 'Test', start: 0, end: 0.1, options: { labelPos: 'left' }}]"
			    :dataSets="[{ chartType: 'line', values: this.values[1] }]" />
		</div>

		<div class="controls">
			<div class="control">
				<label>Untere Grenze:</label>

				<vue-slider :process-style="{ backgroundColor: '#056dd2' }" :tooltip-style="{ backgroundColor: '#056dd2', borderColor: '#056dd2' }" width="100%"
				            :min="-10" :max="10" v-model="lower_bound_mutable" v-on:input="update">
				</vue-slider>
			</div>

			<div class="control">
				<label>Obere Grenze:</label>
				
				<vue-slider :process-style="{ backgroundColor: '#056dd2' }" :tooltip-style="{ backgroundColor: '#056dd2', borderColor: '#056dd2' }" width="100%"
				            :min="-10" :max="10" v-model="upper_bound_mutable" v-on:input="update">
				</vue-slider>
			</div>
		</div>

		<div class="location-params">
			<math ref="sigma">\sigma = {{ values[3] }}</math>
			<math ref="sigma_squared">\sigma^2 = {{ values[3] ** 2 }}</math>
			<math ref="mu">\mu = {{ values[2] }}</math>
		</div>
	</div>
</template>

<script>
	import _ from 'underscore'

	export default {

		props: {
			lowerBound: {
				type: Number,
				required: false,
				default: -2
			},

			upperBound: {
				type: Number,
				required: false,
				default: 2
			}
		},

		data() {
			return {
				lower_bound_mutable: this.lowerBound,
				upper_bound_mutable: this.upperBound
			}
		},

		computed: {
			values() {
				let mean = this.getMean(this.lower_bound_mutable, this.upper_bound_mutable)
				let stdDev = this.getStdDev(this.lower_bound_mutable, this.upper_bound_mutable)
				let points = this.generatePoints(this.lower_bound_mutable, this.upper_bound_mutable, 0.5)

				return [
					points,
					points.map(x => this.normalY(x, mean, stdDev)),
					mean,
					stdDev
				]
			}
		},

		methods: {
			normalY(x, mean, stdDev) {
				return Math.exp((-0.5) * Math.pow((x - mean) / stdDev, 2))
			},

			getMean(lowerBound, upperBound) {
				return (lowerBound + upperBound) / 2
			},

			getStdDev(lowerBound, upperBound) {
				return Math.abs((upperBound - lowerBound) / 4)
			},

			generatePoints(lowerBound, upperBound, step = undefined) {
				let stdDev = this.getStdDev(lowerBound, upperBound)
				let min = lowerBound - 2 * stdDev
				let max = upperBound + 2 * stdDev
				let unit = step || max - min / 100

				return _.range(min, max, unit)
			},

			update() {
				this.$refs.sigma.update()
				this.$refs.sigma_squared.update()
				this.$refs.mu.update()

				// this.$refs.chart.startChart() FIXME
			}
		}
	}
</script>

<style lang="scss">
	@import '../styles/colors';

	.illustration-normal-distribution {

		margin: {
			top: 16px;
			bottom: 16px;
		}

		> .chart {
			border: 1px solid color(blue-border);
		}

		.controls, .location-params {
			border: 1px solid color(blue-border);
			border-top: 0;

			padding: {
				top: 16px;
				bottom: 16px;
				left: 16px;
				right: 16px;
			}
		}

		.controls {
			display: flex;

			.control {
				flex-grow: 1;
				padding-top: 2px;
			}
		}

		.location-params {
			text-align: center;

			span.math {
				margin: {
					left: 12px;
					right: 12px;
				}
			}
		}
	}
</style>