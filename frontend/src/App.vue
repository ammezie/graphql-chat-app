<template>
  <div id="app" class="container" style="padding-top: 100px">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">

            <div class="row" v-if="entered">
              <div class="col-md-12">
                <div class="card">
                  <div class="card-header">Chatbox</div>
                  <div class="card-body">
                    <dl
                      v-for="(chat, id) in chats"
                      :key="id"
                    >
                      <dt>{{ chat.from }}</dt>
                      <dd>{{ chat.message }}</dd>
                    </dl>

                    <hr>


                    <input
                      type='text'
                      class="form-control"
                      placeholder="Type your message..."
                      v-model="message"
                      @keyup.enter="sendMessage"
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="row" v-else>
              <div class="col-md-12">
                <form method="post" @submit.prevent="enterChat">
                  <div class="form-group">
                    <div class='input-group'>
                      <input
                        type='text'
                        class="form-control"
                        placeholder="Enter your username"
                        v-model="username"
                      >

                      <div class='input-group-append'>
                        <button class='btn btn-primary' @click="enterChat">Enter</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  CHATS_QUERY,
  SEND_MESSAGE_MUTATION,
  MESSAGE_SENT_SUBSCRIPTION,
} from '@/graphql';

export default {
  name: 'app',
  data() {
    return {
      username: '',
      message: '',
      entered: false,
    };
  },
  apollo: {
    chats: {
      query: CHATS_QUERY,
      subscribeToMore: {
        document: MESSAGE_SENT_SUBSCRIPTION,
        updateQuery: (previousData, { subscriptionData }) => {
          return {
            chats: [...previousData.chats, subscriptionData.data.messageSent],
          };
        },
      },
    },
  },
  methods: {
    enterChat() {
      this.entered = !!this.username != '';
    },

    async sendMessage() {
      const message = this.message;

      this.message = '';

      await this.$apollo.mutate({
        mutation: SEND_MESSAGE_MUTATION,
        variables: {
          from: this.username,
          message,
        },
      });
    },
  },
};
</script>
