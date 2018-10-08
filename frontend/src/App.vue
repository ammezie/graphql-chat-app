<template>
  <div id="app" class="container" style="padding-top: 100px">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">

            <div class="row">
              <div class="col-md-12">
                <form method="post" @submit.prevent="enterChat">
                  <div class="form-group">
                    <div class='input-group'>
                      <input type='text' class="form-control" v-model="username" placeholder="Enter your username">

                      <div class='input-group-append'>
                        <button class='btn btn-primary'>Enter</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div class="card-header">Chatbox</div>
                  <div class="card-body">
                    <dl>
                      <dt>mezie</dt>
                      <dd>Hi</dd>
                      <dt>bode</dt>
                      <dd>Hey!</dd>
                    </dl>
                    <hr>
                    <form method="post" @submit.prevent="sendMessage">
                      <div class='input-group'>
                        <input type='text' class="form-control" v-model="message" placeholder="Type your message...">

                        <div class='input-group-append'>
                          <button class='btn btn-primary'>Send</button>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      username: '',
      messgage: '',
    };
  },
  methods: {
    enterChat() {
      alert(this.username);
    },
    sendMessage() {},
  },
};
</script>
