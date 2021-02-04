export interface PaginationPayload{
      productsAmount: number
      pagesAmount: number,
      currentPage: number,
}

export interface PaginationProps{
      productsAmount?: number
      pagesAmount: number,
      currentPage: number,
      switchPage: (page: number) => void
}