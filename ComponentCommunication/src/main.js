import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriend);



app.mount('#app')
