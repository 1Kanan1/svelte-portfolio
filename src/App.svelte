<script lang="ts">
  import "./app.css";
  import { ModeWatcher } from "mode-watcher";
  import Experience from "$lib/components/Experience.svelte";
  import ThemeToggle from "$lib/components/ui/ThemeToggle.svelte";
  import Skills from "$lib/components/Skills.svelte";
</script>

<ModeWatcher />
<header
  class="fixed top-4 left-0 right-0 p-2 mx-auto md:max-w-xl bg-background border border-border rounded-xl z-1"
>
  <ThemeToggle />
</header>
<div class="h-24"></div>
<main class="max-w-screen z-0">
  <section class="grid mx-auto md:max-w-3xl gap-3">
    <Skills />
    <Experience />
  </section>
</main>
