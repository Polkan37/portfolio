const disableScroll = (status) => {
    status ? 
    document.body.style.overflow = 'hidden'
    : document.body.style.overflow = 'auto';
}

export default disableScroll;
