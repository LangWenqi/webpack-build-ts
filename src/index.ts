import { setup } from '@/commom';

if (typeof window !== 'undefined') {
  window.setup = setup;
}

if (module.hot) {
  module.hot.accept()
}