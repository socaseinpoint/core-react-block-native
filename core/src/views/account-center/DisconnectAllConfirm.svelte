<script lang="ts">
  import { _ } from 'svelte-i18n'
  import { Modal } from '../shared'
  import en from '../../i18n/en.json'
  import warningIcon from '../../icons/warning.js'

  export let onConfirm: () => void
  export let onClose: () => void
</script>

<style>
  .content {
    padding: 1em;
    width: 300px;
    font-family: var(--onboard-font-family-normal, var(--font-family-normal));
    font-size: var(--onboard-font-size-5, var(--font-size-5));
    line-height: 24px;
  }

  .icon-container {
    width: 3em;
    height: 3em;
    background: var(--onboard-warning-100, var(--warning-100));
    border-radius: 24px;
    padding: 12px;
    color: var(--onboard-warning-500, var(--warning-500));
  }

  h4 {
    margin: 1.5em 0 0.5em 0;
    font-weight: 600;
  }

  p {
    margin: 0;
    font-weight: 400;
  }

  button {
    margin-top: 1.5em;
    width: 50%;
    font-weight: 600;
  }

  .right {
    margin-left: 0.5em;
    width: 60%;
  }
</style>

<Modal close={onClose}>
  <div class="content">
    <div class="icon-container flex justify-center items-center">
      {@html warningIcon}
    </div>

    <h4>
      {$_('modals.confirmDisconnectAll.heading', {
        default: en.modals.confirmDisconnectAll.heading
      })}
    </h4>

    <p>
      {$_('modals.confirmDisconnectAll.description')}
    </p>

    <div class="flex justify-between items-center w-100">
      <button class="button-neutral-solid-b rounded" on:click={onClose}
        >{$_('modals.confirmDisconnectAll.cancel', {
          default: en.modals.confirmDisconnectAll.cancel
        })}</button
      >
      <button class="right button-neutral-solid rounded" on:click={onConfirm}
        >{$_('modals.confirmDisconnectAll.confirm', {
          default: en.modals.confirmDisconnectAll.confirm
        })}</button
      >
    </div>
  </div>
</Modal>
