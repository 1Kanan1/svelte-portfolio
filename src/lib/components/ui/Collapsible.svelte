<script>
  import { Code } from "@lucide/svelte";
  import { Chevrons, DevIcon } from "../icons";
  import { fade, slide } from "svelte/transition";

  let { position } = $props();
  let isExpanded = $derived(position.isExpanded);
</script>

<div
  class="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background"
>
  <button
    onclick={() => (isExpanded = !isExpanded)}
    class="w-full select-none relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:-z-1 before:rounded-lg hover:before:bg-accent before:duration-300"
  >
    <div class="flex items-center z-1 mb-1 gap-3">
      <div
        class="flex items-center justify-center size-6 rounded-md bg-secondary border border-border"
      >
        <Code class="size-4" />
      </div>
      <h4 class="font-medium text-balance">{position.title}</h4>
      <!-- Open/Close List button -->
      <div class="ml-auto">
        <Chevrons {isExpanded} />
      </div>
    </div>
    <div class="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
      <dl>
        <dt class="sr-only">Employment Type</dt>
        <dd>{position.type}</dd>
      </dl>
      <div
        aria-orientation="vertical"
        class="shrink-0 w-px h-4 bg-border"
      ></div>
      <dl>
        <dt class="sr-only">Employment Period</dt>
        <dd class="flex items-center gap-0.5">
          <span>{position.period.start}</span>
          <span class="font-mono">—</span>
          <span>{position.period.end}</span>
        </dd>
      </dl>
    </div>
  </button>
  <!-- List of responsibilities -->
  {#if isExpanded}
    <div transition:slide={{ duration: 300 }}>
      <div transition:fade={{ duration: 300 }}>
        <div class="font-mono text-sm pt-2 pl-9">
          <ul class="list-disc pl-6 text-primary">
            {#each position.responsibilities as responsibility}
              <li class="pl-1 my-1 marker:text-muted-foreground">
                {responsibility}
              </li>
            {/each}
          </ul>
        </div>
        <ul class="flex flex-wrap gap-1.5 pt-2 pl-9 text-xs">
          {#each position.skills as skill}
            <li
              class="flex items-center bg-muted border rounded-sm p-1.5 gap-1"
            >
              <DevIcon name={skill} />
              <span>{skill}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  {/if}
</div>
