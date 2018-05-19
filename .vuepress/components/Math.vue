<template>
	<span :class="['math', { block }]" v-html="html"></span>
</template>

<script>
	const md = require('markdown-it')(),
	      mk = require('markdown-it-katex')

	md.use(mk)

	const observeDOM = (function(){
	    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
	        eventListenerSupported = window.addEventListener;

	    return function(obj, callback){
	        if( MutationObserver ){
	            // define a new observer
	            var obs = new MutationObserver(function(mutations, observer){
	                if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
	                    callback();
	            });
	            // have the observer observe foo for changes in children
	            obs.observe( obj, { childList:true, subtree:true });
	        }
	        else if( eventListenerSupported ){
	            obj.addEventListener('DOMNodeInserted', callback, false);
	            obj.addEventListener('DOMNodeRemoved', callback, false);
	        }
	    };
	})();

	export default {
		props: {
			block: {
				type: Boolean,
				required: false,
				default: false
			}
		},

		data() {
			return {
				html: '',
				observer: null
			}
		},

		mounted() {
			this.update()
		},

		computed: {
			wrapper_char() {
				return this.block ? '$$' : '$'
			}
		},

		methods: {
			render(str) {
				if (typeof(str) !== 'string') {
					return ''
				}

				return md.render(str)
			},

			getFormula() {
				return this.$slots.default[0].text
			},

			update() {
				this.$nextTick().then(_ => {
					this.html = this.render(this.wrapper_char + this.getFormula() + this.wrapper_char)
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '../styles/colors';

	.math {
		display: inline-block;

		p {
			--webkit-appearance: none;
			margin: 0;
			padding: 0;
		}

		&:not(.block) {
			// background: color(light-background);
			line-height: 1rem;

			/* padding: {
				left: 4px;
				right: 4px;
				top: 2px;
				bottom: 2px;
			} */

			margin: {
				left: 4px;
				right: 4px;
			}
		}

		&.block {
			display: block;
		}
	}
</style>