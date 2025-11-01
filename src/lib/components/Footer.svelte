<script>
  import DevIcon from "./icons/DevIcon.svelte";
</script>

<footer
  class="flex max-sm:flex-col items-center justify-between px-4 py-6 text-sm max-sm:gap-2"
>
  <section class="flex items-center gap-2">
    <div>Built with Svelte</div>
    <DevIcon name="svelte" class="text-muted" />
  </section>
  <section>
    Inspired by <a href="https://chanhdai.com/" class="underline">Chánh Đại</a>
    &
    <a href="https://alshaer.vercel.app/" class="underline">Baraa Alshaer</a>
  </section>
</footer>
