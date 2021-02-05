export const getFocus = (refItem: HTMLDivElement): void =>
  refItem.scrollIntoView({
    block: 'start',
    behavior: 'auto',
    inline: 'start',
  })
