// TODO: Разобраться почему не подтягиваются @types/redux-persist
import storage from 'redux-persist/lib/storage'

export const persistConfig = {
  key: 'root',
  storage
}
