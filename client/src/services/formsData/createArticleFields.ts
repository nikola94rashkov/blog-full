export const createArticleFields = {
  title: 'Form Create Article',
  fields: [
    {
      type: 'text',
      label: 'Title of the Article',
      name: 'title',
      testId: 'title'
    },
    {
      type: 'textarea',
      label: 'Description',
      name: 'description',
      testId: 'description'
    },
    {
      type: 'text',
      label: 'Image url',
      name: 'imageUrl',
      testId: 'imageUrl'
    }
  ],
  buttonText: 'submit'
};
