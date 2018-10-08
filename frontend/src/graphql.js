import gql from 'graphql-tag'

export const CHATS_QUERY = gql`
  query ChatsQuery {
    chats {
      id
      from
      message
    }
  }
`

export const SEND_MESSAGE_MUTATION = gql`
  mutation SendMessageMutation($from: String!, $message: String!) {
    sendMessage(
      from: $from,
      message: $message
    ) {
      id
      from
      message
    }
  }
`

export const MESSAGE_SENT_SUBSCRIPTION = gql`
  subscription MessageSentSubscription {
    messageSent {
      id
      from
      message
    }
  }
`
