<script lang="ts">
  import { fade, slide } from "svelte/transition";
  import React from "./icons/React.svelte";
  import { experience } from "../profile/data/experience";
  import Icon from "./icons/Icon.svelte";
</script>

<section id="experience">
  <h2 class="text-3xl font-semibold px-4">Experience</h2>

  {#each $experience as record}
    <section class="space-y-4 pr-2 pl-4 py-4">
      <!-- Job's title -->
      <div class="flex items-center gap-3">
        <Icon name="andersenlab" size="1.5" />
        <span class="text-lg leading-snug font-medium"
          >{record.companyName}</span
        >
      </div>
      <!-- Job's list of positions -->
      <section
        class="relative space-y-4 before:absolute before:left-[.725rem] before:h-full before:w-px before:bg-gray-300"
      >
        {#each record.positions as position (position.id)}
          <div
            class="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-white"
          >
            <button
              onclick={() => (position.isExpanded = !position.isExpanded)}
              class="w-full select-none relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:-z-1 before:rounded-lg hover:before:bg-gray-100 before:duration-300"
            >
              <div class="flex items-center z-1 mb-1 gap-3">
                <div
                  class="flex items-center justify-center size-6 rounded-lg bg-gray-700 border border-gray-300"
                >
                  <React class="size-4" />
                </div>
                <h4 class="font-medium text-balance">{position.title}</h4>
                <!-- Open/Close List button -->
                <div class="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="size-4"
                    ><path
                      d="M7 15L12 20L17 15"
                      class="origin-top-left transition-transform duration-300 ease-in-out"
                      class:scale-y-[-1]={position.isExpanded}
                      style:transform-origin="12px 18px"
                    ></path><path
                      d="M7 9L12 4L17 9"
                      class="origin-top-left transition-transform duration-300 ease-in-out"
                      class:scale-y-[-1]={position.isExpanded}
                      style:transform-origin="12px 6px"
                    ></path></svg
                  >
                </div>
              </div>
              <div class="flex items-center gap-2 pl-9 text-sm">
                <dl>
                  <dt class="sr-only">Employment Type</dt>
                  <dd>{position.type}</dd>
                </dl>
                <div
                  aria-orientation="vertical"
                  class="shrink-0 bg-gray-600 w-px h-4"
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
            {#if position.isExpanded}
              <div transition:slide={{ duration: 300 }}>
                <div transition:fade={{ duration: 300 }}>
                  <div class="font-mono text-sm pt-2 pl-9">
                    <ul class="list-disc pl-6">
                      {#each position.responsibilities as responsibility}
                        <li class="pl-1 my-1">{responsibility}</li>
                      {/each}
                    </ul>
                  </div>
                  <ul class="flex flex-wrap gap-1.5 pt-2 pl-9 text-xs">
                    {#each position.skills as skill}
                      <li
                        class="flex items-center border rounded-lg p-1.5 gap-1"
                      >
                        <Icon name={skill} />
                        <span>{skill}</span>
                      </li>
                    {/each}
                  </ul>
                </div>
              </div>
            {/if}
          </div>
        {/each}
      </section>
    </section>
  {/each}
</section>
