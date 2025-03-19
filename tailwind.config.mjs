/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
    extend: {
			colors:{
        'darkest':'#828282',
        'secondary':'#246ccf', //blue
        'highlight':"#A4A4A4",
        'highlight1':'#a7a9ac',
        'highlight2': '#f9f9f9',
        'highlight3': '#F5F5F5',
        'accent1':'#b73939', //red
        'accent1-light':'#F9B7B7' //red-light
			},
      fontFamily:{
        'Inter':'Inter',
        'RobotoCondensed':'RobotoCondensed',
        'GillSans':'GillSans',
        'GillSansMt':'GillSansMt',
      },
      fontSize:{
        'lg': ['18px', { lineHeight: 'normal' }],
        'xl':['20px', { lineHeight: 'normal' }],
        'sm-1/2':'15px',
        'xxs':'10px',
        'text-2xl/2':['26px', { lineHeight: 'normal' }],
        'text-4xl/2':['40px', { lineHeight: 'normal' }],
      },
      maxWidth:{
        '8xl':'1470px'
      },
      boxShadow:{
        'box':'0 0 10px 0 rgba(0, 0, 0, 0.15)'
      },
			screens: {
				xxs: '480px', 
				xs: '768px', 
				sm: '1024px', 
				md: '1100px', 
        xl: '1400px'
			},
		},
	},
	plugins: [
    tailwindScrollbar({ nocompatible: true })
  ],
}
