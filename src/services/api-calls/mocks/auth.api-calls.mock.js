/* eslint-disable max-len */

const loginRequest = () => ({
    data: {
      username: 'admin',
      email: 'admin',
      accessToken:
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0IiwiaWF0IjoxNTc4Mzk5NTE5LCJleHAiOjE1NzkwMDQzMTl9.TJMpwthclAlOttcye2lQuI8fBe17rjbnAccsaVeJGNoMD19jFlXY6r-Xrn9kaYHbOS_YcKvLTgOy_xWWu66QYQ',
      tokenType: 'Bearer',
      navbar: {
        logo: 'logo',
        menus: [
          {
            key: 'UPLOAD_REPORT',
            description: 'Upload Report',
            icon: 'setting',
            items: [],
            url: '/upload-report',
            order: 2
          },
          {
            key: 'USERS',
            description: 'My account',
            icon: 'user',
            items: [
              {
                key: 'LOGOUT',
                description: 'Logout',
                icon: 'logout',
                items: [],
                url: '/login',
                order: 1,
                type: 'GET'
              },
              {
                key: 'VIEW_PROFILE',
                description: 'View Profile',
                icon: 'user',
                items: [],
                url: '/user-information',
                order: 0,
                type: 'GET'
              }
            ],
            url: null,
            order: 5
          },
          {
            key: 'DAILY_SNAPSHOT',
            description: 'Create daily snapshot',
            icon: 'download',
            items: [],
            url: null,
            order: 3
          },
          {
            key: 'MANAGE_USERS',
            description: 'Manage Users',
            icon: 'setting',
            items: [],
            url: '/administration',
            order: 4
          },
          {
            key: 'VIEW_DASHBOARD',
            description: 'Dashboard',
            icon: 'bar-chart',
            items: [],
            url: '/home',
            order: 0
          },
          {
            key: 'KNOWLEDGE',
            description: 'Knowledge',
            icon: 'bulb',
            items: [],
            url: '/knowledge',
            order: 1
          }
        ]
      },
      role: 'Administrator',
      permissions: ['VIEW_USERS', 'CREATE_USER', 'VIEW_OWN_USER', 'DISABLE_USER', 'MODIFY_USER']
    }
  });

const logoutRequest = () => ({});

export default () => ({
    loginRequest,
    logoutRequest
});