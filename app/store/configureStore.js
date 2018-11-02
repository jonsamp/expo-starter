import devStore from './devStore';
import prodStore from './prodStore';

export default function configureStore() {
  if (__DEV__) {
    return devStore();
  }

  return prodStore();
}
