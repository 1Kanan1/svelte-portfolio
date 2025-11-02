<script>
  import DevIcon from "./icons/DevIcon.svelte";
</script>

<footer
  class="flex max-sm:flex-col items-center justify-between px-4 py-6 text-sm max-sm:gap-2"
>
  <section class="flex items-center gap-2">
    <div>Built with Svelte</div>
    <a href="https://svelte.dev" class="h-4" target="_blank">
      <DevIcon name="svelte" class="text-muted" />
    </a>
  </section>
  <section>
    Inspired by <a
      href="https://chanhdai.com/"
      target="_blank"
      class="underline">Chánh Đại</a
    >
    &
    <a href="https://alshaer.vercel.app/" target="_blank" class="underline"
      >Baraa Alshaer</a
    >
  </section>
</footer>
