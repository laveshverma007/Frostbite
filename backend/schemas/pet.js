export default {
    name: 'pet',
    title: 'Furry companion',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90
            }
        },
        {
            name: 'gender',
            title: 'Gender',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'string' }]
        }
    ]
}