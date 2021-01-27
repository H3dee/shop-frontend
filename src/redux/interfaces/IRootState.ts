import {InitialCategoryState} from '../category/reducers/categoryReducer'
import {InitialFiltersState} from '../category/reducers/filtersReducer'
import {InitialAppState} from '../application/reducers/appReducer'
import { InitialProductState } from '../product/reducers/productReducer'

export interface RootState {
  category: InitialCategoryState,
  products: InitialProductState
  filters: InitialFiltersState
  app: InitialAppState
}
