/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import { useState } from 'react'
import {
  Btn, CommentComponent,
  CommentData, CommentDataWithReplies,
  Container, Panel, Typography,
} from '../../src'

const Template = () => {
  const raw: CommentDataWithReplies[] = [
    {
      id: '1',
      user: {
        name: 'Zeroroku',
        avatar: 'https://i.pravatar.cc/80?img=1',
        link: 'https://zeroroku.com',
      },
      content: 'Hello, world!',
      time: '2020-01-01',
    },
    {
      id: '2',
      user: {
        name: 'Jannchie',
        avatar: 'https://i.pravatar.cc/80?img=2',
      },
      content: 'This is a comment.',
      replies: [
        {
          id: '3',
          user: {
            name: 'Jannchie',
            avatar: 'https://i.pravatar.cc/80?img=2',
          },
          content: 'This is a reply.',
        },
        {
          id: '9',
          user: {
            name: 'Cake',
            avatar: 'https://i.pravatar.cc/80?img=3',
          },
          content: "I'm a very very very very very very very very very very very very Long reply.",
        },
        {
          id: '4',
          user: {
            name: 'Cake',
            avatar: 'https://i.pravatar.cc/80?img=3',
          },
          content: "I'm a reply.",
        },
        {
          id: '8',
          user: {
            name: 'Cake',
            avatar: 'https://i.pravatar.cc/80?img=3',

          },
          content: "I'm a reply 2.",
        },

        {
          id: '5',
          user: {
            name: 'X',
            avatar: 'https://i.pravatar.cc/80?img=4',
          },
          content: 'Another reply.',
        },
      ],
    },
    {
      id: '16',
      user: {
        name: 'X',
        avatar: 'https://i.pravatar.cc/80?img=4',
      },
      content: 'Another reply.',
      replies: [
        {
          id: '17',
          user: {
            name: 'X',
            avatar: 'https://i.pravatar.cc/80?img=4',
          },
          content: 'This is a reply.',
        },
        {
          id: '12',
          user: {
            name: 'Jannchie',
            avatar: 'https://i.pravatar.cc/80?img=2',
          },
          content: 'This is a reply.',
        },
        {
          id: '13',
          user: {
            name: 'Jannchie',
            avatar: 'https://i.pravatar.cc/80?img=2',
          },
          content: 'This is a reply.',
        },
      ],
    },
  ]
  const [data, setData] = useState(raw)
  const [input, setInput] = useState('')
  const [replyTo, setReplyTo] = useState<CommentData | null>(null)
  return (

    <CommentComponent
      style={{ margin: '12px' }}
      data={data}
      replyTo={replyTo}
      input={input}
      setInput={setInput}
      loading={false}
      generateActions={(target) => (
        [
          <Btn.Counter
            key="like"
            icon="favorite"
            size="sm"
            color="red"
            style={{ minWidth: 48 }}
            value={target.likes}
            onClick={() => {
              console.log('like', target)
              if (target.liked) {
                target.like = 0
                target.liked = false
              } else {
                target.like = 1
                target.liked = true
              }
              setData([...data])
            }}
          />,
          <Btn.Counter
            key="reply"
            icon="reply"
            size="sm"
            color="green"
            style={{ minWidth: 48 }}
            value={target.replies?.length}
            onClick={() => {
              if (replyTo === target) {
                setReplyTo(null)
              } else {
                setReplyTo(target)
              }
            }}
          />,
        ]
      )}
      onSend={() => {
        // eslint-disable-next-line no-console
        const newComment = {
          id: `${data.length + 10000 * Math.random()}`,
          user: {
            name: 'Jannchie',
            avatar: 'https://i.pravatar.cc/80?img=2',
          },
          content: input,
        }
        if (replyTo == null) {
          setData([...data, newComment])
        } else {
          setData([...data.map((d) => {
            if (d === replyTo) {
              const c = { ...d }
              if (c.replies == null) {
                c.replies = []
              }
              c.replies = [...c.replies, newComment]
              return c
            }
            return d
          })])
          setReplyTo(null)
        }
        setInput('')
      }}
      onLoadMore={() => {
        // eslint-disable-next-line no-console
        console.log('onLoadMore')
      }}
    />
  )
}

export function CommentPage () {
  return (
    <div
      style={{
        padding: 8,
        borderRadius: '8px 0 0 0 ',
        height: '100%',
      }}
    >
      <Container>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Typography.H1>
            Comment
          </Typography.H1>
          <Panel border>
            <Template />
          </Panel>
        </div>
      </Container>
    </div>
  )
}
