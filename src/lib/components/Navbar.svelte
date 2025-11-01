<script lang="ts">
  import ThemeToggle from "./ui/ThemeToggle.svelte";

  function scrollIntoView(event: MouseEvent) {
    event.preventDefault(); // prevents from updating the URL
    const target = event.currentTarget as HTMLAnchorElement;
    const href = target.getAttribute("href");
    if (!href) return;

    const element = document.querySelector<HTMLElement>(href);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 96;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }

  const sections = ["Skills", "Experience"];
</script>

<header
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
</header>
