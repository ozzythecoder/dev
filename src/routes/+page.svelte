<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { circOut } from 'svelte/easing';
	import Nav from '../lib/components/Nav.svelte';
	import DownArrow from '../lib/components/DownArrow.svelte';
	import Article from '../lib/components/Article.svelte';
	import UpArrow from '../lib/components/UpArrow.svelte';
	import BodyText from '../lib/components/BodyText.svelte';
  import Divider from '../lib/components/Divider.svelte';

	let ready = false;

	onMount(() => {
		ready = true;
	});
</script>

<header class="center-hero">
	{#if ready}
		<h1 in:fly={{ duration: 800, x: 500, easing: circOut }}>hey, i'm august.</h1>
	{:else}
		<!-- placeholder for heading. this prevents weird jumps while the page loads. -->
		<h1>‎</h1>
	{/if}

	<Nav />
	<DownArrow {ready} fadeIn={true} scrollTo="intro" />
</header>

<section>
	<Article scrollID="intro">
		<h2>Who am I?</h2>
		<BodyText>The short version:</BodyText>
		<ul class="body-text flex-list" id="keywords">
			<li>Swedish-American</li>
			<li>full-stack developer</li>
			<li>musician</li>
			<li>video game enjoyer</li>
		</ul>
    <Divider />
    <BodyText>
      As a child of the internet, my curiosity about tech started at a young age. I remember when I was 12, flipping through my mom's old PHP books and not understanding anything. Then flipping through her HTML books and understanding enough to build a little "message board" on Yahoo GeoCities. I've played video games for most of my life, and I've made music using a computer since 2010, and through it all, I've had countless moments where I've interacted with a piece of software and thought "how does that <i>work</i>?"
    </BodyText>
    <BodyText>
      When I was sixteen, I moved from my hometown of Anchorage, Alaska to my mother's hometown of Östersund, Sweden. Knowing only family, I quickly built a new life as a student, musician, and community member. Then when I was 21, after a long road trip and an expensive parking ticket, I did it again in Minneapolis, Minnesota. Both of these moves were shifts in the right direction, but they were monumental. Those years proved how valuable my adaptability is, but also encouraged me to start seeking some roots.
    </BodyText>
    <BodyText>
      Remaining curious and adaptable, I found a lot of fulfillment in the process of software development. Being able to look at a problem, identify its smaller issues, craft a set of detailed solutions, and then iterate over those solutions to polish them into a cohesive and beautiful user experience… It still feels a bit like magic.
      
		</BodyText>

		<DownArrow scrollTo="experience" />
	</Article>

	<Article scrollID="experience">
		<h2>Experience</h2>
		<BodyText>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat harum et veritatis
			culpa! Vitae, soluta. Iure reprehenderit minima officia? Unde ipsam nostrum, numquam
			cupiditate molestiae libero suscipit vero harum beatae deserunt. Accusamus, optio aut ullam
			odit blanditiis expedita esse, nam commodi cumque reiciendis dicta officiis aliquam eaque hic
			quaerat non numquam ea aperiam veniam, quibusdam fugiat! Quam, libero aut rem distinctio
			inventore sint nemo dolores iure ipsum tempore vel incidunt dicta quod rerum error expedita
			pariatur. Consequatur libero hic assumenda? Nihil nobis corrupti vel distinctio pariatur
			facere animi porro perspiciatis cumque asperiores, dolor excepturi accusantium officia
			assumenda praesentium quaerat!
		</BodyText>
		<BodyText>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat harum et veritatis
			culpa! Vitae, soluta. Iure reprehenderit minima officia? Unde ipsam nostrum, numquam
			cupiditate molestiae libero suscipit vero harum beatae deserunt. Accusamus, optio aut ullam
			odit blanditiis expedita esse, nam commodi cumque reiciendis dicta officiis aliquam eaque hic
			quaerat non numquam ea aperiam veniam, quibusdam fugiat! Quam, libero aut rem distinctio
			inventore sint nemo dolores iure ipsum tempore vel incidunt dicta quod rerum error expedita
			pariatur. Consequatur libero hic assumenda? Nihil nobis corrupti vel distinctio pariatur
			facere animi porro perspiciatis cumque asperiores, dolor excepturi accusantium officia
			assumenda praesentium quaerat!
		</BodyText>
		<DownArrow scrollTo="values" />
	</Article>

	<Article scrollID="values">
		<h2>Values</h2>
		<BodyText>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat harum et veritatis
			culpa! Vitae, soluta. Iure reprehenderit minima officia? Unde ipsam nostrum, numquam
			cupiditate molestiae libero suscipit vero harum beatae deserunt. Accusamus, optio aut ullam
			odit blanditiis expedita esse, nam commodi cumque reiciendis dicta officiis aliquam eaque hic
			quaerat non numquam ea aperiam veniam, quibusdam fugiat! Quam, libero aut rem distinctio
			inventore sint nemo dolores iure ipsum tempore vel incidunt dicta quod rerum error expedita
			pariatur. Consequatur libero hic assumenda? Nihil nobis corrupti vel distinctio pariatur
			facere animi porro perspiciatis cumque asperiores, dolor excepturi accusantium officia
			assumenda praesentium quaerat!
		</BodyText>
		<BodyText>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugiat harum et veritatis
			culpa! Vitae, soluta. Iure reprehenderit minima officia? Unde ipsam nostrum, numquam
			cupiditate molestiae libero suscipit vero harum beatae deserunt. Accusamus, optio aut ullam
			odit blanditiis expedita esse, nam commodi cumque reiciendis dicta officiis aliquam eaque hic
			quaerat non numquam ea aperiam veniam, quibusdam fugiat! Quam, libero aut rem distinctio
			inventore sint nemo dolores iure ipsum tempore vel incidunt dicta quod rerum error expedita
			pariatur. Consequatur libero hic assumenda? Nihil nobis corrupti vel distinctio pariatur
			facere animi porro perspiciatis cumque asperiores, dolor excepturi accusantium officia
			assumenda praesentium quaerat!
		</BodyText>
		<UpArrow />
	</Article>
</section>

<style lang="scss">
	.center-hero {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;

		background: url('/CurveLine.svg') no-repeat center center fixed;
		background-size: cover;

		/* remove for production! 👇 */
		/* outline: 1px white solid; */
	}

	.flex-list {
		display: flex;
    flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-evenly;
    align-items: center;
		margin: 0;
		padding: 0;

		li {
			padding: 1rem;
			list-style: none;
      text-align: center;
		}
	}
	@media screen and (max-width: 600px) {
		.flex-list {
			flex-direction: column;
			align-items: center;
		}
	}

	h1 {
		will-change: transform, opacity;
	}
</style>
