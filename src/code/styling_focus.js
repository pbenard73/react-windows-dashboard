const code = `.window_container {
    opacity: 1;
    transition: opacity filter 0.6s ease;
    filter: grayscale(0);

    &:not(.window_active) {
        opacity: 0.3;
        filter: grayscale(1);
    }
    
    &.window_active.fullscreen{
        z-index: 2000 !important;
    }
}`

export default code
