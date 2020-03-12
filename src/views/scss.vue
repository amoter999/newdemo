<template>
	<div class="scss">
		<h2 class="titles2">考生须知</h2>
		<ul class="condition">
			<li><a href="#">报考条件</a></li>
			<li><a href="#">考试时间</a></li>
			<li><a href="#">考试科目</a></li>
			<li><a href="#">考试教材</a></li>
			<li><a href="#">考试费用</a></li>
			<li><a href="#">合格标准</a></li>
		</ul>
	</div>
</template>

<script>
import { Vue } from 'vue-property-decorator';
import Component from 'vue-class-component';
export default class Scss extends Vue {}
</script>

<style lang="scss">


$liColor: #f5ad1b, #5f89ce, #94bf45, #da8ec5, #78bfc2, #bec278;

@each $item in $liColor {
	$i: index($liColor, $item);
	ul.condition{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	li:nth-child(#{$i}) {	
		background-color: #666;
		margin-bottom: 10px;
		width: 45%;
		height: 150px;
		line-height: 150px;
		text-align: center;
		font-size: 16px;
		a{
			color:#fff;
		}
		&:hover{
			background-color: $item;
		}
	}
}
</style>
