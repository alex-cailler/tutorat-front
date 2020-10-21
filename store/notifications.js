export const state = () => ({
  notifications: []
})

export const getters = {
  getNotifications(state) {
    return state.notifications
  }
}

export const mutations = {
  PUSH_NOTIFICATION(state, notification) {
    state.notifications.push({
      ...notification,
      id: (Math.random().toString(36) + Date.now().toString(36)).substr(2)
    })
  },
  REMOVE_NOTIFICATION(state, notificationToRemove) {
    state.notifications = state.notifications.filter(notification => {
      return notification.id !== notificationToRemove.id;
    })
  }
}

export const actions = {
  addNotification({ commit }, notification) {
    commit('PUSH_NOTIFICATION', notification);
  },
  removeNotification({ commit }, notification) {
    commit('REMOVE_NOTIFICATION', notification);
  }
}
