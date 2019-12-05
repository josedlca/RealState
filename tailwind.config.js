module.exports = {
  theme: {
    extend: {
		colors:{
			'gainsboro':'#DCDCDD',
			'lavender-gray':'#F7F7F7',
			'outer-space':'#46494C',
			'deep-space-sparkle':'#4A5164',
			'cg-blue':'#0F5F75',
			'gray-simple':'#f8f8f8',
			'gray-light': '#f6f6f6',
			'gray-superlight': '#f5f5f5'
		},
		spacing:{
			'0.1':'1px',
			'9' : '2.25rem',
			'11': '2.75rem',
			'13':'3.125rem',
			'28' : '7rem',
			'3per':'3%',
			'5per': '5%',
			'8per':'8%',
			'10per': '10%',
			'15per': '15%',
			'24per' : '24%',
			'42per': '42%',
			'63per' : '63%',
			'65per' : '65%',
			'76per':'76%',
			'95per': '95%',
			'100per': '100%',
			'125per': '125%' 
		},
		fontSize:{
			'1xl':'1.375rem',
			'4-1/2xl':'2.5rem',
			'5-3/4xl':'3.75rem'
		},
		inset:{
			'1/2':'50%',
			'full': '100%'
		},
		lineHeight:{
			'looser':'2.5'
		}
	}
  },
  variants: {
	  textColor:['responsive', 'hover', 'focus', 'focus-within','group-hover'],
	  backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover']
  },
  plugins: []
}
