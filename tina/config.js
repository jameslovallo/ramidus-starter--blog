import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
  branch,
  clientId: '304b837f-e43c-4e97-a896-e095137478cc', // Get this from tina.io
  token: 'aefa16104bdfd13c0755757bab7c2da8b4de741e', // Get this from tina.io
  build: {
    outputFolder: 'admin',
    publicFolder: '/',
  },
  media: {
    tina: {
      mediaRoot: '@/posts/media',
      publicFolder: '/',
    },
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Posts',
        path: '@/posts',
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
            isTitle: true,
            required: true,
          },
          {
            type: 'image',
            name: 'heroImg',
            label: 'Hero Image',
          },
          {
            type: 'rich-text',
            label: 'Body',
            name: 'body',
            isBody: true,
          },
          {
            type: 'datetime',
            label: 'Posted Date',
            name: 'date',
            ui: {
              dateFormat: 'MMMM DD YYYY',
              timeFormat: 'hh:mm A',
            },
          },
        ],
        defaultItem: () => {
          return {
            title: 'My New Post',
            date: Date.now(),
          }
        },
      },
    ],
  },
})
