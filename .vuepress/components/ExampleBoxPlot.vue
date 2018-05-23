<template>
	<div class="example-box-plot">
		<div class="plot">
			<svg ref="svg"></svg>
		</div>

		<el-tabs type="card" v-model="mode" @tab-click="onTabChange">
			<el-tab-pane label="Manuell" name="manual">
				<div class="controls">
					<div class="group">
						<div class="control min">
							<label><math>x_{min}</math></label>

							<vue-slider :process-style="{ backgroundColor: '#77AA64' }" :tooltip-style="style_tooltip_min" width="100%"
							            :min="1" :max="max" v-model="min" v-on:input="initManual">
							</vue-slider>
						</div>

						<div class="control max">
							<label><math>x_{max}</math></label>

							<vue-slider :process-style="{ backgroundColor: '#FB8C00' }" :tooltip-style="style_tooltip_max" width="100%"
							            :min="min" :max="10" v-model="max" v-on:input="initManual">
							</vue-slider>
						</div>
					</div>

					<div class="group">
						<div class="control lower-quartile">
							<label><math>x_{0.25}</math></label>

							<vue-slider :process-style="{ backgroundColor: '#056dd2' }" :tooltip-style="style_tooltip" width="100%"
							            :min="min" :max="upperQuartile" :interval="0.5" v-model="lowerQuartile" v-on:input="initManual">
							</vue-slider>
						</div>

						<div class="control median">
							<label><math>\tilde{x}</math></label>

							<vue-slider :process-style="{ backgroundColor: '#9C27B0' }" :tooltip-style="style_tooltip_median" width="100%"
							            :min="lowerQuartile" :max="upperQuartile" :interval="0.5" v-model="median" v-on:input="initManual">
							</vue-slider>
						</div>

						<div class="control upper-quartile">
							<label><math>x_{0.75}</math></label>

							<vue-slider :process-style="{ backgroundColor: '#056dd2' }" :tooltip-style="style_tooltip" width="100%"
							            :min="lowerQuartile" :max="10" :interval="0.5" v-model="upperQuartile" v-on:input="initManual">
							</vue-slider>
						</div>
					</div>
				</div>
			</el-tab-pane>

			<el-tab-pane label="Beispieldaten" name="example-data">
				<div class="example-data">
					<div class="items">
						<div class="item" v-for="item in exampleData">
							{{ item }}
						</div>
					</div>

					<div class="actions">
						<el-popover ref="popover-add-value" placement="top" width="200" trigger="hover">
							<el-input-number v-model="add_value" :min="1" :max="10" />
						</el-popover>

						<el-button-group>
							<el-button :plain="true" size="small" icon="el-icon-plus" @click="addRandomItem">
								Zufallswert hinzufügen
							</el-button>

							<el-button :plain="true" size="small" icon="el-icon-plus" @click="addCustomItem" v-popover:popover-add-value>
								Festen Wert hinzufügen
							</el-button>

							<el-button :plain="true" :disabled="exampleData.length <= 3" size="small" icon="el-icon-minus" @click="removeFirstItem">
								Erstes Element entfernen
							</el-button>
						</el-button-group>
					</div>

					<div class="params">
						<div class="item">
							<math ref="ex_min">x_{min} = {{ min }}</math>
						</div>

						<div class="item">
							<math ref="ex_max">x_{max} = {{ max }}</math>
						</div>

						<div class="item">
							<math ref="ex_lower_quartile">x_{0.25} = {{ lowerQuartile }}</math>
						</div>

						<div class="item">
							<math ref="ex_median">\tilde{x} = {{ median }}</math>
						</div>

						<div class="item">
							<math ref="ex_upper_quartile">x_{0.75} = {{ upperQuartile }}</math>
						</div>
					</div>
				</div>
			</el-tab-pane>
		</el-tabs>

		<div class="legend">
			<label>Zur Erinnerung:</label>

			<div class="item">
				<math>\tilde{x}</math> = Median
			</div>

			<div class="item">
				<math>x_{0.25}</math> = Unteres Quartil
			</div>

			<div class="item">
				<math>x_{0.75}</math> = Oberes Quartil
			</div>
		</div>
	</div>	
</template>

