import {defineStore} from 'pinia'

export const useNotifStore = defineStore('notif', {
    state: () => ({
        timout: 2000,
        text: '',
        color: 'error',
        isActive: false
    }),
    actions: {
        setActive(payload) {
            this.isActive = payload
        },

        setTimeout(payload) {
            this.timeout = payload
        },

        setText(text) {
            this.text = text
        },

        setColor(color) {
            this.color = color
        },

        createCustomNotif(text, activateNow, color = 'error', timeout = 2000) {
            this.setText(text)
            this.setTimeout(timeout)
            this.setColor(color)
            this.setActive(activateNow)
        }

    }
})
