<template>
	<div class="example covariance">
		<!-- <p><b>Hinweis</b>: Wir nehmen eine gleiche Auftrittswahrscheinlichkeit für alle Ereignisse an.</p> -->

		<div class="covariance-display">
			<div class="params main">
				<div class="item covariance">
					<math ref="covariance">Cov(X, Y) = {{ covariance | number_format(3) }}</math>
				</div>

				<div class="item correlation">
					<math ref="correlation">\rho(X, Y) = {{ correlation | number_format(3) }}</math>
				</div>
			</div>

			<div class="line">
				<div class="correlation-pointer" :style="{ left: correlation_pointer_left + '%' }"></div>
			</div>

			<div class="params labels">
				<div v-for="level in levels_labels" class="item">{{ level }}</div>
			</div>
		</div>

		<div class="data">
			<div class="x">
				<label>Datensatz für <math>X</math></label>

				<div class="datapoint" v-for="(datapoint, index) in dataX">
					<vue-slider :process-style="{ backgroundColor: '#056dd2' }" :tooltip="false" width="100%"
					            :min="-5" :max="5" :interval="0.1" v-model="datapoint.value" v-on:input="update">
					</vue-slider>

					<label><math ref="dataX">X_{{ index + 1 }} = {{ datapoint.value }}</math></label>
				</div>
			</div>

			<div class="y">
				<label>Datensatz für <math>Y</math></label>

				<div class="datapoint" v-for="(datapoint, index) in dataY">
					<vue-slider :process-style="{ backgroundColor: '#E91E63' }" :tooltip="false" width="100%"
					            :min="-5" :max="5" :interval="0.1" v-model="datapoint.value" v-on:input="update">
					</vue-slider>

					<label><math ref="dataY">Y_{{ index + 1 }} = {{ datapoint.value }}</math></label>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

		data() {
			return {
				dataX: [
					{ value: 0.2 },
					{ value: 0.9 },
					{ value: 3.2 },
				],

				dataY: [
					{ value: 0.2 },
					{ value: 0.3 },
					{ value: 0.4 },
				]
			}
		},

		computed: {
			dataX_normalized() {
				return this.dataX.map(o => o.value)
			},

			dataY_normalized() {
				return this.dataY.map(o => o.value)
			},

			levels() {
				return [
					'kein',
					'schwach',
					'mittel',
					'stark',
					'perfekt'
				]
			},

			levels_labels() {
				let labels = []

				labels = labels.concat(this.levels.slice(1).reverse())
				labels = labels.concat([ this.levels[0] ])
				labels = labels.concat(this.levels.slice(1))

				return labels
			},

			linear_covariance_steps() {
				let covariance = this.$statistics.covariance(this.dataX_normalized, this.dataY_normalized)

				if (covariance == 0) {
					return 'none'
				} else if (covariance < 0.5) {
					return 'weak'
				} else if (covariance < 0.8) {
					return 'medium'
				} else if (covariance < 1) {
					return 'strong'
				} else {
					return 'perfect'
				}
			},

			covariance() {
				return this.$statistics.covariance(this.dataX_normalized, this.dataY_normalized)
			},

			correlation() {
				return this.$statistics.correlation(this.dataX_normalized, this.dataY_normalized)
			},

			correlation_pointer_left() {
				let min = -1
				let max = 1

				let percentageScaleMin = 0
				let percentageScaleMax = 100

				return (this.correlation - min) * (percentageScaleMax - percentageScaleMin) / (max - min) + percentageScaleMin
			}
		},

		methods: {
			update() {
				this.$nextTick().then(_ => {
					if (this.$refs.covariance) this.$refs.covariance.update()
					if (this.$refs.correlation) this.$refs.correlation.update()

					if (this.$refs.dataX) this.$refs.dataX.forEach(d => d.update())
					if (this.$refs.dataY) this.$refs.dataY.forEach(d => d.update())
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '../styles/colors';
	@import '../styles/mixins';

	.example.covariance {
		border: 1px solid color(blue-border);

		margin: {
			top: 16px;
			bottom: 16px;
		}

		.covariance-display {

			padding: {
				top: 24px;
				bottom: 24px;
				left: 16px;
				right: 16px;
			}

			.line {
				position: relative;

				height: 4px;
				background: color(light-background);
				border-radius: 8px;

				margin: {
					top: 16px;
					bottom: 16px;
				}

				.correlation-pointer {
					position: absolute;
					top: -14px;
					left: 50%;

					width: 3px;
					height: 32px;

					border-radius: 16px;

					background: color(purple);
				}
			}

			.params {
				display: flex;
				align-items: center;

				.item {
					flex-grow: 1;
					text-align: center;

					&.correlation {
						color: color(purple);
					}
				}

				@include media(mobile) {
					&.main {
						display: block;

						.item {
							width: 100%;
						}
					}
				}
			}

			.params.labels {

				.item {
					width: 10%;
					font-size: 13px;
					color: color(light-grey);

					@include ellipsis;
				}
			}
		}
		
		.data {
			display: flex;
			align-items: stretch;

			border-top: 1px solid color(blue-border);

			padding: {
				left: 16px;
				right: 16px;
				top: 16px;
				bottom: 16px;
			}

			.x, .y {
				@include border-box;

				width: 50%;

				> label {
					display: block;

					font-weight: 600;
					margin-bottom: 12px;

					padding: {
						left: 8px;
						right: 8px;
					}
				}

				.datapoint {
					padding: {
						top: 4px;
						bottom: 4px;
					}
				}
			}

			.x {
				padding-right: 4px;
			}

			.y {
				padding-left: 4px;
			}

			@include media(mobile) {
				display: block;
				padding: 0;

				.x, .y {
					width: 100%;

					padding: {
						left: 16px;
						right: 16px;
						top: 16px;
						bottom: 16px;
					}
				}
			}
		}
	}
</style>