<script>
	import * as d3 from 'd3'
	import * as d2b from 'd2b'

	const box = d2b.box()
	const scale = d3.scaleLinear().domain([11, 0]).range([420, 0])

	box.scale(scale).orient('horizontal')

	export default {
		name: 'ExampleBoxPlot',

		data() {
			return {
				max: 10,
				min: 1,
				upperQuartile: 7.5,
				lowerQuartile: 2.5,
				median: 5.0,
				outliers: [0, 10],

				exampleData: [1, 5, 10],

				mode: 'manual',

				add_value: 5
			}
		},

		computed: {
			style_tooltip() {
				return {
					backgroundColor: 'rgba(62, 109, 197, 1)',
					borderColor: 'rgba(62, 109, 197, 1)',
					color: '#fff'
				}
			},

			style_tooltip_median() {
				return {
					backgroundColor: '#9C27B0',
					borderColor: '#9C27B0',
					color: '#fff'
				}
			},

			style_tooltip_min() {
				return {
					backgroundColor: '#77AA64',
					borderColor: '#77AA64',
					color: '#fff'
				}
			},

			style_tooltip_max() {
				return {
					backgroundColor: '#FB8C00',
					borderColor: '#FB8C00',
					color: '#fff'
				}
			}
		},

		methods: {
			initManual() {
				d3.select(this.$refs.svg).selectAll('*').remove()

				d3.select(this.$refs.svg)
				  .append('g')
				      .datum({
				          maximum: this.max,
				          minimum: this.min,
				          upperQuartile: this.upperQuartile,
				          lowerQuartile: this.lowerQuartile,
				          median: this.median,
				          outliers: []
				      })
				      .call(box)
				      .attr('transform', 'translate(0, 50)')
			},

			initExampleData() {
				d3.select(this.$refs.svg).selectAll('*').remove()

				d3.select(this.$refs.svg)
				  .append('g')
				      .datum({
				          maximum: this.max,
				          minimum: this.min,
				          upperQuartile: this.upperQuartile,
				          lowerQuartile: this.lowerQuartile,
				          median: this.median,
				          outliers: []
				      })
				      .call(box)
				      .attr('transform', 'translate(0, 50)')
			},

			onTabChange(tab) {
				switch (this.mode) {
					case 'example-data':
						this.initExampleData()
						break

					case 'manual':
						this.initManual()
						break
				}
			},

			addRandomItem() {
				this.exampleData.push(Math.floor(Math.random() * 10) + 1)
				this.calculateFromData()
			},

			addCustomItem() {
				this.exampleData.push(this.add_value)
				this.calculateFromData()
			},

			removeFirstItem() {
				this.exampleData.splice(0, 1)
				this.calculateFromData()
			},

			calculateFromData() {
				this.min = Math.min(...this.exampleData)
				this.max = Math.max(...this.exampleData)
				this.median = this.getMedianOf(this.exampleData)
				this.lowerQuartile = this.getMedianOf(this.exampleData.slice(0, this.exampleData.length / 2))
				this.upperQuartile = this.getMedianOf(this.exampleData.slice(this.exampleData.length / 2))

				this.$refs.ex_min.update()
				this.$refs.ex_max.update()
				this.$refs.ex_lower_quartile.update()
				this.$refs.ex_median.update()
				this.$refs.ex_upper_quartile.update()

				this.initExampleData()
			},

			getMedianOf(arr) {
				arr = arr.slice().sort((a, b) => {
					if (a < b) {
						return -1
					} else if (a > b) {
						return 1
					}

					return 0
				})

				if (arr.length % 2 == 0) {
					// Even
					return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2
				} else {
					return arr[arr.length / 2]
				}
			}
		}
	}
</script>

<style lang="scss">
	@import '../styles/colors';
	@import '../styles/mixins';

	.example-box-plot {
		border: 1px solid color(blue-border);
		border-radius: 4px;

		$redHighlight: mix(color(red), #fff, 20%);

		.plot {
			height: 156px;
			text-align: center;

			svg {
				height: 156px;
				width: 420px;

				margin: auto;

				.d2b-box-rect {
					stroke: color(light-grey);
				}

				.d2b-box-center {
					stroke: color(light-grey);
				}

				.d2b-box-dash-minimum {
					stroke: color(green);
					stroke-width: 4px;
				}

				.d2b-box-dash-maximum {
					stroke: color(orange);
					stroke-width: 4px;
				}

				.d2b-box-dash-median {
					stroke: color(purple);
					stroke-width: 4px;
				}

				.d2b-box-label {
					display: none;
				}
			}
		}

		.tabs-component-panels {
			border-left: 0px !important;
			border-right: 0px !important;
			border-bottom: 0px !important;
		}

		.tabs-component-tabs {
			margin-top: 0;
		}

		.controls {

			.group {
				display: flex;
				align-items: center;

				.control {
					flex-grow: 1;

					padding: 16px 20px;
					padding-top: 20px;

					label {
						display: block;
						margin-top: -8px;
						margin-bottom: 4px;
					}

					&, .vue-slider-component {
						@include border-box;
					}
				}

				& + .group {
					border-top: 1px solid color(border);
				}
			}
		}

		.legend {
			border-top: 1px solid color(blue-border);

			display: flex;
			align-items: center;

			padding: 12px 16px;

			label {
				width: 96px;

				font-size: 12px;
				color: color(light-grey);

				margin-top: 1px;
			}

			.item {
				flex-grow: 1;
				text-align: center;
			}
		}

		.example-data {

			.items {
				display: flex;
				padding: 10px 12px;

				text-align: center;

				flex-wrap: no-wrap;
				overflow-x: auto;

				.item {
					padding: 4px 8px;
					border: 1px solid color(border);
					border-radius: 3px;

					margin: 4px;
					background: color(light-background);
					color: color(text);
				}
			}

			.actions {
				padding: 16px 16px;
				padding-top: 0;
			}

			.params {
				display: flex;
				align-items: center;

				border-top: 1px solid color(border);

				.item {
					flex-grow: 1;
					text-align: center;
					padding: 12px 16px;
				}
			}
		}
	}
</style>