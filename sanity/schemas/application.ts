// sanity/schemas/application.ts

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'application',
  title: 'Job Application',
  type: 'document',
  fields: [
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'roleTitle',
      title: 'Position Applied For',
      type: 'string',
      description: 'The job title they applied for',
    }),
    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'text',
      description: 'Years and type of relevant experience',
    }),
    defineField({
      name: 'whyCareBase',
      title: 'Why CareBase',
      type: 'text',
      description: 'Why they want to work at CareBase (cover letter)',
    }),
    defineField({
      name: 'resumeUrl',
      title: 'Resume URL',
      type: 'url',
      description: 'URL to uploaded resume file',
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Reviewing', value: 'reviewing' },
          { title: 'Shortlisted', value: 'shortlisted' },
          { title: 'Rejected', value: 'rejected' },
        ],
      },
      initialValue: 'new',
      description: 'Recruitment stage - only staff should edit this',
    }),
    defineField({
      name: 'notes',
      title: 'Internal Notes',
      type: 'text',
      rows: 4,
      description: 'Private notes visible only to CareBase staff',
    }),
  ],
  preview: {
    select: {
      title: 'fullName',
      subtitle: 'roleTitle',
      email: 'email',
      status: 'status',
    },
    prepare({ title, subtitle, email }: any) {
      return {
        title,
        subtitle: `${subtitle || 'Unknown role'} • ${email}`,
      }
    },
  },
})
