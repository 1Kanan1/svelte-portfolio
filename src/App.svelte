<script lang="ts">
  import "./app.css";
  import { ModeWatcher } from "mode-watcher";
  import Experience from "$lib/components/Experience.svelte";
</script>

<ModeWatcher />
<main class="max-w-screen">
  <section class="mx-auto md:max-w-3xl">
    <Experience />
  </section>
</main>
