export default {
  path: 'manage',
  name: 'manage',
  redirect: '/manage/hello',
  children: [
    {
      path: 'hello',
      name: 'hello',
      template: 'manage/hello',
      meta: {
        title: 'xxxx',
        keepAlive: false
      },
      children: [
        {
          path: 'world',
          name: 'world',
          redirect: '/manage/hello'
        },
        {
          path: 'world/:id',
          name: 'world',
          routeName: 'world',
          template: 'manage/world'
        }
      ]
    }
  ]
}
