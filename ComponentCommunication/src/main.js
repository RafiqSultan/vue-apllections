import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';
import './assets/main.css'
import ActiveElement from './components/ActiveElement.vue';
import KnowledgeBase from './components/KnowledgeBase.vue';
import KnowledgeElement from './components/KnowledgeElement.vue';
import KnowledgeGrid from './components/KnowledgeGrid.vue';

const app = createApp(App)

app.use(router)
app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriend);
app.component('active-element', ActiveElement);
app.component('knowledge-base', KnowledgeBase);
app.component('knowledge-element', KnowledgeElement);
app.component('knowledge-grid', KnowledgeGrid);



app.mount('#app')
