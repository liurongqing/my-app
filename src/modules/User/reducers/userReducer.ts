export const userReducer = (user: any, action: any) => {
  switch (action.type) {
    case 'added': {
      return [
        ...user,
        {
          name: '100',
        },
      ]
    }
  }
}
