<script lang="ts">
  import { experience } from "$lib/data/experience";
  import { AndersenLab } from "$lib/components/icons/";
  import Collapsible from "./ui/Collapsible.svelte";
</script>

<section id="experience">
  <h2 class="text-3xl font-semibold px-4">Experience</h2>

  {#each experience as record}
    <section class="space-y-4 pr-2 pl-4 py-4">
      <!-- Job's title -->
      <div class="flex items-center gap-3">
        <AndersenLab class="size-6" />
        <span class="text-lg leading-snug font-medium"
          >{record.companyName}</span
        >
      </div>
      <!-- Job's list of positions -->
      <section
        class="relative space-y-4 before:absolute before:left-[.725rem] before:h-full before:w-px before:bg-gray-300"
      >
        {#each record.positions as position (position.id)}
          <Collapsible {position} />
        {/each}
      </section>
    </section>
  {/each}
</section>
