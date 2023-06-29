<script>
  import closeIcon from '../../icons/close.js'
</script>

<style>
  .close-button {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2em;
    width: 2em;
    border-radius: 2em;
    cursor: pointer;
    color: var(--onboard-close-button-color, inherit);
  }

  .close-button:hover::before {
    opacity: 0.2;
  }
  .close-button:hover .svg-box {
    opacity: 1;
  }

  .close-button::before {
    content: '';
    position: absolute;
    height: inherit;
    width: inherit;
    opacity: 0.1;
    background: currentColor;
    transition: 300ms ease-in-out opacity;
  }

  .svg-box {
    position: absolute;
    height: 1.5em;
    width: 1.5em;
    opacity: 0.6;
    transition: 300ms ease-in-out opacity;
  }
</style>

<div class="close-button">
  <div class="svg-box">
    {@html closeIcon}
  </div>
</div>
