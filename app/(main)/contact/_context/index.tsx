'use client'

import * as React from 'react'

type State = {
  activeCommentId: string | null
}

type Action = { type: 'OPEN_COMMENT_BOX'; commentId: string } | { type: 'CLOSE_COMMENT_BOX' }

const initialState: State = {
  activeCommentId: null
}

const CommentContext = React.createContext<{
  state: State
  dispatch: React.Dispatch<Action>
}>({
  state: initialState,
  dispatch: () => undefined // default empty function
})

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'OPEN_COMMENT_BOX':
      return { activeCommentId: action.commentId }
    case 'CLOSE_COMMENT_BOX':
      return { activeCommentId: null }
    default:
      throw new Error('Unhandled action type')
  }
}

export const CommentProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return <CommentContext.Provider value={{ state, dispatch }}>{children}</CommentContext.Provider>
}

export const useComment = () => React.useContext(CommentContext)
