<script lang="ts">
  import { slide } from 'svelte/transition'
  import infoIcon from '../../icons/info.js'
  import { bounceIn, circIn, quadIn } from 'svelte/easing'
</script>

<style>
  .container {
    gap: 1em;
    padding: 0.75em;
    color: var(--onboard-warning-700, var(--warning-700));
    font-size: var(--onboard-font-size-7, var(--font-size-7));
    line-height: 16px;
    border: 1px solid var(--onboard-warning-400, var(--warning-400));
    background: var(--onboard-warning-100, var(--warning-100));
    border-radius: 12px;
  }

  .icon {
    color: var(--onboard-warning-700, var(--warning-700));
    width: 1em;
    height: 1em;
    flex: 0 0 auto;
  }
</style>

<div
  in:slide|local={{ delay: 50, duration: 500 }}
  class="container flex justify-between"
>
  <div>
    <slot />
  </div>

  <div class="icon">
    {@html infoIcon}
  </div>
</div>
