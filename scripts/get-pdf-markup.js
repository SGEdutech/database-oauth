function getDocDefination(config) {
	if (config === undefined) throw new Error('Config not provided');
	if (config.businessName === undefined) throw new Error('Business name not provided')
	const docDef = {
		pageSize: 'A4',
		pageMargins: [40, 60, 40, 60],
		footer: {
			fontSize: 10,
			margin: [40, 0, 0, 0],
			stack: [
				'SG Edutech',
				'8906784568',
				'eduatlas.com',
				{ text: 'this invoice cum receipt is electronically generated and does not require any sign' }
			]
		},
		content: [{
			margin: [0, 0, 0, 30],
			style: 'header',
			text: 'Invoice'
		},
		{
			alignment: 'justify',
			columns: [
			{
				width: '*',
				stack: [
					{ text: 'From', style: 'bigger' },
					'SG Edutech',
					'Palam Vihar, Gurgaon',
					'Haryana, 122017',
					'India',
					'Tax ID: 23534654765876',
					{ text: 'To', style: 'bigger' },
					'Navjot Singh',
					'India'
				]

			},
			{
				width: '*',
				stack: [
					{ text: 'Invoice Number', style: 'bigger' },
					'INV 5',
					{ text: 'Date', style: 'bigger' },
					'Sep 15 2018'
				]
			}]
		},
		{
			margin: [0, 20, 0, 0],
			table: {
				headerRows: 1,
				widths: ['*', 'auto'],
				body: [
					[{ text: 'Description', bold: true }, { text: 'Amount', bold: true }],
					['Certificate Program in Digital Marketing', '29000.00']
				]
			}
		},
		{
			margin: [0, 20, 0, 0],
			alignment: 'justify',
			columns: [
			{
				width: '*',
				text: ''
			},
			{
				columns: [
				{
					width: '*',
					stack: [
						{ text: 'Sub Total' },
						{ text: 'Coupon1 (9993.30)' },
						{ text: 'Additional Discount' },
						{ text: 'GST (18%)' },
						{ text: 'Total', style: 'bigger' },
						{ text: 'Paid To Date', style: 'bigger' },
						{ text: 'Balance', style: 'bigger' }
					]
				},
				{
					alignment: 'right',
					width: '*',
					stack: [
						{ text: '29000.00' },
						{ text: '-9993.30' },
						{ text: '-500.00' },
						{ text: '-670.00' },
						{ text: '18670.70', style: 'bigger' },
						{ text: '18000.00', style: 'bigger' },
						{ text: '670.70', style: 'bigger' }
					]
				}]
			}]
		},
		{
			stack: [
				{ text: 'Invoice Note', style: 'bigger' },
				{ text: 'terms and conditions', margin: [0, 10, 0, 10] },
				{
					ol: [
						' the 1500s, wg release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including version',
						' and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolve',
						'e majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to us',
						'sher dhgtjd srfsegfs rdhtrgd hdrghdr',
						'dfs sufhs fesufh esf se ef',
						'sgf sdfdsfsd sdf df sd fd fsd fds fdsdsf d fsdf d '
					]
				}
			]
		}],
		styles: {
			header: {
				fontSize: 20,
				bold: true
			},
			bigger: {
				fontSize: 13,
				bold: true,
				margin: [0, 10, 0, 0]
			},
			mt2: {
				margin: [0, 20, 0, 0]
			},
			mt1: {
				margin: [0, 10, 0, 0]
			}
		},
		defaultStyle: { columnGap: 30, font: 'Roboto' }
	}
}
