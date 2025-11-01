<script lang="ts">
  import "./app.css";
  import { ModeWatcher } from "mode-watcher";
  import Experience from "$lib/components/Experience.svelte";
  import Skills from "$lib/components/Skills.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<ModeWatcher />
<Navbar />
<div class="h-24"></div>
<main class="max-w-screen z-0">
  <section class="grid mx-auto md:max-w-3xl gap-3">
    <Skills />
    <Experience />
  </section>
</main>
