import api from '~/apis';

const plugin = ({$axios}, inject) => {
  inject('api', api($axios))
}

export default plugin;
