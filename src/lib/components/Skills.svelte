<script>
  import DevIcon from "$lib/components/icons/DevIcon.svelte";
  import { skills } from "$lib/data/skills";
</script>

<section id="skills">
  <h2 class="text-3xl font-semibold px-4">Skills</h2>

  <ul class="flex flex-wrap gap-1.5 pt-2 px-2 md:px-4 text-xs">
    {#each skills as skill}
      <li class="flex items-center p-1.5 gap-1 bg-background">
        <DevIcon name={skill} size="3" />
      </li>
    {/each}
  </ul>
</section>
