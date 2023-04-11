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
		`<img style="height:1.2rem; margin-bottom:-0.2rem" src="./icons/Prince-Love-Symbol.svg" />`;
	let enbyFlagString =
		`<img style="height:0.8rem;" src="./icons/nonbinary-flag.png" alt="non-binary pride flag" />`;

	const bulletPoints = [
		`📌${princeSymbolString} Minneapolis, Minnesota`,
		'🇸🇪 Swedish-American',
		`${enbyFlagString} non-binary (they/them)`,
		'💻 full-stack software developer',
		'🎹 musician',
		'🎮 video game enjoyer',
		'💡 extrovert',
    '🛌 homebody',
		'♋️ cancer sun'
	];

	onMount(() => {
		ready = true;
	});
</script>

<!-- 
  **********************************
  HEADER
 -->
<header class="center-hero" id="top">
	{#if ready}
		<h1 in:fly={{ duration: 800, x: 500, easing: circOut }}>hey, i'm august.</h1>
	{:else}
		<!-- placeholder for heading. this prevents weird jumps while the page loads. -->
		<h1>‎</h1>
	{/if}

	<Nav />
	<DownArrow {ready} fadeIn={true} scrollTo="intro" />
</header>

<!-- 
  **********************************
  INTRO
 -->
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
			Remaining curious and adaptable, I found fulfillment in the process of software
			development. Being able to look at a problem, identify its smaller issues, craft a set of
			detailed solutions, and then iterate over those solutions to polish them into a cohesive and
			beautiful user experience… It still feels a bit like magic.
		</BodyText>

		<DownArrow scrollTo="experience" />
	</Article>

  <!-- 
    **********************************
    EXPERIENCE
   -->
	<Article scrollID="experience">
		<h2>Experience</h2>

		<!-- PRIME DIGITAL ACADEMY -->
		<Spotlight>
			<img slot="picture" src="./prime-graduation.jpg" alt="The Shawl cohort on graduation day - a group of students and instructors in black Prime hoodies, smiling at the camera, with the Prime logo on the wall behind them." />
			<p slot="picture-caption">
				The Shawl cohort on graduation day -<br />
				I'm furthest to the right!
			</p>
			<div slot="content">
				<h3>Full-Stack Software Development Student</h3>
				<h4>Prime Digital Academy</h4>
				<BodyText spotlight>
					<p class="callout">September 2022 - February 2023</p>
					Prime is a 20-week accelerated learning program, with a full-stack development track and a
					UX track. I graduated from the full-stack program together with the Shawl cohort.
					<ul>
						<li>Built full-stack applications with React, Node.js, Express, and PostgreSQL</li>
						<li>Strong emphasis on professional development</li>
						<li>Solo projects, pair programming, and group collaboration</li>
						<li>Git version control, branching, and resolving merge conflicts</li>
						<li>In-person and remote work experience</li>
					</ul>
				</BodyText>
			</div>
		</Spotlight>

		<Divider />

    <!-- AVEX AUDIOVISUAL -->
		<Spotlight direction="row-reverse">
			<img
				slot="picture"
				src="https://images.squarespace-cdn.com/content/v1/5c1914b03c3a53de3d292348/1546890775613-EZDKY9KKZQEFAGO7TK5K/Square+Black.jpg"
        alt="A white AVEX logo on a black background"
			/>
			<div slot="content">
				<h3>Event Technical Specialist</h3>
				<h4>AVEX Audiovisual, Inc.</h4>
				<BodyText spotlight>
					<p class="callout">March - August 2022</p>
					<ul>
						<li>Facilitated corporate events at hotels across the twin cities area</li>
						<li>Calculated technical needs and constraints and made necessary adjustments</li>
						<li>Built and operated audio, lighting, and projection systems</li>
						<li>
							Adapted to changes throughout events and collaborated with others to eliminate
							emergent technical issues
						</li>
						<li>
							Communicated with clients and keynote speakers to ensure a punctual and professional
							event
						</li>
					</ul>
				</BodyText>
			</div>
		</Spotlight>

		<Divider />

    <!-- FREELANCE MUSICIAN -->
		<Spotlight direction="row">
			<img slot="picture" src="./storyteller2square.jpg" alt="August on stage, eyes closed, wearing a denim jacket and hoop earrings, with one hand on their chest and the other clutching a microphone, with stage lights behind them" />
			<p slot="picture-caption">
				Performing at The Storyteller Fest 2019<br />
				&copy; The Storyteller Media
			</p>
			<div slot="content">
				<h3>Freelance Musician</h3>
				<BodyText spotlight>
					<p class="callout">2018 - Present</p>
					<ul>
						<li>
							Work directly with other musicians on composition & arrangement, audio engineering,
							production, and post-production
						</li>
						<li>Organize, promote, and execute live events</li>
						<li>
							Communicate with venues to negotiate set times, riders, artist payment, and other
							event details
						</li>
						<li>Perform live on bass, piano, synthesizer, and as background & solo vocalist</li>
					</ul>
				</BodyText>
			</div>
		</Spotlight>

		<DownArrow scrollTo="portfolio" />
	</Article>

  <Divider />

  <!--
    **********************************
    PORTFOLIO
   -->
	<Article scrollID="portfolio">
		<h2>Portfolio</h2>

    <!-- PLUG N PLAY -->
		<Spotlight direction="row">
			<div slot="picture">
        <img src="./plug-n-play-screenshot1.png" class="img-1" alt="A screenshot of the recommendation page of the Plug N Play app." />
        <img src="./plug-n-play-screenshot2.png" class="img-2" alt="A screenshot of the collections page of the Plug N Play app."/>
      </div>
			<div slot="content">
				<h3>Plug N Play</h3>
				<BodyText spotlight>
					<p class="callout">Duration: Two-week sprint</p>
					<div class="center">
						<a class="link" href="https://github.com/ozzythecoder/PlugNPlay"> GitHub </a>
					</div>
					A full-stack mobile-first web app, built as a tool to help people who are new to video games.
					Uses a one-time user survey to algorithmically generate video game recommendations, and updates
					the algorithm based on user's future preferences. Users can view details of a video game, and
					save it to their wishlist for later reference, or played list to influence their recommendation
					algorithm. Includes a glossary of video game jargon that can be maintained by an administrator.
					<ul>
						<li>Built with React, Redux, Passport.js, Express, and PostgreSQL</li>
						<li>Powered by data from rawg.io</li>
            <li>Deployed with Heroku, database hosted by Bit.io</li>
						<li>Enlisted by Maxine Denis, a real-world client</li>
						<li>Worked on a team of five for our capstone project at Prime Digital Academy</li>
						<li>
							My roles: project planning, server & database programming, API development &
							implementation
						</li>
					</ul>
				</BodyText>
			</div>
		</Spotlight>

    <Divider />

    <!-- FLYBY EVENTS -->
		<Spotlight direction="row-reverse">
			<div slot="picture">
        <img src="./flyby-screenshot1.png" class="img-1" alt="A screenshot of the edit event form in the FlyBy events app." />
        <img src="./flyby-screenshot2.png" class="img-2" alt="A screenshot of an event preview in the FlyBy events app." />
      </div>
			<p slot="picture-caption" />
			<div slot="content">
				<h3>FlyBy Events</h3>
				<BodyText spotlight>
					<p class="callout">Duration: Two-week sprint</p>
					<div class="center">
						<a class="link" href="https://github.com/ozzythecoder/flyby-events-solo-project">
							GitHub
						</a>
					</div>
					A full-stack mobile-first web app, built to create, track, and organize user events. Users
					can create events and invite each other, and manage event visibility. Public events are visible
					to anyone with a link, whereas private events are exclusively visible to the event host and
					invited users.
					<ul>
						<li>Built with React, Redux, Passport.js, Express, and PostgreSQL</li>
            <li>Deployed with Heroku, database hosted by Bit.io</li>
						<li>Created as my solo project for Prime Digital Academy</li>
						<li>
							My focus was on creating a clean user experience and interface, rather than any
							complex functionality
						</li>
					</ul>
				</BodyText>
			</div>
		</Spotlight>

    <Divider />

    <!-- TS RECIPE BOOK -->
		<Spotlight direction="row">
			<div slot="content">
				<h3>TypeScript Recipe Book</h3>
				<BodyText spotlight>
					<p class="callout">Currently in development</p>
					<div class="center">
						<a class="link" href="https://github.com/ozzythecoder/ts-recipe-book"> GitHub </a>
					</div>
					A full-stack web app, built to track recipes. Allows users to create new recipes with individual
					steps and ingredient measurements, view other recipes, and save them to their favorites.

					<ul>
						<li>Building with TypeScript, Next.js 13, Prisma, and PostgreSQL</li>
						<li>My first exploration of many of these technologies</li>
						<li>
							Currently learning: Managing complex m-n data relationships (recipes to ingredients)
							and translating them to a clean and accessible user experience.
						</li>
					</ul>
				</BodyText>
			</div>
		</Spotlight>

    <Divider />

		<BodyText>
			<h3>And of course, this website!</h3>
			<div class="center">
				<a class="link" href="/">GitHub</a>
			</div>
			<p class="center">Built with Svelte, SvelteKit, and SCSS, and deployed with Vercel.</p>
		</BodyText>

		<DownArrow scrollTo="values" />
	</Article>


  <Divider />

  <!-- 
    **********************************
    VALUES
   -->
	<Article scrollID="values">
		<h2>Values</h2>
		<BodyText>
			I stand for the safety, autonomy, and liberation of my queer and transgender siblings worldwide.
		</BodyText>
		<BodyText>
			I stand for anti-racism: not simply for diversity and inclusion, but also for the aggressive
			opposition to hateful systems and ideologies; for material reparations to descendants of
			slavery and survivors of colonization; and for the dismantling of the white supremacist core
			of our culture.
		</BodyText>
		<BodyText>
			I stand for police and prison abolition, and for re-investing into new systems of community
			safety, new systems that do not act as the weapons of class warfare and racist dogma.
		</BodyText>
		<BodyText>
			These are the values of the people I love and look up to. In my work, my music, my personal life, my attitude to strangers and friends alike, I labor to
			embody these values, that they will lead us to a healthier and more peaceful future.
		</BodyText>
		<UpArrow />
	</Article>
</section>

<!--
  **********************************
  STYLES
-->
<style lang="scss">
	.center-hero {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;

		background: url('/CurveLine.svg') no-repeat center center fixed;
		background-size: cover;
	}

	.flex-list {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-around;
		align-items: center;
		margin: 0;
		padding: 0;
		min-height: 150px;

		li {
			padding: 0.6rem;
      flex-basis: 30%;
			list-style: none;
			text-align: center;
		}
	}

	h1 {
		will-change: transform, opacity;
	}

	@media screen and (max-width: 600px) {
    .center-hero {
      background-position: center;
    }

		.flex-list {
			flex-direction: column;
			align-items: center;
      min-height: 350px;

			li {
				padding: 0.3rem;
			}
		}
	}
</style>
