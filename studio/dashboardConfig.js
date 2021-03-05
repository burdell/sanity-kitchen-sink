export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604271c563b97100a3a94ab7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-13mqas5v',
                  apiId: 'c8cb7b8c-8f0d-4a7f-af37-2831396392a6'
                },
                {
                  buildHookId: '604271c58ab0ec00b3835fc0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-v7yo5j5d',
                  apiId: '157c4bb9-0388-4521-a306-80814ae58aaa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/burdell/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-v7yo5j5d.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
