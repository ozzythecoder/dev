<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { circOut } from 'svelte/easing';

	import IntersectionObserver from 'svelte-intersection-observer';

	import Nav from '../lib/components/Nav.svelte';
	import DownArrow from '../lib/components/DownArrow.svelte';
	import Article from '../lib/components/Article.svelte';
	import UpArrow from '../lib/components/UpArrow.svelte';
	import BodyText from '../lib/components/BodyText.svelte';
	import Divider from '../lib/components/Divider.svelte';
	import Spotlight from '../lib/components/Spotlight.svelte';

	let ready = false;

	let element;
	let intersecting;

  let princeSymbolString =
    '<img style="height:1.2rem; margin-bottom:-0.2rem" src="./Prince-Love-Symbol.svg" />'
	let enbyFlagString =
		'<img style="height:0.8rem;" src="./nonbinary-flag.png" alt="non-binary pride flag" />';

	const bulletPoints = [
    `📌${princeSymbolString} Minneapolis, Minnesota`,
		'🇸🇪 Swedish-American',
		`${enbyFlagString} non-binary (they/them)`,
		'💻 full-stack software developer',
		'🎹 musician',
		'🎮 video game enjoyer',
		'💡🛌 extrovert, but also a homebody',
		'♋️ cancer sun'
	];

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

		<IntersectionObserver bind:intersecting once {element}>
			<div bind:this={element}>
				<ul class="body-text flex-list" id="keywords">
					{#if intersecting}
						{#each bulletPoints as bullet, idx}
							<li
								transition:fly={{ delay: 300 + idx * 300, duration: 800, x: 500, easing: circOut }}
							>
								{@html bullet}
							</li>
						{/each}
					{:else}
						<li />
					{/if}
				</ul>
			</div>
		</IntersectionObserver>

		<Divider hideOnSmall />
		<BodyText>
			As a child of the internet, my curiosity about tech started at a young age. I remember when I
			was 12, flipping through my mom's old PHP books and not understanding anything. Then flipping
			through her HTML books and understanding enough to build a little "message board" on Yahoo
			GeoCities. I've played video games for most of my life, and I've made music using a computer
			since 2010, and through it all, I've had countless moments where I've interacted with a piece
			of software and thought "how does that <i>work</i>?"
		</BodyText>
		<BodyText>
			When I was sixteen, I moved from my hometown of Anchorage, Alaska to my mother's hometown of
			Östersund, Sweden. Knowing only family, I quickly built a new life as a student, musician, and
			community member. Then when I was 21, after a long road trip and an expensive parking ticket,
			I did it again in Minneapolis, Minnesota. Both of these moves were shifts in the right
			direction, but they were monumental. Those years proved how valuable my adaptability is, but
			also encouraged me to start seeking some roots.
		</BodyText>
		<BodyText>
			Remaining curious and adaptable, I found a lot of fulfillment in the process of software
			development. Being able to look at a problem, identify its smaller issues, craft a set of
			detailed solutions, and then iterate over those solutions to polish them into a cohesive and
			beautiful user experience… It still feels a bit like magic.
		</BodyText>

		<DownArrow scrollTo="experience" />
	</Article>

	<Article scrollID="experience">
		<h2>Experience</h2>

		<!-- PRIME DIGITAL ACADEMY -->
		<Spotlight>
			<img slot="picture" src="./prime-graduation.jpg" />
			<p slot="picture-caption">
				The Shawl cohort on graduation day -<br />
				I'm furthest to the right!
			</p>
			<div slot="content">
				<h3>Prime Digital Academy</h3>
				<BodyText>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia facilis aut suscipit a
					numquam, amet quisquam omnis excepturi. Nobis, corporis sequi! Quisquam et, dicta corrupti
					laudantium inventore placeat ipsum, cupiditate ipsam quaerat praesentium hic natus libero
					autem reprehenderit illum ipsa harum. Reiciendis quae perferendis ipsam dolore obcaecati
					consequuntur deleniti a blanditiis aut laborum illum assumenda, odit officia magni
					officiis voluptates in eveniet, inventore similique ducimus sapiente quasi! Quasi natus
					neque nemo at, architecto fuga illum ex officiis iusto enim quibusdam quod accusantium,
					recusandae voluptatum excepturi alias fugiat dolorem consequuntur pariatur beatae!
					Distinctio harum tempore inventore reiciendis! Adipisci quae numquam quam?
				</BodyText>
			</div>
		</Spotlight>

		<Divider />

		<Spotlight direction="row-reverse">
			<img slot="picture" src="./storyteller2square.jpg" />
			<p slot="picture-caption">
				Performing at The Storyteller Fest 2019<br />
				&copy; The Storyteller Media
			</p>
			<div slot="content">
				<h3>Freelance Musician</h3>
				<BodyText>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia facilis aut suscipit a
					numquam, amet quisquam omnis excepturi. Nobis, corporis sequi! Quisquam et, dicta corrupti
					laudantium inventore placeat ipsum, cupiditate ipsam quaerat praesentium hic natus libero
					autem reprehenderit illum ipsa harum. Reiciendis quae perferendis ipsam dolore obcaecati
					consequuntur deleniti a blanditiis aut laborum illum assumenda, odit officia magni
					officiis voluptates in eveniet, inventore similique ducimus sapiente quasi! Quasi natus
					neque nemo at, architecto fuga illum ex officiis iusto enim quibusdam quod accusantium,
					recusandae voluptatum excepturi alias fugiat dolorem consequuntur pariatur beatae!
					Distinctio harum tempore inventore reiciendis! Adipisci quae numquam quam?
				</BodyText>
			</div>
		</Spotlight>

		<Divider hideOnSmall />

		<DownArrow scrollTo="portfolio" />
	</Article>

	<Article scrollID="portfolio">
		<h2>Portfolio</h2>
		<Spotlight direction="row">
			<img slot="picture" />
			<div slot="content">
				<h3>Plug N Play</h3>
				<BodyText>
					<div class="center">
						<a class="link" href="https://github.com/ozzythecoder/PlugNPlay"> GitHub </a>
					</div>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores repudiandae animi, atque
					qui libero facere minus explicabo, numquam ab impedit ratione? Excepturi tempore nobis nemo
					ex iusto placeat dolorum est hic! Possimus eveniet error aperiam! Reprehenderit quidem odio
					molestiae sunt quod nesciunt officia natus dolorem neque sed, molestias quia explicabo! Eos
					cum, expedita ipsa qui dolorum non exercitationem dolor quasi assumenda repudiandae doloremque,
					architecto delectus asperiores possimus eius, corrupti et! Similique deleniti totam doloribus
					dolorum amet! Sed odit quod quos ipsum placeat ut necessitatibus natus culpa, iure consectetur
					in vero aspernatur. Beatae ipsa magnam repellat. Modi laudantium blanditiis aut dignissimos.
				</BodyText>
			</div>
		</Spotlight>

		<Spotlight direction="row-reverse">
			<img slot="picture" />
			<p slot="picture-caption" />
			<div slot="content">
				<h3>FlyBy Events</h3>
				<BodyText>
					<div class="center">
						<a class="link" href="https://github.com/ozzythecoder/flyby-events-solo-project">
							GitHub
						</a>
					</div>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam et voluptatibus, in perferendis,
					ad minus sit dignissimos eligendi quos, enim animi accusamus odit fugiat repellat ullam sunt
					porro iure! Qui eum ullam illo voluptate odio amet hic laboriosam asperiores, sit, facere necessitatibus
					aut non consectetur ab suscipit tempore deleniti quisquam libero quis ipsa inventore sapiente
					quia? Iste tenetur corrupti, sapiente autem eveniet iure corporis cumque reiciendis aperiam
					dolorem delectus sint quo hic labore ipsam voluptate cupiditate? Voluptatem culpa dolorum suscipit
					impedit debitis eaque id? Asperiores provident molestias earum voluptatibus veritatis, quasi
					dignissimos! Odio facilis cum placeat aliquam nulla fugiat numquam.
				</BodyText>
			</div>
		</Spotlight>

		<Spotlight direction="row">
			<img slot="picture" />
			<div slot="content">
				<h3>TypeScript Recipe Book</h3>
				<BodyText>
					<div class="center">
						<a class="link" href="https://github.com/ozzythecoder/ts-recipe-book"> GitHub </a>
					</div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe illum totam distinctio quibusdam
					velit voluptatibus omnis, atque, dolorem amet, molestiae vel maiores placeat odio et?
				</BodyText>
			</div>
		</Spotlight>

    <BodyText>
      <h3>And of course, this website!</h3>
      <div class="center">
        <a class="link" href="/">GitHub</a>
      </div>
    </BodyText>

		<DownArrow scrollTo="values" />
	</Article>

	<Article scrollID="values">
		<h2>Values</h2>
		<BodyText>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quae odit dicta nesciunt
			nobis nam optio consequatur, in magni quas nihil, cum nostrum ipsa dolor modi exercitationem
			eos id animi?
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
		min-height: 100px;

		li {
			padding: 1rem;
			list-style: none;
			text-align: center;
		}
	}

	h1 {
		will-change: transform, opacity;
	}

	@media screen and (max-width: 600px) {
		.flex-list {
			flex-direction: column;
			align-items: center;

			li {
				padding: 0.3rem;
			}
		}
	}
</style>
