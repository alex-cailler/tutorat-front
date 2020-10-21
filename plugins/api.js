import api from '~/apis';

export default ({ $axios }, inject) => {
  inject('api', api($axios))
}
