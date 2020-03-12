<template>
	<div class="animation">
		<div class="animate">
			<div class="loading">
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
				<div class="dot"></div>
			</div>
		</div>
		<div class="outRotate"><div class="newrotate"></div></div>
	</div>
</template>
<script>
import { Vue } from 'vue-property-decorator';
import Component from 'vue-class-component';
export default class About extends Vue {}
</script>
<style lang="scss">
.animate {
	display: flex;
	height: 200px;
	justify-content: center;
	align-items: center;
	// background: #;
}
.loading {
	$colors: #7ef9ff, #89cff0, #4682b4, #0f52ba, #000080;
	display: flex;
	animation-delay: 1s;

	.dot {
		position: relative;
		width: 20px;
		height: 20px;
		margin: 5px;
		border-radius: 50%;

		&::before {
			position: absolute;
			left: 0;
			content: '';
			width: 100%;
			height: 100%;
			background: inherit;
			border-radius: inherit;
			animation: wave 2s ease-out infinite;
		}

		@for $i from 1 through 5 {
			&:nth-child(#{$i}) {
				background: nth($colors, $i);
				&::before {
					animation-delay: $i * 0.2s;
				}
			}
		}
	}
}

.outRotate {
	display: flex;
	width: 100%;
	height: 200px;
	justify-content: center;
	align-items: center;
	background: #fff;
}
.newrotate {
	position: relative;
	width: 100px;
	height: 100px;
	background: #fff;
	border-radius: 50%;
	box-shadow: inset 10px -10px crimson;
	animation: spin 2s linear infinite;
	&::before,
	&::after {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		left: 0;
		background: inherit;
		border-radius: inherit;
		box-shadow: inherit;
	}

	&::before {
		filter: blur(5px);
	}

	&::after {
		filter: blur(10px);
	}
}

@keyframes spin {
	to {
		transform: rotate(1turn);
	}
}

@keyframes wave {
	50%,
	75% {
		transform: scale(2);
	}

	80%,
	100% {
		opacity: 0;
	}
}
</style>
