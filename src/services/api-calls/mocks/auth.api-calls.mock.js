/* eslint-disable max-len */

const loginRequest = () => ({
  data: {
    accessToken:
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNTk4NzMxMzUxLCJleHAiOjE1OTkzMzYxNTF9.rzYYwCflG1MGZXq0uccTUQDRdudpidOn4fHBtpql9jouSVZCCy8tF7ia6Y0GtU_YA1bUbFlcE731pDiOtPZ_5g',
    email: 'supervisor@intellectus.com',
    id: 2,
    lastname: 'Supervisor',
    name: 'Supervisor',
    navbar: {
      logo: 'logo',
      menus: [
        {
          key: 'USERS',
          description: 'Dashboard',
          icon: 'dashboard',
          items: [],
          url: 'Dashboard',
          order: 0,
          url: '/dashboard'
        },
        {
          key: 'OPERATORS',
          description: 'Operadores',
          icon: 'team',
          items: [],
          url: 'Operators',
          order: 0,
          url: '/operadores'
        }
      ],
      permissions: ['VIEW_PROFILE', 'MODIFY_USERS'],
      role: 'Analyst',
      tokenType: 'Bearer',
      username: 'supervisor@intellectus.com'
    }
  }
});

const logoutRequest = () => ({});

export default () => ({
  loginRequest,
  logoutRequest
});
