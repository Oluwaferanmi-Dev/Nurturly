// sanity/schemas/jobListing.ts

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'jobListing',
  title: 'Job Listing',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(100),
      description: 'e.g. "Home Care Aide", "Certified Nursing Assistant"',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. "[YOUR_CITY], [YOUR_STATE]" or "Remote"',
    }),
    defineField({
      name: 'type',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-Time', value: 'Full-Time' },
          { title: 'Part-Time', value: 'Part-Time' },
          { title: 'Contract', value: 'Contract' },
        ],
      },
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'When unchecked, this role will not appear on the careers page',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(200),
      description: 'Shown on the job listing card. Keep it under 200 characters.',
    }),
    defineField({
      name: 'responsibilities',
      title: 'Responsibilities',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      description: 'List of key responsibilities (bullet points)',
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      description: 'List of required qualifications (bullet points)',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'When this job was published. Used for sorting.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      location: 'location',
      type: 'type',
      isActive: 'isActive',
    },
    prepare({ title, location, type, isActive }) {
      const status = isActive ? '✓ Active' : '✗ Inactive'
      return {
        title,
        subtitle: `${location} • ${type} • ${status}`,
      }
    },
  },
})
