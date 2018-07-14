<template>
	<div class="frequency-table">
		<table>
			<tr class="heading">
				<th></th>
				<th v-for="label in xLabels">{{ label }}</th>
				<th></th>
			</tr>

			<tr class="data" v-for="data in combined_data_with_frequencies">
				<th>{{ data.label }}</th>

				<td v-for="d in data.data">
					{{ d }}
				</td>

				<td class="frequency x">
					{{ data.frequency }}
				</td>
			</tr>

			<tr class="frequencies">
				<td></td>

				<td v-for="d in frequencies.y" class="frequency y">
					{{ d }}
				</td>

				<td v-if="data.length">
					<math ref="total">n = {{ total }}</math>
				</td>

				<td v-else>
					<math ref="total">n</math>
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'FrequencyTable',

		props: {
			xLabels: {
				type: Array,
				required: true
			},

			yLabels: {
				type: Array,
				required: true
			},

			data: {
				type: Array,
				required: false,

				default() {
					return []
				}
			}
		},

		computed: {
			combined_data() {
				let combined = []

				if (this.data.length) {
					for (let i = 0, max = this.data.length; i < max; i++) {
						combined[i] = {
							label: this.yLabels[i],
							data: this.data[i]
						}
					}
				} else {
					for (let key in this.yLabels) {
						combined[key] = {
							label: this.yLabels[key],
							data: [...Array(this.xLabels.length)].fill().map((_, i) => 'xy_' + (i + 1) + '_' + (parseInt(key) + 1))
						}
					}
				}

				return combined
			},

			combined_data_with_frequencies() {
				let combined = this.combined_data

				for (let rowKey in combined) {
					combined[rowKey].frequency = this.frequencies.x[rowKey]
				}

				return combined
			},

			frequencies() {
				if (this.data.length) {
					let y = []

					for (let rowKey in this.data) {
						
						for (let colKey in this.data[rowKey]) {
							if (y[colKey] === undefined) {
								y[colKey] = 0
							}
							
							y[colKey] += this.data[rowKey][colKey]
						}
					}

					return {
						x: this.yLabels.map((label, i) => this.data[i].reduce((j, acc) => j + acc)),
						y
					}
				} else {
					return {
						x: this.xLabels.map((label, i) => this.combined_data[i].data.join(' + ')),
						y: this.yLabels.map((label, i) => [...Array(this.yLabels.length)].fill().map((_, i) => 'x' + label + '_' + (i + 1)).join(' + '))
					}
				}
			},

			total() {
				return this.data.map(r => r.reduce((i, acc) => i + acc)).reduce((i, acc) => i + acc)
			}
		},

		methods: {
			update() {
				if (this.$refs.total) {
					this.$refs.total.update()
				}
			}
		}
	}
</script>

<style lang="scss">
	@import '../styles/colors';

	.frequency-table {
		$border: lighten(color(blue-grey), 16%);

		margin: {
			top: 24px;
			bottom: 24px;
		}

		table {
			width: 100%;
			cell-spacing: 0;
			border: 0;
		}

		th {
			font-weight: 600;
			color: color(blue-grey);
		}

		th, td {
			border: 0;
			width: auto !important;
		}

		tr.data > th {
			width: 128px !important;
			text-align: right;
		}

		tr.heading th,
		tr.data td {
			text-align: center;
		}

		tr.heading {

			th {
				border-top: 2px solid $border;
				border-bottom: 2px solid $border;
			}
		}

		tr.frequencies {

			td {
				border-top: 2px solid $border;
			}
		}

		td.frequency {
			font-style: italic;
		}

		td.frequency.y {
			text-align: center;
		}

		td.frequency.x {
			text-align: left;
			border-left: 2px solid $border;
		}
	}
</style>