const disableScroll = () => {
    const fixBlocks = document.querySelectorAll('.fix-block')
    const paddingOffset = window.innerWidth - document.body.offsetWidth + 'px'
    
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = paddingOffset

    if (fixBlocks.length) {
        fixBlocks.forEach(block => {
            block.style.paddingRight = paddingOffset
        })
    }
}

const enableScroll = () => {
    const fixBlocks = document.querySelectorAll('.fix-block')

    document.body.style.overflow = ''
    document.body.style.paddingRight = ''

    if (fixBlocks.length) {
        fixBlocks.forEach(block => {
            block.style.paddingRight = ''
        })
    }
}