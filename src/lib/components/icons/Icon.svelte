<script lang="ts">
  import type { Component } from "svelte";
  import andersenlab from "./AndersenLab.svelte";
  import git from "./Git.svelte";
  import javascript from "./JavaScript.svelte";
  import react from "./React.svelte";
  import reactnative from "./ReactNative.svelte";
  import redux from "./Redux.svelte";
  import tailwindcss from "./Tailwind.svelte";
  import typescript from "./TypeScript.svelte";

  let {
    name,
    size = "1",
    color = "currentColor",
    class: className = "",
  } = $props();

  const icons: Record<string, Component> = {
    andersenlab,
    git,
    javascript,
    react,
    reactnative,
    redux,
    tailwindcss,
    typescript,
  };

  // Normalize name reactively
  const normalized = $derived(name?.trim().toLowerCase().replace(/\s+/g, ""));

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
    style="width: {size}rem; height: {size}rem; color: {color};"
  >
    <IconComponent class="w-full h-full fill-current" />
  </div>
{:else}
  <div
    class="inline-flex items-center justify-center border border-dashed border-current text-sm"
    style="width: {size}rem; height: {size}rem; color: {color};"
  >
    ?
  </div>
{/if}
