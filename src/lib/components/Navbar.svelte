<script lang="ts">
  import ThemeToggle from "./ui/ThemeToggle.svelte";

  function scrollIntoView(event: MouseEvent) {
    event.preventDefault(); // prevents from updating the URL
    const href = (event.currentTarget as HTMLAnchorElement).getAttribute(
      "href",
    );
    if (!href) return;

    const element = document.querySelector<HTMLElement>(href);
    const nav = document.querySelector<HTMLElement>("nav");
    if (element) {
      const navHeight = nav ? nav.offsetHeight : 0;
      const navTop = nav ? nav.getBoundingClientRect().top : 0;
      const offset = navHeight + navTop;

      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - offset,
        behavior: "smooth",
      });
    }
  }

  const sections = ["Skills", "Experience"];
</script>

<nav
  class="fixed top-4 left-0 right-0 flex items-center justify-between px-4 py-2 mx-4 sm:mx-auto sm:max-w-xl bg-background border border-border rounded-xl z-1"
>
  <div class="flex gap-2">
    {#each sections as section}
      <a
        href={`#${section.toLowerCase()}`}
        onclick={scrollIntoView}
        class="md:rounded-sm sm:px-2 sm:py-1 md:transition md:duration-300 md:hover:bg-accent"
        >{section}</a
      >
    {/each}
  </div>
  <ThemeToggle />
</nav>
