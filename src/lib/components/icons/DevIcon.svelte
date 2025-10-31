<script lang="ts">
  import type { Component } from "svelte";
  import git from "./Git.svelte";
  import javascript from "./JavaScript.svelte";
  import react from "./React.svelte";
  import reactnative from "./ReactNative.svelte";
  import redux from "./Redux.svelte";
  import tailwindcss from "./Tailwind.svelte";
  import typescript from "./TypeScript.svelte";
  import nextjs from "./NextJS.svelte";
  import shadcnui from "./ShadcnUI.svelte";
  import python from "./Python.svelte";
  import nodejs from "./NodeJS.svelte";
  import bun from "./Bun.svelte";
  import motion from "./Motion.svelte";
  import docker from "./Docker.svelte";
  import reactrouter from "./ReactRouter.svelte";
  import postgres from "./Postgres.svelte";
  import redis from "./Redis.svelte";
  import svelte from "./Svelte.svelte";

  let { name, size = "1", class: className = "" } = $props();

  const icons: Record<string, Component> = {
    git,
    javascript,
    react,
    reactnative,
    redux,
    tailwindcss,
    typescript,
    nextjs,
    shadcnui,
    python,
    nodejs,
    bun,
    motion,
    docker,
    reactrouter,
    postgres,
    redis,
    svelte,
  };

  // Normalize name reactively
  const normalized = $derived(
    name
      ?.trim()
      .toLowerCase()
      .replace(/[\/.\s]+/g, ""),
  );

  // Pick correct icon component
  const IconComponent = $derived(icons[normalized]);

  // Warn if not found
  $effect(() => {
    if (!IconComponent && normalized) {
      console.warn(`Icon "${normalized}" not found.`);
    }
  });
</script>

{#if IconComponent}
  <div
    class={`inline-flex items-center justify-center ${className}`}
    style="width: {size}rem; height: {size}rem;"
  >
    <IconComponent class="w-full h-full fill-current" />
  </div>
{:else}
  <div
    class="inline-flex items-center justify-center border border-dashed border-current text-sm"
    style="width: {size}rem; height: {size}rem;"
  >
    ?
  </div>
{/if}
