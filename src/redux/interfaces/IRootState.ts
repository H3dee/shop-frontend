import {InitialCategoryState} from '../category/reducers/categoryReducer'
import {InitialFiltersState} from '../category/reducers/filtersReducer'
import {InitialAppState} from '../application/reducers/appReducer'

export interface RootState {
  category: InitialCategoryState
  filters: InitialFiltersState
  app: InitialAppState
}
