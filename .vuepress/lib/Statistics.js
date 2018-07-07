export default class Statistics {

	static max(data) {
		return Math.max.apply(null, data)
	}

	static min(data) {
		return Math.min.apply(null, data)
	}

	static range(data) {
		return this.max(data) - this.min(data)
	}

	static sum(data) {
		return data.reduce((acc, x) => acc + x)
	}

	static mean(data) {
		return this.sum(data) / data.length
	}

	static median(data) {
		let n = data.length,
			sorted = data.sort()

		if (n % 2 === 0) { // even
			return (sorted[n / 2 - 1] + sorted[n / 2]) / 2
		} else { // odd
			return sorted[(n - 1) / 2]
		}
	}

	static variance(data) {
		let mean = this.mean(data)

		return this.mean(data.map(xj => Math.pow(xj - mean, 2)))
	}

	static stdDeviation(data) {
		return Math.sqrt(this.variance(data))
	}

	static covariance(dataX, dataY) {
		const meanX = this.mean(dataX),
		      meanY = this.mean(dataY),
		      n = dataX.length

		let deviations = 0

		for (let i = 0; i < n; i++) {
			deviations += (dataX[i] - meanX) * (dataY[i] - meanY)
		}

		let covariance = deviations / n

		return covariance
	}

	static correlation(dataX, dataY) {
		const varianceX = this.variance(dataX),
		      varianceY = this.variance(dataY)

		if (varianceX == 0 || varianceY == 0) {
			return 0
		}

		return this.covariance(dataX, dataY) / Math.sqrt(varianceX * varianceY)
	}
}